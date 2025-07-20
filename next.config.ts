import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '500mb', // o el tamaño que necesites, ej: '20mb'
    },
  },
};

export default nextConfig;
