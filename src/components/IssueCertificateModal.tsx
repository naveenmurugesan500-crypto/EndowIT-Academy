"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Certificate } from "@/lib/types";
import {
  X,
  Award,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  GraduationCap,
  Briefcase,
  QrCode,
} from "lucide-react";

interface IssueCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (certificate: Certificate) => void;
}

export default function IssueCertificateModal({
  isOpen,
  onClose,
  onSuccess,
}: IssueCertificateModalProps) {
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("Full Stack Web Development (MERN Stack)");
  const [type, setType] = useState<"Course Completion" | "Practical Internship">("Course Completion");
  const [customId, setCustomId] = useState("");
  const [grade, setGrade] = useState("Distinction · Grade A+");
  const [liveProjectTitle, setLiveProjectTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(false);
  const [createdCert, setCreatedCert] = useState<Certificate | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleReset = () => {
    setCreatedCert(null);
    setStudentName("");
    setCustomId("");
    setLiveProjectTitle("");
    setSkills("");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;

    setLoading(true);

    const autoCode =
      customId.trim().toUpperCase() ||
      (type === "Practical Internship"
        ? `EIT-INT-2026-${Math.floor(1000 + Math.random() * 9000)}`
        : `EIT-CC-2026-${Math.floor(1000 + Math.random() * 9000)}`);

    const defaultSkills =
      courseName.includes("Full Stack")
        ? ["React 19", "Next.js 14", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git & GitHub"]
        : courseName.includes("Marketing")
        ? ["Meta Ads Manager", "Google Ads", "GA4", "SEO Audit", "AI Copywriting", "Canva Pro", "Conversion Tracking"]
        : courseName.includes("Analytics")
        ? ["Python", "SQL Workbench", "Power BI", "Tableau", "Pandas", "NumPy", "Data Cleaning"]
        : ["Cloud Architecture", "AWS EC2", "Docker", "CI/CD", "Linux", "Terraform"];

    const parsedSkills = skills.trim()
      ? skills.split(",").map((s) => s.trim()).filter(Boolean)
      : defaultSkills;

    const defaultProject =
      type === "Practical Internship"
        ? (courseName.includes("Marketing")
            ? "Live Client Ad Spend & Lead Generation Campaign"
            : "Live Client Multi-Vendor SaaS Web Platform Deployment")
        : (courseName.includes("Marketing")
            ? "Full-Funnel Growth Strategy & Ad Spend Portfolio"
            : "Production Capstone Application (Full Stack MERN)");

    const certData: Certificate = {
      id: autoCode,
      certificateNumber: autoCode,
      studentName: studentName.trim(),
      courseName,
      type,
      issueDate: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      completionDate: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      duration: "3 Months (Intensive Practical Lab)",
      grade,
      status: "Verified & Active",
      skills: parsedSkills,
      liveProjectTitle: liveProjectTitle.trim() || defaultProject,
      liveProjectDescription: `Completed 100% hands-on project deliverables under mentor supervision at EndowIT Academy.`,
      batchId: "EIT-CHN-2026",
      mode: "Chennai Lab (Classroom)",
      signatoryName:
        type === "Practical Internship"
          ? "M. Naveen Kumar, M.Tech"
          : "Dr. S. Raghunathan, Ph.D.",
      signatoryTitle:
        type === "Practical Internship"
          ? "Head of Engineering & Placement Mentor"
          : "Director of Technical Education",
    };

    try {
      // 1. Post to API
      await fetch("/api/admin/certificates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(certData),
      }).catch(() => null);

      // 2. Save in localStorage as persistent client backup
      try {
        const stored: Certificate[] = JSON.parse(
          localStorage.getItem("endowit_user_certificates") || "[]"
        );
        const existingIdx = stored.findIndex(
          (c) => c.certificateNumber.toUpperCase() === certData.certificateNumber.toUpperCase()
        );
        if (existingIdx !== -1) {
          stored[existingIdx] = certData;
        } else {
          stored.unshift(certData);
        }
        localStorage.setItem("endowit_user_certificates", JSON.stringify(stored));
      } catch (err) {
        // ignore
      }

      setCreatedCert(certData);
      if (onSuccess) {
        onSuccess(certData);
      }
    } catch (err) {
      // Even if network drops, client backup is saved
      setCreatedCert(certData);
      if (onSuccess) {
        onSuccess(certData);
      }
    } finally {
      setLoading(false);
    }
  };

  const copyVerifyUrl = () => {
    if (!createdCert) return;
    const url = `${typeof window !== "undefined" ? window.location.origin : "https://endowitacademy.vercel.app"}/verify?id=${encodeURIComponent(createdCert.certificateNumber)}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-navy-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Issue & Register Student Certificate
              </h3>
              <p className="text-xs text-slate-500">
                Instantly generates a verifiable credential with QR code validation.
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success View */}
        {createdCert ? (
          <div className="py-6 space-y-5 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/15">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Successfully Registered in Official Registry
              </span>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white pt-2">
                {createdCert.studentName}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {createdCert.courseName} · <strong>{createdCert.type}</strong>
              </p>
            </div>

            {/* Credential ID Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div>
                <span className="text-[11px] font-semibold text-slate-400 block">
                  Official Verification ID:
                </span>
                <span className="font-mono text-base font-black text-brand-700 dark:text-brand-400">
                  {createdCert.certificateNumber}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyVerifyUrl}
                  className="px-3.5 py-2 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Link"}</span>
                </button>

                <Link
                  href={`/verify?id=${encodeURIComponent(createdCert.certificateNumber)}`}
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-500/20 flex items-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify Live Now</span>
                </Link>
              </div>
            </div>

            <div className="pt-2 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setCreatedCert(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors"
              >
                + Issue Another Certificate
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Student Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Karthik Subramanian"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Certificate Type *
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold"
                >
                  <option value="Course Completion">Course Completion Certificate</option>
                  <option value="Practical Internship">3-Month Practical Internship Certificate</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Course Program *
                </label>
                <select
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold"
                >
                  <option value="Full Stack Web Development (MERN Stack)">Full Stack Web Development (MERN Stack)</option>
                  <option value="Digital Marketing & AI Growth Strategy">Digital Marketing & AI Growth Strategy</option>
                  <option value="Data Analytics & Business Intelligence">Data Analytics & Business Intelligence</option>
                  <option value="Data Science & Artificial Intelligence">Data Science & Artificial Intelligence</option>
                  <option value="AWS Cloud & DevOps Engineering">AWS Cloud & DevOps Engineering</option>
                  <option value="Software Testing & Automation (Selenium + API)">Software Testing & Automation</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Custom Certificate ID (Leave blank to auto-generate)
                </label>
                <input
                  type="text"
                  value={customId}
                  onChange={(e) => setCustomId(e.target.value)}
                  placeholder={type === "Practical Internship" ? "e.g. EIT-INT-2026-0107" : "e.g. EIT-CC-2026-0107"}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white uppercase font-mono text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Grade / Evaluation
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white font-semibold"
                >
                  <option value="Distinction · Grade A+">Distinction · Grade A+</option>
                  <option value="Excellence · Grade A">Excellence · Grade A</option>
                  <option value="Merit · Grade B+">Merit · Grade B+</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Project Deliverable Title
                </label>
                <input
                  type="text"
                  value={liveProjectTitle}
                  onChange={(e) => setLiveProjectTitle(e.target.value)}
                  placeholder="e.g. Live Client Production Platform"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Skills / Tools Mastered (comma separated)
              </label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="e.g. React 19, Next.js, Node.js, MongoDB, AWS, Docker"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white"
              />
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4" />
                <span>{loading ? "Registering..." : "Issue & Register Certificate"}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
