import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flat ₹5,000 Grand Opening Offer | First 20 Seats | EndowIT Academy Chennai",
  description:
    "Limited Grand Opening Offer: Learn Digital Marketing, Full Stack, Data Analytics, or Cloud for just Flat ₹5,000 all-inclusive. First 20 students only! Guaranteed 3-month internship included.",
  keywords:
    "digital marketing course fees, data analyst course fees, full stack developer course fees, data science course fees, software training institute near me, free digital marketing course with certificate, it course discount chennai",
  alternates: {
    canonical: "https://www.endowit.in/opening-offer",
  },
  openGraph: {
    title: "Flat ₹5,000 Grand Opening Offer | EndowIT Academy",
    description: "Flat ₹5,000 All-Inclusive for First 20 Students. Zero hidden costs, dual certificates included.",
    url: "https://www.endowit.in/opening-offer",
    siteName: "EndowIT Academy",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "EndowIT ₹5,000 Grand Opening Offer" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function OpeningOfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
