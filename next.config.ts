import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Permissions Policy for cooking app features
          {
            key: 'Permissions-Policy',
            value: 'microphone=(), camera=(), geolocation=(), payment=(), usb=(), serial=(), bluetooth=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), gamepad=(), magnetometer=(), midi=(), notifications=(), push=(), screen-wake-lock=(), web-share=(), accelerometer=(), gyroscope=(), ambient-light-sensor=(), autoplay=(), battery=(), clipboard-read=(), clipboard-write=(), cross-origin-isolated=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), hid=(), idle-detection=(), keyboard-map=(), local-fonts=(), otp-credentials=(), picture-in-picture=(), publickey-credentials-get=(), speaker-selection=(), storage-access=(), sync-xhr=(), trust-token-redemption=(), unload=(), window-placement=(), xr-spatial-tracking=()',
          },
          // Content Security Policy - tailored for cooking app
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://cdn.jsdelivr.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' https://fonts.gstatic.com data:",
              "connect-src 'self' https://*.supabase.co https://*.supabase.com https://*.upstash.io wss://*.supabase.co wss://*.supabase.com",
              "media-src 'self' data: blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
              "block-all-mixed-content"
            ].join('; '),
          },
        ],
      },
    ];
  },
  // Image optimization for recipe photos
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compression
  compress: true,
  // Trailing slash
  trailingSlash: false,
  // Powered by header
  poweredByHeader: false,
};

export default nextConfig;
