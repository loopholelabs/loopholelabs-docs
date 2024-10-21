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
        permanent: true,
      },
    ]
  },
};

export default withMDX(config);
