import type { NextConfig } from 'next';
import { hostname } from 'os';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'ik.imagekit.io',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
