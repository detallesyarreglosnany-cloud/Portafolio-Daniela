import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone", // disabled for dev server compatibility
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
