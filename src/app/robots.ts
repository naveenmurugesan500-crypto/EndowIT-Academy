import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/admin/"],
    },
    sitemap: [
      "https://www.endowit.in/sitemap.xml",
      "https://endowitacademy.vercel.app/sitemap.xml",
    ],
  };
}
