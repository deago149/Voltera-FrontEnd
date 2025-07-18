import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Tell Next.js to use /src as the base directory
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
