import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotelpalmbeach.com"),
  title: "Hotel Palmbeach | Luxury Tropical Sanctuary in Palakkad",
  description:
    "A peaceful tropical escape designed for slow mornings, beautiful evenings, and unforgettable stays in Palakkad, Kerala. Luxury suites, multi-cuisine dining, and authentic hospitality.",
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
        className={`${playfair.variable} ${montserrat.variable} antialiased min-h-screen bg-[#FAF8F5] text-[#1C1E1B] font-sans selection:bg-emerald-800 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
