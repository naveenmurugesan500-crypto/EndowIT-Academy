"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThreeCanvas from "./ThreeCanvas";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Award,
  Users,
  Clock,
  Briefcase,
} from "lucide-react";

interface HeroSectionProps {
  onOpenDemoModal?: () => void;
}

export default function HeroSection({ onOpenDemoModal }: HeroSectionProps) {
  const [quickPhone, setQuickPhone] = useState("");
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone) return;
    setQuickSubmitted(true);
  };

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/90 to-blue-50/25 border-b border-slate-200/70 text-slate-900">
      {/* Minimal, Subtle Sliding Wave Canvas (Rendered cleanly on white background) */}
      <ThreeCanvas />

      {/* Soft Ambient Light Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Clean, High-Trust Corporate Headlines */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs sm:text-sm font-semibold text-brand-700 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100+ Trained Online · Chennai Tech Lab Launch · All Batches 3 Months</span>
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            </div>

            {/* Main H1 Headline with Crisp Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Learn Real Tech By{" "}
              <span className="bg-gradient-to-r from-brand-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent block mt-1.5">
                Doing Real Work.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Practical <strong className="text-slate-900 font-semibold">3-Month programs</strong> in{" "}
              <strong>Digital Marketing, Full Stack Development, and Data Analytics</strong>. We don&apos;t just teach slides—you manage live client ad spends, write production code, and earn a{" "}
              <strong className="text-brand-700 font-semibold">guaranteed practical internship certificate</strong>.
            </p>

            {/* Core Pillars (Clean White Cards with Subtle Borders) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-semibold text-slate-700 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 border border-slate-200 shadow-sm text-left hover:border-cyan-400/60 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Real Live Client Ad Spends & Projects</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 border border-slate-200 shadow-sm text-left hover:border-amber-400/60 transition-colors">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Guaranteed Practical Internship Certificate</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 border border-slate-200 shadow-sm text-left hover:border-emerald-400/60 transition-colors">
                <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Strictly 10–15 Students Per Batch Only</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/90 border border-slate-200 shadow-sm text-left hover:border-brand-400/60 transition-colors">
                <Clock className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Strictly 3-Month Fast-Track Job Curriculums</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="#courses"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Explore 3-Month Programs</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Clean White Counseling Card with Soft Shadow */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white/95 border border-slate-200/90 p-6 sm:p-7 shadow-xl shadow-slate-200/60 backdrop-blur-md">
              <div className="absolute top-4 right-6 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-[11px] uppercase tracking-wider">
                Limited to 15 Seats
              </div>

              <div className="space-y-4 pt-1">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-brand-600 tracking-wider uppercase">
                    New Offline & Online Batches
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Get Free Career Counseling & Syllabus
                  </h3>
                  <p className="text-xs text-slate-500">
                    Find out which 3-month course matches your background and get batch schedule details.
                  </p>
                </div>

                {quickSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-bold text-slate-900">Request Received!</h4>
                    <p className="text-xs text-slate-600">
                      Our mentor will call you at <strong>{quickPhone}</strong> shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-3 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Enter Mobile / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value)}
                        placeholder="e.g. 63794 27852"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-md shadow-brand-500/20 flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Request Free Counseling Call</span>
                    </button>
                  </form>
                )}

                <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free 1-on-1 profile guidance with senior trainer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Flexible Split Payment options available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Strictly 3 Months curriculum with practical internship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real & Realistic Stats Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">100+</h4>
            <p className="text-xs text-slate-500">Students Trained Online</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-600">10 - 15</h4>
            <p className="text-xs text-slate-500">Students Max / Batch</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-cyan-600">3 Months</h4>
            <p className="text-xs text-slate-500">Practical Course Duration</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-emerald-600">Guaranteed</h4>
            <p className="text-xs text-slate-500">Practical Internship Included</p>
          </div>
        </div>
      </div>
    </section>
  );
}
