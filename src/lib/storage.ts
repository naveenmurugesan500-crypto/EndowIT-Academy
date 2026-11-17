import fs from "fs";
import path from "path";
import { Course, BlogPost, SiteConfig, Lead, Certificate } from "./types";
import defaultCourses from "../data/courses.json";
import defaultBlogs from "../data/blogs.json";
import defaultSiteConfig from "../data/siteConfig.json";
import defaultCertificates from "../data/certificates.json";

const dataDir = path.join(process.cwd(), "src", "data");
const coursesPath = path.join(dataDir, "courses.json");
const blogsPath = path.join(dataDir, "blogs.json");
const siteConfigPath = path.join(dataDir, "siteConfig.json");
const leadsPath = path.join(dataDir, "leads.json");
const certificatesPath = path.join(dataDir, "certificates.json");

function ensureDirectoryExists() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

export function getCourses(): Course[] {
  ensureDirectoryExists();
  try {
    if (fs.existsSync(coursesPath)) {
      const data = fs.readFileSync(coursesPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading courses:", error);
  }
  return defaultCourses as Course[];
}

export function saveCourses(courses: Course[]) {
  ensureDirectoryExists();
  fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2), "utf-8");
}

export function getBlogs(): BlogPost[] {
  ensureDirectoryExists();
  try {
    if (fs.existsSync(blogsPath)) {
      const data = fs.readFileSync(blogsPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading blogs:", error);
  }
  return defaultBlogs as BlogPost[];
}

export function saveBlogs(blogs: BlogPost[]) {
  ensureDirectoryExists();
  fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2), "utf-8");
}

export function getSiteConfig(): SiteConfig {
  ensureDirectoryExists();
  try {
    if (fs.existsSync(siteConfigPath)) {
      const data = fs.readFileSync(siteConfigPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading site config:", error);
  }
  return defaultSiteConfig as SiteConfig;
}

export function saveSiteConfig(config: SiteConfig) {
  ensureDirectoryExists();
  fs.writeFileSync(siteConfigPath, JSON.stringify(config, null, 2), "utf-8");
}

export function getLeads(): Lead[] {
  ensureDirectoryExists();
  try {
    if (fs.existsSync(leadsPath)) {
      const data = fs.readFileSync(leadsPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading leads:", error);
  }
  return [];
}

export function saveLead(lead: Omit<Lead, "id" | "createdAt" | "status">): Lead {
  ensureDirectoryExists();
  const leads = getLeads();
  const newLead: Lead = {
    ...lead,
    id: "lead_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
    createdAt: new Date().toISOString(),
    status: "New",
  };
  leads.unshift(newLead);
  fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2), "utf-8");
  return newLead;
}

export function updateLeadStatus(id: string, status: Lead["status"]) {
  const leads = getLeads();
  const index = leads.findIndex((l) => l.id === id);
  if (index !== -1) {
    leads[index].status = status;
    fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2), "utf-8");
  }
}

export function getCertificates(): Certificate[] {
  ensureDirectoryExists();
  try {
    if (fs.existsSync(certificatesPath)) {
      const data = fs.readFileSync(certificatesPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading certificates:", error);
  }
  return defaultCertificates as Certificate[];
}

export function getCertificateById(searchQuery: string): Certificate | null {
  const certs = getCertificates();
  const query = searchQuery.trim().toUpperCase();
  const found = certs.find(
    (c) =>
      c.certificateNumber.trim().toUpperCase() === query ||
      c.id.trim().toUpperCase() === query
  );
  return found || null;
}

export function saveCertificate(certificate: Certificate): Certificate {
  ensureDirectoryExists();
  const certs = getCertificates();
  const existingIdx = certs.findIndex(
    (c) => c.certificateNumber.toUpperCase() === certificate.certificateNumber.toUpperCase()
  );

  if (existingIdx !== -1) {
    certs[existingIdx] = certificate;
  } else {
    certs.unshift(certificate);
  }

  fs.writeFileSync(certificatesPath, JSON.stringify(certs, null, 2), "utf-8");
  return certificate;
}

