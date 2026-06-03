import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder (the monorepo has multiple lockfiles).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
