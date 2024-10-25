import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  basePath: '/docs',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/architect',
        permanent: false,
      },
    ]
  },
};

export default withMDX(config);
