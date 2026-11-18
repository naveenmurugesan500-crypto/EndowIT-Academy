import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getBlogs } from "@/lib/storage";
import ClientShell from "@/components/ClientShell";
import { ArrowLeft, Clock, Calendar, User, Tag, Sparkles } from "lucide-react";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blogs = getBlogs();
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return { title: "Article Not Found | EndowIT Academy" };
  }

  return {
    title: `${blog.title} | EndowIT Academy`,
    description: blog.excerpt,
    keywords: blog.tags.join(", "),
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author],
    },
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const blogs = getBlogs();
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <ClientShell>
      <article className="pt-28 pb-20 bg-white dark:bg-navy-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          {/* Header */}
          <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-bold px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-300">
                {blog.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {blog.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {blog.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {blog.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 italic">
              {blog.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
                {blog.author[0]}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  {blog.author}
                </p>
                <span className="text-[11px] text-slate-400">
                  EndowIT Academy Technical Research
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="py-10 prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-6">
            {blog.content.split("\n\n").map((para, index) => {
              if (para.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3"
                  >
                    {para.replace("### ", "")}
                  </h3>
                );
              }
              return (
                <p key={index} className="text-slate-700 dark:text-slate-300">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-slate-400 mr-2">Tags:</span>
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-slate-100/90 via-blue-50/80 to-indigo-50/60 border border-slate-200/90 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-xl font-bold text-slate-900">
                Want to Master These Skills Hands-on?
              </h4>
              <p className="text-xs text-slate-600">
                Book a free demo session with our senior industry mentors today.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition-colors shrink-0"
            >
              Book Free Demo Session
            </Link>
          </div>
        </div>
      </article>
    </ClientShell>
  );
}
