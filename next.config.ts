import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    /* Add any external hostnames you serve images from here */
    remotePatterns: [],
    /* Optimise local images aggressively */
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
}

export default nextConfig
