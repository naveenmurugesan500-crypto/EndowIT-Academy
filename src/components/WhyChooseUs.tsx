"use client";

import React from "react";
import {
  Laptop,
  Award,
  Users,
  Briefcase,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Laptop,
      title: "Real Budgets & Live Code, Never PPTs",
      desc: "In Digital Marketing, you set up and run campaigns with actual client ad spend on Meta & Google. In Web Dev, you write real code, push to GitHub, and deploy live apps.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/60",
    },
    {
      icon: Award,
      title: "Verified Internship Certificate",
      desc: "You don't just finish a course; you complete real client deliverables that you can showcase on LinkedIn and add to your resume with proof.",
      color: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/60",
    },
    {
      icon: Users,
      title: "Only 10–15 Students Per Batch",
      desc: "No crowded 100-person halls. Small micro-batches mean your trainer checks your code every day, clears every doubt, and makes sure you never get left behind.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/60",
    },
    {
      icon: Briefcase,
      title: "1-on-1 Mock Interviews & Resume Review",
      desc: "We practice real technical interview questions with you, review your live portfolio projects, and optimize your resume for applicant tracking systems.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/60",
    },
    {
      icon: Layers,
      title: "In-Person Chennai Lab & Live Online",
      desc: "Learn hands-on at our Chennai training lab with dedicated workstations, or join live online sessions from anywhere with full class recordings.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/60",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>The EndowIT Practical Method</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Students Choose <span className="gradient-text-emerald">EndowIT Academy</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Having successfully trained over 100+ students online, we are launching our Chennai physical tech lab focused on pure practical implementation and guaranteed 3-month outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 shadow-sm hover:shadow-xl transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${pt.bgColor} flex items-center justify-center ${pt.color} mb-5`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
