import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.wellfound.com",
      },
    ],
  },
};

export default nextConfig;
