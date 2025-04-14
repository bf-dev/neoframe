import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images:{
    remotePatterns: [{
      protocol: 'https',
      hostname: 'via.placeholder.com',
      pathname: '**',
    }],
    unoptimized: true,
  }
};

export default nextConfig; 