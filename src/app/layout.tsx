import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { getSiteConfig } from "@/lib/storage";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const config = getSiteConfig();
  const title = config.seoTitle || "EndowIT Academy | Best IT Training Institute Near Me | 100% Practical Courses";
  const description =
    config.seoDescription ||
    "Top software training institute near you offering 100% practical courses in Digital Marketing, Full Stack Development, Data Analytics, Cloud & Data Science with guaranteed 3-month internship & placement in Chennai.";

  return {
    metadataBase: new URL("https://www.endowit.in"),
    title: {
      default: title,
      template: "%s | EndowIT Academy",
    },
    description,
    keywords: config.keywords,
    alternates: {
      canonical: "https://www.endowit.in",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: "https://www.endowit.in",
      siteName: "EndowIT Academy",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: "EndowIT Academy - Best Practical IT Training & Internship Institute in Chennai",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
    icons: {
      icon: "/logo.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: "EndowIT Academy",
    alternateName: ["EndowIT Tech Academy", "EndowIT Academy Chennai"],
    url: "https://www.endowit.in",
    logo: "https://www.endowit.in/logo.png",
    image: "https://www.endowit.in/logo.png",
    description:
      "Premier software training institute in Chennai offering job-oriented courses in Digital Marketing, Full Stack Web Development, Data Analytics, and Cloud Engineering with guaranteed 3-month internship.",
    priceRange: "₹5,000 - ₹14,999",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
    telephone: "+91-6379427852",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Anna Nagar / Koyambedu Tech Corridor",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600040",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0827,
      longitude: 80.2707,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
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
        closes: "20:30",
      },
    ],
    sameAs: [
      "https://facebook.com/endowitacademy",
      "https://instagram.com/endowit_academy",
      "https://linkedin.com/company/endowit-academy",
      "https://youtube.com/@endowitacademy",
    ],
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} scroll-smooth font-sans`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-white dark:bg-navy-950 text-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
