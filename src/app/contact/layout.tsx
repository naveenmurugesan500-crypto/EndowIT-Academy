import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Admissions & Tech Lab Location | EndowIT Academy Chennai",
  description:
    "Visit EndowIT Academy in Chennai or connect for admissions counseling. Call or WhatsApp +91 63794 27852 for course fees, batch timings, and free demo classes.",
  keywords:
    "contact endowit academy, software institute near me, digital marketing course near me, data analytics courses near me, anna nagar it training, chennai tech lab",
  alternates: {
    canonical: "https://www.endowit.in/contact",
  },
  openGraph: {
    title: "Contact EndowIT Academy | Admissions & Lab Location",
    description: "Book a free demo or visit our practical tech lab in Chennai. WhatsApp +91 63794 27852.",
    url: "https://www.endowit.in/contact",
    siteName: "EndowIT Academy",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Contact EndowIT Academy" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
