import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      new URL("https://robohash.org/**"),
      new URL("https://cdn.pixabay.com/**"),
    ],
  },
};

export default nextConfig;
