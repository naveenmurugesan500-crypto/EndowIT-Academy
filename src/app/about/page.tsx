"use client";

import React, { useState } from "react";
import Link from "next/link";
import ClientShell from "@/components/ClientShell";
import LeadModal from "@/components/LeadModal";
import {
  Sparkles,
  Award,
  Users2,
  Building,
  Target,
  Eye,
  CheckCircle2,
  Laptop,
  Briefcase,
  MapPin,
  Clock,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Layers,
  GraduationCap,
  BookOpen,
} from "lucide-react";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    {
      icon: Laptop,
      title: "Real Client Work, Never PPT Slides",
      desc: "In Digital Marketing, you run campaigns with actual client ad spend on Meta & Google Ads. In Web Dev, you push real code to GitHub and deploy live apps. Zero boring slide lectures.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/60",
    },
    {
      icon: Users2,
      title: "Micro-Batches of 10–15 Students",
      desc: "We refuse to pack 80–100 students into overcrowded lecture halls. Our batches are strictly capped at 10–15 seats, ensuring your mentor personally reviews your code every day.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/60",
    },
    {
      icon: Award,
      title: "Dual Industry-Ready Certifications",
      desc: "Every graduate receives two verified credentials: an official EndowIT Course Completion Certificate and a 3-Month Practical Internship Certificate with live project deliverables.",
      color: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/60",
    },
    {
      icon: Briefcase,
      title: "Dedicated 1-on-1 Placement Support",
      desc: "From ATS-friendly resume rebuilding and LinkedIn portfolio optimization to mock technical screenings and salary negotiation, our mentors support you until you get placed.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/60",
    },
  ];

  const whoIsThisFor = [
    {
      title: "College Students & Fresh Graduates",
      desc: "Whether you studied Engineering (B.E/B.Tech), Arts, Science, or Commerce (B.Com/BBA), gain real hands-on practical skills and a 3-month internship on your resume to stand out from typical degree holders.",
      icon: GraduationCap,
    },
    {
      title: "Non-IT & Career Switchers",
      desc: "Working in BPO, sales, operations, mechanical, or civil domains and looking to transition into high-income tech careers? Our step-by-step mentor guidance makes switching straightforward and stress-free.",
      icon: Target,
    },
    {
      title: "Working Professionals Upskilling",
      desc: "Junior developers and marketing executives looking to master modern AI tools, full stack MERN frameworks, Power BI, or AWS DevOps to earn promotions and higher compensation packages.",
      icon: Layers,
    },
    {
      title: "Freelancers & Business Owners",
      desc: "Entrepreneurs and independent consultants looking to run profitable ad campaigns, manage their own digital presence, or build client websites without paying expensive agency retainers.",
      icon: BookOpen,
    },
  ];

  const curriculumTimeline = [
    {
      month: "Month 01",
      title: "Foundations & Daily Lab Work",
      desc: "Master core principles with daily coding/ad-setup exercises. No memorization—every tool, syntax, and workflow is executed live in class with mentor assistance.",
    },
    {
      month: "Month 02",
      title: "Live Client Projects & Real Budgets",
      desc: "Work on active client campaigns with actual ad budgets or deploy live full-stack web applications. Participate in daily standups and code reviews.",
    },
    {
      month: "Month 03",
      title: "Internship Deliverables & Placement Prep",
      desc: "Finalize your capstone projects, earn your 3-Month Practical Internship Certificate, participate in 1-on-1 technical mock interviews, and apply for roles.",
    },
  ];

  const aboutFaqs = [
    {
      q: "Where is EndowIT Academy located in Chennai?",
      a: "EndowIT Academy is located in Chennai, Tamil Nadu with a modern physical tech lab equipped with developer workstations and high-speed fiber internet. We also offer interactive live online classes for remote students.",
    },
    {
      q: "Do students really get actual client ad spend for Digital Marketing?",
      a: "Yes! Unlike traditional institutes where you only look at screenshots, our Digital Marketing students are allocated real ad campaign budgets on Meta Ads and Google Ads to learn live campaign optimization and ROI reporting.",
    },
    {
      q: "Can students without a coding background join Full Stack Development or Data Analytics?",
      a: "Absolutely. Over 60% of our successful alumni come from non-IT backgrounds (B.Com, B.Sc, BBA, Mechanical, Civil). Our 3-month fast-track curriculum begins from absolute fundamentals before advancing to production concepts.",
    },
    {
      q: "What is the fee for your courses, and are split payments allowed?",
      a: "Our standard launch fee for all 6 flagship 3-month courses is flat ₹14,999 (regularly ₹25,000). We offer convenient split payment options (₹4,999 / month). Furthermore, our Grand Opening Offer allows the first 20 students to enroll for flat ₹5,000 all-inclusive.",
    },
    {
      q: "How does the placement assistance process work?",
      a: "Our placement cell conducts 1-on-1 resume reviews, builds an ATS-optimized format, helps you publish your GitHub/portfolio deliverables, conducts rigorous technical mock interviews, and connects you directly with hiring partners.",
    },
  ];

  return (
    <ClientShell>
      <div className="pt-24 pb-16 bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white">
        
        {/* ================= HERO SECTION ================= */}
        <div className="bg-gradient-to-b from-[#0b2545] via-navy-900 to-slate-950 text-white py-14 sm:py-16 text-center border-b border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-200 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span>100+ Trained Online · Chennai Practical Tech Lab Launch</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              About <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">EndowIT Academy</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We started with a simple belief: <strong>technology cannot be taught from 500-page slide decks</strong>. You only master software, data, and marketing by building real things with real budgets and production code.
            </p>
          </div>
        </div>

        {/* ================= KEY METRICS COUNTER ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl text-center">
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-brand-600 dark:text-brand-400">100+</span>
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">Students Trained Online</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">3 Months</span>
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">Fast-Track Duration</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-amber-500">10–15</span>
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">Max Students / Batch</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400">100%</span>
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">Practical Internship Included</span>
            </div>
          </div>
        </div>

        {/* ================= OUR STORY & MISSION ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
                Our Story & Philosophy
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Bridging The Gap Between Classroom Theory and Real Tech Jobs
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Over the past several years, conventional software institutes in Chennai have turned education into a factory: 80 to 100 students packed in a single room, trainers reading through outdated slides, and students leaving with a piece of paper but zero real-world confidence.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                At <strong>EndowIT Academy</strong>, we do things differently. Having successfully mentored over 100+ students online across Tamil Nadu and beyond, we are launching our Chennai physical tech lab with a strict cap of <strong>10–15 students per batch</strong>.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Our Digital Marketing students don't just study SEO keywords; they run actual client ad campaigns with real budgets. Our Full Stack developers don't just build to-do list apps; they write clean, production-grade code, deploy to live cloud servers, and manage live databases.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Book A Free Demo Class
                </button>
                <Link
                  href="/certifications"
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-all"
                >
                  Explore Our Dual Certifications →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="EndowIT Academy Practical Lab Chennai"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent flex items-end p-6 text-white">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                      Hands-On Learning Lab
                    </span>
                    <h4 className="text-lg font-bold">Chennai Physical Training Lab</h4>
                    <p className="text-xs text-slate-300">
                      Workstations with developer tools, high-speed fiber internet & live mentorship.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= 4 PRACTICAL PILLARS ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              The EndowIT Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              The 4 Practical Pillars of Our Training
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              How our 3-month methodology turns beginners into confident tech professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 rounded-2xl ${p.bgColor} ${p.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= WHO LEARNS AT ENDOWIT ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Tailored Learning Paths
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Who Learns at EndowIT Academy?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our small-batch structure allows mentors to adapt their teaching pace to your background and career goals:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whoIsThisFor.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= 3-MONTH CURRICULUM TIMELINE ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Clear 3-Month Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              How Your 3 Months Are Structured
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Every day has a purpose, from your first lab setup to your final placement interview.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curriculumTimeline.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                    {step.month}
                  </span>
                  <span className="text-2xl font-black text-slate-200 dark:text-slate-800">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SEO FAQS ================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Answers You Need
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions About EndowIT
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Have questions about our training location, batch timings, or practical internships?
            </p>
          </div>

          <div className="space-y-3">
            {aboutFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:text-brand-600 transition-colors"
                >
                  <span className="text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-brand-600" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-900 via-navy-900 to-slate-900 text-white text-center space-y-4 shadow-xl border border-slate-800">
            <h3 className="text-xl sm:text-2xl font-bold">
              Want to Visit Our Training Lab or Attend a Demo?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Call our admissions counselor or reserve your seat for the upcoming Monday batch. Strictly 10–15 seats per batch.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                Book Free Counseling & Demo
              </button>
              <a
                href="tel:+916379427852"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>+91 63794 27852</span>
              </a>
            </div>
          </div>
        </div>

        <LeadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </ClientShell>
  );
}
