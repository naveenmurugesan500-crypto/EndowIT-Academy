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

  const title = course.seoTitle || `${course.title} | EndowIT Academy`;
  const description =
    course.seoDescription ||
    course.overview ||
    course.shortDescription;
  const keywords =
    course.seoKeywords ||
    `${course.title}, ${course.tools.join(", ")}, EndowIT Academy, IT Training Chennai`;
  const canonicalUrl = `https://www.endowit.in/courses/${course.slug}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "EndowIT Academy",
      images: [
        {
          url: course.heroImage || "/logo.png",
          width: 1200,
          height: 630,
          alt: `${course.title} Training and Live Internship at EndowIT Academy`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [course.heroImage || "/logo.png"],
    },
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const courses = getCourses();
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  // 1. Enhanced Course Schema with Offers, Rating & Instance for Google Rich Results
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.shortDescription,
    url: `https://www.endowit.in/courses/${course.slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: "EndowIT Academy",
      sameAs: "https://www.endowit.in",
    },
    educationalCredentialAwarded: "Industry Practical Certification & 3-Month Internship in " + course.title,
    timeRequired: course.duration,
    courseCode: course.slug.toUpperCase(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating || 4.9,
      reviewCount: course.reviewsCount || 45,
      bestRating: "5",
      worstRating: "1",
    },
    offers: [
      {
        "@type": "Offer",
        category: "Grand Opening Offer",
        price: "5000",
        priceCurrency: "INR",
        availability: "https://schema.org/LimitedAvailability",
        validThrough: "2026-12-31",
      },
      {
        "@type": "Offer",
        category: "Standard Launch Fee",
        price: "14999",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    ],
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: ["blended", "onsite", "online"],
        location: {
          "@type": "Place",
          name: "EndowIT Academy Chennai Lab",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        },
      },
    ],
  };

  // 2. Breadcrumb Schema for Google Rich Snippets
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.endowit.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Courses",
        item: "https://www.endowit.in/courses",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `https://www.endowit.in/courses/${course.slug}`,
      },
    ],
  };

  // 3. FAQPage Schema for Expandable Accordions in Google SERP
  const faqSchema =
    course.faq && course.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: course.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <ClientShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <CourseDetailClient course={course} />
    </ClientShell>
  );
}
