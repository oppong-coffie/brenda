import type { Metadata } from "next";
import { Bebas_Neue, Fraunces, Caveat, Space_Mono } from "next/font/google";
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
  title: "NBO by Design — Nairobi's Urban Story",
  description: "NBO by Design is a social enterprise using spatial storytelling, walking tours, and public discourse to explore Nairobi's architectural history, spatial politics, and urban soul.",
  keywords: ["Nairobi walking tours", "NBO by Design", "Nairobi urban design", "KICC Nairobi", "Brenda Agungo", "Kenya architecture", "Urban literacy Nairobi"],
  authors: [{ name: "Brenda Agungo" }],
  openGraph: {
    title: "NBO by Design — Nairobi's Urban Story",
    description: "Expert-led walking tours and urban literacy in Nairobi, Kenya.",
    type: "website",
    locale: "en_KE",
    siteName: "NBO by Design",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "NBO by Design — Nairobi Walking Tours",
    "description": "Expert-led architectural walking tours and urban literacy in Nairobi, Kenya.",
    "location": {
      "@type": "Place",
      "name": "Nairobi CBD",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "NBO by Design",
      "url": "https://nbo-by-design.com"
    }
  };

  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${fraunces.variable} ${caveat.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F4EFE4] text-[#0D0D0D] font-mono selection:bg-[#C9963A] selection:text-[#0D0D0D]">
        {children}
      </body>
    </html>
  );
}
