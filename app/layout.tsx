import type { Metadata } from "next";
import { Bebas_Neue, Fraunces, Caveat, Space_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nbobydesign.com"),
  title: {
    default: "NBO by Design — Nairobi's Urban Story",
    template: "%s | NBO by Design"
  },
  description: "NBO by Design is a social enterprise using spatial storytelling, walking tours, and public discourse to explore Nairobi's architectural history, spatial politics, and urban soul.",
  keywords: ["NBO, Nairobi walking tours", "NBO by Design", "Nairobi urban design", "KICC Nairobi", "Brenda Ngoya", "Kenya architecture", "Urban literacy Nairobi"],
  authors: [{ name: "Brenda Ngoya" }],
  openGraph: {
    title: "NBO by Design — Nairobi's Urban Story",
    description: "Expert-led building tours and urban literacy in Nairobi, Kenya.",
    url: "https://nbobydesign.com",
    siteName: "NBO by Design",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NBO by Design — Nairobi's Urban Story",
    description: "Expert-led building tours and urban literacy in Nairobi, Kenya.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${fraunces.variable} ${caveat.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-[#F4EFE4] text-[#0D0D0D] font-mono selection:bg-[#C9963A] selection:text-[#0D0D0D]">
        {children}
      </body>
    </html>
  );
}
