import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Northstar Studio — Make your next move matter.",
    template: "%s — Northstar Studio",
  },
  description: siteConfig.description,
  generator: "Next.js",
};
export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="">
      <body 
        className="font-sans antialiased p-2"
        style={
          { "--primary-color": siteConfig.themeColor } as React.CSSProperties
        }
      >
        <Navbar />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
