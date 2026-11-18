export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  duration: string;
  mode: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  price: string;
  originalPrice: string;
  emiPrice: string;
  internshipIncluded: boolean;
  liveProjectsCount: string;
  highlighted?: boolean;
  salaryRange?: string;
  heroImage?: string;
  overview: string;
  keyHighlights: string[];
  tools: string[];
  modules: CourseModule[];
  careerRoles: string[];
  faq: CourseFAQ[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  content: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  mode: "Classroom" | "Online";
  message?: string;
  createdAt: string;
  status: "New" | "Contacted" | "Enrolled" | "Closed";
}

export interface GoogleReview {
  id: string;
  author_name: string;
  author_url?: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  verified: boolean;
}

export interface GMBConfig {
  placeId: string;
  apiKey?: string;
  businessName: string;
  reviewUrl: string;
  overallRating: number;
  totalReviews: number;
  autoSync: boolean;
  minRatingToDisplay: number;
  customReviews?: GoogleReview[];
}

export interface SiteConfig {
  siteName: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  contact: {
    phone: string;
    altPhone: string;
    email: string;
    supportEmail: string;
    address: string;
    whatsapp: string;
    workingHours: string;
  };
  gmb: GMBConfig;
  socials: Record<string, string>;
  stats: Array<{ label: string; value: string }>;
  hiringPartners: string[];
  testimonials: Array<{
    id: string;
    name: string;
    role: string;
    course: string;
    avatar: string;
    content: string;
    rating: number;
  }>;
}

export interface Certificate {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseName: string;
  type: "Course Completion" | "Practical Internship";
  issueDate: string;
  completionDate: string;
  duration: string;
  grade: string;
  status: "Verified & Active" | "Revoked";
  skills: string[];
  liveProjectTitle: string;
  liveProjectDescription: string;
  batchId: string;
  mode: "Chennai Lab (Classroom)" | "Live Interactive Online";
  signatoryTitle: string;
  signatoryName: string;
}

