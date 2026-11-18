import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best IT & Software Courses with Placement | Digital Marketing, Full Stack, Data Analytics | EndowIT",
  description:
    "Explore job-oriented IT courses in Chennai. Practical lab training in Digital Marketing, Full Stack Web Development, Data Analytics, AWS Cloud, and Software Testing with guaranteed internships and placement support.",
  keywords:
    "digital marketing course, full stack developer course, data analytics course, cloud computing course, software testing course, it courses with placement, software training institute near me, software training institutes, best digital marketing courses, courses for full stack developer",
  alternates: {
    canonical: "https://www.endowit.in/courses",
  },
  openGraph: {
    title: "Best IT & Software Courses with Placement | EndowIT Academy",
    description:
      "Explore 6 job-ready practical curriculums in Chennai. Guaranteed practical internship & live client projects.",
    url: "https://www.endowit.in/courses",
    siteName: "EndowIT Academy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "EndowIT Academy Courses Catalog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IT & Software Courses with Placement | EndowIT Academy",
    description: "Practical IT training with guaranteed internships in Chennai.",
    images: ["/logo.png"],
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
