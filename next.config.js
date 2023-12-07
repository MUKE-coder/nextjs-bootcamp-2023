/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.aboghanbari.com",
      },
    ],
  },
};

module.exports = nextConfig;
