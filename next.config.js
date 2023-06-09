/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "decocanva.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
