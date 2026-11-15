"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  ShieldCheck,
  Calendar,
  GraduationCap,
  Flame,
  Zap,
  TrendingUp,
} from "lucide-react";

interface HeroSectionProps {
  onOpenDemoModal?: () => void;
}

export default function HeroSection({ onOpenDemoModal }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-14 overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-blue-50/20 text-slate-900 border-b border-slate-200/80">
      {/* Background Soft Ambient Tech Lighting & Grid */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-10 left-1/3 w-[550px] h-[550px] bg-gradient-to-br from-blue-100/40 via-cyan-100/30 to-emerald-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[480px] h-[480px] bg-gradient-to-tr from-cyan-100/30 via-emerald-100/30 to-amber-100/20 rounded-full blur-3xl" />
        <div className="absolute top-24 right-1/4 w-[320px] h-[320px] bg-hero-dots opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Modern 2-Column Asymmetrical Grid: 7 Cols Left (Content & Pricing), 5 Cols Right (Integrated Visual Stage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================= COLUMN 1: Headline, Pricing Spotlight & Actions (7 Cols) ================= */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-20">
            
            {/* Top Interactive Banner: Grand Opening Callout */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <Link
                href="/opening-offer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white text-xs sm:text-sm font-extrabold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <Flame className="w-3.5 h-3.5 text-amber-200 animate-bounce" />
                <span>Grand Opening Offer: First 20 Students Flat ₹5,000 Only!</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Strictly 10–15 Seats / Batch</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold text-brand-700 tracking-wider uppercase block">
                Practical IT & Digital Marketing Training · Chennai
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Learn Tech By{" "}
                <span className="bg-gradient-to-r from-brand-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Building Real Projects.
                </span>
                <span className="block text-emerald-600 text-3xl sm:text-4xl xl:text-5xl font-extrabold mt-1">
                  New Batches Starting Monday.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Skip boring theory and 500-page slide decks. Spend <strong>3 months</strong> running live ad campaigns with real budgets, building web apps that actually get deployed, and learning the exact tools companies hire for. Includes micro-batches of 10–15 students, a <strong className="text-emerald-700 font-semibold">guaranteed practical internship</strong>, and one-on-one interview preparation.
            </p>

            {/* Integrated Dual Pricing Spotlight Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto lg:mx-0 pt-1">
              {/* Grand Opening Special Pill */}
              <Link
                href="/opening-offer"
                className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/80 border-2 border-emerald-400/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-left block group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded-md">
                    Grand Opening Special
                  </span>
                  <span className="text-[10px] font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    Only 6 Seats Left
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-900">
                    ₹ 5,000
                  </span>
                  <span className="text-xs font-bold text-emerald-700">All-Inclusive</span>
                </div>
                <p className="text-[11px] text-emerald-800 font-medium mt-1 leading-tight flex items-center justify-between">
                  <span>First 20 Students · Zero Extra Rupee Afterward</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-700 group-hover:translate-x-1 transition-transform shrink-0" />
                </p>
              </Link>

              {/* Standard Launch Fee Pill */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      For All Courses
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">
                      Standard Launch Fee
                    </span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      ₹ 14,999
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ₹ 25,000
                    </span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100 mt-2 text-[11px] text-slate-500 font-medium flex items-center justify-between">
                  <span>Split Payment:</span>
                  <strong className="text-slate-800 font-bold">₹ 4,999 / Month</strong>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4" />
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+916379427852"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Contact Counselor</span>
              </a>

              <Link
                href="#courses"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-600 hover:text-brand-600 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View All 6 Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Practical & Real Client Spends</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700">
                <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Guaranteed Practical Internship</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700">
                <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Strictly 10–15 Students / Batch</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Strictly 3-Month Fast-Track</span>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: Integrated Modern Hero Visual Stage (5 Cols) ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center z-10 pt-6 lg:pt-0">
            {/* Outer Stage Frame with Glowing Backdrop Ring */}
            <div className="relative w-full max-w-[460px]">
              
              {/* Concentric Glow Portal */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 via-cyan-400/25 to-emerald-400/20 rounded-full blur-2xl transform scale-95" />

              {/* Floating Badge 1: Top-Left - Grand Opening Flat 5k */}
              <div className="absolute top-2 -left-2 sm:-left-6 z-20 animate-badge-float-1">
                <Link
                  href="/opening-offer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-300 shadow-xl shadow-amber-500/10 text-left hover:scale-105 transition-all"
                >
                  <div className="p-1.5 rounded-xl bg-amber-500 text-white">
                    <Flame className="w-4 h-4 animate-bounce" />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-[10px] font-black uppercase text-amber-700 tracking-wider">
                      Grand Opening
                    </span>
                    <span className="block text-xs font-extrabold text-slate-900">
                      Flat ₹ 5,000 Only
                    </span>
                  </div>
                </Link>
              </div>

              {/* Floating Badge 2: Top-Right - Placement Support */}
              <div className="absolute top-8 -right-2 sm:-right-4 z-20 animate-badge-float-2">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl shadow-slate-900/10 text-left">
                  <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-xs font-extrabold text-slate-900">Placement</span>
                    <span className="block text-[11px] font-semibold text-emerald-600">Support</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Mid-Left - 3 Months Training */}
              <div className="absolute top-1/2 -left-3 sm:-left-8 -translate-y-1/2 z-20 animate-badge-float-3">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-200 shadow-xl shadow-slate-900/10 text-left">
                  <div className="p-1.5 rounded-xl bg-blue-50 border border-blue-200 text-brand-600">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-xs font-extrabold text-slate-900">3 Months</span>
                    <span className="block text-[11px] font-semibold text-brand-600">Training</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 4: Bottom-Right - 100+ Trained */}
              <div className="absolute bottom-12 -right-2 sm:-right-4 z-20 animate-badge-float-1">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-200 shadow-xl shadow-slate-900/10 text-left">
                  <div className="p-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-600">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-xs font-extrabold text-slate-900">100+</span>
                    <span className="block text-[11px] font-semibold text-amber-600">Trained</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Chips (Meta, AWS, React, Python) */}
              <div className="absolute top-28 -right-6 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/90 border border-blue-200 shadow-md animate-tech-drift-1 z-20">
                <BrandIcons.Meta />
                <span className="text-[10px] font-bold text-slate-800">Meta Ads</span>
              </div>
              <div className="absolute bottom-24 -left-4 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/90 border border-amber-200 shadow-md animate-tech-drift-2 z-20">
                <BrandIcons.AWS />
                <span className="text-[10px] font-bold text-slate-800">AWS Cloud</span>
              </div>

              {/* Central Student Portrait Cutout with Laptop */}
              <div className="relative mx-auto flex items-end justify-center">
                <Image
                  src="/images/student.webp"
                  alt="EndowIT Academy student holding laptop"
                  width={500}
                  height={540}
                  priority
                  className="w-full max-w-[400px] sm:max-w-[440px] h-auto object-contain drop-shadow-2xl relative z-10"
                />

                {/* Sleek EndowIT Academy Branded Laptop Lid Badge (replaces third-party logo) */}
                <div
                  className="absolute top-[81.2%] left-[47.2%] -translate-x-1/2 -translate-y-1/2 z-20 w-[78px] h-[78px] rounded-full bg-gradient-to-br from-[#0b2545] via-[#134074] to-[#0b2545] border-2 border-slate-700/80 shadow-2xl flex flex-col items-center justify-center pointer-events-none select-none"
                  title="EndowIT Academy"
                >
                  <span className="text-[12px] font-black tracking-tight text-white uppercase leading-none">EIT</span>
                  <span className="text-[7.5px] font-bold text-emerald-300 uppercase tracking-widest mt-1">ACADEMY</span>
                </div>
              </div>

              {/* Bottom Integrated CTA Banner under Student */}
              <div className="relative -mt-6 z-20 mx-2 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl flex items-center justify-between gap-3">
                <div className="leading-tight text-left">
                  <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Next Batch Monday
                  </span>
                  <span className="block text-xs font-extrabold text-slate-900">
                    For All Courses: <strong className="text-emerald-700">₹ 14,999</strong>
                  </span>
                </div>
                <button
                  onClick={onOpenDemoModal}
                  className="px-4 py-2 rounded-xl bg-[#0b2545] hover:bg-brand-700 text-white font-bold text-xs shadow-md transition-all uppercase tracking-wider shrink-0"
                >
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DUAL-DIRECTION CONTINUOUS TECH STREAM ================= */}
        <div className="mt-12 pt-6 border-t border-slate-200/70 overflow-hidden space-y-2.5">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Live Technologies & Tools You Master In 3 Months (Hover to Pause)
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 hidden sm:inline-block">
              100% Practical & Real Client Spends
            </span>
          </div>

          {/* Track 1: Moving Smoothly Left (Marketing, Data & AI) */}
          <div className="relative overflow-hidden w-full py-0.5">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-scroll flex items-center gap-3">
              {[...TECH_STREAM_ROW_1, ...TECH_STREAM_ROW_1, ...TECH_STREAM_ROW_1].map((tech, idx) => {
                const Icon = BrandIcons[tech.icon as keyof typeof BrandIcons];
                return (
                  <div
                    key={`stream1-${tech.name}-${idx}`}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-400 hover:scale-105 transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <div className="p-1 rounded-lg bg-slate-50 border border-slate-100">
                      <Icon />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-slate-800">
                        {tech.name}
                      </span>
                      <span className="block text-[10px] font-semibold text-emerald-600">
                        {tech.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Track 2: Moving Smoothly Right in Opposite Direction (Full Stack, Cloud & QA) */}
          <div className="relative overflow-hidden w-full py-0.5">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-scroll-reverse flex items-center gap-3">
              {[...TECH_STREAM_ROW_2, ...TECH_STREAM_ROW_2, ...TECH_STREAM_ROW_2].map((tech, idx) => {
                const Icon = BrandIcons[tech.icon as keyof typeof BrandIcons];
                return (
                  <div
                    key={`stream2-${tech.name}-${idx}`}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400 hover:scale-105 transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <div className="p-1 rounded-lg bg-slate-50 border border-slate-100">
                      <Icon />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="block text-xs font-bold text-slate-800">
                        {tech.name}
                      </span>
                      <span className="block text-[10px] font-semibold text-brand-600">
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
