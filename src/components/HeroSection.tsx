"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BrandIcons,
  TECH_STREAM_ROW_1,
  TECH_STREAM_ROW_2,
} from "./TechLogosAnimation";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Award,
  Users,
  Clock,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface HeroSectionProps {
  onOpenDemoModal?: () => void;
}

const ROTATING_COURSES = [
  {
    title: "Digital Marketing & Meta Ads",
    highlight: "Meta & Google Ads · Real Client Budget",
    primaryIcon: "Meta" as const,
    secondaryIcon: "Facebook" as const,
    tertiaryIcon: "Google" as const,
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    gradient: "from-blue-600 via-indigo-600 to-cyan-600",
    offer: "Live Client ₹10,000+ Ad Budget Practice Included",
  },
  {
    title: "Full Stack Web Development",
    highlight: "React 19, Next.js, Node & MongoDB",
    primaryIcon: "React" as const,
    secondaryIcon: "Node" as const,
    tertiaryIcon: "Docker" as const,
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    offer: "Build & Deploy 5 Production SaaS Applications",
  },
  {
    title: "Data Analytics & Power BI",
    highlight: "Advanced SQL, Power BI & Tableau",
    primaryIcon: "PowerBI" as const,
    secondaryIcon: "Tableau" as const,
    tertiaryIcon: "Python" as const,
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
    gradient: "from-amber-600 via-orange-600 to-yellow-600",
    offer: "Build 10+ Real-Time Enterprise Dashboards",
  },
  {
    title: "Data Science & Artificial Intelligence",
    highlight: "Python 3.12, ML Models & GenAI Prompts",
    primaryIcon: "Python" as const,
    secondaryIcon: "OpenAI" as const,
    tertiaryIcon: "PowerBI" as const,
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    gradient: "from-purple-600 via-indigo-600 to-pink-600",
    offer: "Hands-on Predictive Models & LLM Prompts",
  },
  {
    title: "AWS Cloud & DevOps Engineering",
    highlight: "AWS Solutions, Docker & CI/CD Pipelines",
    primaryIcon: "AWS" as const,
    secondaryIcon: "Docker" as const,
    tertiaryIcon: "Node" as const,
    badgeBg: "bg-orange-50 text-orange-800 border-orange-200",
    gradient: "from-orange-600 via-amber-600 to-red-600",
    offer: "Live Cloud Architecture & Zero-Downtime Deployments",
  },
  {
    title: "Software Testing & QA Automation",
    highlight: "Selenium WebDriver, Postman API & Cypress",
    primaryIcon: "Selenium" as const,
    secondaryIcon: "Google" as const,
    tertiaryIcon: "Node" as const,
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    offer: "End-to-End Automated CI/CD Testing Frameworks",
  },
];

export default function HeroSection({ onOpenDemoModal }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quickPhone, setQuickPhone] = useState("");
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  // Automatically cycle through courses every 2.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_COURSES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const active = ROTATING_COURSES[currentIndex];
  const PrimaryIcon = BrandIcons[active.primaryIcon];
  const SecondaryIcon = BrandIcons[active.secondaryIcon];
  const TertiaryIcon = BrandIcons[active.tertiaryIcon];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone) return;
    setQuickSubmitted(true);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50/90 to-blue-50/25 border-b border-slate-200/70 text-slate-900">
      {/* Soft Ambient Background Light Glows */}
      <div className="absolute -top-16 left-1/4 w-[500px] h-[500px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Popping Animated Tech Badges, and Core Pillars */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Interactive Animated Offer Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs sm:text-sm font-semibold text-slate-800 transition-all">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 -ml-4" />
              <span className="text-slate-500 font-medium">Batch Alert:</span>
              <span className="text-brand-700 font-bold">
                100+ Trained Online · Next Offline Batch Monday
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-bounce" />
            </div>

            {/* Main H1 Headline with Crisp High-Contrast Typography */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
                Learn Real Tech By{" "}
                <span className="bg-gradient-to-r from-brand-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent block sm:inline">
                  Doing Real Work.
                </span>
              </h1>

              {/* Dynamic Animated Pop-up Course & Logos Showcase Card */}
              <div
                key={currentIndex}
                className="animate-text-pop inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/95 shadow-md shadow-slate-200/70 text-left transition-all max-w-xl"
              >
                {/* 3 Real Animated Brand Logos associated with current course */}
                <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-50 border border-slate-200/80 shrink-0">
                  <div className="p-1 rounded-lg bg-white shadow-xs">
                    <PrimaryIcon />
                  </div>
                  <div className="p-1 rounded-lg bg-white shadow-xs">
                    <SecondaryIcon />
                  </div>
                  <div className="p-1 rounded-lg bg-white shadow-xs">
                    <TertiaryIcon />
                  </div>
                </div>

                <div className="leading-tight">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                      {active.title}
                    </span>
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${active.badgeBg}`}
                    >
                      Strictly 3 Months
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-brand-600 flex items-center gap-1.5 mt-1">
                    <TrendingUp className="w-3 h-3 text-brand-600 shrink-0" />
                    {active.offer}
                  </span>
                </div>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Industry-standard <strong className="text-slate-900 font-semibold">3-Month Job Programs</strong> in{" "}
              <strong>Digital Marketing, Full Stack MERN, Data Analytics, and Cloud</strong>. We don&apos;t just teach slides—you manage live client budgets, write production code, and earn a{" "}
              <strong className="text-brand-700 font-semibold">guaranteed practical internship certificate</strong>.
            </p>

            {/* Core Pillars (Clean White Interactive Cards with Subtle Hover Elevation) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-semibold text-slate-700 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/95 border border-slate-200 shadow-sm text-left hover:border-blue-400 hover:shadow-md transition-all">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Real Live Client Ad Spends & Production Apps</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/95 border border-slate-200 shadow-sm text-left hover:border-amber-400 hover:shadow-md transition-all">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Guaranteed Practical Internship Certificate</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/95 border border-slate-200 shadow-sm text-left hover:border-emerald-400 hover:shadow-md transition-all">
                <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Strictly 10–15 Students Max / Batch</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/95 border border-slate-200 shadow-sm text-left hover:border-cyan-400 hover:shadow-md transition-all">
                <Clock className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Strictly 3-Month Fast-Track Curriculums</span>
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

          {/* Right Column: Counseling Card with 4 Anchored Floating Tech Satellites */}
          <div className="lg:col-span-5 relative">
            {/* Anchored Floating Satellites (Positioned strictly relative to this card - zero headline overlap) */}
            {/* Satellite 1: Meta Ads (Top Left) */}
            <div className="absolute -top-4 -left-3 sm:-left-5 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-blue-200/90 shadow-md shadow-blue-500/10 z-20 animate-tech-drift-1">
              <BrandIcons.Meta />
              <div className="leading-none text-left">
                <span className="block text-[11px] font-bold text-slate-900">Meta Ads</span>
                <span className="block text-[9px] font-semibold text-blue-600">Digital Marketing</span>
              </div>
            </div>

            {/* Satellite 2: AWS Cloud (Top Right) */}
            <div className="absolute -top-4 -right-2 sm:-right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-amber-200/90 shadow-md shadow-amber-500/10 z-20 animate-tech-drift-2">
              <BrandIcons.AWS />
              <div className="leading-none text-left">
                <span className="block text-[11px] font-bold text-slate-900">AWS Cloud</span>
                <span className="block text-[9px] font-semibold text-amber-700">DevOps</span>
              </div>
            </div>

            {/* Satellite 3: Power BI (Bottom Left) */}
            <div className="absolute -bottom-4 -left-3 sm:-left-5 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-yellow-200/90 shadow-md shadow-yellow-500/10 z-20 animate-tech-drift-3">
              <BrandIcons.PowerBI />
              <div className="leading-none text-left">
                <span className="block text-[11px] font-bold text-slate-900">Power BI</span>
                <span className="block text-[9px] font-semibold text-amber-700">Analytics</span>
              </div>
            </div>

            {/* Satellite 4: React 19 (Bottom Right) */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-cyan-200/90 shadow-md shadow-cyan-500/10 z-20 animate-tech-drift-4">
              <BrandIcons.React />
              <div className="leading-none text-left">
                <span className="block text-[11px] font-bold text-slate-900">React 19</span>
                <span className="block text-[9px] font-semibold text-cyan-600">Full Stack</span>
              </div>
            </div>

            {/* Main Counseling Card */}
            <div className="relative rounded-3xl bg-white/95 border border-slate-200/90 p-6 sm:p-7 shadow-xl shadow-slate-200/60 backdrop-blur-md z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-brand-600 tracking-wider uppercase">
                  Batch Admissions Open
                </span>
                <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-[11px] uppercase tracking-wider">
                  Max 15 Seats
                </div>
              </div>

              <div className="space-y-4 pt-1">
                <div className="space-y-1">
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
                      Our senior mentor will call you at <strong>{quickPhone}</strong> shortly.
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

        {/* Continuous Dual-Direction Live Tech Streams ("அங்கேயும் இங்கேயும் போயிட்டு இருக்க மாதிரி") */}
        <div className="mt-10 pt-6 border-t border-slate-200/70 overflow-hidden space-y-3">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              Live Tech Stacks You Master In 3 Months (Hover to Pause)
            </span>
            <span className="text-[11px] font-semibold text-brand-700 hidden sm:inline-block">
              100% Practical & Live Client Spends
            </span>
          </div>

          {/* Stream Track 1: Moving Smoothly Left (Digital Marketing, AI & Data) */}
          <div className="relative overflow-hidden w-full py-1">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-scroll flex items-center gap-3">
              {[...TECH_STREAM_ROW_1, ...TECH_STREAM_ROW_1, ...TECH_STREAM_ROW_1].map((tech, idx) => {
                const Icon = BrandIcons[tech.icon as keyof typeof BrandIcons];
                return (
                  <div
                    key={`stream1-${tech.name}-${idx}`}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 hover:scale-105 transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <div className="p-1 rounded-lg bg-slate-50 border border-slate-100">
                      <Icon />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-slate-800">
                        {tech.name}
                      </span>
                      <span className="block text-[10px] font-semibold text-blue-600">
                        {tech.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stream Track 2: Moving Smoothly Right in Opposite Direction (Full Stack, Cloud & Automation QA) */}
          <div className="relative overflow-hidden w-full py-1">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-scroll-reverse flex items-center gap-3">
              {[...TECH_STREAM_ROW_2, ...TECH_STREAM_ROW_2, ...TECH_STREAM_ROW_2].map((tech, idx) => {
                const Icon = BrandIcons[tech.icon as keyof typeof BrandIcons];
                return (
                  <div
                    key={`stream2-${tech.name}-${idx}`}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-cyan-400 hover:scale-105 transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <div className="p-1 rounded-lg bg-slate-50 border border-slate-100">
                      <Icon />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-slate-800">
                        {tech.name}
                      </span>
                      <span className="block text-[10px] font-semibold text-cyan-700">
                        {tech.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
