/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "sayan-food-ordering.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.foodiv.com",
      },
    ],
  },
};

module.exports = nextConfig;
