/// <reference path="./.sst/platform/config.d.ts" />

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
    new sst.aws.Nextjs("loopholelabs-docs");
  },
});
