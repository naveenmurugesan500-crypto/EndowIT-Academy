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
      title: "Real Client Projects, Not Dummy Slides",
      desc: "For Digital Marketing, students manage actual client ad spend campaigns on Meta & Google. For Full Stack, you develop and deploy live SaaS web platforms on cloud servers.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/60",
    },
    {
      icon: Award,
      title: "Guaranteed Practical Internship Certificate",
      desc: "Every candidate completes a hands-on practical internship working on real client requirements, earning an industry-verifiable experience credential.",
      color: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/60",
    },
    {
      icon: Users,
      title: "Micro Batches (Strictly 10–15 Students)",
      desc: "No overcrowded 100-student lecture halls. We cap each batch at 10–15 seats to ensure your code is personally reviewed and every doubt gets addressed daily.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/60",
    },
    {
      icon: Briefcase,
      title: "Dedicated Placement Support & Mocks",
      desc: "From 1-on-1 technical mock screenings to portfolio reviews and ATS-optimized resume building, our mentors prepare you thoroughly for employer interviews.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/60",
    },
    {
      icon: Layers,
      title: "Hybrid Flexibility: Offline Lab & Live Online",
      desc: "Join our Chennai tech lab classroom with high-speed developer workstations or participate via interactive live online sessions with daily class recordings.",
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
