/** @type {import('next').NextConfig} */
const nextConfig = {
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
