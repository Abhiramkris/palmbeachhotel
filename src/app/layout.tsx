import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotelpalmbeach.com"),
  title: "Hotel Palmbeach | Luxury Tropical Sanctuary by the Sea",
  description:
    "A peaceful tropical escape designed for slow mornings, beautiful evenings, and unforgettable stays. Luxury suites, multi-cuisine dining, and seaside hospitality.",
  icons: {
    icon: "/assets/brand/palmshore-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#FAF8F5] text-[#1C1E1B] selection:bg-emerald-800 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
