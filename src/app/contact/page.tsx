"use client";

import React, { useState } from "react";
import ClientShell from "@/components/ClientShell";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("Full Stack Web Development");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          course,
          message,
          mode: "Classroom",
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to send inquiry. Please try again or call directly.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit. Please call admissions directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClientShell>
      <div className="pt-24 pb-20 bg-slate-50 dark:bg-navy-950">
        {/* Banner */}
        <div className="bg-gradient-to-b from-brand-950 via-navy-900 to-slate-950 text-white py-20 text-center border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-200 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span>We Are Here to Help Your Tech Career</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Get in Touch with EndowIT Academy
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Have questions about course syllabi, fee structures, batch schedules, or corporate training? Reach out to our admissions team.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Campus Address & Direct Lines
                </h3>

                <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 dark:text-white font-semibold">
                        Chennai Campus
                      </strong>
                      <span>
                        XXXXXX, XXXXXX, Chennai, Tamil Nadu - XXXXXX
                      </span>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 dark:text-white font-semibold">
                        Phone Admissions
                      </strong>
                      <a
                        href="tel:+916379427852"
                        className="text-brand-600 font-bold hover:underline"
                      >
                        +91 63794 27852
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 dark:text-white font-semibold">
                        Email Support
                      </strong>
                      <a
                        href="mailto:admissions@endowitacademy.com"
                        className="text-brand-600 hover:underline"
                      >
                        admissions@endowitacademy.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 dark:text-white font-semibold">
                        Working Hours
                      </strong>
                      <span>Monday – Sunday: 8:00 AM – 8:30 PM</span>
                    </div>
                  </li>
                </ul>

                <div className="pt-2">
                  <a
                    href="https://wa.me/916379427852"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Instant Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Campus Directions / Map Placeholder */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                <iframe
                  title="EndowIT Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8931557076127!2d80.2173!3d12.9772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8b8e0e683b%3A0xb36341498ecaeec9!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Inquiries Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                    Send Us a Message
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    Book Free Counseling & Request Fee Structure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill out the form below. Our career mentor will contact you within 30 minutes.
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    {error}
                  </div>
                )}

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold text-slate-900">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Thank you for contacting EndowIT Academy. Our admissions team has received your message and will call you at <strong>{phone}</strong> shortly.
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/916379427852?text=Hi%20EndowIT%20Academy,%20I%20just%20sent%20a%20message%20on%20your%20website%20regarding%20${encodeURIComponent(course)}.%20My%20name%20is%20${encodeURIComponent(name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/20"
                      >
                        <span>Chat on WhatsApp Directly</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 63794 27852"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@email.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Course Interested
                        </label>
                        <select
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        >
                          <option value="Full Stack Web Development">Full Stack Web Development</option>
                          <option value="Data Science & Artificial Intelligence">Data Science & AI</option>
                          <option value="Data Analytics & BI">Data Analytics (Power BI/SQL)</option>
                          <option value="Digital Marketing & AI Growth">Digital Marketing & AI</option>
                          <option value="AWS & DevOps Engineering">AWS & DevOps Engineering</option>
                          <option value="Software Testing & Automation">Software Testing (Selenium)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Any Questions or Specific Requirements?
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your educational background, preferred batch timing (Weekend/Weekday), or learning goals..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-navy-950 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-700 via-brand-600 to-accent-cyan shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Inquiry & Get Callback</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientShell>
  );
}
