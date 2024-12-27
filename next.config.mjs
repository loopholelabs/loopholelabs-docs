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
  }
};

export default withMDX(config);
