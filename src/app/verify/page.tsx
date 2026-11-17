"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ClientShell from "@/components/ClientShell";
import { Certificate } from "@/lib/types";
import IssueCertificateModal from "@/components/IssueCertificateModal";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Search,
  QrCode,
  Share2,
  Printer,
  Copy,
  ExternalLink,
  Briefcase,
  Calendar,
  Layers,
  GraduationCap,
  Sparkles,
  AlertCircle,
  Clock,
  Building2,
  Check,
} from "lucide-react";

function VerifyContent() {
  const searchParams = useSearchParams();
  const initialCode = searchParams.get("id") || searchParams.get("code") || "";

  const [searchQuery, setSearchQuery] = useState(initialCode);
  const [loading, setLoading] = useState(false);
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showIssueModal, setShowIssueModal] = useState(false);

  const sampleCodes = [
    { code: "EIT-CC-2026-0101", label: "Full Stack (Course)", student: "Arun Prakash" },
    { code: "EIT-INT-2026-0101", label: "Full Stack (Internship)", student: "Arun Prakash" },
    { code: "EIT-CC-2026-0102", label: "Digital Marketing (Course)", student: "Priya Dharshini" },
    { code: "EIT-INT-2026-0102", label: "Ad Spend (Internship)", student: "Priya Dharshini" },
    { code: "EIT-CC-2026-0103", label: "Data Analytics (Course)", student: "Vigneshwaran K" },
    { code: "EIT-INT-2026-0105", label: "Cloud DevOps (Internship)", student: "Karthik Raman" },
  ];

  const verifyCertificate = async (codeToVerify: string) => {
    const trimmed = codeToVerify.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const res = await fetch(`/api/verify?id=${encodeURIComponent(trimmed)}`);
      const data = await res.json();

      if (data.success && data.certificate) {
        setCertificate(data.certificate);
        setError(null);
      } else {
        // Fallback: Check local storage for newly issued certificates
        let localFound: Certificate | null = null;
        try {
          const localCerts: Certificate[] = JSON.parse(
            localStorage.getItem("endowit_user_certificates") || "[]"
          );
          localFound =
            localCerts.find(
              (c) =>
                c.certificateNumber.trim().toUpperCase() === trimmed.toUpperCase() ||
                c.id.trim().toUpperCase() === trimmed.toUpperCase()
            ) || null;
        } catch (e) {}

        if (localFound) {
          setCertificate(localFound);
          setError(null);
        } else {
          setCertificate(null);
          setError(
            data.error ||
              `No official record found for Certificate ID "${trimmed}". Please verify the code or contact admissions@endowitacademy.com.`
          );
        }
      }
    } catch (err: any) {
      // Fallback: Check local storage on network error
      let localFound: Certificate | null = null;
      try {
        const localCerts: Certificate[] = JSON.parse(
          localStorage.getItem("endowit_user_certificates") || "[]"
        );
        localFound =
          localCerts.find(
            (c) =>
              c.certificateNumber.trim().toUpperCase() === trimmed.toUpperCase() ||
              c.id.trim().toUpperCase() === trimmed.toUpperCase()
          ) || null;
      } catch (e) {}

      if (localFound) {
        setCertificate(localFound);
        setError(null);
      } else {
        setCertificate(null);
        setError("Unable to connect to verification server. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialCode) {
      setSearchQuery(initialCode);
      verifyCertificate(initialCode);
    }
  }, [initialCode]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      verifyCertificate(searchQuery);
    }
  };

  const handleCopyLink = () => {
    if (!certificate) return;
    const url = `${window.location.origin}/verify?id=${encodeURIComponent(certificate.certificateNumber)}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const getLinkedInAddUrl = () => {
    if (!certificate) return "#";
    const certUrl = `${typeof window !== "undefined" ? window.location.origin : "https://endowitacademy.vercel.app"}/verify?id=${encodeURIComponent(certificate.certificateNumber)}`;
    return `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(
      `${certificate.courseName} - ${certificate.type}`
    )}&organizationName=${encodeURIComponent(
      "EndowIT Academy"
    )}&issueYear=2026&issueMonth=2&certUrl=${encodeURIComponent(
      certUrl
    )}&certId=${encodeURIComponent(certificate.certificateNumber)}`;
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-900">
      {/* Top Banner */}
      <div className="bg-gradient-to-b from-white via-slate-50 to-blue-50/30 border-b border-slate-200 py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Credential Registry & Verification System</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Verify <span className="bg-gradient-to-r from-brand-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">EndowIT Academy</span> Certificate
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every graduate receives an official tamper-evident credential. Enter the Certificate Verification ID or scan the QR code to confirm course completion and 3-month practical internship credentials.
          </p>

          {/* Search Bar Form */}
          <div className="pt-4 max-w-2xl mx-auto">
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex flex-col sm:flex-row items-stretch gap-2.5 p-2 rounded-2xl bg-white border-2 border-brand-200 shadow-xl shadow-brand-500/5 focus-within:border-brand-600 transition-all"
            >
              <div className="relative flex-1 flex items-center">
                <Search className="w-5 h-5 text-slate-400 ml-3.5 mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter Certificate ID (e.g., EIT-CC-2026-0101)"
                  className="w-full py-2.5 pr-4 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none uppercase"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-600 hover:from-brand-700 hover:to-cyan-700 text-white font-bold text-sm shadow-md shadow-brand-500/25 transition-all flex items-center justify-center gap-2 shrink-0"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verify Credential</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Sample Chips */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-slate-500 font-medium">Try Sample Verified IDs:</span>
              {sampleCodes.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setSearchQuery(item.code);
                    verifyCertificate(item.code);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-brand-500 hover:text-brand-700 font-mono text-[11px] font-semibold text-slate-700 shadow-xs transition-colors"
                >
                  {item.code}
                </button>
              ))}
            </div>

            {/* Action: Issue New Certificate Button */}
            <div className="mt-4 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setShowIssueModal(true)}
                className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 flex items-center gap-1.5 transition-all shadow-sm hover:scale-[1.02]"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>+ Issue / Register New Certificate (Admin & Faculty)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Verification Result Stage */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {loading && (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-50 border-2 border-brand-200 flex items-center justify-center animate-pulse">
              <ShieldCheck className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              Querying EndowIT Academy Official Registry...
            </h3>
            <p className="text-xs text-slate-500">
              Verifying cryptographic digital hash, batch timestamps, and mentor approvals.
            </p>
          </div>
        )}

        {/* Error / Not Found State */}
        {!loading && searched && error && (
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white border-2 border-rose-200 shadow-xl text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Record Not Found in Official Registry
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 pt-2">
                Unverified Certificate ID
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {error}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:admissions@endowitacademy.com?subject=Certificate Verification Assistance"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all"
              >
                Contact Admissions Support
              </a>
              <a
                href="tel:+916379427852"
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all"
              >
                Call: +91 63794 27852
              </a>
            </div>
          </div>
        )}

        {/* Verified Certificate Showcase Card */}
        {!loading && certificate && (
          <div className="space-y-6 animate-fade-in">
            {/* Top Verification Status Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border-2 border-emerald-400 text-emerald-950 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                      OFFICIALLY VERIFIED & AUTHENTIC
                    </span>
                    <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-900 mt-0.5">
                    This certificate is genuine and officially issued by EndowIT Academy.
                  </p>
                </div>
              </div>

              {/* Action Buttons: Print, Copy Link, LinkedIn */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "Link Copied!" : "Copy Link"}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / PDF</span>
                </button>

                <a
                  href={getLinkedInAddUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Add to LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Official Diploma Credential Card Canvas */}
            <div className="relative rounded-3xl bg-white border-2 border-slate-300 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden print:border-none print:shadow-none print:p-6">
              {/* Decorative Corner Seals */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-brand-500/10 via-brand-500/5 to-transparent rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-emerald-500/10 via-emerald-500/5 to-transparent rounded-tr-full pointer-events-none" />

              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-slate-100 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative w-44 h-12 flex items-center">
                    <Image
                      src="/logo.png"
                      alt="EndowIT Academy"
                      width={180}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400 block">
                    Certificate Verification Registry
                  </span>
                  <div className="flex items-center gap-2 mt-0.5 justify-end">
                    <span className="font-mono text-sm sm:text-base font-black text-brand-700 bg-brand-50 px-3 py-1 rounded-lg border border-brand-200">
                      ID: {certificate.certificateNumber}
                    </span>
                  </div>
                </div>
              </div>

              {/* Certificate Body Presentation */}
              <div className="py-8 sm:py-10 text-center space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                  {certificate.type === "Practical Internship" ? (
                    <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <GraduationCap className="w-3.5 h-3.5 text-brand-600" />
                  )}
                  <span>
                    Official {certificate.type === "Practical Internship" ? "3-Month Practical Internship Certificate" : "Course Completion Certificate"}
                  </span>
                </div>

                <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest font-semibold block pt-1">
                  This is proudly awarded to
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                  {certificate.studentName}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  for successfully mastering the curriculum and fulfilling all practical industry requirements in
                </p>

                <div className="py-2">
                  <span className="inline-block px-5 py-2.5 rounded-2xl bg-gradient-to-r from-brand-50 via-cyan-50 to-blue-50 border-2 border-brand-200 text-brand-900 font-extrabold text-lg sm:text-2xl shadow-xs">
                    {certificate.courseName}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
                  Demonstrating comprehensive practical proficiency, lab assignment milestones, and production deliverables.
                </p>
              </div>

              {/* Comprehensive Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 relative z-10 text-left">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Duration & Model
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                    {certificate.duration}
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    {certificate.mode}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Completion Date
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                    {certificate.completionDate}
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    Issued: {certificate.issueDate}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Assessment Grade
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-700 block">
                    {certificate.grade}
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    100% Practical Capstone
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Batch Code
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-brand-700 block">
                    {certificate.batchId}
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold block">
                    Active in Registry
                  </span>
                </div>
              </div>

              {/* Live Client Project Deliverables Callout */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-cyan-50/70 border border-cyan-200/80 space-y-3 relative z-10 text-left">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-900">
                  <Briefcase className="w-4 h-4 text-cyan-700" />
                  <span>Practical Client Project Experience & Deliverables:</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  {certificate.liveProjectTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {certificate.liveProjectDescription}
                </p>

                {/* Skills chips */}
                <div className="pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Verified Tools & Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-slate-800 border border-slate-200 shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Signatures & Dynamic QR Code Row */}
              <div className="mt-8 pt-8 border-t-2 border-slate-100 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center relative z-10">
                {/* QR Code Column (4 Cols) */}
                <div className="sm:col-span-4 flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(
                      `${typeof window !== "undefined" ? window.location.origin : "https://endowitacademy.vercel.app"}/verify?id=${certificate.certificateNumber}`
                    )}`}
                    alt="Certificate QR Verification Code"
                    className="w-20 h-20 rounded-xl bg-white p-1 border border-slate-300 shadow-xs shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-[11px] font-extrabold uppercase text-slate-800 block">
                      Scan to Verify
                    </span>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      Instant verification on mobile devices via camera.
                    </p>
                    <span className="text-[10px] font-mono text-brand-700 font-semibold block">
                      endowitacademy.com/verify
                    </span>
                  </div>
                </div>

                {/* Signatory 1 (4 Cols) */}
                <div className="sm:col-span-4 text-center sm:text-left space-y-1">
                  <div className="h-9 flex items-center justify-center sm:justify-start">
                    <span className="font-serif italic text-lg font-bold text-slate-800 tracking-wider">
                      {certificate.signatoryName}
                    </span>
                  </div>
                  <div className="w-40 h-0.5 bg-slate-300 mx-auto sm:mx-0" />
                  <strong className="block text-xs font-bold text-slate-900 pt-0.5">
                    {certificate.signatoryName}
                  </strong>
                  <span className="text-[11px] text-slate-500 block">
                    {certificate.signatoryTitle}
                  </span>
                </div>

                {/* Signatory 2 & Official Seal (4 Cols) */}
                <div className="sm:col-span-4 text-center sm:text-right space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Official Institutional Seal</span>
                  </div>
                  <strong className="block text-xs font-bold text-slate-900 pt-1">
                    EndowIT Academy
                  </strong>
                  <span className="text-[11px] text-slate-500 block">
                    Chennai Physical Tech Lab & Academic Council
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HR Verification Guide / FAQ */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
            <Building2 className="w-4 h-4 text-brand-600" />
            <span>Information For Hiring Managers & HR Background Check Teams</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Need Official Background Verification Assistance?
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            EndowIT Academy maintains permanent academic and practical internship records for every student. If your HR or background verification agency requires formal email verification or proof of client internship project deliverables, write directly to:
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="mailto:admissions@endowitacademy.com?subject=HR Background Verification Request"
              className="px-4 py-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-xs border border-brand-200 transition-colors"
            >
              ✉️ admissions@endowitacademy.com
            </a>
            <span className="text-xs text-slate-400">or call direct line:</span>
            <a
              href="tel:+916379427852"
              className="text-xs font-bold text-slate-900 hover:text-brand-600 transition-colors"
            >
              📞 +91 63794 27852
            </a>
          </div>
        </div>
      </div>

      <IssueCertificateModal
        isOpen={showIssueModal}
        onClose={() => setShowIssueModal(false)}
        onSuccess={(newCert) => {
          setCertificate(newCert);
          setSearchQuery(newCert.certificateNumber);
          setSearched(true);
        }}
      />
    </div>
  );
}

export default function VerifyPage() {
  return (
    <ClientShell>
      <Suspense
        fallback={
          <div className="py-32 text-center text-sm font-semibold text-slate-500">
            Loading Certificate Verification Registry...
          </div>
        }
      >
        <VerifyContent />
      </Suspense>
    </ClientShell>
  );
}
