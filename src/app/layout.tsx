import "./globals.css";
import type { Metadata } from "next";
import { Kalam, Caveat } from "next/font/google";
import { MobileHeader } from "@/components/ui/MobileHeader";
import { BottomNav } from "@/components/navigation/BottomNav";

// Google Fonts for handwritten text
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "MAMIA Cooking App",
  description: "Discover, save, and cook delicious recipes with MAMIA.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kalam.variable} ${caveat.variable} bg-background min-h-screen font-sans text-foreground`}>
        <div className="mobile-container">
          {/* Fixed Mobile Header */}
          <MobileHeader />
          
          {/* Main Content Area */}
          <main className="content-area">
            {children}
          </main>
          
          {/* Fixed Bottom Navigation */}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
