import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // PWA configuration
  experimental: {
    webpackBuildWorker: true,
  },
  
  // Service Worker support
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
  
  // Headers for PWA
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
    ];
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // Enable offline support
  async rewrites() {
    return [
      {
        source: '/offline',
        destination: '/offline.html',
      },
    ];
  },

  // Optimize for mobile
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    domains: ['mock-audio-cdn.com', 'localhost'],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
