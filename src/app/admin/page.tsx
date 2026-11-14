"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  BookOpen,
  FileText,
  Settings,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle2,
  Clock,
  ExternalLink,
  Search,
  Phone,
  Mail,
  ArrowLeft,
  RefreshCw,
  Star,
  MapPin,
  Check,
} from "lucide-react";
import { Course, BlogPost, Lead, SiteConfig, GoogleReview } from "@/lib/types";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<
    "leads" | "courses" | "blogs" | "seo" | "gmb"
  >("leads");

  // State
  const [leads, setLeads] = useState<Lead[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saveMessage, setSaveMessage] = useState("");
  const [syncingGoogle, setSyncingGoogle] = useState(false);

  // Search filter for leads
  const [leadSearch, setLeadSearch] = useState("");

  // Course Edit Modal / Form
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isNewCourse, setIsNewCourse] = useState(false);

  // Blog Edit Modal / Form
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isNewBlog, setIsNewBlog] = useState(false);

  // New Google Review Form
  const [showAddReview, setShowAddReview] = useState(false);
  const [newReview, setNewReview] = useState<Partial<GoogleReview>>({
    author_name: "",
    rating: 5,
    relative_time_description: "Just now",
    text: "",
    profile_photo_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    verified: true,
  });

  // Load all initial data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [leadsRes, coursesRes, blogsRes, seoRes] = await Promise.all([
        fetch("/api/leads").then((r) => r.json()),
        fetch("/api/admin/courses").then((r) => r.json()),
        fetch("/api/admin/blogs").then((r) => r.json()),
        fetch("/api/admin/seo").then((r) => r.json()),
      ]);

      if (leadsRes.success) setLeads(leadsRes.leads);
      if (coursesRes.success) setCourses(coursesRes.courses);
      if (blogsRes.success) setBlogs(blogsRes.blogs);
      if (seoRes.success) setSiteConfig(seoRes.config);
    } catch (err) {
      console.error("Failed to load admin data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Update lead status
  const handleUpdateLeadStatus = async (id: string, status: Lead["status"]) => {
    try {
      await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status } : l))
      );
    } catch (err) {
      console.error(err);
    }
  };

  // Save course
  const handleSaveCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCourse) return;

    try {
      const res = await fetch("/api/admin/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingCourse),
      });
      const data = await res.json();
      if (data.success) {
        setSaveMessage("Course saved successfully!");
        setEditingCourse(null);
        fetchData();
        setTimeout(() => setSaveMessage(""), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Delete course
  const handleDeleteCourse = async (id: string) => {
    if (!confirm("Are you sure you want to delete this course?")) return;
    try {
      await fetch(`/api/admin/courses?id=${id}`, { method: "DELETE" });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  // Save blog
  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog) return;

    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingBlog),
      });
      const data = await res.json();
      if (data.success) {
        setSaveMessage("Article saved successfully!");
        setEditingBlog(null);
        fetchData();
        setTimeout(() => setSaveMessage(""), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Delete blog
  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      await fetch(`/api/admin/blogs?id=${id}`, { method: "DELETE" });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  // Save SEO & site configuration
  const handleSaveSEO = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteConfig) return;

    try {
      const res = await fetch("/api/admin/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(siteConfig),
      });
      const data = await res.json();
      if (data.success) {
        setSaveMessage("Settings updated successfully!");
        setTimeout(() => setSaveMessage(""), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Sync Google Reviews
  const handleSyncGoogleReviews = async () => {
    setSyncingGoogle(true);
    try {
      const res = await fetch("/api/reviews/google");
      const data = await res.json();
      if (data.success) {
        setSaveMessage(
          data.live
            ? "Synced live reviews from Google Places API!"
            : "Google reviews refreshed!"
        );
        fetchData();
        setTimeout(() => setSaveMessage(""), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSyncingGoogle(false);
    }
  };

  // Add a Google review manually
  const handleAddCustomReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteConfig || !newReview.author_name || !newReview.text) return;

    const reviewToAdd: GoogleReview = {
      id: "gmb_manual_" + Date.now(),
      author_name: newReview.author_name,
      rating: newReview.rating || 5,
      relative_time_description: newReview.relative_time_description || "Recently",
      text: newReview.text,
      profile_photo_url:
        newReview.profile_photo_url ||
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      time: Math.floor(Date.now() / 1000),
      verified: true,
    };

    const updatedReviews = [
      reviewToAdd,
      ...(siteConfig.gmb?.customReviews || []),
    ];

    const updatedConfig = {
      ...siteConfig,
      gmb: {
        ...siteConfig.gmb,
        customReviews: updatedReviews,
      },
    };

    setSiteConfig(updatedConfig);
    fetch("/api/admin/seo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedConfig),
    });

    setShowAddReview(false);
    setNewReview({
      author_name: "",
      rating: 5,
      relative_time_description: "Just now",
      text: "",
      profile_photo_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      verified: true,
    });
  };

  // Delete a review
  const handleDeleteReview = (id: string) => {
    if (!siteConfig) return;
    const filtered = (siteConfig.gmb?.customReviews || []).filter(
      (r) => r.id !== id
    );
    const updatedConfig = {
      ...siteConfig,
      gmb: {
        ...siteConfig.gmb,
        customReviews: filtered,
      },
    };
    setSiteConfig(updatedConfig);
    fetch("/api/admin/seo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedConfig),
    });
  };

  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.phone.includes(leadSearch) ||
      l.course.toLowerCase().includes(leadSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-navy-950 text-slate-800 dark:text-slate-100">
      {/* Top Bar */}
      <header className="bg-white dark:bg-navy-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Return to Website"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-brand-600 text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                  EndowIT CMS Studio
                </h1>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Real-Time Content, SEO, Leads & Google Reviews
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {saveMessage && (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {saveMessage}
              </span>
            )}

            <button
              onClick={fetchData}
              className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              title="Refresh Data"
            >
              <RefreshCw
                className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
              />
            </button>

            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white hover:bg-brand-700 transition-colors"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 sm:space-x-4 border-t border-slate-100 dark:border-slate-800/80 overflow-x-auto">
          <button
            onClick={() => setActiveTab("leads")}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === "leads"
                ? "border-brand-600 text-brand-600 dark:text-brand-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Candidate Inquiries ({leads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("gmb")}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === "gmb"
                ? "border-brand-600 text-brand-600 dark:text-brand-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            <Star className="w-4 h-4 text-amber-500" />
            <span>Google Reviews & GMB</span>
          </button>

          <button
            onClick={() => setActiveTab("courses")}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === "courses"
                ? "border-brand-600 text-brand-600 dark:text-brand-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Courses Manager ({courses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("blogs")}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === "blogs"
                ? "border-brand-600 text-brand-600 dark:text-brand-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Blog & Articles ({blogs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("seo")}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === "seo"
                ? "border-brand-600 text-brand-600 dark:text-brand-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>SEO & Contact Details</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* TAB 1: CANDIDATE LEADS & INQUIRIES */}
        {activeTab === "leads" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Demo & Counseling Inquiries
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Direct lead submissions from website demo forms and callback requests.
                </p>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name, phone, course..."
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-navy-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
            </div>

            {filteredLeads.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800">
                <Users className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h4 className="text-base font-bold text-slate-700 dark:text-slate-200">
                  No Inquiries Yet
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  When visitors submit &ldquo;Book Free Demo&rdquo; forms on the website, their details appear here in real-time.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-navy-950/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase font-bold tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Candidate</th>
                      <th className="py-3.5 px-4">Contact</th>
                      <th className="py-3.5 px-4">Course Interested</th>
                      <th className="py-3.5 px-4">Mode</th>
                      <th className="py-3.5 px-4">Date & Time</th>
                      <th className="py-3.5 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {filteredLeads.map((lead) => (
                      <tr
                        key={lead.id}
                        className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
                      >
                        <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                          {lead.name}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex flex-col gap-0.5">
                            <a
                              href={`tel:${lead.phone}`}
                              className="font-semibold text-brand-600 hover:underline flex items-center gap-1"
                            >
                              <Phone className="w-3 h-3" /> {lead.phone}
                            </a>
                            {lead.email && lead.email !== "Not Provided" && (
                              <span className="text-slate-400 text-[11px] flex items-center gap-1">
                                <Mail className="w-3 h-3" /> {lead.email}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-slate-700 dark:text-slate-200">
                          {lead.course}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            {lead.mode}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-400">
                          {new Date(lead.createdAt).toLocaleDateString()}{" "}
                          {new Date(lead.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={lead.status}
                            onChange={(e) =>
                              handleUpdateLeadStatus(
                                lead.id,
                                e.target.value as any
                              )
                            }
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border focus:outline-none ${
                              lead.status === "New"
                                ? "bg-amber-50 text-amber-700 border-amber-300"
                                : lead.status === "Contacted"
                                ? "bg-blue-50 text-blue-700 border-blue-300"
                                : lead.status === "Enrolled"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                                : "bg-slate-100 text-slate-600 border-slate-300"
                            }`}
                          >
                            <option value="New">🟡 New</option>
                            <option value="Contacted">🔵 Contacted</option>
                            <option value="Enrolled">🟢 Enrolled</option>
                            <option value="Closed">⚪ Closed</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: GOOGLE REVIEWS & GMB SETTINGS */}
        {activeTab === "gmb" && siteConfig && (
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                  <span>Google My Business (GMB) Live Reviews Integration</span>
                </h2>
                <p className="text-xs text-slate-500">
                  Connect your Google Business Profile to automatically display real reviews on the website.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleSyncGoogleReviews}
                  disabled={syncingGoogle}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-navy-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 flex items-center gap-1.5 shadow-sm"
                >
                  <RefreshCw
                    className={`w-3.5 h-3.5 ${syncingGoogle ? "animate-spin" : ""}`}
                  />
                  <span>Sync from Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowAddReview(!showAddReview)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white hover:bg-brand-700 flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Review</span>
                </button>
              </div>
            </div>

            {/* GMB Settings Form */}
            <form
              onSubmit={handleSaveSEO}
              className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600 border-b pb-2 border-slate-100 dark:border-slate-800">
                Google Business Profile Connection
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1">
                    Google Place ID (e.g. ChIJ...)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Google Maps Place ID"
                    value={siteConfig.gmb?.placeId || ""}
                    onChange={(e) =>
                      setSiteConfig({
                        ...siteConfig,
                        gmb: {
                          ...siteConfig.gmb,
                          placeId: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700 font-mono"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Find your Place ID from Google Place ID Finder or share your Google Maps link.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Direct &ldquo;Write a Review on Google&rdquo; Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://g.page/r/.../review"
                    value={siteConfig.gmb?.reviewUrl || ""}
                    onChange={(e) =>
                      setSiteConfig({
                        ...siteConfig,
                        gmb: {
                          ...siteConfig.gmb,
                          reviewUrl: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    When visitors click &ldquo;Write a Review on Google&rdquo;, they are taken here.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Google Places API Key (Optional for Automatic Live Sync)
                  </label>
                  <input
                    type="password"
                    placeholder="AIzaSy..."
                    value={siteConfig.gmb?.apiKey || ""}
                    onChange={(e) =>
                      setSiteConfig({
                        ...siteConfig,
                        gmb: {
                          ...siteConfig.gmb,
                          apiKey: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700 font-mono"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Google Cloud Console Places API Key. If empty, the site displays your verified reviews directly.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Minimum Rating to Display
                  </label>
                  <select
                    value={siteConfig.gmb?.minRatingToDisplay || 4}
                    onChange={(e) =>
                      setSiteConfig({
                        ...siteConfig,
                        gmb: {
                          ...siteConfig.gmb,
                          minRatingToDisplay: Number(e.target.value),
                        },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                  >
                    <option value={5}>Show 5 Stars Only</option>
                    <option value={4}>Show 4 Stars and Above</option>
                    <option value={3}>Show 3 Stars and Above</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-md flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save GMB Connection</span>
                </button>
              </div>
            </form>

            {/* Add Review Manual Form */}
            {showAddReview && (
              <form
                onSubmit={handleAddCustomReview}
                className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-brand-500 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Add Real Google Review
                  </h4>
                  <button
                    type="button"
                    onClick={() => setShowAddReview(false)}
                    className="text-xs text-slate-400 hover:text-slate-600"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold mb-1">
                      Reviewer Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vignesh Sundar"
                      value={newReview.author_name}
                      onChange={(e) =>
                        setNewReview({
                          ...newReview,
                          author_name: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">
                      Star Rating
                    </label>
                    <select
                      value={newReview.rating}
                      onChange={(e) =>
                        setNewReview({
                          ...newReview,
                          rating: Number(e.target.value),
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ 5 Stars</option>
                      <option value={4}>⭐⭐⭐⭐ 4 Stars</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">
                      Time / Date
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3 days ago"
                      value={newReview.relative_time_description}
                      onChange={(e) =>
                        setNewReview({
                          ...newReview,
                          relative_time_description: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Review Content / Feedback *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Paste the student's review text here..."
                    value={newReview.text}
                    onChange={(e) =>
                      setNewReview({ ...newReview, text: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white hover:bg-brand-700"
                  >
                    Add to Website
                  </button>
                </div>
              </form>
            )}

            {/* Reviews List */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Active Google Reviews ({siteConfig.gmb?.customReviews?.length || 0})
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {(siteConfig.gmb?.customReviews || []).map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {rev.author_name}
                        </span>
                        <div className="flex text-amber-400 text-xs">
                          {[...Array(rev.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-400">
                          {rev.relative_time_description}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                        &ldquo;{rev.text}&rdquo;
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteReview(rev.id)}
                      className="p-2 rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-50"
                      title="Remove Review"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COURSES MANAGER */}
        {activeTab === "courses" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Courses & Syllabus Management
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Add, update or customize syllabus topics, salaries, and course details.
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingCourse({
                    id: "course-" + Date.now(),
                    slug: "new-course-" + Date.now(),
                    title: "New Course Title",
                    shortDescription: "A brief description of this course.",
                    category: "Development",
                    duration: "3 Months",
                    mode: "Classroom & Online",
                    rating: 4.9,
                    reviewsCount: 150,
                    badge: "New Program",
                    salaryRange: "₹4.0 LPA - ₹10 LPA",
                    overview: "Comprehensive course overview here...",
                    keyHighlights: [
                      "100% Placement Support",
                      "Hands-on Capstone Projects",
                    ],
                    tools: ["Tool 1", "Tool 2"],
                    modules: [
                      {
                        title: "Module 1: Foundations",
                        topics: ["Introduction", "Core Principles"],
                      },
                    ],
                    careerRoles: ["Junior Engineer"],
                    faq: [
                      {
                        question: "Who can join?",
                        answer: "Anyone with passion to learn.",
                      },
                    ],
                  });
                  setIsNewCourse(true);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition-colors shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Course</span>
              </button>
            </div>

            {/* Editing Course Modal / Inline Form */}
            {editingCourse && (
              <div className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-brand-500 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isNewCourse ? "Add New Course" : "Edit Course: " + editingCourse.title}
                  </h3>
                  <button
                    onClick={() => setEditingCourse(null)}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                </div>

                <form onSubmit={handleSaveCourse} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold mb-1">
                        Course Title
                      </label>
                      <input
                        type="text"
                        required
                        value={editingCourse.title}
                        onChange={(e) =>
                          setEditingCourse({
                            ...editingCourse,
                            title: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">
                        URL Slug (e.g. full-stack-development)
                      </label>
                      <input
                        type="text"
                        required
                        value={editingCourse.slug}
                        onChange={(e) =>
                          setEditingCourse({
                            ...editingCourse,
                            slug: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">
                        Category
                      </label>
                      <select
                        value={editingCourse.category}
                        onChange={(e) =>
                          setEditingCourse({
                            ...editingCourse,
                            category: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                      >
                        <option value="Development">Development</option>
                        <option value="Data & AI">Data & AI</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Cloud & Infra">Cloud & Infra</option>
                        <option value="Testing & QA">Testing & QA</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">
                        Duration & Mode
                      </label>
                      <input
                        type="text"
                        value={editingCourse.duration}
                        onChange={(e) =>
                          setEditingCourse({
                            ...editingCourse,
                            duration: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">
                        Salary Range (e.g. ₹5 LPA - ₹12 LPA)
                      </label>
                      <input
                        type="text"
                        value={editingCourse.salaryRange}
                        onChange={(e) =>
                          setEditingCourse({
                            ...editingCourse,
                            salaryRange: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">
                        Badge (e.g. Trending 2026, Top Salary)
                      </label>
                      <input
                        type="text"
                        value={editingCourse.badge || ""}
                        onChange={(e) =>
                          setEditingCourse({
                            ...editingCourse,
                            badge: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">
                      Short Description
                    </label>
                    <textarea
                      rows={2}
                      value={editingCourse.shortDescription}
                      onChange={(e) =>
                        setEditingCourse({
                          ...editingCourse,
                          shortDescription: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">
                      Full Course Overview
                    </label>
                    <textarea
                      rows={3}
                      value={editingCourse.overview}
                      onChange={(e) =>
                        setEditingCourse({
                          ...editingCourse,
                          overview: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">
                      Tools & Technologies (Comma-separated)
                    </label>
                    <input
                      type="text"
                      value={editingCourse.tools.join(", ")}
                      onChange={(e) =>
                        setEditingCourse({
                          ...editingCourse,
                          tools: e.target.value
                            .split(",")
                            .map((t) => t.trim())
                            .filter(Boolean),
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setEditingCourse(null)}
                      className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 text-slate-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-md flex items-center gap-1.5"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Course</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Courses Cards List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-600">
                        {course.category}
                      </span>
                      {course.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-700">
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {course.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {course.shortDescription}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Duration: <strong>{course.duration}</strong> • Scope:{" "}
                      <strong className="text-emerald-600">{course.salaryRange}</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        setEditingCourse(course);
                        setIsNewCourse(false);
                      }}
                      className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                      title="Edit Course"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(course.id)}
                      className="p-2 rounded-lg border border-rose-200 hover:bg-rose-50 text-rose-600"
                      title="Delete Course"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: BLOGS & ARTICLES */}
        {activeTab === "blogs" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Blog & Industry Insights Studio
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Publish SEO-optimized articles, tutorials, and career roadmaps.
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingBlog({
                    id: "post-" + Date.now(),
                    slug: "article-" + Date.now(),
                    title: "New Tech Article Title",
                    excerpt: "A compelling summary for search engines.",
                    author: "EndowIT Editorial Team",
                    publishedAt: new Date().toISOString().split("T")[0],
                    readTime: "5 min read",
                    category: "Tech",
                    tags: ["Career", "Skills"],
                    coverImage: "/images/blogs/default.jpg",
                    content: "Article content in markdown or clean text...",
                  });
                  setIsNewBlog(true);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition-colors shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Publish New Article</span>
              </button>
            </div>

            {/* Editing Blog Form */}
            {editingBlog && (
              <div className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-brand-500 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isNewBlog ? "Write New Article" : "Edit Article: " + editingBlog.title}
                  </h3>
                  <button
                    onClick={() => setEditingBlog(null)}
                    className="text-xs font-bold text-slate-500"
                  >
                    Cancel
                  </button>
                </div>

                <form onSubmit={handleSaveBlog} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        required
                        value={editingBlog.title}
                        onChange={(e) =>
                          setEditingBlog({ ...editingBlog, title: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">
                        URL Slug
                      </label>
                      <input
                        type="text"
                        required
                        value={editingBlog.slug}
                        onChange={(e) =>
                          setEditingBlog({ ...editingBlog, slug: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">
                        Category & Read Time
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={editingBlog.category}
                          onChange={(e) =>
                            setEditingBlog({
                              ...editingBlog,
                              category: e.target.value,
                            })
                          }
                          placeholder="Category"
                          className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                        />
                        <input
                          type="text"
                          value={editingBlog.readTime}
                          onChange={(e) =>
                            setEditingBlog({
                              ...editingBlog,
                              readTime: e.target.value,
                            })
                          }
                          placeholder="5 min read"
                          className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">
                        Tags (Comma separated)
                      </label>
                      <input
                        type="text"
                        value={editingBlog.tags.join(", ")}
                        onChange={(e) =>
                          setEditingBlog({
                            ...editingBlog,
                            tags: e.target.value
                              .split(",")
                              .map((t) => t.trim())
                              .filter(Boolean),
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">
                      Excerpt / Meta Summary
                    </label>
                    <textarea
                      rows={2}
                      value={editingBlog.excerpt}
                      onChange={(e) =>
                        setEditingBlog({
                          ...editingBlog,
                          excerpt: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">
                      Full Article Body Content
                    </label>
                    <textarea
                      rows={8}
                      value={editingBlog.content}
                      onChange={(e) =>
                        setEditingBlog({
                          ...editingBlog,
                          content: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700 font-mono"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setEditingBlog(null)}
                      className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 text-slate-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-md flex items-center gap-1.5"
                    >
                      <Save className="w-4 h-4" />
                      <span>Publish Article</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Blogs List */}
            <div className="space-y-4">
              {blogs.map((b) => (
                <div
                  key={b.id}
                  className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-600">
                        {b.category}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {b.publishedAt} • {b.readTime}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {b.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {b.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        setEditingBlog(b);
                        setIsNewBlog(false);
                      }}
                      className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                      title="Edit Article"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(b.id)}
                      className="p-2 rounded-lg border border-rose-200 hover:bg-rose-50 text-rose-600"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SEO & SITE CONFIGURATION */}
        {activeTab === "seo" && siteConfig && (
          <div className="space-y-6 max-w-4xl">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Global SEO & Academy Settings
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Update meta tags, Google search descriptions, phone numbers, and addresses.
              </p>
            </div>

            <form
              onSubmit={handleSaveSEO}
              className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
            >
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600 border-b pb-2 border-slate-100 dark:border-slate-800">
                  Search Engine Optimization (SEO)
                </h3>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Global SEO Title Tag
                  </label>
                  <input
                    type="text"
                    value={siteConfig.seoTitle}
                    onChange={(e) =>
                      setSiteConfig({
                        ...siteConfig,
                        seoTitle: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Meta Description (Shown in Google Search Results)
                  </label>
                  <textarea
                    rows={3}
                    value={siteConfig.seoDescription}
                    onChange={(e) =>
                      setSiteConfig({
                        ...siteConfig,
                        seoDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Target Keywords (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={siteConfig.keywords}
                    onChange={(e) =>
                      setSiteConfig({
                        ...siteConfig,
                        keywords: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600 border-b pb-2 border-slate-100 dark:border-slate-800">
                  Real Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1">
                      Primary Admissions Phone Number
                    </label>
                    <input
                      type="text"
                      value={siteConfig.contact.phone}
                      onChange={(e) =>
                        setSiteConfig({
                          ...siteConfig,
                          contact: {
                            ...siteConfig.contact,
                            phone: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">
                      Admissions Email
                    </label>
                    <input
                      type="email"
                      value={siteConfig.contact.email}
                      onChange={(e) =>
                        setSiteConfig({
                          ...siteConfig,
                          contact: {
                            ...siteConfig.contact,
                            email: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Full Campus / Office Address
                  </label>
                  <input
                    type="text"
                    value={siteConfig.contact.address}
                    onChange={(e) =>
                      setSiteConfig({
                        ...siteConfig,
                        contact: {
                          ...siteConfig.contact,
                          address: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 shadow-md flex items-center gap-1.5 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Update Settings</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
