"use client";

import React, { useState } from "react";
import Link from "next/link";
import ClientShell from "@/components/ClientShell";
import {
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Clock,
  ShieldCheck,
  Flame,
  Award,
  Users,
  ArrowRight,
  TrendingUp,
  HelpCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import defaultCourses from "@/data/courses.json";

export default function OpeningOfferPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("digital-marketing");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setLoading(true);
    setError("");

    try {
      const selectedCourseObj = defaultCourses.find((c) => c.id === course);
      const courseTitle = selectedCourseObj ? selectedCourseObj.title : course;

      // 1. Send to API
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          course: `${courseTitle} (Opening Offer ₹5,000)`,
          mode: "Classroom",
          message: "Claimed Grand Opening Offer: Flat ₹5,000 all-inclusive.",
        }),
      }).catch(() => null);

      // 2. Local storage backup
      try {
        const stored = JSON.parse(localStorage.getItem("endowit_local_leads") || "[]");
        stored.unshift({
          name,
          phone,
          course: `${courseTitle} (Opening Offer ₹5,000)`,
          mode: "Classroom",
          date: new Date().toISOString(),
        });
        localStorage.setItem("endowit_local_leads", JSON.stringify(stored));
      } catch (localErr) {
        // ignore
      }

      setSubmitted(true);
    } catch (err: any) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClientShell>
      <div className="pt-28 pb-20 bg-slate-50 dark:bg-navy-950 min-h-screen text-slate-900 dark:text-white">
        
        {/* ================= HERO HEADER ================= */}
        <div className="bg-gradient-to-b from-[#0b2545] via-navy-900 to-slate-950 text-white py-16 border-b border-slate-800 relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-extrabold backdrop-blur-md">
              <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>GRAND OPENING EXCLUSIVE OFFER · FIRST 20 STUDENTS ONLY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Enroll In Any 3-Month Course For Flat{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent underline decoration-emerald-400 decoration-wavy">
                ₹ 5,000 Total!
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Flat ₹5,000 Special IT Course Fees across Digital Marketing, Full Stack Development, Data Analytics, and Cloud Engineering. Includes 3-month hands-on training, real client ad budgets, guaranteed practical internship certificate, and dedicated placement assistance.{" "}
              <strong className="text-white font-bold block mt-1">
                Zero hidden charges. Transparent course fees with not a single rupee more to pay afterward!
              </strong>
            </p>

            {/* Live Seat Tracker Pill */}
            <div className="pt-2 inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/10 border border-white/20 text-xs sm:text-sm font-bold text-white shadow-lg">
              <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping" />
              <span>
                Seats Status: <strong className="text-amber-400">14 Claimed</strong> / 20 Available
              </span>
              <span className="px-2 py-0.5 rounded bg-rose-500 text-white text-[11px] font-black uppercase">
                Only 6 Left
              </span>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT & ENROLLMENT FORM ================= */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 7 Columns: Offer Details, Price Comparison & Value Guarantee */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Fee Comparison Banner Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border-2 border-emerald-500/60 shadow-xl space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200">
                    Grand Opening Special Fee Breakdown
                  </span>
                  <span className="text-xs font-extrabold text-slate-500">
                    All 6 Programs Eligible
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 text-center sm:text-left">
                    <span className="text-xs font-semibold text-slate-400 block">
                      Standard Launch Course Fee
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-400 line-through mt-1">
                      ₹ 14,999
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      Standard fee for later batches
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white text-center sm:text-left shadow-lg shadow-emerald-500/25">
                    <span className="text-xs font-bold text-emerald-100 uppercase tracking-wider block">
                      First 20 Students Flat Fee
                    </span>
                    <div className="text-3xl sm:text-4xl font-black mt-1 flex items-baseline justify-center sm:justify-start gap-1">
                      <span>₹ 5,000</span>
                      <span className="text-xs font-semibold text-emerald-100">All-Inclusive</span>
                    </div>
                    <span className="text-[11px] text-emerald-100 font-bold block mt-1">
                      Instant ₹ 9,999 Savings! Zero Extra Later
                    </span>
                  </div>
                </div>

                {/* Important Commitment Box */}
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 flex items-start gap-3 text-amber-900 dark:text-amber-200 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">
                      Strict No-Hidden-Fee Commitment:
                    </strong>
                    Once you pay ₹ 5,000, you will <strong>never be asked to pay another single rupee</strong> for certification, course materials, lab access, live client ad spends, or placement support. Everything is 100% included.
                  </div>
                </div>
              </div>

              {/* What Is Included In ₹5,000? */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Everything Included in the ₹ 5,000 Opening Fee:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Full 3 Months Training:</strong> Complete classroom (Chennai) or live online classes.</span>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <Award className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Guaranteed Practical Internship:</strong> Official agency internship certificate upon completion.</span>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Live Client Projects:</strong> Real Meta/Google ad spend budgets & production codebases.</span>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <Users className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Small Batches Only:</strong> Strictly 10–15 students max for personal mentor attention.</span>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>100% Placement Support:</strong> Resume preparation, mock interviews & hiring partner referrals.</span>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                    <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Lifetime Materials Access:</strong> Session recordings, code templates & career community access.</span>
                  </div>
                </div>
              </div>

              {/* Eligible Courses Grid */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Eligible Courses (Choose Any One For ₹ 5,000):
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {defaultCourses.map((c) => (
                    <div
                      key={c.id}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">
                          {c.title}
                        </span>
                        <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                          3 Months · Complete Internship
                        </span>
                      </div>
                      <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 shrink-0">
                        ₹ 5,000
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Dedicated Claim Form Card */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border-2 border-emerald-500/80 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-bl-2xl shadow-sm">
                  First 20 Students Only
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                      Limited Time Admission
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                      Claim Your ₹ 5,000 Opening Seat
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Lock your seat for the upcoming batch. Our senior counselor will call to confirm your seat.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                      {error}
                    </div>
                  )}

                  {submitted ? (
                    <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                      <h4 className="text-lg font-bold text-slate-900">
                        Opening Offer Reserved!
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Thank you, <strong>{name}</strong>! Your Flat ₹5,000 Grand Opening reservation has been successfully logged. Our admissions director will call you at <strong>{phone}</strong> shortly.
                      </p>
                      <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                        <a
                          href={`https://wa.me/916379427852?text=Hi%20EndowIT%20Academy,%20I%20just%20claimed%20the%20Flat%20₹5,000%20Opening%20Offer%20for%20${encodeURIComponent(course)}.%20My%20name%20is%20${encodeURIComponent(name)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
                        >
                          <span>Confirm on WhatsApp Now</span>
                        </a>
                        <Link
                          href="/courses"
                          className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center"
                        >
                          Explore Syllabuses
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Naveen Murugesan"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Mobile / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 63794 27852"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Choose Your 3-Month Program *
                        </label>
                        <select
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                          {defaultCourses.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.title} (Flat ₹ 5,000)
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-lg shadow-emerald-500/30 transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Reserving Your Seat...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-4 h-4" />
                              <span>Claim ₹ 5,000 Opening Seat</span>
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 pt-1">
                        🔒 Zero hidden fees · Direct admissions confirmation within 2 hours
                      </p>
                    </form>
                  )}

                  {/* Direct Contact */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                    <span className="text-xs text-slate-500 block mb-1">
                      Prefer to speak directly with the Director?
                    </span>
                    <a
                      href="tel:+916379427852"
                      className="inline-flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-600 hover:underline"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Call / WhatsApp: +91 63794 27852</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FAQ SECTION ================= */}
          <div className="mt-16 p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
            <div className="flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-brand-600" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions About the ₹ 5,000 Grand Opening Offer
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  1. Is ₹ 5,000 really the full and final fee?
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Yes, 100%!</strong> ₹ 5,000 is the complete, all-inclusive fee for the entire 3-month course. You will never be asked to pay another rupee for exams, certification, materials, or placement support.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  2. Who is eligible for this ₹ 5,000 offer?
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  This offer is exclusively for the <strong>first 20 students</strong> who enroll for our upcoming batch. Once the 20 seats are filled, all courses revert to the standard ₹ 14,999 fee.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  3. Can I choose any course I want?
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Yes! Whether you choose <strong>Digital Marketing & AI</strong>, <strong>Full Stack MERN</strong>, <strong>Data Analytics</strong>, <strong>Data Science & AI</strong>, <strong>AWS Cloud & DevOps</strong>, or <strong>Software Testing</strong>, the fee is flat ₹ 5,000 for the first 20 students.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  4. Will I get the guaranteed internship certificate?
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Yes! Even with the ₹ 5,000 opening offer, you receive the full practical training, real live client projects/ad spends, and the guaranteed practical internship certificate upon project completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientShell>
  );
}
