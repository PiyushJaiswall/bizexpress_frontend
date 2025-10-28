/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bizexpress.in'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
