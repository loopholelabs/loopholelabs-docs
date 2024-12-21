import { AsyncLocalStorage } from "node:async_hooks";
// @ts-expect-error: resolved by wrangler build
import { handler as middlewareHandler } from "./.open-next/middleware/handler.mjs";
// @ts-expect-error: resolved by wrangler build
import { handler as serverHandler } from "./.open-next/server-functions/default/handler.mjs";
const cloudflareContextALS = new AsyncLocalStorage();
// Note: this symbol needs to be kept in sync with the one defined in `src/api/get-cloudflare-context.ts`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
globalThis[Symbol.for("__cloudflare-context__")] = new Proxy({}, {
    ownKeys: () => Reflect.ownKeys(cloudflareContextALS.getStore()),
    getOwnPropertyDescriptor: (_, ...args) => Reflect.getOwnPropertyDescriptor(cloudflareContextALS.getStore(), ...args),
    get: (_, property) => Reflect.get(cloudflareContextALS.getStore(), property),
    set: (_, property, value) => Reflect.set(cloudflareContextALS.getStore(), property, value),
});
export default {
    async fetch(request, env, ctx) {
        return cloudflareContextALS.run({ env, ctx, cf: request.cf }, async () => {
            const url = new URL(request.url);
            if (process.env.__PROCESS_ENV_POPULATED !== "1") {
                await populateProcessEnv(url, env.NEXTJS_ENV);
                process.env.__PROCESS_ENV_POPULATED = "1";
            }
            if(url.pathname.startsWith("/docs")) {
                url.pathname = url.pathname.replace("/docs", "");
            }
            if (url.pathname === "/_next/image") {
                let imageUrl = url.searchParams.get("url") ?? "";
                if(imageUrl.startsWith("/")) {
                    if(imageUrl.startsWith("/docs")) {
                        imageUrl = imageUrl.replace("/docs", "");
                    }
                    return env.ASSETS.fetch(new URL(imageUrl, request.url));
                } else {
                    return fetch(imageUrl, { cf: { cacheEverything: true } });
                }
            }
            if (url.pathname.startsWith("/_next/static")) {
                return env.ASSETS.fetch(url);
            }
            // The Middleware handler can return either a `Response` or a `Request`:
            // - `Response`s should be returned early
            // - `Request`s are handled by the Next server
            const reqOrResp = await middlewareHandler(request, env, ctx);
            if (reqOrResp instanceof Response) {
                return reqOrResp;
            }
            return serverHandler(reqOrResp, env, ctx);
        });
    },
};
/**
 * Populate process.env with:
 * - the variables from Next .env* files
 * - the origin resolver information
 *
 * Note that cloudflare env string values are copied by the middleware handler.
 */
async function populateProcessEnv(url, nextJsEnv) {
    if (process.env.__PROCESS_ENV_POPULATED === "1") {
        return;
    }
    // @ts-expect-error: resolved by wrangler build
    const nextEnvVars = await import("./.open-next/.env.mjs");
    const mode = nextJsEnv ?? "production";
    if (nextEnvVars[mode]) {
        for (const key in nextEnvVars[mode]) {
            process.env[key] = nextEnvVars[mode][key];
        }
    }
    // Set the default Origin for the origin resolver.
    process.env.OPEN_NEXT_ORIGIN = JSON.stringify({
        default: {
            host: url.hostname,
            protocol: url.protocol.slice(0, -1),
            port: url.port,
        },
    });
}
