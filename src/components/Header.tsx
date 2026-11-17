"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  GraduationCap,
  Sparkles,
  Code2,
  BrainCircuit,
  BarChart3,
  TrendingUp,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface HeaderProps {
  onOpenDemoModal?: () => void;
}

export default function Header({ onOpenDemoModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [pathname]);

  const courseList = [
    {
      name: "Digital Marketing & AI Growth",
      slug: "digital-marketing",
      desc: "Run live Meta and Google ad campaigns with real budget. Master SEO, content, and analytics.",
      icon: TrendingUp,
      color: "text-orange-500",
    },
    {
      name: "Full Stack Web Development",
      slug: "full-stack-development",
      desc: "Build full-stack web apps with React, Node.js, and MongoDB. Deploy production code to the cloud.",
      icon: Code2,
      color: "text-blue-500",
    },
    {
      name: "Data Analytics & BI",
      slug: "data-analytics",
      desc: "Clean, analyze, and visualize business data using SQL, Excel, Power BI, and Tableau dashboards.",
      icon: BarChart3,
      color: "text-emerald-500",
    },
    {
      name: "Data Science & AI",
      slug: "data-science-and-ai",
      desc: "Work with Python, machine learning models, and real Generative AI tools on practical datasets.",
      icon: BrainCircuit,
      color: "text-purple-500",
    },
    {
      name: "AWS & DevOps Engineering",
      slug: "cloud-and-devops",
      desc: "Deploy, scale, and manage cloud infrastructure using AWS services, Docker containers, and CI/CD.",
      icon: Cloud,
      color: "text-cyan-500",
    },
    {
      name: "Software Testing & Automation",
      slug: "software-testing",
      desc: "Learn manual testing, write automation test scripts in Selenium, and test backend APIs with Postman.",
      icon: CheckCircle2,
      color: "text-rose-500",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-navy-950/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200 dark:border-slate-800"
          : "bg-white/85 dark:bg-navy-950/85 backdrop-blur-sm py-4 border-b border-slate-100 dark:border-slate-800/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-44 h-12 flex items-center">
              <Image
                src="/logo.png"
                alt="EndowIT Academy"
                width={180}
                height={50}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors hover:text-brand-600 ${
                pathname === "/"
                  ? "text-brand-600 font-bold"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              Home
            </Link>

            {/* Courses Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-brand-600 ${
                  pathname.startsWith("/courses")
                    ? "text-brand-600 font-bold"
                    : "text-slate-700 dark:text-slate-200"
                }`}
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              >
                <span>Courses</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    coursesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {coursesDropdownOpen && (
                <div className="absolute top-full -left-20 pt-3 w-[640px] transition-all duration-200">
                  <div className="bg-white dark:bg-navy-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 grid grid-cols-2 gap-3">
                    <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                        <GraduationCap className="w-4 h-4 text-brand-600" />
                        <span>All Courses Include Guaranteed Internship</span>
                      </div>
                      <Link
                        href="/courses"
                        className="text-xs font-semibold text-brand-600 hover:underline flex items-center gap-1"
                      >
                        View all <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {courseList.map((c) => {
                      const IconComponent = c.icon;
                      return (
                        <Link
                          key={c.slug}
                          href={`/courses/${c.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group/item border border-transparent hover:border-slate-200/60"
                        >
                          <div
                            className={`p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover/item:bg-white dark:group-hover/item:bg-slate-700 shadow-sm shrink-0 mt-0.5 ${c.color}`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover/item:text-brand-600 transition-colors">
                              {c.name}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                              {c.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors hover:text-brand-600 ${
                pathname === "/about"
                  ? "text-brand-600 font-bold"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/blog"
              className={`text-sm font-semibold transition-colors hover:text-brand-600 ${
                pathname.startsWith("/blog")
                  ? "text-brand-600 font-bold"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/verify"
              className={`text-sm font-semibold transition-colors hover:text-brand-600 flex items-center gap-1.5 ${
                pathname === "/verify"
                  ? "text-brand-600 font-bold"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verify Certificate</span>
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors hover:text-brand-600 ${
                pathname === "/contact"
                  ? "text-brand-600 font-bold"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+916379427852"
              className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-brand-600 transition-colors"
            >
              <div className="p-2 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <span>+91 63794 27852</span>
            </a>

            <button
              onClick={onOpenDemoModal}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-700 via-brand-600 to-accent-cyan shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Demo</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-brand-600"
            >
              Free Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="p-2 font-semibold text-slate-800 dark:text-slate-100 rounded-lg hover:bg-slate-100"
            >
              Home
            </Link>

            <div className="border-t border-b border-slate-100 dark:border-slate-800 py-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">
                Our Programs
              </span>
              <div className="mt-2 space-y-1">
                {courseList.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    className="flex flex-col p-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <span className="text-sm font-semibold">{c.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                      {c.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="p-2 font-semibold text-slate-800 dark:text-slate-100 rounded-lg hover:bg-slate-100"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="p-2 font-semibold text-slate-800 dark:text-slate-100 rounded-lg hover:bg-slate-100"
            >
              Blog
            </Link>
            <Link
              href="/verify"
              className="p-2 font-semibold text-emerald-700 dark:text-emerald-400 rounded-lg hover:bg-slate-100 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verify Certificate</span>
            </Link>
            <Link
              href="/contact"
              className="p-2 font-semibold text-slate-800 dark:text-slate-100 rounded-lg hover:bg-slate-100"
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <a
                href="tel:+916379427852"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-brand-600 text-brand-600 font-bold text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Admissions: +91 63794 27852</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
