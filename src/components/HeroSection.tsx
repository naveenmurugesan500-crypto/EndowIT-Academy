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
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Flame,
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
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-14 overflow-hidden bg-white text-slate-900 border-b border-slate-200/80">
      {/* Background Organic Shapes & Subtle Tech Dot Grid */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Organic Lime/Cyan Blobs */}
        <div className="absolute top-12 right-1/4 w-[520px] h-[520px] bg-gradient-to-br from-emerald-100/40 via-cyan-100/30 to-blue-50/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-emerald-50/50 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-hero-dots opacity-70" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* 3-Column Hero Grid: Left Content, Center 3D Floating Offer Card, Right Student Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* ================= COLUMN 1: Headline, Copy & CTAs (5 Cols) ================= */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left z-20">
            {/* Launch Offer Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200/90 text-xs sm:text-sm font-semibold text-emerald-800 shadow-sm">
              <span className="text-base">🎉</span>
              <span>New Batch Special Launch Offer</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
            </div>

            {/* Eyebrow & Main Headline */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Get Trained. Get Placed.
              </h3>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Celebrate <br />
                New Batch Launch <br />
                <span className="text-emerald-600 block mt-1">
                  Limited Time Offer.
                </span>
              </h1>
              {/* Hand-drawn SVG Curve Underline */}
              <svg
                className="text-emerald-500 my-1 mx-auto lg:mx-0"
                width="145"
                height="22"
                viewBox="0 0 145 26"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 21 Q72 0 140 21"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Master in-demand tech skills with industry-oriented{" "}
              <strong className="text-slate-900 font-semibold">3-Month practical training</strong> and{" "}
              <strong className="text-emerald-600 font-semibold">100% placement support</strong> for a successful IT career.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0b2545] hover:bg-brand-700 shadow-lg shadow-slate-900/15 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 uppercase tracking-wider"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+916379427852"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-[#0b2545] bg-white hover:bg-slate-50 border-2 border-[#0b2545] shadow-sm transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Contact Counselor</span>
              </a>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Practical & Real Client Spends</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
                <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Guaranteed Practical Internship</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
                <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Strictly 10–15 Students / Batch</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Strictly 3-Month Fast-Track</span>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: 3D Floating Offer & Fees Card (3.5 Cols) ================= */}
          <div className="lg:col-span-3 flex justify-center z-20">
            <div className="relative w-full max-w-[320px] rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-300/60 overflow-visible transition-all">
              
              {/* Corner Orange Ribbon */}
              <div className="absolute -top-3 -right-3 z-30 pointer-events-none overflow-hidden w-28 h-28">
                <div className="absolute top-4 right-[-32px] transform rotate-45 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-[10px] uppercase tracking-wider py-1.5 px-8 shadow-md text-center">
                  For All Courses
                </div>
              </div>

              {/* Card Green Top Header Banner */}
              <div className="rounded-t-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white p-4 text-center">
                <div className="flex items-center justify-center gap-2 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
                  <span>New Batch Offer</span>
                </div>
              </div>

              {/* Regular Fees Section with Red Strikethrough */}
              <div className="py-4 px-5 text-center space-y-1">
                <span className="text-xs font-semibold text-slate-500">Regular fees</span>
                <div className="relative inline-block">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    ₹ 25,000
                  </span>
                  {/* Red Strikethrough Line */}
                  <span className="absolute left-[-6px] right-[-6px] top-1/2 h-[3px] bg-rose-500 -translate-y-1/2 transform -rotate-6" />
                </div>
              </div>

              {/* Protruding Popped-out Bright Green Join Box (Elevated & Pulsing) */}
              <div className="mx-[-12px] my-1 p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white text-center shadow-xl shadow-emerald-500/35 border border-emerald-400/40 animate-offer-pulse">
                <span className="text-xs font-semibold text-emerald-100 uppercase tracking-wider block">
                  Join Today
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 flex items-baseline justify-center gap-1">
                  <span>₹ 14,999</span>
                  <span className="text-xs font-semibold text-emerald-100">+GST</span>
                </div>

                <button
                  onClick={onOpenDemoModal}
                  className="w-full mt-3.5 py-2.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm text-white bg-[#5b0f08] hover:bg-[#4a0b06] shadow-md transition-all uppercase tracking-wider"
                >
                  Pay Now To Join
                </button>
              </div>

              {/* Offer Validity and Split Payment Details */}
              <div className="p-4 pt-3 text-center space-y-2 text-xs">
                <div className="flex items-center justify-center gap-1.5 font-bold text-slate-800">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Offer Valid For Next 15 Seats Only</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-[11px] leading-tight">
                  <span>Flexible Split Payment: </span>
                  <strong className="text-emerald-700">₹ 4,999 / Month</strong>
                </div>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3: Student Visual with Floating Glass Badges (3.5 Cols) ================= */}
          <div className="lg:col-span-4 relative flex items-center justify-center lg:justify-end z-10 pt-6 lg:pt-0">
            {/* Student Image Container */}
            <div className="relative w-full max-w-[480px]">
              
              {/* Floating Badge 1: Top Right - Placement Support */}
              <div className="absolute top-4 right-0 sm:-right-4 z-20 animate-badge-float-1">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-xl shadow-slate-900/10 text-left">
                  <div className="p-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-xs font-extrabold text-slate-900">Placement</span>
                    <span className="block text-[11px] font-semibold text-emerald-600">Support</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Middle Right - 3 Months Training */}
              <div className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 z-20 animate-badge-float-2">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-xl shadow-slate-900/10 text-left">
                  <div className="p-1.5 rounded-xl bg-blue-50 border border-blue-200 text-brand-600">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-xs font-extrabold text-slate-900">3 Months</span>
                    <span className="block text-[11px] font-semibold text-brand-600">Training</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Right - 100+ Placed / Trained */}
              <div className="absolute bottom-6 right-2 sm:-right-2 z-20 animate-badge-float-3">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-xl shadow-slate-900/10 text-left">
                  <div className="p-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-xs font-extrabold text-slate-900">100+</span>
                    <span className="block text-[11px] font-semibold text-amber-600">Trained</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges (Left Edge of Student) */}
              <div className="absolute top-10 -left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-blue-200 shadow-md animate-tech-drift-1 z-20">
                <BrandIcons.Meta />
                <span className="text-[11px] font-bold text-slate-800">Meta Ads</span>
              </div>
              <div className="absolute bottom-20 -left-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-amber-200 shadow-md animate-tech-drift-2 z-20">
                <BrandIcons.AWS />
                <span className="text-[11px] font-bold text-slate-800">AWS Cloud</span>
              </div>

              {/* Transparent Student Cutout with Laptop */}
              <div className="relative mx-auto flex items-end justify-center">
                <Image
                  src="/images/student.webp"
                  alt="EndowIT Academy student holding laptop"
                  width={520}
                  height={560}
                  priority
                  className="w-full max-w-[440px] sm:max-w-[480px] h-auto object-contain drop-shadow-2xl"
                />
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
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-400 hover:scale-105 transition-all cursor-pointer whitespace-nowrap shrink-0"
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
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-400 hover:scale-105 transition-all cursor-pointer whitespace-nowrap shrink-0"
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

      {/* ================= FIXED RIGHT SIDE FLOATING SOCIAL & WHATSAPP BAR ================= */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-2 p-2 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/10">
        <a
          href="https://wa.me/916379427852"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition-all"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-pink-500/10 hover:bg-pink-500 text-pink-600 hover:text-white flex items-center justify-center transition-all"
          title="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-blue-500/10 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all"
          title="Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-600 text-red-600 hover:text-white flex items-center justify-center transition-all"
          title="YouTube"
        >
          <Youtube className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-blue-600/10 hover:bg-blue-700 text-blue-700 hover:text-white flex items-center justify-center transition-all"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
