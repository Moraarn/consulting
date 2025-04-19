import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pinimg.com', 'images.pexels.com', 'maps.googleapis.com'], // Allow images from pinimg.com, pexels.com, and Google Maps
  },
};

export default nextConfig;
