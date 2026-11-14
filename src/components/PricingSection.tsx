"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  Award,
  Zap,
  Tag,
} from "lucide-react";
import { Course } from "@/lib/types";

interface PricingSectionProps {
  courses: Course[];
  onOpenDemoModal: (courseName?: string) => void;
}

export default function PricingSection({
  courses,
  onOpenDemoModal,
}: PricingSectionProps) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-navy-950 border-t border-slate-200 dark:border-slate-800" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200">
            <Tag className="w-4 h-4 text-emerald-600" />
            <span>Transparent Launch Fee Structure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Affordable Fees with Live Client Internship
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Zero hidden costs. Every course includes real project experience, guaranteed practical internship certificate, and flexible split payment options.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                course.highlighted
                  ? "bg-white dark:bg-navy-900 border-2 border-brand-500 shadow-xl hover:-translate-y-1.5"
                  : "bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {course.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-600 to-accent-cyan text-white text-[11px] font-extrabold shadow-md uppercase tracking-wider">
                  Popular Launch Choice
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                    {course.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                  {course.shortDescription}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-100 dark:border-slate-800/80 mb-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">
                        Launch Special Fee:
                      </span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                          {course.price}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          {course.originalPrice}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-200">
                      Save ₹7,000+
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                    <span>Payment Plan:</span>
                    <strong className="text-slate-800 dark:text-slate-200">
                      {course.emiPrice}
                    </strong>
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      Guaranteed Practical Internship
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Real-world client projects & live budget</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Strictly 10–15 students max per batch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Dedicated interview grooming & resume review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Classroom (Chennai) or Interactive Online</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onOpenDemoModal(course.title)}
                  className="w-full py-3 rounded-xl font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-md shadow-brand-500/20 flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Free Demo & Claim Offer</span>
                </button>

                <Link
                  href={`/courses/${course.slug}`}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-colors flex items-center justify-center gap-1"
                >
                  <span>View Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
