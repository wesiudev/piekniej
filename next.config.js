/** @type {import('next').NextConfig} */
const nextConfig = {
  appDir: true,
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
