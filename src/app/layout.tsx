import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { getSiteConfig } from "@/lib/storage";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const config = getSiteConfig();
  return {
    metadataBase: new URL("https://endowitacademy.com"),
    title: config.seoTitle || "EndowIT Academy | Best IT Training & 100% Placement Institute",
    description:
      config.seoDescription ||
      "Transform your career with EndowIT Academy. Practical courses in Full Stack, Data Science, Data Analytics, Digital Marketing, Cloud & DevOps with 100% placement support.",
    keywords: config.keywords,
    openGraph: {
      title: config.seoTitle,
      description: config.seoDescription,
      url: "https://endowitacademy.com",
      siteName: "EndowIT Academy",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: "EndowIT Academy Logo",
        },
      ],
      locale: "en_US",
      type: "website",
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
    "@type": "EducationalOrganization",
    name: "EndowIT Academy",
    url: "https://endowitacademy.com",
    logo: "https://endowitacademy.com/logo.png",
    description:
      "Premier IT training institute offering job-oriented courses in Full Stack Web Development, Data Science, Data Analytics, and Digital Marketing with 100% placement support.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "XXXXXX, XXXXXX",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "XXXXXX",
      addressCountry: "IN",
    },
    telephone: "+91-6379427852",
    sameAs: [
      "https://facebook.com/endowitacademy",
      "https://instagram.com/endowit_academy",
      "https://linkedin.com/company/endowit-academy",
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} scroll-smooth font-sans`}
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
