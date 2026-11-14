"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeadModal from "./LeadModal";
import { MessageSquare, Phone } from "lucide-react";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
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

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href="https://wa.me/916379427852?text=Hi%20EndowIT%20Academy,%20I%20would%20like%20to%20know%20about%20your%20courses%20and%20upcoming%20batches."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all text-xs font-bold"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">Chat on WhatsApp</span>
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
