"use client";

import React, { useState } from "react";
import Link from "next/link";
import ClientShell from "@/components/ClientShell";
import LeadModal from "@/components/LeadModal";
import IssueCertificateModal from "@/components/IssueCertificateModal";
import {
  Award,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Briefcase,
  Share2,
  QrCode,
  Sparkles,
  PhoneCall,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Building2,
  Layers,
  GraduationCap,
} from "lucide-react";

export default function CertificationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showIssueModal, setShowIssueModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [verifyInput, setVerifyInput] = useState("");

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyInput.trim()) {
      window.location.href = `/verify?id=${encodeURIComponent(verifyInput.trim())}`;
    }
  };

  const certFaqs = [
    {
      q: "Do I receive both certificates upon completing the course?",
      a: "Yes! Every student who completes their 3-month program and delivers the required practical project deliverables receives both the EndowIT Course Completion Certificate and the 3-Month Practical Internship Certificate.",
    },
    {
      q: "Is there any extra fee for the certificates or internship?",
      a: "Absolutely not. Both certificates, the live client project budget, and the complete practical internship are fully included in the standard course fee (or the ₹5,000 Grand Opening Offer). Zero extra rupee to pay.",
    },
    {
      q: "Are these certificates verifiable by employers during background checks?",
      a: "Yes. Every certificate issued by EndowIT Academy comes with a unique Certificate Verification ID and can be officially verified by HR recruiters and hiring companies via email (admissions@endowitacademy.com) or phone.",
    },
    {
      q: "Can I add these certificates to my LinkedIn profile and resume?",
      a: "Yes! We guide you on adding both credentials directly to your LinkedIn Licenses & Certifications section with your unique credential ID, and listing the real client projects in your resume experience section.",
    },
    {
      q: "What will be mentioned on the Internship Certificate?",
      a: "The internship certificate explicitly highlights your role (e.g., Performance Marketing Intern, Full Stack Developer Intern, Data Analyst Intern), the 3-month duration, the live tools used, and the actual project deliverables successfully delivered.",
    },
  ];

  return (
    <ClientShell>
      <div className="pt-24 pb-16 bg-slate-50 dark:bg-navy-950 min-h-screen text-slate-900 dark:text-white">
        
        {/* ================= HERO SECTION ================= */}
        <div className="bg-gradient-to-b from-slate-100/90 via-blue-50/70 to-indigo-50/40 text-slate-900 py-14 sm:py-16 text-center border-b border-slate-200/90 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 shadow-sm">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Dual Industry-Ready Credentials</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Verified Certifications at <span className="bg-gradient-to-r from-brand-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">EndowIT Academy</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We provide two distinct, verifiable credentials upon course completion: an official <strong>Course Completion Certificate</strong> and an authentic <strong>3-Month Practical Internship Certificate</strong> based on real client deliverables.
            </p>

            {/* Quick Verification Search Box */}
            <div className="pt-4 max-w-xl mx-auto">
              <form
                onSubmit={handleVerifySubmit}
                className="flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-2xl bg-white shadow-xl border-2 border-emerald-400"
              >
                <input
                  type="text"
                  value={verifyInput}
                  onChange={(e) => setVerifyInput(e.target.value)}
                  placeholder="Enter Certificate ID (e.g. EIT-CC-2026-0101)"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none uppercase"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shrink-0 transition-colors shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify Online</span>
                </button>
              </form>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] text-slate-500">
                <span>Try sample code:</span>
                <Link
                  href="/verify?id=EIT-CC-2026-0101"
                  className="font-mono text-emerald-700 font-semibold underline hover:text-emerald-900"
                >
                  EIT-CC-2026-0101
                </Link>
                <span>·</span>
                <Link
                  href="/verify?id=EIT-INT-2026-0101"
                  className="font-mono text-emerald-700 font-semibold underline hover:text-emerald-900"
                >
                  EIT-INT-2026-0101
                </Link>
              </div>

              {/* Action: Issue New Certificate Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setShowIssueModal(true)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/25 flex items-center justify-center gap-2 mx-auto transition-all shadow-md hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>+ Issue & Register New Certificate</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TWO CERTIFICATES SHOWCASE GRID ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Certificate 1: Course Completion Certificate */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between hover:border-brand-500/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
                    Credential 01 · Training
                  </span>
                  <Link
                    href="/verify?id=EIT-CC-2026-0101"
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Verifiable Live (EIT-CC-2026-0101)</span>
                  </Link>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Course Completion Certificate
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Awarded upon completing 100% of your 3-month technical curriculum, daily lab assignments, and modular capstone assessments. It demonstrates your complete conceptual and practical mastery of the subject.
                </p>

                {/* Certificate Preview Mock Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-navy-950 dark:to-slate-900 border-2 border-dashed border-brand-300 dark:border-brand-800/80 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-brand-600" />
                      <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                        EndowIT Academy · Certificate of Completion
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                      ID: EIT-CC-2026-0101
                    </span>
                  </div>

                  <div className="text-center py-2 space-y-1">
                    <span className="text-[11px] text-slate-500 block">This certifies that</span>
                    <strong className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white block">
                      Arun Prakash M
                    </strong>
                    <span className="text-xs text-slate-600 dark:text-slate-400 block">
                      has successfully completed the 3-Month Fast-Track Program in
                    </span>
                    <strong className="text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 block">
                      Full Stack Web Development (MERN Stack)
                    </strong>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500">
                    <span>Authorized Signatory</span>
                    <Link
                      href="/verify?id=EIT-CC-2026-0101"
                      className="flex items-center gap-1 font-bold text-emerald-600 hover:underline"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" /> Verify Sample Online
                    </Link>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Includes complete breakdown of tools and frameworks mastered.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Dynamic QR Code for instant smartphone camera scanning.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>1-click shareable to LinkedIn Licenses & Certifications.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Recognized by hiring managers across Chennai tech companies.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                <Link
                  href="/verify?id=EIT-CC-2026-0101"
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify Sample Certificate</span>
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Certificate 2: 3-Month Practical Internship Certificate */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border-2 border-emerald-500/60 shadow-xl flex flex-col justify-between hover:border-emerald-400 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                    Credential 02 · Work Experience
                  </span>
                  <Link
                    href="/verify?id=EIT-INT-2026-0101"
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verifiable Live (EIT-INT-2026-0101)</span>
                  </Link>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  3-Month Practical Internship Certificate
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Awarded for working directly on live client assignments—such as managing active Meta/Google ad spend budgets, deploying production SaaS code, or creating business BI dashboards. This is verified proof of real hands-on experience.
                </p>

                {/* Certificate Preview Mock Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 border-2 border-dashed border-emerald-400 dark:border-emerald-600/80 space-y-3">
                  <div className="flex items-center justify-between border-b border-emerald-200/80 dark:border-emerald-800/80 pb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-emerald-600" />
                      <span className="text-xs font-extrabold text-emerald-900 dark:text-emerald-200 uppercase tracking-wider">
                        EndowIT Academy · Internship Certificate
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      ID: EIT-INT-2026-0101
                    </span>
                  </div>

                  <div className="text-center py-2 space-y-1">
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 block">This is to certify that</span>
                    <strong className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white block">
                      Arun Prakash M
                    </strong>
                    <span className="text-xs text-slate-600 dark:text-slate-400 block">
                      has successfully completed a 3-Month Practical Internship as
                    </span>
                    <strong className="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-300 block">
                      Full Stack Web Developer Intern (Live Production SaaS)
                    </strong>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-emerald-200/80 dark:border-emerald-800/80 text-[10px] text-emerald-800 dark:text-emerald-300">
                    <span>Director of Training</span>
                    <Link
                      href="/verify?id=EIT-INT-2026-0101"
                      className="flex items-center gap-1 font-bold text-emerald-600 hover:underline"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" /> Verify Sample Online
                    </Link>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Qualifies as genuine prior work experience for fresh graduates.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>States live client project scope and technical tools used.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Dynamic QR Code and permanent online verification registry.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Includes official phone & email verification support for HR background checks.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                <Link
                  href="/verify?id=EIT-INT-2026-0101"
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify Sample Internship</span>
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ================= 3-STEP QR CODE & ONLINE VERIFICATION EXPLAINER ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                Tamper-Proof Verification Process
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                How Our QR Code & Online Verification Works
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every physical and digital certificate issued by EndowIT Academy comes with a unique cryptographic verification ID and an embedded high-resolution QR code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-black">
                  1
                </div>
                <h4 className="text-base font-bold text-slate-900">Unique Credential ID</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Each certificate is assigned an official code (e.g., <code>EIT-CC-2026-0101</code> or <code>EIT-INT-2026-0101</code>) stored permanently in our central academic registry.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black">
                  2
                </div>
                <h4 className="text-base font-bold text-slate-900">Instant QR Camera Scan</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hiring managers and HR recruiters can point any smartphone camera at the certificate's QR code to open the authenticated verification record in seconds.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                  3
                </div>
                <h4 className="text-base font-bold text-slate-900">Complete Proof of Work</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The verification page confirms student identity, course completion, client ad spend / deployed SaaS code deliverables, grade, and mentor signatories.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <span className="text-xs text-slate-500">
                Want to test live certificate verification right now?
              </span>
              <Link
                href="/verify?id=EIT-CC-2026-0101"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Open Verification Portal Live</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ================= WHY DUAL CERTIFICATION MATTERS ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-100/90 via-blue-50/60 to-indigo-50/50 border border-slate-200/90 space-y-6 text-slate-900 shadow-sm">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
                Career Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Why Both Certificates Matter When You Apply For Jobs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Most institutes only give you a basic attendance certificate. But in technical interviews, recruiters ask one question: <em>&quot;What have you actually built?&quot;</em> Having both an EndowIT Course Completion Certificate and an authentic 3-Month Internship Certificate gives you a massive advantage:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <FileCheck2 className="w-6 h-6 text-brand-600" />
                <h4 className="text-sm font-bold text-slate-900">Proof of Practical Skills</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your Course Certificate proves you mastered the technical stack, tools, and best practices.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <Briefcase className="w-6 h-6 text-emerald-600" />
                <h4 className="text-sm font-bold text-slate-900">Proof of Real Work</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your Internship Certificate proves you managed real budgets and deployed production deliverables for actual clients.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <ShieldCheck className="w-6 h-6 text-amber-600" />
                <h4 className="text-sm font-bold text-slate-900">HR Background Verifiable</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Recruiters can easily verify your credentials with our official admissions team via phone and email.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CERTIFICATIONS FAQ ================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center space-y-2 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions About Certifications
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Everything you need to know about our certificates, credentials, and verification.
            </p>
          </div>

          <div className="space-y-3">
            {certFaqs.map((faq, idx) => (
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-100/90 via-blue-50/80 to-indigo-50/60 border border-slate-200/90 text-slate-900 text-center space-y-4 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Ready to Earn Both Credentials in 3 Months?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Join our Chennai physical training lab or live interactive online classes. Strictly 10–15 students per batch.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Book Free Demo Class
              </button>
              <Link
                href="/courses"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-300 transition-all shadow-sm"
              >
                Explore All 6 Courses
              </Link>
            </div>
          </div>
        </div>

        <LeadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <IssueCertificateModal
          isOpen={showIssueModal}
          onClose={() => setShowIssueModal(false)}
        />
      </div>
    </ClientShell>
  );
}
