import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  basePath: '/docs',
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  async redirects() {
    return [
      {
        source: '/scale/cli/reference',
        destination: '/scale/cli/reference/flags',
        permanent: false,
      },
      {
        source: '/scale/cli',
        destination: '/scale/cli/installation',
        permanent: false,
      },
      {
        source: '/scale/signatures',
        destination: '/scale/signatures/overview',
        permanent: false,
      },
      {
        source: '/scale/extensions',
        destination: '/scale/extensions/overview',
        permanent: false,
      }
    ]
  },
};

export default withMDX(config);
