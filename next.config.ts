import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  env: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000',
    // Add other env variables here if needed
  },
};

export default nextConfig;
