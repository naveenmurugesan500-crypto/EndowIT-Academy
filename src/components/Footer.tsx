import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Tag,
  Award,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: About & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="w-48 h-12 relative flex items-center bg-white/90 p-2 rounded-xl">
              <Image
                src="/logo.png"
                alt="EndowIT Academy"
                width={180}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-6">
              <strong>EndowIT Academy</strong> focuses on pure practical tech training.
              Having trained 100+ students online, we are now launching our Chennai physical tech lab with micro batches of 10–15 students, live client projects, and guaranteed practical internships.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Online & Offline Classes
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
                <Clock className="w-3.5 h-3.5 text-indigo-400" /> Weekend & Weekdays Batches
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                <Award className="w-3.5 h-3.5" /> Guaranteed Practical Internship
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/50">
                <CheckCircle2 className="w-3.5 h-3.5" /> Max 10-15 Students / Batch
              </span>
            </div>
          </div>

          {/* Col 2: Top Courses */}
          <div className="space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">
              Flagship Programs
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/courses/digital-marketing"
                  className="hover:text-brand-400 transition-colors flex items-center justify-between pr-4"
                >
                  <span>Digital Marketing & AI</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/full-stack-development"
                  className="hover:text-brand-400 transition-colors flex items-center justify-between pr-4"
                >
                  <span>Full Stack (MERN)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/data-analytics"
                  className="hover:text-brand-400 transition-colors flex items-center justify-between pr-4"
                >
                  <span>Data Analytics & BI</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/data-science-and-ai"
                  className="hover:text-brand-400 transition-colors flex items-center justify-between pr-4"
                >
                  <span>Data Science & AI</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/cloud-and-devops"
                  className="hover:text-brand-400 transition-colors flex items-center justify-between pr-4"
                >
                  <span>AWS & DevOps</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Policies */}
          <div className="space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">
              Quick Links & Policies
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/opening-offer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-amber-400 font-extrabold"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Grand Opening Offer (₹5,000)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses#pricing"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-emerald-400 font-semibold"
                >
                  <Tag className="w-3.5 h-3.5" />
                  <span>Fees & Pricing (Flat ₹14,999)</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-brand-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-400 transition-colors">
                  About Our Academy
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-brand-400 transition-colors">
                  All 3-Month Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 transition-colors">
                  Contact & Campus
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach Us */}
          <div className="space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">
              Campus & Contact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  XXXXXX, XXXXXX, Chennai, Tamil Nadu - XXXXXX
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href="tel:+916379427852"
                  className="hover:text-white transition-colors"
                >
                  +91 63794 27852
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href="mailto:admissions@endowitacademy.com"
                  className="hover:text-white transition-colors"
                >
                  admissions@endowitacademy.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Mon - Sun: 8:00 AM - 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} EndowIT Academy. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/opening-offer" className="hover:text-amber-400 font-bold text-amber-500">
              Grand Opening Offer (₹5,000)
            </Link>
            <Link href="/privacy-policy" className="hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-400">
              Terms & Conditions
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
