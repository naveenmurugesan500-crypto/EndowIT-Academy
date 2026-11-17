"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  PhoneCall,
  ShieldCheck,
  Award,
  ArrowRight,
  RefreshCw,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

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

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: "m_1",
      sender: "bot",
      text: "Vanakkam! 🙏 I am your **EndowIT Academy AI Advisor**. How can I help you today?",
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
      setUnreadCount(0);
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
        "Here is our quick recommendation based on your interest:\n\n• **For Coding & Software Engineering:** Full Stack Web Development (MERN Stack · React 19, Next.js, Node.js).\n• **For Non-Coders / Business / Creative:** Digital Marketing & AI Growth Strategy (Live Client Ad Spend).\n• **For Analytical Minds:** Data Analytics & BI (SQL, Python, Power BI, Excel).\n• **For Cloud Infrastructure:** AWS Cloud & DevOps Engineering.\n• **For QA & Quality:** Software Testing & Automation (Selenium + Playwright).\n\nAll courses are strictly **3 Months**, limited to **10–15 students/batch**, with a guaranteed **3-Month Practical Internship**!",
      quickReplies: ["Tell me about fees", "Book a Free Demo", "Where is the lab?"],
      actionLink: { label: "Explore All 6 Courses", href: "/courses" },
    },
    {
      keywords: ["fee", "cost", "price", "5000", "5k", "offer", "discount", "opening offer"],
      reply:
        "🎉 **Grand Opening Special Offer:**\n\n• **Flat ₹5,000 All-Inclusive** for the first 20 enrolled students across any track!\n• **Standard Launch Fee:** ₹14,999 (Regular price for later batches).\n• **Zero Hidden Fees:** Live client ad budget, lab workstation, and dual certifications are 100% included.\n• Split installment options are also available!",
      quickReplies: ["Claim ₹5,000 Offer Now", "Course Duration?", "Book Free Demo"],
      actionLink: { label: "View ₹5,000 Offer Details", href: "/opening-offer" },
    },
    {
      keywords: ["internship", "practical", "live project", "client", "experience"],
      reply:
        "Every student receives an authentic **3-Month Practical Internship Certificate** alongside their Course Completion Certificate!\n\n• You don't do fake dummy projects—you work on **real client repositories and active ad accounts with real ad budgets**.\n• Deliverables include code reviews, live SaaS deployments, and full-funnel ad campaigns.",
      quickReplies: ["How to verify certificate?", "Course list", "Book a Demo"],
      actionLink: { label: "Learn About Certifications", href: "/certifications" },
    },
    {
      keywords: ["verify", "certificate", "qr", "qr code", "code", "authenticity", "check"],
      reply:
        "You can verify any EndowIT Academy credential in two ways:\n\n1. **Scan the QR Code** printed on the certificate using your phone camera.\n2. **Search by Certificate ID** (e.g. `EIT-CC-2026-0101` or `EIT-INT-2026-0101`) on our public portal.\n\nEmployers and HR recruiters can verify authenticity 24/7!",
      quickReplies: ["Try Verification Portal", "Which courses have certificates?"],
      actionLink: { label: "Open Verification Portal", href: "/verify" },
    },
    {
      keywords: ["demo", "counseling", "trial", "visit", "join", "enroll", "book"],
      reply:
        "You can attend a **Free 1-on-1 Practical Demo Class** before enrolling!\n\n• Experience our classroom hands-on lab environment in Chennai or join online.\n• Our senior mentors will walk you through the practical roadmap and tools.\n\nWould you like to connect right now via WhatsApp or call our admissions desk?",
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
        "📍 **EndowIT Academy Practical Tech Lab:**\n\n• **Location:** Anna Nagar / Koyambedu Tech Corridor, Chennai, Tamil Nadu.\n• **Training Modes:** Intensive Classroom Lab (Physical) & Live Interactive Online.\n• **Batch Size:** Strictly capped at 10–15 students for personal mentor attention.",
      quickReplies: ["Book Free Demo", "Contact Info", "View Courses"],
      actionLink: { label: "View Contact & Map", href: "/contact" },
    },
    {
      keywords: ["contact", "phone", "call", "whatsapp", "email", "support", "mentor"],
      reply:
        "You can reach our admissions and technical counseling team anytime:\n\n📞 **Direct Line:** +91 63794 27852\n💬 **WhatsApp:** +91 63794 27852\n✉️ **Email:** admissions@endowitacademy.com\n\nWe typically respond within 15 minutes!",
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

      // Find matching canned knowledge
      const matched = botResponses.find((r) =>
        r.keywords.some((k) => qLower.includes(k))
      );

      let botReply: Message;

      if (matched) {
        botReply = {
          id: "b_" + Date.now(),
          sender: "bot",
          text: matched.reply,
          timestamp: "Just now",
          quickReplies: matched.quickReplies,
          actionLink: matched.actionLink,
        };
      } else {
        // Fallback friendly reply
        botReply = {
          id: "b_" + Date.now(),
          sender: "bot",
          text: `Thank you for asking! EndowIT Academy specializes in **3-month 100% practical IT & Digital Marketing training** with real client internships.\n\nYou can chat directly with our senior mentor on WhatsApp at **+91 63794 27852** for immediate answers!`,
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
      {/* 1. FLOATING CHAT TRIGGER BUTTON */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-700 hover:from-brand-500 hover:to-indigo-600 text-white shadow-2xl shadow-brand-700/40 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20"
          aria-label="Open EndowIT AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-amber-300 animate-bounce" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-brand-800" />
          </div>

          <div className="text-left hidden sm:block">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-200 leading-none">
              AI Student Advisor
            </span>
            <span className="text-xs font-bold leading-tight">
              Ask EndowIT AI
            </span>
          </div>

          {unreadCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-amber-400 text-brand-950 text-[10px] font-black flex items-center justify-center shadow-sm">
              1
            </span>
          )}
        </button>
      )}

      {/* 2. CHATBOT WINDOW DIALOG */}
      {isOpen && (
        <div className="relative w-[92vw] sm:w-[380px] md:w-[410px] h-[520px] max-h-[85vh] bg-white dark:bg-navy-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-fade-in text-slate-900 dark:text-white">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-brand-700 via-brand-800 to-indigo-900 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 shadow-inner">
                <Bot className="w-6 h-6" />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-brand-800" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold flex items-center gap-1.5 leading-none">
                  <span>EndowIT AI Advisor</span>
                  <span className="text-[10px] font-bold bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30">
                    Online
                  </span>
                </h3>
                <p className="text-[11px] text-brand-200 mt-1">
                  Instant Help · 24/7 Practical Course Guide
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
          <div className="px-4 py-2 bg-brand-50 dark:bg-navy-950 border-b border-brand-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-brand-800 dark:text-brand-300 font-semibold">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Grand Opening Offer: Flat ₹5,000 Fee Active</span>
            </span>
            <Link
              href="/opening-offer"
              onClick={() => setIsOpen(false)}
              className="underline font-bold text-brand-700 hover:text-brand-900"
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
                  <div className="w-7 h-7 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 flex items-center justify-center shrink-0 border border-brand-200">
                    <Bot className="w-4 h-4" />
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
                    {m.text}
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
                <span>Advisor is typing...</span>
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
              placeholder="Ask about courses, fees, or internships..."
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
