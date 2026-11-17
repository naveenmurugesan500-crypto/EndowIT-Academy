"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  X,
  Send,
  Sparkles,
  User,
  PhoneCall,
  ShieldCheck,
  Award,
  ArrowRight,
  RefreshCw,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

// Cute 3D Toy Robot Mascot Avatar ("பொம்மை மாதிரி" AI Buddy - Endovi)
function EndoviMascot({ className = "w-10 h-10", animated = false }: { className?: string; animated?: boolean }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className} ${animated ? "animate-pulse" : ""}`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          {/* Head 3D Gradient */}
          <linearGradient id="robotHeadGrad" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Screen Visor Gradient */}
          <linearGradient id="visorGrad" x1="30" y1="40" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          {/* Glowing Eyes Gradient */}
          <linearGradient id="eyeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Headphone Ears Gradient */}
          <linearGradient id="earGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>

          {/* Antenna Glow */}
          <radialGradient id="antennaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#eab308" />
          </radialGradient>
        </defs>

        {/* Headphone Arch */}
        <path
          d="M25 58 C25 22 95 22 95 58"
          stroke="url(#earGrad)"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Antenna Pole & Glowing Tip */}
        <line x1="60" y1="25" x2="60" y2="12" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="10" r="7" fill="url(#antennaGlow)" stroke="#fef08a" strokeWidth="1.5" />

        {/* Main Cute Rounded Robot Head */}
        <rect
          x="22"
          y="30"
          width="76"
          height="66"
          rx="26"
          fill="url(#robotHeadGrad)"
          stroke="#94a3b8"
          strokeWidth="2.5"
        />

        {/* Left Headphone Ear Cap */}
        <rect x="15" y="48" width="10" height="28" rx="5" fill="url(#earGrad)" stroke="#1e40af" strokeWidth="1.5" />
        {/* Right Headphone Ear Cap */}
        <rect x="95" y="48" width="10" height="28" rx="5" fill="url(#earGrad)" stroke="#1e40af" strokeWidth="1.5" />

        {/* Visor Screen */}
        <rect
          x="30"
          y="42"
          width="60"
          height="42"
          rx="16"
          fill="url(#visorGrad)"
          stroke="#334155"
          strokeWidth="1.5"
        />

        {/* Left Big Happy Eye */}
        <circle cx="46" cy="58" r="7" fill="url(#eyeGrad)" />
        {/* Eye Twinkle Sparkle */}
        <circle cx="44" cy="56" r="2.5" fill="#ffffff" />

        {/* Right Big Happy Eye */}
        <circle cx="74" cy="58" r="7" fill="url(#eyeGrad)" />
        {/* Eye Twinkle Sparkle */}
        <circle cx="72" cy="56" r="2.5" fill="#ffffff" />

        {/* Rosy Cheeks (Cute doll blush) */}
        <ellipse cx="38" cy="68" rx="3.5" ry="2" fill="#f472b6" opacity="0.8" />
        <ellipse cx="82" cy="68" rx="3.5" ry="2" fill="#f472b6" opacity="0.8" />

        {/* Cute Smiling Mouth */}
        <path
          d="M52 70 Q60 77 68 70"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickReplies?: string[];
  actionLink?: {
    label: string;
    href: string;
    external?: boolean;
  };
}

// Helper to remove any markdown asterisks completely so text looks completely clean and natural
function sanitizeCleanText(text: string): string {
  return text.replace(/\*\*/g, "").replace(/\*/g, "");
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: "m_1",
      sender: "bot",
      text: "Vanakkam! 🙏 I am Endovi, your 24/7 AI Academy Buddy at EndowIT! How can I help you today?",
      timestamp: "Just now",
      quickReplies: [
        "🎓 Which course is best for me?",
        "💰 ₹5,000 Grand Opening Offer",
        "💼 How does the Internship work?",
        "📜 Verify a Certificate",
        "📞 Talk to an Admissions Mentor",
      ],
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setShowBubble(false);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const botResponses: {
    keywords: string[];
    reply: string;
    quickReplies?: string[];
    actionLink?: { label: string; href: string; external?: boolean };
  }[] = [
    {
      keywords: ["which course", "choose", "recommend", "best course", "career", "guidance"],
      reply:
        "Here is our quick recommendation based on your interest:\n\n• For Coding & Software Engineering: Full Stack Web Development (MERN Stack - React 19, Next.js, Node.js).\n• For Non-Coders / Business / Creative: Digital Marketing & AI Growth Strategy (Live Client Ad Spend).\n• For Analytical Minds: Data Analytics & BI (SQL, Python, Power BI, Excel).\n• For Cloud Infrastructure: AWS Cloud & DevOps Engineering.\n• For QA & Quality: Software Testing & Automation (Selenium + Playwright).\n\nAll courses are strictly 3 Months, limited to 10–15 students per batch, with a guaranteed 3-Month Practical Internship!",
      quickReplies: ["Tell me about fees", "Book a Free Demo", "Where is the lab?"],
      actionLink: { label: "Explore All 6 Courses", href: "/courses" },
    },
    {
      keywords: ["fee", "cost", "price", "5000", "5k", "offer", "discount", "opening offer"],
      reply:
        "🎉 Grand Opening Special Offer:\n\n• Flat ₹5,000 All-Inclusive for the first 20 enrolled students across any track!\n• Standard Launch Fee: ₹14,999 (Regular price for later batches).\n• Zero Hidden Fees: Live client ad budget, lab workstation, and dual certifications are 100% included.\n• Split installment options are also available!",
      quickReplies: ["Claim ₹5,000 Offer Now", "Course Duration?", "Book Free Demo"],
      actionLink: { label: "View ₹5,000 Offer Details", href: "/opening-offer" },
    },
    {
      keywords: ["internship", "practical", "live project", "client", "experience"],
      reply:
        "Every student receives an authentic 3-Month Practical Internship Certificate alongside their Course Completion Certificate!\n\n• You do not do dummy projects—you work on real client repositories and active ad accounts with real ad budgets.\n• Deliverables include code reviews, live SaaS deployments, and full-funnel ad campaigns.",
      quickReplies: ["How to verify certificate?", "Course list", "Book a Demo"],
      actionLink: { label: "Learn About Certifications", href: "/certifications" },
    },
    {
      keywords: ["verify", "certificate", "qr", "qr code", "code", "authenticity", "check"],
      reply:
        "You can verify any EndowIT Academy credential in two ways:\n\n1. Scan the QR Code printed on the certificate using your phone camera.\n2. Search by Certificate ID (e.g. EIT-CC-2026-0101 or EIT-INT-2026-0101) on our public portal.\n\nEmployers and HR recruiters can verify authenticity 24/7!",
      quickReplies: ["Try Verification Portal", "Which courses have certificates?"],
      actionLink: { label: "Open Verification Portal", href: "/verify" },
    },
    {
      keywords: ["demo", "counseling", "trial", "visit", "join", "enroll", "book"],
      reply:
        "You can attend a Free 1-on-1 Practical Demo Class before enrolling!\n\n• Experience our classroom hands-on lab environment in Chennai or join online.\n• Our senior mentors will walk you through the practical roadmap and tools.\n\nWould you like to connect right now via WhatsApp or call our admissions desk?",
      quickReplies: ["Chat on WhatsApp", "Call Admissions", "View Syllabus"],
      actionLink: {
        label: "Chat with Mentor on WhatsApp",
        href: "https://wa.me/916379427852?text=Hi%20EndowIT%20Academy,%20I%20would%20like%20to%20book%20a%20free%20demo%20session.",
        external: true,
      },
    },
    {
      keywords: ["location", "address", "where", "chennai", "offline", "classroom", "lab"],
      reply:
        "📍 EndowIT Academy Practical Tech Lab:\n\n• Location: Anna Nagar / Koyambedu Tech Corridor, Chennai, Tamil Nadu.\n• Training Modes: Intensive Classroom Lab (Physical) & Live Interactive Online.\n• Batch Size: Strictly capped at 10–15 students for personal mentor attention.",
      quickReplies: ["Book Free Demo", "Contact Info", "View Courses"],
      actionLink: { label: "View Contact & Map", href: "/contact" },
    },
    {
      keywords: ["contact", "phone", "call", "whatsapp", "email", "support", "mentor"],
      reply:
        "You can reach our admissions and technical counseling team anytime:\n\n📞 Direct Line: +91 63794 27852\n💬 WhatsApp: +91 63794 27852\n✉️ Email: admissions@endowitacademy.com\n\nWe typically respond within 15 minutes!",
      actionLink: {
        label: "Direct WhatsApp Message",
        href: "https://wa.me/916379427852?text=Hello%20EndowIT%20Academy,%20I%20have%20an%20admission%20query.",
        external: true,
      },
    },
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: "u_" + Date.now(),
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const qLower = query.toLowerCase();

      const matched = botResponses.find((r) =>
        r.keywords.some((k) => qLower.includes(k))
      );

      let botReply: Message;

      if (matched) {
        botReply = {
          id: "b_" + Date.now(),
          sender: "bot",
          text: sanitizeCleanText(matched.reply),
          timestamp: "Just now",
          quickReplies: matched.quickReplies,
          actionLink: matched.actionLink,
        };
      } else {
        botReply = {
          id: "b_" + Date.now(),
          sender: "bot",
          text: `Thank you for asking! EndowIT Academy specializes in 3-month 100% practical IT & Digital Marketing training with real client internships.\n\nYou can chat directly with our senior mentor on WhatsApp at +91 63794 27852 for immediate answers!`,
          timestamp: "Just now",
          quickReplies: [
            "🎓 Explore 6 Courses",
            "💰 ₹5,000 Grand Opening Offer",
            "📜 Verify a Certificate",
            "📞 Chat on WhatsApp",
          ],
          actionLink: {
            label: "Connect on WhatsApp Now",
            href: `https://wa.me/916379427852?text=Hi%20EndowIT%20Academy,%20I%20asked:%20${encodeURIComponent(query)}`,
            external: true,
          },
        };
      }

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-50">
      {/* 1. CUTE FLOATING MASCOT BUTTON ("பொம்மை மாதிரி" Toy Robot Launcher - Endovi) */}
      {!isOpen && (
        <div className="relative flex flex-col items-start gap-2">
          {/* Cute Speech Bubble Popover */}
          {showBubble && (
            <div className="relative animate-bounce bg-white dark:bg-navy-900 text-slate-800 dark:text-white px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-xs font-bold flex items-center gap-2">
              <span>Hi! I am Endovi 👋 Need help?</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBubble(false);
                }}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded-md"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              {/* Bubble Arrow */}
              <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white dark:bg-navy-900 border-b border-r border-slate-200 dark:border-slate-800 rotate-45" />
            </div>
          )}

          {/* Floating Mascot Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 p-2 pr-4 rounded-full bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700 hover:from-brand-500 hover:to-indigo-500 text-white shadow-2xl shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/30"
            aria-label="Open Endovi Assistant"
          >
            {/* 3D Toy Robot Mascot Icon */}
            <div className="relative w-11 h-11 rounded-full bg-white/20 p-1 backdrop-blur-sm border border-white/40 shadow-inner flex items-center justify-center group-hover:rotate-6 transition-transform">
              <EndoviMascot className="w-9 h-9" animated={false} />
              {/* Online Green Indicator */}
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-brand-800 animate-pulse" />
            </div>

            <div className="text-left hidden sm:block">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-amber-300 leading-none">
                Endovi · AI Buddy
              </span>
              <span className="text-xs font-bold leading-tight flex items-center gap-1 mt-0.5">
                <span>Ask Anything</span>
                <Sparkles className="w-3 h-3 text-amber-300" />
              </span>
            </div>
          </button>
        </div>
      )}

      {/* 2. CHATBOT WINDOW DIALOG */}
      {isOpen && (
        <div className="relative w-[92vw] sm:w-[380px] md:w-[410px] h-[520px] max-h-[85vh] bg-white dark:bg-navy-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-fade-in text-slate-900 dark:text-white">
          {/* Header with Mascot Doll */}
          <div className="p-3.5 bg-gradient-to-r from-brand-700 via-indigo-700 to-brand-800 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="relative w-11 h-11 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center shadow-inner">
                <EndoviMascot className="w-9 h-9" />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-brand-800" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold flex items-center gap-1.5 leading-none">
                  <span>Endovi</span>
                  <span className="text-[10px] font-bold bg-amber-400 text-brand-950 px-2 py-0.5 rounded-full">
                    AI Buddy
                  </span>
                </h3>
                <p className="text-[11px] text-brand-200 mt-1">
                  24/7 Practical Course Guide · Online
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages(initialMessages)}
                className="p-1.5 rounded-xl hover:bg-white/15 text-brand-200 hover:text-white transition-colors"
                title="Restart Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/15 text-brand-200 hover:text-white transition-colors"
                title="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="px-4 py-2 bg-indigo-50/80 dark:bg-navy-950 border-b border-indigo-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-indigo-900 dark:text-indigo-300 font-semibold">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Opening Offer: Flat ₹5,000 for First 20 Seats</span>
            </span>
            <Link
              href="/opening-offer"
              onClick={() => setIsOpen(false)}
              className="underline font-bold text-indigo-700 hover:text-indigo-900"
            >
              Claim
            </Link>
          </div>

          {/* Message List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-slate-50/60 dark:bg-navy-950/40">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "bot" && (
                  <div className="w-8 h-8 rounded-xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-slate-700 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                    <EndoviMascot className="w-7 h-7" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-2`}>
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-line shadow-xs ${
                      m.sender === "user"
                        ? "bg-brand-600 text-white rounded-tr-none font-medium"
                        : "bg-white dark:bg-navy-900 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-800 rounded-tl-none font-normal"
                    }`}
                  >
                    {sanitizeCleanText(m.text)}
                  </div>

                  {/* Optional Action Link Card */}
                  {m.actionLink && (
                    <div>
                      {m.actionLink.external ? (
                        <a
                          href={m.actionLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-sm transition-all"
                        >
                          <span>{m.actionLink.label}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <Link
                          href={m.actionLink.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-[11px] border border-brand-200 transition-colors"
                        >
                          <span>{m.actionLink.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  )}

                  {/* Quick Reply Pills */}
                  {m.quickReplies && m.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {m.quickReplies.map((q, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSend(q)}
                          className="px-2.5 py-1 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 hover:text-brand-600 font-medium text-[11px] text-slate-600 dark:text-slate-300 shadow-xs transition-colors"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="block text-[10px] text-slate-400 dark:text-slate-500 text-right">
                    {m.timestamp}
                  </span>
                </div>

                {m.sender === "user" && (
                  <div className="w-7 h-7 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-9">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
                <span>Endovi is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Endovi about courses, fees, offers..."
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-950 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white disabled:opacity-40 transition-colors shadow-sm"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
