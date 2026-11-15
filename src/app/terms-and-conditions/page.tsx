"use client";

import React from "react";
import ClientShell from "@/components/ClientShell";
import { Scale, CheckCircle2, AlertCircle, FileText, Mail, Phone, Award } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <ClientShell>
      <div className="pt-28 pb-20 bg-slate-50 dark:bg-navy-950 min-h-screen text-slate-900 dark:text-white">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#0b2545] to-slate-950 text-white py-14 text-center border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-200 text-xs font-semibold backdrop-blur-md">
              <Scale className="w-4 h-4 text-emerald-400" />
              <span>Transparent & Fair Academy Guidelines</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Effective Date: November 2026 · EndowIT Academy
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-600" />
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing our website (
                <Link href="/" className="text-brand-600 font-semibold underline">
                  endowitacademy.com
                </Link>
                ), registering for a demo class, or enrolling in any course at <strong>EndowIT Academy</strong>, you agree to comply with and be bound by the following terms and conditions of use.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-600" />
                2. Course Enrollment & Batch Allocation
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Strict Batch Size:</strong> To maintain high-touch practical mentoring, every classroom and live online batch at EndowIT Academy is strictly limited to <strong>10 to 15 students only</strong>.
                </li>
                <li>
                  <strong>Strict Course Duration:</strong> All flagship courses (Digital Marketing, Full Stack MERN, Data Analytics, Data Science & AI, AWS Cloud & DevOps, Software Testing) are structured as <strong>strictly 3-month fast-track job curriculums</strong>.
                </li>
                <li>
                  Batch timings (Weekdays / Weekends) are confirmed during admission based on student preference and lab seat availability.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-brand-600" />
                3. Fees, Grand Opening Offer & Split Payments
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Standard Course Fee:</strong> The regular launch tuition fee for all 3-month courses is <strong>₹ 14,999</strong> (standard launch price across all programs).
                </li>
                <li>
                  <strong>Grand Opening Special Offer:</strong> For the <strong>first 20 students</strong> who enroll, the complete course fee is flat <strong>₹ 5,000 all-inclusive</strong>. Once this fee is paid, students are <strong>never charged any additional fee</strong> for training, lab access, live client ad budgets, or placement support.
                </li>
                <li>
                  <strong>Split Payment Option:</strong> Students enrolling under the standard launch pricing may opt for flexible Split Payments (e.g. ₹ 4,999/month across installments).
                </li>
                <li>
                  <strong>Zero EMI Penalty:</strong> EndowIT Academy does not tie students to third-party bank loan traps or interest-bearing financing.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                4. Practical Internship & Certification Criteria
              </h2>
              <p>
                Every student who enrolls in EndowIT Academy is entitled to our <strong>Guaranteed Practical Internship Certificate</strong>. To qualify for certification, the student must:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Maintain a minimum of <strong>80% attendance</strong> in live training and mentoring sessions.</li>
                <li>Complete the required capstone project (e.g. managing live client ad spend, deploying a full-stack SaaS project, or building real-time analytics dashboards).</li>
                <li>Adhere to the professional code of conduct during internship assignments.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                5. Placement Assistance & Career Support
              </h2>
              <p>
                EndowIT Academy provides 100% dedicated placement support, including resume tailoring, mock interviews, GitHub/LinkedIn portfolio reviews, and direct interview scheduling with hiring partners. While we guarantee genuine interview opportunities and comprehensive preparation, final employment offers depend on student interview performance and hiring company criteria.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                6. Code of Conduct & Academic Integrity
              </h2>
              <p>
                Students are expected to respect trainers, peers, and client confidentiality. Client data and proprietary credentials provided during live client ad spends or enterprise deployments must not be shared publicly or misused.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                7. Inquiries & Academy Support
              </h2>
              <p>
                For questions regarding these terms, enrollment verification, or billing receipts, reach out to our administration:
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <Mail className="w-4 h-4 text-brand-600" />
                  <span>Email: <strong>naveenmurugesan500@gmail.com</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <Phone className="w-4 h-4 text-brand-600" />
                  <span>Direct Desk: <strong>+91 63794 27852</strong></span>
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  Campus Address: XXXXXX, XXXXXX, Chennai, Tamil Nadu - XXXXXX
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </ClientShell>
  );
}
