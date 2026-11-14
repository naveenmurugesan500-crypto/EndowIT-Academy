"use client";

import React, { useState } from "react";
import Link from "next/link";
import ClientShell from "@/components/ClientShell";
import HeroSection from "@/components/HeroSection";
import HighlightedCourses from "@/components/HighlightedCourses";
import CoursesGrid from "@/components/CoursesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialSection";
import defaultCourses from "@/data/courses.json";
import {
  Sparkles,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Layers,
  Award,
  Laptop,
  Briefcase,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const [courses] = useState(defaultCourses);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState<string | undefined>(undefined);

  const handleOpenDemoModal = (courseName?: string) => {
    setModalCourse(courseName);
    setIsModalOpen(true);
  };

  const faqs = [
    {
      q: "Who can enroll in EndowIT Academy courses?",
      a: "Our programs are open to college students, fresh graduates (any stream - Arts, Commerce, Engineering), and working professionals who want genuine practical skills and live project experience.",
    },
    {
      q: "What is the duration of your courses?",
      a: "Every course at EndowIT Academy is strictly 3 Months in duration. It includes intensive practical classroom/online coaching, hands-on live client projects, and a guaranteed practical internship deliverable.",
    },
    {
      q: "What does the Guaranteed Practical Internship include?",
      a: "Every student works directly on live client projects (e.g., active Google & Meta ad accounts with real ad budgets, or live web application deployments). Upon completing the project deliverables, you receive a verified practical internship certificate.",
    },
    {
      q: "What is your batch size?",
      a: "We strictly limit our batches to 10–15 students. This ensures the mentor personally monitors your practical work and answers every doubt without anyone getting left behind.",
    },
    {
      q: "How does your Placement Support work?",
      a: "We provide dedicated placement assistance including 1-on-1 technical mock screenings, live portfolio reviews, and ATS resume crafting so you are prepared to clear job interviews confidently.",
    },
    {
      q: "Are installment or split payment options available?",
      a: "Yes! We offer convenient split payment options so you can pay in two easy installments during your 3-month course duration.",
    },
    {
      q: "Can I attend a free demo session first?",
      a: "Yes, you can attend a free 1-on-1 counseling and trial demo class before enrolling. We explain the entire practical roadmap upfront.",
    },
  ];

  return (
    <ClientShell>
      {/* 1. Hero Section (3D Education Universe + Authentic Stats) */}
      <HeroSection onOpenDemoModal={() => handleOpenDemoModal()} />

      <div className="bg-slate-950 py-8 space-y-12 sm:space-y-16">
        {/* BLOCK 01: Platform & Industry Tools Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 shadow-xl backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-400">
              <span className="text-white font-bold flex items-center gap-2 uppercase tracking-wider text-[11px]">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span className="gradient-text-emerald">Live Tools You Work With:</span>
              </span>
              <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-slate-300">
                <span className="hover:text-cyan-400 transition-colors">Meta Ads Manager</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-cyan-400 transition-colors">Google Ads & GA4</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-cyan-400 transition-colors">React & Next.js</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-cyan-400 transition-colors">Node.js & MongoDB</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-cyan-400 transition-colors">Microsoft Power BI</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-cyan-400 transition-colors">Enterprise SQL</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-cyan-400 transition-colors">AWS Cloud</span>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 02: Animated Interactive Flagship Courses Spotlight */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] border border-cyan-500/25 bg-gradient-to-b from-slate-900/95 via-navy-950/95 to-slate-950/95 shadow-2xl shadow-cyan-950/20 overflow-hidden backdrop-blur-xl">
            {/* Top Block Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-2 border-b border-cyan-500/10 text-[11px] font-mono tracking-widest font-bold uppercase">
              <span className="flex items-center gap-2 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                [ MODULE 01 // INTERACTIVE COURSE SPOTLIGHT ]
              </span>
              <span className="text-slate-400 hidden sm:inline">
                OFFLINE CHENNAI & LIVE ONLINE · 3 MONTHS
              </span>
            </div>

            <HighlightedCourses
              courses={courses as any}
              onOpenDemoModal={(c) => handleOpenDemoModal(c)}
            />
          </div>
        </div>

        {/* BLOCK 03: Why Choose EndowIT Academy (The Practical Method) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] border border-emerald-500/25 bg-gradient-to-b from-slate-900/95 via-navy-950/95 to-slate-950/95 shadow-2xl shadow-emerald-950/20 overflow-hidden backdrop-blur-xl">
            {/* Top Block Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-2 border-b border-emerald-500/10 text-[11px] font-mono tracking-widest font-bold uppercase">
              <span className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                [ MODULE 02 // THE PRACTICAL METHOD ]
              </span>
              <span className="text-slate-400 hidden sm:inline">
                AUTHENTIC TRAINING · NO DUMMY SLIDES
              </span>
            </div>

            <WhyChooseUs />
          </div>
        </div>

        {/* BLOCK 04: All Courses Catalog Grid (Categorized) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] border border-brand-500/25 bg-gradient-to-b from-slate-900/95 via-navy-950/95 to-slate-950/95 shadow-2xl shadow-brand-950/20 overflow-hidden backdrop-blur-xl">
            {/* Top Block Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-2 border-b border-brand-500/10 text-[11px] font-mono tracking-widest font-bold uppercase">
              <span className="flex items-center gap-2 text-brand-400">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                [ MODULE 03 // 3-MONTH JOB-ORIENTED PROGRAMS ]
              </span>
              <span className="text-slate-400 hidden sm:inline">
                ALL COURSES DURATION: STRICTLY 3 MONTHS
              </span>
            </div>

            <CoursesGrid
              courses={courses as any}
              onOpenDemoModal={(c) => handleOpenDemoModal(c)}
            />
          </div>
        </div>

        {/* BLOCK 05: 4-Milestone Practical Learning Roadmap */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] border border-purple-500/25 bg-gradient-to-b from-slate-900/95 via-navy-950/95 to-slate-950/95 p-8 sm:p-12 shadow-2xl shadow-purple-950/20 overflow-hidden backdrop-blur-xl">
            {/* Top Block Header Bar */}
            <div className="flex items-center justify-between pb-8 border-b border-purple-500/10 text-[11px] font-mono tracking-widest font-bold uppercase">
              <span className="flex items-center gap-2 text-purple-400">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                [ MODULE 04 // 4-STEP CAREER ROADMAP ]
              </span>
              <span className="text-slate-400 hidden sm:inline">
                BEGINNER TO EMPLOYABLE IN 3 MONTHS
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto space-y-3 mt-8 mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 text-purple-300 text-xs font-bold border border-purple-800/50">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Structured 3-Month Acceleration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                4 Steps from Beginner to <span className="gradient-text-purple">Job-Ready</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                A transparent, step-by-step practical curriculum built completely around hands-on execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-blue-500/30 relative hover:border-blue-400 transition-all">
                <span className="text-4xl font-extrabold text-blue-500/20 absolute top-4 right-5">
                  01
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-4 shadow-lg shadow-blue-500/30">
                  1
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Hands-on Basics
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Build fundamental concepts with daily lab exercises. No memorizing code—every syntax is implemented hands-on.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/80 border border-cyan-500/30 relative hover:border-cyan-400 transition-all">
                <span className="text-4xl font-extrabold text-cyan-500/20 absolute top-4 right-5">
                  02
                </span>
                <div className="w-10 h-10 rounded-xl bg-accent-cyan text-navy-950 flex items-center justify-center font-bold mb-4 shadow-lg shadow-cyan-500/30">
                  2
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Live Client Projects
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Work on active ad spend budgets, production databases, and live web apps with daily mentor code reviews.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/80 border border-purple-500/30 relative hover:border-purple-400 transition-all">
                <span className="text-4xl font-extrabold text-purple-500/20 absolute top-4 right-5">
                  03
                </span>
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold mb-4 shadow-lg shadow-purple-500/30">
                  3
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Guaranteed Internship
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Complete practical deliverables on real client projects and earn an industry-verifiable experience credential.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/80 border border-emerald-500/30 relative hover:border-emerald-400 transition-all">
                <span className="text-4xl font-extrabold text-emerald-500/20 absolute top-4 right-5">
                  04
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-4 shadow-lg shadow-emerald-500/30">
                  4
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Placement Support
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Personalized ATS resume optimization, portfolio curation, and technical mock screening rounds with senior mentors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 06: Google Business Profile Verified Reviews */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] border border-amber-500/25 bg-gradient-to-b from-slate-900/95 via-navy-950/95 to-slate-950/95 shadow-2xl shadow-amber-950/20 overflow-hidden backdrop-blur-xl">
            {/* Top Block Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-2 border-b border-amber-500/10 text-[11px] font-mono tracking-widest font-bold uppercase">
              <span className="flex items-center gap-2 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                [ MODULE 05 // VERIFIED GOOGLE MY BUSINESS REVIEWS ]
              </span>
              <span className="text-slate-400 hidden sm:inline">
                LIVE RATINGS & FEEDBACK FROM ALUMNI
              </span>
            </div>

            <TestimonialSection />
          </div>
        </div>

        {/* BLOCK 07: Frequently Asked Questions (FAQ) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] border border-blue-500/25 bg-gradient-to-b from-slate-900/95 via-navy-950/95 to-slate-950/95 p-8 sm:p-12 shadow-2xl shadow-blue-950/20 overflow-hidden backdrop-blur-xl">
            {/* Top Block Header Bar */}
            <div className="flex items-center justify-between pb-8 border-b border-blue-500/10 text-[11px] font-mono tracking-widest font-bold uppercase">
              <span className="flex items-center gap-2 text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                [ MODULE 06 // ADMISSIONS FAQ ]
              </span>
              <span className="text-slate-400 hidden sm:inline">
                BATCH SCHEDULES & CURRICULUM QUESTIONS
              </span>
            </div>

            <div className="max-w-4xl mx-auto mt-8">
              <div className="text-center space-y-3 mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-400/30">
                  <HelpCircle className="w-4 h-4 text-cyan-400" />
                  <span>Got Questions?</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-slate-400">
                  Clear answers regarding our 3-month curriculum, split payment options, and practical internship.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          openFaq === idx ? "rotate-180 text-cyan-400" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 08: Bottom Launch CTA Banner Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="relative rounded-[2.5rem] border border-cyan-500/30 bg-gradient-to-r from-brand-950 via-brand-900 to-navy-950 text-white p-8 sm:p-14 shadow-2xl shadow-cyan-950/40 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center space-y-5">
              <div className="flex items-center justify-center gap-2 pb-2 text-[11px] font-mono tracking-widest text-cyan-300 font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>[ MODULE 07 // CHENNAI TECH LAB LAUNCH BATCH ]</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-200 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span>Strictly 3-Month Fast Track · Limited to 15 Seats</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Ready to Build Real Tech Skills in <span className="gradient-text-emerald">3 Months?</span>
              </h2>

              <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
                Work on live client projects, earn a guaranteed practical internship certificate, and get dedicated placement support.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => handleOpenDemoModal()}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-accent-cyan shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Demo Class</span>
                </button>

                <a
                  href="tel:+916379427852"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Call Admissions: +91 63794 27852</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientShell>
  );
}
