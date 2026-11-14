"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Course } from "@/lib/types";
import {
  Sparkles,
  Star,
  Clock,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Layers,
  ArrowRight,
  Download,
  Users,
  Award,
  PhoneCall,
  Laptop,
  Tag,
} from "lucide-react";
import LeadModal from "@/components/LeadModal";

export default function CourseDetailClient({ course }: { course: Course }) {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [quickPhone, setQuickPhone] = useState("");
  const [quickName, setQuickName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone || !quickName) return;

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quickName,
          phone: quickPhone,
          email: "enquiry@endowitacademy.com",
          course: course.title,
          mode: "Classroom",
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-navy-950">
      {/* Course Hero Banner */}
      <section className="bg-gradient-to-b from-brand-950 via-navy-900 to-navy-950 text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Category & Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-400/30">
                  {course.category}
                </span>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Includes Guaranteed Practical Internship</span>
                </span>
                {course.badge && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {course.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {course.overview}
              </p>

              {/* Price & Meta Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                    Launch Course Fee:
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-xl font-extrabold text-white">
                      {course.price}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold block mt-1">
                    Split Payment Available
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                    Duration & Mode:
                  </span>
                  <div className="flex items-center gap-1 text-accent-cyan text-sm font-bold mt-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <span className="text-[10px] text-slate-300 block mt-1">
                    {course.mode}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                    Batch Size:
                  </span>
                  <div className="flex items-center gap-1 text-purple-400 text-sm font-bold mt-1">
                    <Users className="w-4 h-4" />
                    <span>10 - 15 Max</span>
                  </div>
                  <span className="text-[10px] text-slate-300 block mt-1">
                    Personal Attention
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                    Placement:
                  </span>
                  <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold mt-1">
                    <Briefcase className="w-4 h-4" />
                    <span>Full Support</span>
                  </div>
                  <span className="text-[10px] text-slate-300 block mt-1">
                    Mock Interviews
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-accent-cyan shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Demo Class</span>
                </button>

                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Syllabus PDF</span>
                </button>
              </div>
            </div>

            {/* Quick Enrollment Card in Hero */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-white space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-accent-cyan uppercase tracking-wider">
                    Batch Enrollment
                  </span>
                  <h3 className="text-xl font-bold">Inquire About This Course</h3>
                  <p className="text-xs text-slate-300">
                    Get fee discount, next batch dates, and syllabus brochure instantly.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <h4 className="text-sm font-bold">Request Submitted!</h4>
                    <p className="text-xs text-slate-300">
                      Our admissions counselor will call you at <strong>{quickPhone}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEnrollSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={quickName}
                        onChange={(e) => setQuickName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="WhatsApp / Phone Number"
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-bold text-xs bg-accent-cyan text-navy-950 hover:bg-cyan-300 transition-colors shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>Get Instant Syllabus & Call</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}

                <div className="pt-2 border-t border-white/10 space-y-1.5 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Free 2-Day Trial Demo Attendance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Guaranteed Practical Internship Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Syllabus, Highlights, Tools */}
          <div className="lg:col-span-8 space-y-10">
            {/* Real Project & Internship Callout */}
            <div className="p-7 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                <Laptop className="w-4 h-4" />
                <span>Live Client Project & Internship Included</span>
              </div>
              <h3 className="text-lg font-bold text-emerald-950 dark:text-emerald-100">
                {course.liveProjectsCount}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed">
                You work directly with real client campaign budgets or production codebases. Upon completion, you receive an industry-verifiable practical internship certificate.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-600" />
                <span>Program Highlights & Benefits</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {course.keyHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Covered */}
            <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Laptop className="w-5 h-5 text-brand-600" />
                <span>Technologies & Industry Tools Mastered</span>
              </h2>
              <div className="flex flex-wrap gap-2 pt-2">
                {course.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Module Syllabus Accordion */}
            <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-brand-600" />
                    <span>Curriculum & Syllabus Modules</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Structured step-by-step from zero basics to industry competence.
                  </p>
                </div>

                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>

              <div className="space-y-4">
                {course.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-navy-950/50"
                  >
                    <button
                      onClick={() =>
                        setOpenModule(openModule === idx ? null : idx)
                      }
                      className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <span className="text-sm sm:text-base">{mod.title}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                          openModule === idx ? "rotate-180 text-brand-600" : ""
                        }`}
                      />
                    </button>

                    {openModule === idx && (
                      <div className="p-4 pt-2 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900 space-y-2">
                        {mod.topics.map((topic, tIdx) => (
                          <div
                            key={tIdx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-brand-600" />
                <span>Job Roles You Will Qualify For</span>
              </h2>
              <div className="flex flex-wrap gap-2 pt-2">
                {course.careerRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200"
                  >
                    💼 {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Contact & Fee Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 p-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
                  Batch Starting This Week
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Enroll in {course.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Strictly 10–15 seats per batch. Flexible weekend and weekday shifts available.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">
                  Launch Offer Fee:
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {course.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    {course.originalPrice}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 block mt-1">
                  Flexible Split Payment Available
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span>Duration:</span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span>Batch Capacity:</span>
                  <span className="font-bold text-accent-cyan">
                    10 - 15 Students
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span>Internship:</span>
                  <span className="font-bold text-emerald-600">
                    Guaranteed Practical Included
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Placement:</span>
                  <span className="font-bold text-brand-600">
                    Dedicated Assistance & Mocks
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Demo Class</span>
              </button>

              <a
                href="tel:+916379427852"
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-brand-600" />
                <span>Call Admissions: +91 63794 27852</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <LeadModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultCourse={course.title}
        title={`Book Demo for ${course.title}`}
      />
    </div>
  );
}
