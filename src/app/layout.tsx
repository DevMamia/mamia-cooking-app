import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { BottomNav } from "@/components/navigation/BottomNav";
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import { BrandLogo } from '@/components/ui/brand-logo';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MAMIA - Voice-Guided Cooking with Love',
  description: 'Learn to cook with AI grandmothers who guide you through traditional recipes with voice instructions and cultural stories.',
  keywords: ['cooking', 'recipes', 'voice-guided', 'traditional', 'cultural', 'AI', 'grandmother'],
  authors: [{ name: 'MAMIA Team' }],
  creator: 'MAMIA',
  publisher: 'MAMIA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MAMIA',
  },
  openGraph: {
    type: 'website',
    siteName: 'MAMIA',
    title: 'MAMIA - Voice-Guided Cooking with Love',
    description: 'Learn to cook with AI grandmothers who guide you through traditional recipes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MAMIA - Voice-Guided Cooking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAMIA - Voice-Guided Cooking with Love',
    description: 'Learn to cook with AI grandmothers who guide you through traditional recipes.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 relative">
          {/* Accessible site-wide header */}
          <header className="relative z-10 py-3 flex items-center justify-center border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur-sm w-full">
            <div className="flex items-center space-x-3">
              <BrandLogo size="medium" />
              <h1 className="text-2xl font-bold tracking-wide" style={{ color: '#8B4513' }}>MAMIA</h1>
            </div>
          </header>
          <main className="pb-20 min-h-[calc(100vh-4rem)]">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
          <BottomNav />
          <ServiceWorkerRegistration />
        </div>
      </body>
    </html>
  );
}
