"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeadModal from "./LeadModal";
import {
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";

interface ClientShellProps {
  children: React.ReactNode;
}

export default function ClientShell({ children }: ClientShellProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<
    string | undefined
  >(undefined);

  const handleOpenDemoModal = (courseName?: string) => {
    setSelectedCourseForModal(courseName);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header onOpenDemoModal={() => handleOpenDemoModal()} />

      <main className="flex-1">{children}</main>

      <Footer />

      {/* Unified Floating Social Media & WhatsApp Dock (Fixed Bottom-Right Corner) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-1.5 p-2 rounded-2xl bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-2xl shadow-slate-900/20 transition-all hover:shadow-brand-500/20">
        {/* WhatsApp Main Quick Action Button */}
        <a
          href="https://wa.me/916379427852?text=Hi%20EndowIT%20Academy,%20I%20would%20like%20to%20know%20about%20your%20courses%20and%20the%20Grand%20Opening%20Offer."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/30 hover:scale-105 transition-all text-xs font-bold"
          title="Chat on WhatsApp"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl text-slate-500 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/40 transition-all"
          title="Instagram"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all"
          title="Facebook"
          aria-label="Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-all"
          title="YouTube"
          aria-label="YouTube"
        >
          <Youtube className="w-4 h-4" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl text-slate-500 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>

      <LeadModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultCourse={selectedCourseForModal}
      />
    </div>
  );
}
