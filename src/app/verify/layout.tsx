import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Student Certificate & Internship Credential | EndowIT Academy",
  description:
    "Instant 24/7 online certificate verification portal for employers and recruiters. Enter Certificate ID or scan QR code to verify student credentials.",
  keywords:
    "verify certificate, certificate verification, check student credentials, qr code certificate verify, endowit verification portal",
  alternates: {
    canonical: "https://www.endowit.in/verify",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
