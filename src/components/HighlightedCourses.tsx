"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Briefcase,
  Layers,
  Award,
  Zap,
  TrendingUp,
  Laptop,
} from "lucide-react";
import { Course } from "@/lib/types";

interface HighlightedCoursesProps {
  courses: Course[];
  onOpenDemoModal: (courseName?: string) => void;
}

export default function HighlightedCourses({
  courses,
  onOpenDemoModal,
}: HighlightedCoursesProps) {
  // Flagship courses (Digital Marketing, Full Stack, Data Analytics)
  const flagshipCourses = courses.filter((c) => c.highlighted);
  const [activeCourseId, setActiveCourseId] = useState<string>(
    flagshipCourses[0]?.id || courses[0]?.id
  );

  const activeCourse =
    courses.find((c) => c.id === activeCourseId) || courses[0];

  return (
    <section className="py-8 sm:py-10 bg-transparent text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
            <Laptop className="w-4 h-4 text-accent-cyan" />
            <span>Practical Training In Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Learn Tech By <span className="gradient-text-vibrant">Doing Real Client Work</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Strictly 3-month curriculums, live client ad budgets, production deployments, and a guaranteed practical internship certificate.
          </p>
        </div>

        {/* Course Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          {flagshipCourses.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCourseId(c.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                activeCourseId === c.id
                  ? "bg-gradient-to-r from-brand-600 to-accent-cyan text-white shadow-lg shadow-brand-500/30 scale-102 border-transparent"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              <span>{c.title.split("(")[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Highlighted Course Animated Card */}
        {activeCourse && (
          <div className="p-6 sm:p-8 rounded-3xl bg-navy-950/90 border border-white/15 shadow-2xl backdrop-blur-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-400/30">
                    {activeCourse.category}
                  </span>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Includes Guaranteed Practical Internship</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {activeCourse.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeCourse.overview}
                </p>

                {/* Real-World Client Project Callout */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-accent-cyan uppercase tracking-wider">
                    <Laptop className="w-4 h-4" />
                    <span>Live Client Project Experience:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    {activeCourse.liveProjectsCount} — Students work on real client marketing budgets, production code, or corporate database pipelines.
                  </p>
                </div>

                {/* Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  {activeCourse.keyHighlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Industry Tools Mastered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCourse.tools.slice(0, 7).map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/10 text-slate-200 border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Transparent Pricing & Enrollment Card */}
              <div className="lg:col-span-5">
                <div className="p-7 rounded-3xl bg-white/5 border border-white/15 shadow-xl space-y-5 text-center sm:text-left">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs text-slate-400 block">
                        Batch Availability:
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white">
                          Chennai & Online
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-400 text-navy-950">
                      Admissions Open
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span>Course Duration:</span>
                      <span className="font-bold text-white flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-400" />
                        {activeCourse.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span>Batch Capacity:</span>
                      <span className="font-bold text-accent-cyan">
                        10 - 15 Students Max
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span>Internship:</span>
                      <span className="font-bold text-emerald-400">
                        Guaranteed Practical Included
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span>Payment Plan:</span>
                      <span className="font-bold text-white">
                        Split Payment Available
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      onClick={() => onOpenDemoModal(activeCourse.title)}
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-accent-cyan hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Book Free Demo Class</span>
                    </button>

                    <Link
                      href={`/courses/${activeCourse.slug}`}
                      className="w-full py-3 rounded-xl font-semibold text-xs text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>View Detailed Syllabus & Modules</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
