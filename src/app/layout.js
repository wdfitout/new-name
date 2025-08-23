// src/app/layout.js
import "./globals.css";
import localFont from "next/font/local";

const reckless = localFont({
  src: [
    { path: "../../public/fonts/RecklessNeue-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/RecklessNeue-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-reckless",
  display: "swap",
});

const play = localFont({
  src: [{ path: "../../public/fonts/Play-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-play",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://dicehospitality.ae"),
  title: "Restaurant Hospitality Dubai | Luxury F&B Services | Dice Hospitality",
  description:
    "Explore expert restaurant design tips, trends, and project inspirations from Dubai and around the world.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Restaurant Hospitality Dubai | Luxury F&B Services | Dice Hospitality",
    description:
      "Explore expert restaurant design tips, trends, and project inspirations from Dubai and around the world.",
    url: "/",
    siteName: "Dice Hospitality",
    type: "website",
    images: [
      {
        url: "/images/og-banner.jpg", // <- use JPG/PNG 1200x630
        width: 1200,
        height: 630,
        alt: "Dice Hospitality Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Hospitality Dubai | Luxury F&B Services | Dice Hospitality",
    description:
      "Explore expert restaurant design tips, trends, and project inspirations from Dubai and around the world.",
    images: ["/images/og-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dice Hospitality",
    url: "https://dicehospitality.ae/",
    logo: "https://dicehospitality.ae/images/logo.svg",
    sameAs: [
      "https://www.instagram.com/yourprofile",
      "https://www.facebook.com/yourprofile",
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Dice Hospitality",
    url: "https://dicehospitality.ae/",
    description:
      "Explore expert restaurant design tips, trends, and project inspirations from Dubai and around the world.",
  };

  // Optional: keep Service only if homepage is explicitly a service page
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Restaurant Hospitality and Fit Out",
    provider: {
      "@type": "Organization",
      name: "Dice Hospitality",
      url: "https://dicehospitality.ae",
    },
    areaServed: { "@type": "Place", name: "Dubai, UAE" },
    url: "https://dicehospitality.ae/",
  };

  const jsonLdSiteNav = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "SiteNavigationElement", position: 1, name: "About Us", url: "https://dicehospitality.ae/about-us" },
      { "@type": "SiteNavigationElement", position: 2, name: "Restaurant Design", url: "https://dicehospitality.ae/restaurant-design" },
      { "@type": "SiteNavigationElement", position: 3, name: "Kitchen Fit-Out", url: "https://dicehospitality.ae/kitchen-fit-out" },
      { "@type": "SiteNavigationElement", position: 4, name: "Gallery", url: "https://dicehospitality.ae/projects" },
      { "@type": "SiteNavigationElement", position: 5, name: "Contact Us", url: "https://dicehospitality.ae/contact-us" },
    ],
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dicehospitality.ae/" },
    ],
  };

  return (
    <html lang="en" className={`${reckless.variable} ${play.variable}`}>
      <body>
        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSiteNav) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
        {/* Remove the next line if homepage isn't a service page */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
        {children}
      </body>
    </html>
  );
}
