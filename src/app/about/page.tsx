"use client";

import React, { useState } from "react";
import ClientShell from "@/components/ClientShell";
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
} from "lucide-react";
import LeadModal from "@/components/LeadModal";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To deliver hands-on, mentor-led practical training on real-world client projects, giving every student genuine work experience and an internship certificate before entering the job market.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      desc: "To build a trusted, practical tech learning space where students learn by doing real work—managing live ad spend budgets, deploying production apps, and building enterprise dashboards.",
    },
    {
      icon: Award,
      title: "100% Practical Rigor",
      desc: "Zero rote memorization. Strictly 10–15 students per batch ensuring dedicated 1-on-1 code reviews and personal mentor accountability.",
    },
  ];

  return (
    <ClientShell>
      <div className="pt-24 pb-20 bg-slate-50 dark:bg-navy-950">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-brand-950 via-navy-900 to-slate-950 text-white py-20 text-center border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-200 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span>100+ Students Trained Online · Now Launching Chennai Offline Lab</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              About EndowIT Academy
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We started by mentoring students online and helping them build practical tech portfolios. Today, we are launching our Chennai physical tech lab with a clear promise: pure practical training, guaranteed internships, and honest career guidance.
            </p>
          </div>
        </div>

        {/* Mission / Vision Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                The Practical Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                No Fake Numbers. Just Real Skills & Real Work.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Most conventional institutes flood their classrooms with 80+ students and read through PowerPoint slides. At <strong>EndowIT Academy</strong>, we believe the only way to become a software engineer or digital marketer is by doing the actual job.
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Real Client Projects: Manage actual ad budgets & live software deployments</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Guaranteed Practical Internship Certificate</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Strictly 10–15 students per batch for direct 1-on-1 mentor guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Dedicated placement assistance, resume review & technical mock interviews</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="EndowIT Academy Practical Lab"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-8 text-white">
                <div>
                  <h4 className="text-xl font-bold">Hands-On Practical Lab</h4>
                  <p className="text-xs text-slate-300">
                    Chennai physical tech lab + Interactive Live Online learning.
                  </p>
                </div>
              </div>
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
