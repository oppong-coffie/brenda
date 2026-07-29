export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TouristAttraction"],
    name: "NBO by Design",
    alternateName: "NBO by Design — Nairobi Walking Tours",
    image: "https://nbobydesign.com/og-image.jpg",
    url: "https://nbobydesign.com",
    telephone: "+254728300483",
    email: "info@nbobydesign.com",
    priceRange: "$$",
    description:
      "NBO by Design is a social enterprise using spatial storytelling, architectural walking tours, and public discourse to explore Nairobi's history, spatial politics, and urban soul.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nairobi Central Business District",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.286389,
      longitude: 36.817222,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/nbo.by.design",
      "https://www.linkedin.com/company/nbobydesign/",
      "https://x.com/brenda_ngoya?s=11",
      "https://www.viator.com/tours/Nairobi/Who-Designed-Nairobi-Expert-Led-Urban-Design-Walking-Tour-CBD/d5280-5643142P2",
      "https://luma.com/xfmia6uc",
    ],
    founder: {
      "@type": "Person",
      name: "Brenda Ngoya",
      jobTitle: "Founder & Urbanist",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nairobi Architectural & Urban Walking Tours",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Power & Governance Walking Tour",
            description:
              "Follow the seat of state power from KICC to August Memorial Park. Explore sites where authority, control, and political history intersect.",
            provider: {
              "@type": "LocalBusiness",
              name: "NBO by Design",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heritage Buildings Tour",
            description:
              "Explore early colonial administration, Railway Bank Association, Colonial Archives, and Old City Hall architecture.",
            provider: {
              "@type": "LocalBusiness",
              name: "NBO by Design",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nairobi Then & Now (CBD Core) Tour",
            description:
              "Discover glass skyscrapers side by side with colonial stone public towers in Nairobi's business core.",
            provider: {
              "@type": "LocalBusiness",
              name: "NBO by Design",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Indian Heritage & Commercial Networks Tour",
            description:
              "Learn how the South Asian community built much of the CBD, financed early commercial streets, and shaped public spaces.",
            provider: {
              "@type": "LocalBusiness",
              name: "NBO by Design",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Informality & Everyday Urbanism Tour",
            description:
              "Examine hawkers, street drainage, matatu routes, and how city residents actively shape Nairobi's streets.",
            provider: {
              "@type": "LocalBusiness",
              name: "NBO by Design",
            },
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}