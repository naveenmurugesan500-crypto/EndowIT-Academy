"use client";

import React, { useState } from "react";
import Link from "next/link";
import ClientShell from "@/components/ClientShell";
import HeroSection from "@/components/HeroSection";
import HighlightedCourses from "@/components/HighlightedCourses";
import CoursesGrid from "@/components/CoursesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialSection";
import LeadModal from "@/components/LeadModal";
import defaultCourses from "@/data/courses.json";
import {
  Sparkles,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Layers,
  Award,
  Laptop,
  Briefcase,
  Clock,
  ShieldCheck,
  Zap,
  Target,
  BarChart3,
  Calendar,
  Code2,
  Rocket,
  Users,
} from "lucide-react";

export default function HomePage() {
  const [courses] = useState(defaultCourses);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeRoadmapMonth, setActiveRoadmapMonth] = useState<1 | 2 | 3>(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState<string | undefined>(undefined);

  const handleOpenDemoModal = (courseName?: string) => {
    setModalCourse(courseName);
    setIsModalOpen(true);
  };

  const roadmapData = {
    1: {
      badge: "Month 1 · Foundations",
      title: "Daily Lab Drills & Core Architecture",
      subtitle: "Zero memorization. Build strong practical muscle with real daily coding and campaign setups.",
      deliverables: [
        "Daily hands-on lab exercises reviewed directly by senior trainers",
        "Setting up enterprise development & ad account environments",
        "Understanding real architecture (MERN stack / Meta Business Suite / Power BI DAX)",
        "Building first working prototype module within week 2",
      ],
      tools: ["Git & GitHub", "HTML5 & Modern CSS", "Meta Ads Manager", "SQL Workbench", "Figma to Code"],
      stats: "24+ Lab Hours / Week",
    },
    2: {
      badge: "Month 2 · Live Client Projects",
      title: "Work with Real Ad Budgets & Production Code",
      subtitle: "Execute actual client deliverables. Deploy live web apps and spend real client advertising budgets.",
      deliverables: [
        "Managing live Meta & Google Ad campaigns with real ad spend",
        "Writing scalable REST APIs and connecting with cloud MongoDB",
        "Building interactive business analytics dashboards with live data",
        "Continuous code review, debugging live production errors & optimization",
      ],
      tools: ["Google Ads & GA4", "React & Next.js", "Node.js & Express", "AWS S3 & EC2", "Power BI Service"],
      stats: "Live Client Budgets & Deployments",
    },
    3: {
      badge: "Month 3 · Internship & Placement",
      title: "Verified Internship & 1-on-1 Interview Preparation",
      subtitle: "Graduate with proof of work, verifiable dual credentials, and mock-cleared interview readiness.",
      deliverables: [
        "Earn a verifiable 3-Month Practical Internship Certificate (EIT-INT-2026-XXXX)",
        "Publish your project portfolio on GitHub and live custom domain",
        "Personalized ATS-friendly resume tailoring and LinkedIn optimization",
        "1-on-1 technical mock interviews with senior industry specialists",
      ],
      tools: ["ATS Resume Builder", "LinkedIn Recruiter Prep", "System Design Basics", "Mock Interviews"],
      stats: "100% Placement Support",
    },
  };

  const comparisonRows = [
    {
      feature: "Practical Project Scope",
      traditional: "Toy PPT slides & copy-paste tutorial code",
      endowit: "Live client ad budgets & deployed full-stack cloud apps",
      highlight: true,
    },
    {
      feature: "Batch Capacity",
      traditional: "60 to 120 students in crowded halls",
      endowit: "Strictly 10–15 students micro-batches for 1-on-1 guidance",
      highlight: true,
    },
    {
      feature: "Work Experience Credential",
      traditional: "Generic course completion certificate only",
      endowit: "Dual Certifications: Course Completion + 3-Month Practical Internship",
      highlight: true,
    },
    {
      feature: "Live Ad Spend / Cloud Access",
      traditional: "Screenshots and theoretical simulations",
      endowit: "Real Meta/Google ad spend budgets & live AWS cloud infrastructure",
      highlight: true,
    },
    {
      feature: "Placement & Interview Support",
      traditional: "Emailing resumes to generic job portals",
      endowit: "1-on-1 technical mock screenings, portfolio curation & recruiter outreach",
      highlight: false,
    },
    {
      feature: "Pricing Transparency",
      traditional: "₹40,000 to ₹75,000 + hidden exam fees",
      endowit: "Opening Offer: Flat ₹5,000 (Standard: ₹14,999) with zero hidden fees",
      highlight: true,
    },
  ];

  const faqs = [
    {
      q: "Why is EndowIT Academy rated among the best software training institutes near me in Chennai?",
      a: "Unlike institutes that teach theoretical slides, EndowIT Academy focuses on pure practical training. You run live Google and Meta ad spend campaigns, deploy full stack web applications to live cloud servers, and work on real client projects with micro-batches of 10–15 students.",
    },
    {
      q: "What makes your digital marketing course and full stack developer course with placement unique?",
      a: "Our digital marketing course provides real client ad spend budgets, while our full stack developer course and data analytics course involve building production SaaS apps and BI dashboards. All courses include dedicated placement screening, mock technical interviews, and guaranteed 3-month internships.",
    },
    {
      q: "What does the Guaranteed Practical Internship Certificate include?",
      a: "Every student works directly on live client projects. Upon completing their real-world project deliverables, students receive a verified 3-Month Practical Internship Certificate with a unique QR code that HR recruiters can verify 24/7 on our public portal.",
    },
    {
      q: "What are your IT course fees and Grand Opening Offer details?",
      a: "Under our limited Grand Opening Offer, the first 20 students can enroll in any 3-month course for just flat ₹5,000 all-inclusive (standard launch fee: ₹14,999). Easy 2-part split payment options of ₹4,999/month are also available.",
    },
    {
      q: "Who can enroll in these IT & software courses?",
      a: "Our programs are designed for freshers, college students, career switchers, and non-IT graduates (B.Com, B.A, B.Sc, Engineering) looking to enter high-paying tech careers with zero previous coding barrier.",
    },
    {
      q: "Can I attend a free demo class before enrolling?",
      a: "Yes! You can attend a 100% free 1-on-1 counseling and practical demo class at our Chennai tech lab or interactively online before enrolling. WhatsApp +91 63794 27852 to reserve your seat.",
    },
  ];

  return (
    <ClientShell>
      {/* 1. Hero Section (Light Theme + Verified Visuals & Pricing Spotlight) */}
      <HeroSection onOpenDemoModal={() => handleOpenDemoModal()} />

      {/* Main Body - Unified High-End Light Theme */}
      <div className="bg-gradient-to-b from-white via-slate-50/70 to-white text-slate-900 py-8 space-y-12 sm:space-y-16">
        
        {/* BLOCK 01: Platform & Industry Tools Strip */}
        <div className="max-w-[96%] xl:max-w-[94%] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="rounded-3xl bg-white/95 border border-slate-200/90 p-4 sm:p-5 shadow-sm backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-600">
              <span className="text-slate-900 font-bold flex items-center gap-2 uppercase tracking-wider text-[11px]">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span className="text-brand-700">Tools You Work With:</span>
              </span>
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-slate-700">
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 transition-colors">Meta Ads Manager</span>
                <span className="text-slate-300">•</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 transition-colors">Google Ads & GA4</span>
                <span className="text-slate-300">•</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 transition-colors">React 19 & Next.js 14</span>
                <span className="text-slate-300">•</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 transition-colors">Node.js & MongoDB</span>
                <span className="text-slate-300">•</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 transition-colors">Microsoft Power BI</span>
                <span className="text-slate-300">•</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 transition-colors">Enterprise SQL</span>
                <span className="text-slate-300">•</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 transition-colors">AWS Cloud</span>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 02: Animated Interactive Flagship Courses Spotlight */}
        <div className="max-w-[96%] xl:max-w-[94%] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative rounded-[2.5rem] border border-cyan-200/80 bg-gradient-to-b from-white via-cyan-50/20 to-white shadow-xl shadow-cyan-500/5 overflow-hidden">
            {/* Top Block Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-2 border-b border-cyan-100 text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2 text-cyan-800">
                <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
                Featured Programs · 3 Months Live Training
              </span>
              <span className="text-slate-500 hidden sm:inline text-xs font-medium">
                Chennai Tech Lab & Live Online
              </span>
            </div>

            <HighlightedCourses
              courses={courses as any}
              onOpenDemoModal={(c) => handleOpenDemoModal(c)}
            />
          </div>
        </div>

        {/* BLOCK 03: Why Choose EndowIT Academy (The Practical Method) */}
        <div className="max-w-[96%] xl:max-w-[94%] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative rounded-[2.5rem] border border-emerald-200/80 bg-gradient-to-b from-white via-emerald-50/20 to-white shadow-xl shadow-emerald-500/5 overflow-hidden">
            {/* Top Block Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-2 border-b border-emerald-100 text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2 text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                Our Training Approach · Hands-on Learning
              </span>
              <span className="text-slate-500 hidden sm:inline text-xs font-medium">
                Live Projects & Real Ad Budgets
              </span>
            </div>

            <WhyChooseUs />
          </div>
        </div>

        {/* BLOCK 04: Interactive 3-Month Curriculum Timeline Stepper (NEW VISUAL WIDGET) */}
        <div className="max-w-[96%] xl:max-w-[94%] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative rounded-[2.5rem] border border-indigo-200/80 bg-gradient-to-b from-white via-indigo-50/20 to-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-indigo-500/5 overflow-hidden">
            <div className="flex items-center justify-between pb-6 border-b border-indigo-100 text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2 text-indigo-800">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                Interactive Curriculum Roadmap · 3 Months Stepper
              </span>
              <span className="text-slate-500 hidden sm:inline text-xs font-medium">
                Click Months to Explore Weekly Milestones
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto space-y-2.5 mt-6 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold border border-indigo-200">
                <Calendar className="w-4 h-4 text-indigo-600" />
                <span>Month-by-Month Progression</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                How You Build Job-Ready Skills in <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">90 Days</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Every month has concrete, practical deliverables. No theoretical essays—only real code, live ad campaigns, and actual client output.
              </p>
            </div>

            {/* Stepper Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
              {[1, 2, 3].map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveRoadmapMonth(m as 1 | 2 | 3)}
                  className={`py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2.5 border ${
                    activeRoadmapMonth === m
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/25 scale-[1.02]"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                    activeRoadmapMonth === m ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
                  }`}>
                    {m}
                  </span>
                  <span>Month 0{m}</span>
                </button>
              ))}
            </div>

            {/* Active Month Interactive Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200">
                    {roadmapData[activeRoadmapMonth].badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                    {roadmapData[activeRoadmapMonth].title}
                  </h3>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                  ⚡ {roadmapData[activeRoadmapMonth].stats}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-4 mb-6 leading-relaxed">
                {roadmapData[activeRoadmapMonth].subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Core Practical Deliverables:
                  </span>
                  {roadmapData[activeRoadmapMonth].deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Key Tools Practiced Hands-on:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {roadmapData[activeRoadmapMonth].tools.map((tool) => (
                      <span key={tool} className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white text-slate-800 border border-slate-200 shadow-sm">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => handleOpenDemoModal(`Month ${activeRoadmapMonth} Trial Demo`)}
                      className="w-full py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Attend Free Trial Session For This Stage</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 05: All Courses Catalog Grid (Categorized) */}
        <div className="max-w-[96%] xl:max-w-[94%] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative rounded-[2.5rem] border border-blue-200/80 bg-gradient-to-b from-white via-blue-50/20 to-white shadow-xl shadow-blue-500/5 overflow-hidden">
            {/* Top Block Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-2 border-b border-blue-100 text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2 text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Complete Course Catalog · All 6 Tracks
              </span>
              <span className="text-slate-500 hidden sm:inline text-xs font-medium">
                Standard Fee: ₹ 14,999 · Opening Offer: ₹ 5,000
              </span>
            </div>

            <CoursesGrid
              courses={courses as any}
              onOpenDemoModal={(c) => handleOpenDemoModal(c)}
            />
          </div>
        </div>

        {/* BLOCK 06: Practical Comparison Table (NEW INTERACTIVE VISUAL WIDGET) */}
        <div className="max-w-[96%] xl:max-w-[94%] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative rounded-[2.5rem] border border-teal-200/80 bg-gradient-to-b from-white via-teal-50/20 to-white p-6 sm:p-10 shadow-xl shadow-teal-500/5 overflow-hidden">
            <div className="flex items-center justify-between pb-6 border-b border-teal-100 text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2 text-teal-800">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                Training Comparison · Why EndowIT Stands Apart
              </span>
              <span className="text-slate-500 hidden sm:inline text-xs font-medium">
                Pure Practical vs Theoretical Training
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto space-y-2.5 mt-6 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200">
                <Target className="w-4 h-4 text-teal-600" />
                <span>The Honest Comparison</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Traditional Theory Institutes <span className="text-slate-400">vs</span>{" "}
                <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-green-600 bg-clip-text text-transparent">EndowIT Tech Lab</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                See exactly how our 3-month practical immersion model delivers real career outcomes compared to typical rote-learning centers.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 sm:p-5 font-bold text-slate-800 w-1/3">Feature / Deliverable</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-500 w-1/3">Typical Theory Institutes</th>
                    <th className="p-4 sm:p-5 font-bold text-emerald-800 bg-emerald-50/70 w-1/3">EndowIT Academy Practical Lab</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className={row.highlight ? "bg-slate-50/30 hover:bg-slate-50" : "hover:bg-slate-50"}>
                      <td className="p-4 sm:p-5 font-bold text-slate-900">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-500">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-800 bg-emerald-50/40 font-medium">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.endowit}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => handleOpenDemoModal()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-500/20 transition-all hover:scale-105"
              >
                <Sparkles className="w-4 h-4" />
                <span>Experience the Difference · Book Free Demo Class</span>
              </button>
            </div>
          </div>
        </div>

        {/* BLOCK 07: Google Business Profile Verified Reviews */}
        <div className="max-w-[96%] xl:max-w-[94%] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative rounded-[2.5rem] border border-amber-200/80 bg-gradient-to-b from-white via-amber-50/20 to-white shadow-xl shadow-amber-500/5 overflow-hidden">
            {/* Top Block Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-2 border-b border-amber-100 text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2 text-amber-800">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Verified Student Feedback · Real Google Reviews
              </span>
              <span className="text-slate-500 hidden sm:inline text-xs font-medium">
                4.9 / 5 Rating from 100+ Trainees
              </span>
            </div>

            <TestimonialSection />
          </div>
        </div>

        {/* BLOCK 08: Frequently Asked Questions (FAQ) */}
        <div className="max-w-[96%] xl:max-w-[94%] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative rounded-[2.5rem] border border-blue-200/80 bg-gradient-to-b from-white via-slate-50/60 to-white p-6 sm:p-10 shadow-xl shadow-blue-500/5 overflow-hidden">
            {/* Top Block Header Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-200 text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2 text-brand-700">
                <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
                Frequently Asked Questions
              </span>
              <span className="text-slate-500 hidden sm:inline text-xs font-medium">
                Batch Schedules & Practical Internship Details
              </span>
            </div>

            <div className="max-w-4xl mx-auto mt-6">
              <div className="text-center space-y-2 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold border border-brand-200">
                  <HelpCircle className="w-4 h-4 text-brand-600" />
                  <span>Got Questions?</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Common Questions & Honest Answers
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Clear details about our 3-month practical curriculum, split payment options, and the verified internship certificate.
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200 hover:border-slate-300 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-brand-600 transition-colors"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          openFaq === idx ? "rotate-180 text-brand-600" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 sm:px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 09: Bottom Launch CTA Banner Block */}
        <div className="max-w-[96%] xl:max-w-[94%] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6 pb-4">
          <div className="relative rounded-[2.5rem] border border-brand-300 bg-gradient-to-r from-brand-700 via-blue-600 to-cyan-600 text-white p-6 sm:p-10 shadow-2xl shadow-brand-600/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-md border border-white/20">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Next Batches Starting Monday · Strictly 10–15 Seats</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Build Real Tech Skills in <span className="underline decoration-amber-300 decoration-wavy">3 Months?</span>
              </h2>

              <p className="text-white/90 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
                Work on live client projects, earn a guaranteed practical internship certificate, and get dedicated placement support.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => handleOpenDemoModal()}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-brand-900 bg-white hover:bg-amber-50 shadow-xl shadow-brand-900/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-brand-700" />
                  <span>Book Free Demo Class</span>
                </button>

                <a
                  href="tel:+916379427852"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Call Admissions: +91 63794 27852</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LEAD MODAL: Connected to every demo & enrollment button across page */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse={modalCourse}
      />
    </ClientShell>
  );
}
