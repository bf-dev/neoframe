import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images:{
    remotePatterns: [new URL("https://via.placeholder.com/*")],
    unoptimized: true,
  }
};

export default nextConfig; 