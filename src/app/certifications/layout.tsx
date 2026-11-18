import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dual Industry Certifications & Guaranteed Practical Internship | EndowIT Academy",
  description:
    "Earn dual verifiable credentials: Course Completion & 3-Month Practical Internship Certificate with verifiable QR codes. 100% employer-recognized practical proof.",
  keywords:
    "data analytics certification, cloud computing certification, digital marketing certification course, free digital marketing courses with certificate, practical internship certificate, verifiable qr certificate",
  alternates: {
    canonical: "https://www.endowit.in/certifications",
  },
  openGraph: {
    title: "Dual Industry Certifications & Guaranteed Practical Internship | EndowIT",
    description: "Course Completion + 3-Month Practical Internship Certificate with QR code verification.",
    url: "https://www.endowit.in/certifications",
    siteName: "EndowIT Academy",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "EndowIT Academy Certifications" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
