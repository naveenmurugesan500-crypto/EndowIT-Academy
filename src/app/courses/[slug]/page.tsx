import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCourses } from "@/lib/storage";
import ClientShell from "@/components/ClientShell";
import CourseDetailClient from "./CourseDetailClient";

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const courses = getCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const courses = getCourses();
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return {
      title: "Course Not Found | EndowIT Academy",
    };
  }

  return {
    title: `${course.title} | EndowIT Academy`,
    description: course.overview || course.shortDescription,
    keywords: `${course.title}, ${course.tools.join(", ")}, EndowIT Academy, IT Training Chennai`,
    openGraph: {
      title: `${course.title} | 100% Placement Course`,
      description: course.shortDescription,
      url: `https://endowitacademy.com/courses/${course.slug}`,
      siteName: "EndowIT Academy",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: course.title,
        },
      ],
    },
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const courses = getCourses();
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  // Schema markup for Google Rich Snippets
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.shortDescription,
    provider: {
      "@type": "Organization",
      name: "EndowIT Academy",
      sameAs: "https://endowitacademy.com",
    },
    educationalCredentialAwarded: "Industry Certification in " + course.title,
    timeRequired: course.duration,
  };

  return (
    <ClientShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <CourseDetailClient course={course} />
    </ClientShell>
  );
}
