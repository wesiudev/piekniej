/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
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
