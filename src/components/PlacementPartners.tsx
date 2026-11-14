"use client";

import React from "react";
import { Building2, Award } from "lucide-react";

export default function PlacementPartners() {
  const partners = [
    { name: "Zoho Corporation", role: "Product Engineers" },
    { name: "Tata Consultancy Services (TCS)", role: "System Engineers" },
    { name: "Infosys", role: "Software Developers" },
    { name: "Cognizant", role: "Data Analysts & QA" },
    { name: "Wipro Technologies", role: "Full Stack Developers" },
    { name: "Amazon Web Services (AWS)", role: "Cloud Associates" },
    { name: "Accenture", role: "Analytics Specialists" },
    { name: "Freshworks", role: "Marketing & Frontend" },
    { name: "Capgemini", role: "DevOps & Cloud" },
    { name: "HCL Technologies", role: "Software Engineers" },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-navy-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
          <Award className="w-4 h-4" />
          <span>Our Alumni Work At World-Class Companies</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
          180+ Active Hiring Partners Across India & Overseas
        </h3>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        {/* Left and Right Blur Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-navy-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-navy-900 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-6 py-2">
          {[...partners, ...partners].map((p, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-navy-950 shadow-sm border border-slate-200 dark:border-slate-800 shrink-0 hover:border-brand-500 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950 flex items-center justify-center text-brand-600">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  {p.name}
                </p>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  Hiring: {p.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
