import fs from "fs";
import path from "path";
import os from "os";
import { Course, BlogPost, SiteConfig, Lead, Certificate } from "./types";
import defaultCourses from "../data/courses.json";
import defaultBlogs from "../data/blogs.json";
import defaultSiteConfig from "../data/siteConfig.json";
import defaultCertificates from "../data/certificates.json";

// In-Memory Runtime Store (Survives throughout process runtime & never crashes on read-only FS)
let memoryCourses: Course[] = [...(defaultCourses as Course[])];
let memoryBlogs: BlogPost[] = [...(defaultBlogs as BlogPost[])];
let memorySiteConfig: SiteConfig = { ...(defaultSiteConfig as SiteConfig) };
let memoryLeads: Lead[] = [];
let memoryCertificates: Certificate[] = [...(defaultCertificates as Certificate[])];

const primaryDataDir = path.join(process.cwd(), "src", "data");
const tmpDataDir = path.join(os.tmpdir(), "endowit_data");

function safeWriteJson(fileName: string, data: any) {
  const jsonStr = JSON.stringify(data, null, 2);
  let written = false;

  // 1. Try writing to primary project data dir (e.g. local development)
  try {
    if (!fs.existsSync(primaryDataDir)) {
      fs.mkdirSync(primaryDataDir, { recursive: true });
    }
    fs.writeFileSync(path.join(primaryDataDir, fileName), jsonStr, "utf-8");
    written = true;
  } catch (err) {
    // Primary dir is read-only (e.g. Vercel serverless /var/task)
  }

  // 2. Try writing to /tmp directory (writable in Vercel serverless Lambda)
  if (!written) {
    try {
      if (!fs.existsSync(tmpDataDir)) {
        fs.mkdirSync(tmpDataDir, { recursive: true });
      }
      fs.writeFileSync(path.join(tmpDataDir, fileName), jsonStr, "utf-8");
      written = true;
    } catch (err) {
      // In-memory array already updated, so no crash occurs
    }
  }
}

function safeReadJson<T>(fileName: string, defaultVal: T): T {
  // 1. Check primary data dir
  try {
    const primaryPath = path.join(primaryDataDir, fileName);
    if (fs.existsSync(primaryPath)) {
      const content = fs.readFileSync(primaryPath, "utf-8");
      return JSON.parse(content) as T;
    }
  } catch (err) {
    // ignore
  }

  // 2. Check /tmp data dir
  try {
    const tmpPath = path.join(tmpDataDir, fileName);
    if (fs.existsSync(tmpPath)) {
      const content = fs.readFileSync(tmpPath, "utf-8");
      return JSON.parse(content) as T;
    }
  } catch (err) {
    // ignore
  }

  return defaultVal;
}

// ---------------- COURSES ----------------
export function getCourses(): Course[] {
  if (memoryCourses.length > 0) return memoryCourses;
  memoryCourses = safeReadJson<Course[]>("courses.json", defaultCourses as Course[]);
  return memoryCourses;
}

export function saveCourses(courses: Course[]) {
  memoryCourses = courses;
  safeWriteJson("courses.json", courses);
}

// ---------------- BLOGS ----------------
export function getBlogs(): BlogPost[] {
  if (memoryBlogs.length > 0) return memoryBlogs;
  memoryBlogs = safeReadJson<BlogPost[]>("blogs.json", defaultBlogs as BlogPost[]);
  return memoryBlogs;
}

export function saveBlogs(blogs: BlogPost[]) {
  memoryBlogs = blogs;
  safeWriteJson("blogs.json", blogs);
}

// ---------------- SITE CONFIG ----------------
export function getSiteConfig(): SiteConfig {
  if (memorySiteConfig && memorySiteConfig.brandName) return memorySiteConfig;
  memorySiteConfig = safeReadJson<SiteConfig>("siteConfig.json", defaultSiteConfig as SiteConfig);
  return memorySiteConfig;
}

export function saveSiteConfig(config: SiteConfig) {
  memorySiteConfig = config;
  safeWriteJson("siteConfig.json", config);
}

// ---------------- LEADS ----------------
export function getLeads(): Lead[] {
  if (memoryLeads.length > 0) return memoryLeads;
  memoryLeads = safeReadJson<Lead[]>("leads.json", []);
  return memoryLeads;
}

export function saveLead(lead: Omit<Lead, "id" | "createdAt" | "status">): Lead {
  const newLead: Lead = {
    ...lead,
    id: "lead_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
    createdAt: new Date().toISOString(),
    status: "New",
  };
  memoryLeads.unshift(newLead);
  safeWriteJson("leads.json", memoryLeads);
  return newLead;
}

export function updateLeadStatus(id: string, status: Lead["status"]) {
  const index = memoryLeads.findIndex((l) => l.id === id);
  if (index !== -1) {
    memoryLeads[index].status = status;
    safeWriteJson("leads.json", memoryLeads);
  }
}

// ---------------- CERTIFICATES ----------------
export function getCertificates(): Certificate[] {
  if (memoryCertificates.length > 0) return memoryCertificates;
  memoryCertificates = safeReadJson<Certificate[]>("certificates.json", defaultCertificates as Certificate[]);
  return memoryCertificates;
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
  const certs = getCertificates();
  const existingIdx = certs.findIndex(
    (c) => c.certificateNumber.toUpperCase() === certificate.certificateNumber.toUpperCase()
  );

  if (existingIdx !== -1) {
    certs[existingIdx] = certificate;
  } else {
    certs.unshift(certificate);
  }

  memoryCertificates = certs;
  safeWriteJson("certificates.json", certs);
  return certificate;
}
