"use client";

import React from "react";
import ClientShell from "@/components/ClientShell";
import { ShieldCheck, Lock, Eye, FileText, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <ClientShell>
      <div className="pt-28 pb-20 bg-slate-50 dark:bg-navy-950 min-h-screen text-slate-900 dark:text-white">
        {/* Header */}
        <div className="bg-gradient-to-b from-slate-100/90 via-blue-50/70 to-indigo-50/40 text-slate-900 py-14 text-center border-b border-slate-200/90 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Your Privacy Is 100% Protected</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Last Updated: November 2026 · EndowIT Academy
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-600" />
                1. Overview & Commitment
              </h2>
              <p>
                At <strong>EndowIT Academy</strong>, we respect your privacy and are committed to protecting any personally identifiable information you may provide us through our website (
                <Link href="/" className="text-brand-600 font-semibold underline">
                  endowitacademy.com
                </Link>
                ). This Privacy Policy explains what information may be collected, how we use this information, and under what circumstances we may disclose the information to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-brand-600" />
                2. Information We Collect
              </h2>
              <p>We collect information that you strictly provide to us when you:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Submit a request for a <strong>Free Demo Class</strong> or Career Counseling call.</li>
                <li>Enter your phone number or WhatsApp number for syllabus downloads.</li>
                <li>Enroll in our 3-month courses or claim the Grand Opening Offer.</li>
                <li>Contact our admissions team via phone, WhatsApp, or contact forms.</li>
              </ul>
              <p>
                This information typically includes your <strong>Full Name</strong>, <strong>Mobile / WhatsApp Phone Number</strong>, <strong>Email Address</strong>, and <strong>Course of Interest</strong>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-brand-600" />
                3. How We Use Your Information
              </h2>
              <p>We use your contact details solely for educational and training purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To contact you regarding demo class schedules and batch timings.</li>
                <li>To provide one-on-one career counseling and syllabus details.</li>
                <li>To manage your course admissions, student portal access, and certificate processing.</li>
                <li>To assist you with interview schedules and placement partner referrals.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                4. Strict Zero-Spam & No-Sale Policy
              </h2>
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                <strong>We will NEVER sell, rent, lease, or trade your personal information</strong> (such as your phone number or email) to any third-party marketing agencies, advertisers, or bulk lead brokers. Your information is strictly used by EndowIT Academy mentors and admissions staff.
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                5. Cookies & Website Analytics
              </h2>
              <p>
                Like most modern websites, EndowIT Academy may use basic cookies and Google Analytics to understand website traffic, measure landing page effectiveness, and optimize site loading speed. You can configure your browser to reject cookies if you prefer.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                6. Data Security
              </h2>
              <p>
                We implement industry-standard SSL encryption and secure server practices to protect your information against unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                7. Contact Us Regarding Your Privacy
              </h2>
              <p>
                If you have any questions or wish to request the removal of your contact details from our records, please contact our administrative desk:
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <Mail className="w-4 h-4 text-brand-600" />
                  <span>Email: <strong>naveenmurugesan500@gmail.com</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <Phone className="w-4 h-4 text-brand-600" />
                  <span>Admissions Hotline: <strong>+91 63794 27852</strong></span>
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
