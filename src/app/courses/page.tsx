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
        <div className="bg-gradient-to-b from-slate-100/90 via-blue-50/70 to-indigo-50/40 text-slate-900 py-16 text-center border-b border-slate-200/90 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Real Live Projects · Guaranteed Practical Internship · Transparent Fees</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Practical Job-Ready <span className="bg-gradient-to-r from-brand-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Tech Curriculums</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
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
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
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
