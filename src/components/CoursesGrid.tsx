"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Award,
  Tag,
} from "lucide-react";
import { Course } from "@/lib/types";

interface CoursesGridProps {
  courses: Course[];
  onOpenDemoModal: (courseName?: string) => void;
  showPricing?: boolean;
}

export default function CoursesGrid({
  courses,
  onOpenDemoModal,
  showPricing = false,
}: CoursesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Marketing",
    "Development",
    "Data & AI",
    "Cloud & Infra",
    "Testing & QA",
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <section className="py-8 sm:py-10 bg-transparent text-white relative" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Job-Oriented Training Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our 3-Month <span className="gradient-text-vibrant">Career Tracks</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Small batches (10–15 students), real client projects with actual ad spend and production deployments, guaranteed practical internship, and dedicated interview preparation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-brand-600 text-white shadow-md shadow-brand-500/25 scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 pb-3">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                    {course.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    <span>3 Months</span>
                  </span>
                </div>

                <Link href={`/courses/${course.slug}`}>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {course.shortDescription}
                </p>

                {/* Practical Internship & Live Project Badge */}
                <div className="mt-3.5 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800">
                    <Award className="w-4 h-4 shrink-0" />
                    <span>Includes Guaranteed Practical Internship</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 px-1 font-medium">
                    ⚡ {course.liveProjectsCount}
                  </div>
                </div>

                {/* Duration & Info Block */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  {showPricing ? (
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
                        Course Fee:
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                          {course.price}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          {course.originalPrice}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
                        Batch Size:
                      </span>
                      <span className="text-xs font-bold text-accent-cyan flex items-center gap-1">
                        Max 10-15 Seats
                      </span>
                    </div>
                  )}

                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
                      Duration:
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1 justify-end">
                      <Clock className="w-3.5 h-3.5 text-brand-500" />
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Tools Covered preview */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {course.tools.slice(0, 5).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                    {course.tools.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500">
                        +{course.tools.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-4 bg-slate-50/70 dark:bg-navy-950/60 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <Link
                  href={`/courses/${course.slug}`}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-brand-600 text-slate-800 dark:text-slate-200 text-xs font-bold text-center transition-all hover:bg-white dark:hover:bg-slate-800 flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-brand-600" />
                  <span>Syllabus</span>
                </Link>

                <button
                  onClick={() => onOpenDemoModal(course.title)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold text-center transition-all shadow-md shadow-brand-500/20 flex items-center justify-center gap-1.5"
                >
                  <span>Book Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
