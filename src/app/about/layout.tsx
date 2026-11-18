import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EndowIT Academy | Practical Software Training Institute in Chennai",
  description:
    "Learn about EndowIT Academy's mission: transforming freshers and career switchers into confident tech professionals through 100% practical lab training and real client internships in Chennai.",
  keywords:
    "software training institute near me, software training institutes, it training institute chennai, about endowit academy, practical tech lab chennai",
  alternates: {
    canonical: "https://www.endowit.in/about",
  },
  openGraph: {
    title: "About EndowIT Academy | Premier Practical Tech Institute",
    description: "Empowering students with hands-on coding, live ad spends, and guaranteed internships.",
    url: "https://www.endowit.in/about",
    siteName: "EndowIT Academy",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "About EndowIT Academy" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
