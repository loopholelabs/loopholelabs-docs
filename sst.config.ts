/// <reference path="./.sst/platform/config.d.ts" />
const POSTHOG_KEY = "phc_ROI4hShMvIq47MpdUs6ezbtncfQhqkRCebezH4qBUEr";
const POSTHOG_HOST = "https://data.loopholelabs.io";

export default $config({
  app(input) {
    return {
      name: "loopholelabs-docs",
      providers: {
        aws: {
          profile: "general",
        },
        cloudflare: "5.41.0",
      },
      removal: "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("loopholelabs-docs", {
      domain: {
        name: 'docs.loopholelabs.io',
        dns: sst.cloudflare.dns(),
      },
      environment: {
        NEXT_PUBLIC_POSTHOG_KEY: POSTHOG_KEY,
        NEXT_PUBLIC_POSTHOG_HOST: POSTHOG_HOST,
      },
    });
  },
});
