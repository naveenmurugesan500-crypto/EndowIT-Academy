"use client";

import React, { useState } from "react";
import Link from "next/link";
import ClientShell from "@/components/ClientShell";
import defaultBlogs from "@/data/blogs.json";
import { Sparkles, Clock, Calendar, ArrowRight, Tag, BookOpen } from "lucide-react";

export default function BlogListingPage() {
  const [blogs] = useState(defaultBlogs);
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", "Career Guide", "Data & AI", "Digital Marketing", "Full Stack"];

  const filtered =
    selectedTag === "All"
      ? blogs
      : blogs.filter(
          (b) =>
            b.category === selectedTag || b.tags.some((t) => t === selectedTag)
        );

  return (
    <ClientShell>
      <div className="pt-24 pb-20 bg-slate-50 dark:bg-navy-950 min-h-screen">
        {/* Banner */}
        <div className="bg-gradient-to-b from-brand-950 via-navy-900 to-slate-950 text-white py-16 text-center border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-200 text-xs font-semibold backdrop-blur-md">
              <BookOpen className="w-4 h-4 text-accent-cyan" />
              <span>Tech Insights, Career Guides & Industry Trends</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              EndowIT Academy Blog & Resources
            </h1>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Read up-to-date industry analysis, technology roadmaps, salary trends, and interview preparation guides.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Tag Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedTag === tag
                    ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                    : "bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-bold text-brand-600 dark:text-brand-400 px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-brand-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    By {post.author}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </ClientShell>
  );
}
