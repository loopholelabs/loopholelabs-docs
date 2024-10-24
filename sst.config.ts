/// <reference path="./.sst/platform/config.d.ts" />

const POSTHOG_KEY = "phc_ROI4hShMvIq47MpdUs6ezbtncfQhqkRCebezH4qBUEr";
const POSTHOG_HOST = "https://data.loopholelabs.io"

export default $config({
    app(input) {
        return {
            name: "loopholelabs-docs",
            providers: {
                aws: {
                    profile: "general"
                }
            },
            removal: "remove",
            home: "aws",
        };
    },
    async run() {
        new sst.aws.Nextjs("loopholelabs-docs", {
            environment: {
                POSTHOG_KEY,
                POSTHOG_HOST,
            }
        });
    },
});
