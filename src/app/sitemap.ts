import { MetadataRoute } from "next";
import { getCourses, getBlogs } from "@/lib/storage";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://endowitacademy.com";
  const courses = getCourses();
  const blogs = getBlogs();

  const staticRoutes = [
    "",
    "/courses",
    "/about",
    "/contact",
    "/blog",
    "/opening-offer",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...blogRoutes];
}
