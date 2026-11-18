import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech & Career Insights Blog | Roadmaps, Guides & Tutorials | EndowIT Academy",
  description:
    "Read comprehensive tech guides, career roadmaps, and tutorials on Full Stack Development, Data Analytics, Python, SEO, and Performance Marketing from industry practitioners.",
  keywords:
    "python for data science, full stack web development roadmap, learn digital marketing, data analysis using python, fundamentals of digital marketing",
  alternates: {
    canonical: "https://www.endowit.in/blog",
  },
  openGraph: {
    title: "Tech & Career Insights Blog | EndowIT Academy",
    description: "Practical developer roadmaps, data analytics tutorials, and digital marketing strategies.",
    url: "https://www.endowit.in/blog",
    siteName: "EndowIT Academy",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "EndowIT Academy Tech Blog" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
