import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KGP Palmshore Hotel | Luxury Stays & Banquet Venues",
  description:
    "Experience premium hospitality, executive suites, multi-cuisine dining, and grand banquet facilities at KGP Palmshore Hotel.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-neutral-50 text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
