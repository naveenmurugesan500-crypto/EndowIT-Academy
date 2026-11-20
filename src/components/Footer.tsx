import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  CheckCircle2,
  Tag,
  Award,
  Sparkles,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-600 pt-14 pb-0 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[96%] xl:max-w-[94%] 2xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Top of Footer: Contact Helpline & Social Media Links */}
        <div className="pb-10 mb-12 border-b border-slate-200/90">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Contact Helpline */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200/80 text-brand-600 flex items-center justify-center shrink-0 shadow-sm">
                <PhoneCall className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Have Questions? Talk to Our Course Advisor
                </span>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-1">
                  <a
                    href="tel:+916379427852"
                    className="text-lg sm:text-xl font-extrabold text-slate-900 hover:text-brand-600 transition-colors tracking-tight flex items-center gap-1.5"
                  >
                    <span>+91 63794 27852</span>
                  </a>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                    Mon - Sun: 8:00 AM - 8:30 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Social Media Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">
                Follow Us:
              </span>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  href="https://instagram.com/endowit_academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-300 text-slate-600 hover:text-pink-600 flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/endowitacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@endowitacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 text-slate-600 hover:text-red-600 flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  title="YouTube"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/endowit-academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-blue-700 flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/90">
          {/* Col 1: About & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="w-48 h-12 relative flex items-center bg-white p-2 rounded-xl border border-slate-200/80 shadow-sm">
              <Image
                src="/logo.png"
                alt="EndowIT Academy - 100% Practical IT Training & Internship Institute"
                width={180}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
              <strong className="text-slate-900">EndowIT Academy</strong> focuses on pure practical tech training.
              Having trained 100+ students online, we are now launching our Chennai physical tech lab with micro batches of 10–15 students, live client projects, and guaranteed practical internships.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" /> Online & Offline Classes
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200/80">
                <Clock className="w-3.5 h-3.5 text-indigo-600" /> Weekend & Weekdays Batches
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                <Award className="w-3.5 h-3.5 text-emerald-600" /> Guaranteed Practical Internship
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Max 10-15 Students / Batch
              </span>
            </div>
          </div>

          {/* Col 2: Top Courses */}
          <div className="space-y-3">
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider">
              Flagship Programs
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/courses/digital-marketing"
                  className="hover:text-brand-600 transition-colors flex items-center justify-between pr-4"
                >
                  <span>Digital Marketing & AI</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/full-stack-development"
                  className="hover:text-brand-600 transition-colors flex items-center justify-between pr-4"
                >
                  <span>Full Stack (MERN)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/data-analytics"
                  className="hover:text-brand-600 transition-colors flex items-center justify-between pr-4"
                >
                  <span>Data Analytics & BI</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/data-science-and-ai"
                  className="hover:text-brand-600 transition-colors flex items-center justify-between pr-4"
                >
                  <span>Data Science & AI</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/cloud-and-devops"
                  className="hover:text-brand-600 transition-colors flex items-center justify-between pr-4"
                >
                  <span>AWS & DevOps</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Policies */}
          <div className="space-y-3">
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider">
              Quick Links & Policies
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/opening-offer" className="hover:text-brand-600 transition-colors">
                  Opening Offer
                </Link>
              </li>
              <li>
                <Link href="/courses#pricing" className="hover:text-brand-600 transition-colors">
                  Fees & Structure
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-brand-600 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/verify" className="hover:text-brand-600 text-emerald-700 font-semibold transition-colors flex items-center gap-1">
                  <span>Verify Certificate</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-brand-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-600 transition-colors">
                  About Our Academy
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-brand-600 transition-colors">
                  All 3-Month Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-600 transition-colors">
                  Contact & Campus
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach Us */}
          <div className="space-y-3">
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider">
              Campus & Contact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>
                  XXXXXX, XXXXXX, Chennai, Tamil Nadu - XXXXXX
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                <a
                  href="mailto:admissions@endowitacademy.com"
                  className="hover:text-brand-600 transition-colors"
                >
                  admissions@endowitacademy.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Mon - Sun: 8:00 AM - 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} EndowIT Academy. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/opening-offer" className="hover:text-brand-600 transition-colors">
              Opening Offer
            </Link>
            <Link href="/certifications" className="hover:text-brand-600 transition-colors">
              Certifications
            </Link>
            <Link href="/verify" className="hover:text-brand-600 text-emerald-700 font-semibold transition-colors">
              Verify Certificate
            </Link>
            <Link href="/privacy-policy" className="hover:text-brand-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-brand-600 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap.xml" className="hover:text-brand-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Second Half: Grand Lower Section with Subtle 'EndowIT' Architectural Watermark (<25% opacity) */}
      <div className="mt-8 border-t border-slate-200/80 bg-gradient-to-b from-slate-100/60 via-slate-50 to-white relative overflow-hidden select-none pointer-events-none py-6 sm:py-10 md:py-12">
        {/* Soft ambient brand glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[140px] bg-brand-500/[0.04] blur-3xl rounded-full" />
        </div>

        {/* Massive 'EndowIT' Typography */}
        <div className="w-full flex items-center justify-center overflow-hidden px-4">
          <span
            className="text-[14vw] sm:text-[13vw] md:text-[12vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-900/[0.14] via-slate-900/[0.07] to-slate-900/[0.02] text-center select-none"
            aria-hidden="true"
          >
            EndowIT
          </span>
        </div>
      </div>
    </footer>
  );
}
