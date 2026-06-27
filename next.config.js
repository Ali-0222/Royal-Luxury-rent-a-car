/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next-dev',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
