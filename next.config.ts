import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Tell Next.js to use /src as the base directory
    env: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000',
    // Add other env variables here if needed
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
