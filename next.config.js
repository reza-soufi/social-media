/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["reqres.in"],
  },
};

module.exports = nextConfig;
