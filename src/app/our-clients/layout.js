import "../globals.css";

export const metadata = {
  title: "Our Clients | Dice Hospitality Dubai, UAE",
  description:
    "Discover the restaurants, cafés, lounges, and F&B concepts developed and managed by Dice Hospitality across Dubai and the UAE.",
  keywords: [
    "Dice Hospitality",
    "F&B Consultancy Dubai",
    "Restaurant Consultants Dubai",
    "Hospitality Projects UAE",
    "Dice Hospitality Clients",
  ],
  metadataBase: new URL("https://dicehospitality.ae/"),
  openGraph: {
    title: "Our Clients | Dice Hospitality Dubai, UAE",
    description:
      "Discover the restaurants, cafés, lounges, and F&B concepts developed and managed by Dice Hospitality across Dubai and the UAE.",
    url: "https://dicehospitality.ae/our-clients",
    siteName: "Dice Hospitality",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dice Hospitality Clients Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients | Dice Hospitality Dubai, UAE",
    description:
      "Discover the restaurants, cafés, lounges, and F&B concepts developed and managed by Dice Hospitality across Dubai and the UAE.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/our-clients",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dice Hospitality",
              url: "https://dicehospitality.ae/",
              logo: "https://dicehospitality.ae/logo.png",
              sameAs: [
                "https://www.instagram.com/yourprofile",
                "https://www.facebook.com/yourprofile",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-50-123-4567",
                contactType: "Customer Service",
                areaServed: "AE",
                availableLanguage: ["English", "Arabic"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dubai",
                addressLocality: "Dubai",
                postalCode: "00000",
                addressCountry: "AE",
              },
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Our Clients | Dice Hospitality Dubai, UAE",
              url: "https://dicehospitality.ae/our-clients",
              description:
                "Discover the restaurants, cafés, lounges, and F&B concepts developed and managed by Dice Hospitality across Dubai and the UAE.",
            }),
          }}
        />

        {/* CollectionPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Dice Hospitality Clients & Concepts",
              url: "https://dicehospitality.ae/our-clients",
              description:
                "A curated collection of hospitality and F&B concepts developed, launched, or managed by Dice Hospitality in Dubai and the UAE.",
              mainEntity: {
                "@type": "ItemList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Restaurants",
                    url: "https://dicehospitality.ae/our-clients/restaurants",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Cafés & Lounges",
                    url: "https://dicehospitality.ae/our-clients/cafes-lounges",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Cloud Kitchens & QSR",
                    url: "https://dicehospitality.ae/our-clients/cloud-kitchens",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
