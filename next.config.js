/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  experimental: { images: { unoptimized: true } },
  basePath: "/market-place",
  output: "export",
};

module.exports = nextConfig;
