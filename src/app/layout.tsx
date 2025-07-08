import "./globals.css";
import type { Metadata } from "next";
import { Kalam, Caveat } from "next/font/google";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kalam.variable} ${caveat.variable} bg-background min-h-screen font-sans text-foreground`}>
        {/* The main content will be handled by individual pages using LayoutWrapper */}
        {children}
      </body>
    </html>
  );
}
