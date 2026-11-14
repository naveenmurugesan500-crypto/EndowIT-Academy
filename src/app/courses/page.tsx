"use client";

import React, { useState } from "react";
import ClientShell from "@/components/ClientShell";
import CoursesGrid from "@/components/CoursesGrid";
import PricingSection from "@/components/PricingSection";
import defaultCourses from "@/data/courses.json";
import { Sparkles, Search } from "lucide-react";
import LeadModal from "@/components/LeadModal";

export default function CoursesPage() {
  const [courses] = useState(defaultCourses);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(
    undefined
  );

  const filtered = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.tools.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      c.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ClientShell>
      <div className="pt-28 pb-20 bg-slate-50 dark:bg-navy-950 min-h-screen">
        {/* Banner */}
        <div className="bg-gradient-to-b from-brand-950 via-navy-900 to-slate-950 text-white py-16 text-center border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-200 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span>Real Live Projects · Guaranteed Practical Internship · Transparent Fees</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Practical Job-Ready Tech Curriculums
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Master Digital Marketing with live ad budgets, Full Stack with live cloud deployments, or Data Analytics with Power BI & SQL. Strictly 10–15 seats per batch.
            </p>

            {/* Live Search Bar */}
            <div className="pt-4 max-w-md mx-auto relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses, skills (e.g. Digital Marketing, React, Power BI)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
            </div>
          </div>
        </div>

        {/* Courses Grid with Pricing */}
        <CoursesGrid
          courses={filtered as any}
          showPricing={true}
          onOpenDemoModal={(c) => {
            setSelectedCourse(c);
            setIsModalOpen(true);
          }}
        />

        {/* Pricing Section */}
        <PricingSection
          courses={courses as any}
          onOpenDemoModal={(c) => {
            setSelectedCourse(c);
            setIsModalOpen(true);
          }}
        />

        <LeadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultCourse={selectedCourse}
        />
      </div>
    </ClientShell>
  );
}
