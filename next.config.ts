import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com/",
        port: "",
        pathname: "/",
        search: "",
      },
    ],
  },
  /* more config options here */
};

export default nextConfig;
