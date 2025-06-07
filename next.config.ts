import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.istockphoto.com',
      'img.freepik.com',
      'img.youtube.com',
    ],
  },
};

export default nextConfig;
