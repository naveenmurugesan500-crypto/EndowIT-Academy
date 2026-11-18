// Smart Conversational AI Buddy Engine for "Endovi"
// Handles friendly casual conversations (like WhatsApp / ChatGPT / Gemini)
// in English, Tamil & Tanglish with empathy, humor, and tech guidance.

export interface ChatReply {
  text: string;
  quickReplies?: string[];
  actionLink?: {
    label: string;
    href: string;
    external?: boolean;
  };
}

// Helpers for string matching
function hasAny(input: string, words: string[]): boolean {
  return words.some((w) => input.includes(w));
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateEndoviReply(rawInput: string): ChatReply {
  const q = rawInput.toLowerCase().trim();

  // 1. GREETINGS & CASUAL HELLO (English, Tamil, Tanglish)
  if (
    hasAny(q, [
      "hi",
      "hello",
      "hey",
      "hii",
      "heyy",
      "vanakkam",
      "வணக்கம்",
      "namaste",
      "yo",
      "oi",
      "hola",
      "good morning",
      "good afternoon",
      "good evening",
      "morning",
    ]) &&
    q.length < 35
  ) {
    const isTamilGreeting = hasAny(q, ["vanakkam", "வணக்கம்", "namaste"]);
    if (isTamilGreeting) {
      return {
        text: pickRandom([
          "வணக்கம் நண்பா! 🙏 Romba happy to see you here! எப்படி இருக்கீங்க? இன்னைக்கு என்ன கத்துக்கலாம்னு பிளான் வச்சிருக்கீங்க?",
          "வணக்கம்! 🙏 I am Endovi, your 24/7 AI buddy here at EndowIT! உங்க கூட பேச ரொம்ப ஆசையா இருக்கு. What can we explore together today?",
          "வணக்கம்! 😊 ஒரு ஃபிரெண்டா என்கிட்ட என்ன சந்தேகம்னாலும் கேளுங்க! Tech courses, career roadmaps, or just chat—I'm all ears!",
        ]),
        quickReplies: [
          "🎓 Which course is best for me?",
          "💰 ₹5,000 Grand Opening Offer",
          "💼 How does the Internship work?",
          "📞 Chat with Mentor on WhatsApp",
        ],
      };
    }

    return {
      text: pickRandom([
        "Hey buddy! 👋 Super happy to chat with you! How's your day going? You can talk to me just like a friend on WhatsApp—ask me anything about tech, careers, or courses! 😊",
        "Hello there! ✨ I'm Endovi, your AI buddy. How are you doing today? Excited to help you level up your skills!",
        "Hey! 👋 Welcome to EndowIT Academy! Whether you want career advice, course info, or just a friendly chat, I'm right here. What's on your mind?",
      ]),
      quickReplies: [
        "🎓 Which course fits my profile?",
        "💰 Tell me about ₹5,000 Offer",
        "💼 Do you offer real internships?",
        "📍 Where is the Chennai lab?",
      ],
    };
  }

  // 2. "HOW ARE YOU" / "EPDI IRUKINGA" / "NALAMA"
  if (
    hasAny(q, [
      "how are you",
      "how r u",
      "how do you do",
      "epdi irukinga",
      "eppadi irukinga",
      "nalama",
      "nalamaa",
      "whats up",
      "what's up",
      "wassup",
      "sup",
      "how is it going",
      "how you doing",
    ])
  ) {
    return {
      text: pickRandom([
        "I am doing fantastic, thanks a lot for asking! 🌟 Full energy-யோட உங்க கூட பேச ரெடியா இருக்கேன்! How are you doing today, buddy?",
        "I'm feeling great and super excited to assist you! 😊 நீங்க எப்படி இருக்கீங்க? Hope you are having a wonderful day! What are you planning to learn today?",
        "All systems buzzing with joy! 🤖✨ Ready to help you crack into high-paying tech careers. How's everything on your side?",
      ]),
      quickReplies: [
        "I am good! Recommend a course",
        "💰 ₹5,000 Opening Offer",
        "💼 Tell me about placements",
      ],
    };
  }

  // 3. "WHO ARE YOU" / "WHAT IS YOUR NAME" / "YAARU NEE"
  if (
    hasAny(q, [
      "who are you",
      "who r u",
      "what is your name",
      "your name",
      "yaaru nee",
      "yaruda",
      "who made you",
      "are you human",
      "are you a robot",
      "are you ai",
      "what are you",
    ])
  ) {
    return {
      text:
        "I am **Endovi**! 🤖✨ Your personal 24/7 AI buddy and mentor companion at EndowIT Academy.\n\nThink of me just like your smart tech friend on WhatsApp: you can chat with me naturally, ask silly doubts without hesitation, figure out the right course roadmap, or grab special fee offers. What would you like to know about me or EndowIT?",
      quickReplies: [
        "🎓 Which course is best for me?",
        "💰 Tell me the course fees",
        "💼 How does the 3-Month Internship work?",
      ],
    };
  }

  // 4. "WHAT CAN YOU DO" / "HELP ME" / "GUIDE ME"
  if (
    hasAny(q, [
      "what can you do",
      "how can you help",
      "help me",
      "guide me",
      "what do you know",
      "features",
    ])
  ) {
    return {
      text:
        "I can do lots of awesome things for you, buddy! 🚀\n\n1. **Personal Career Counseling**: Tell me your background (Arts, Science, Engineering, Non-IT), and I'll match the best course.\n2. **Real Client Internship Details**: Explain how you work on live production code and ad budgets.\n3. **Fee & Offers**: Guide you to our ₹5,000 Grand Opening discount.\n4. **Instant Certificate Verification**: Check any credential or QR code 24/7.\n5. **Book Free Demo Class**: Connect you directly with senior mentors on WhatsApp!\n\nWhere shall we start?",
      quickReplies: [
        "🎓 Recommend a course",
        "💰 Check ₹5,000 Offer",
        "📞 Book Free Demo",
      ],
    };
  }

  // 5. FOOD / CASUAL SLANG ("SAPTINGALA", "HAD FOOD")
  if (
    hasAny(q, [
      "saptingala",
      "saaptingala",
      "had food",
      "did you eat",
      "had lunch",
      "had dinner",
      "had breakfast",
      "tea kudichiya",
      "coffee kudichiya",
    ])
  ) {
    return {
      text: pickRandom([
        "Haha, so sweet of you to ask! ❤️ I run on cloud servers and coffee-flavored algorithms, but your love is more than enough food for me! நீங்க சாப்பிட்டீங்களா? Make sure to eat well and stay healthy while learning tech! 🍲✨",
        "Aww, thanks for caring buddy! 😊 நான் AI என்பதால் bytes தான் என் உணவு. நீங்க சாப்டிங்களா? உடம்பை நல்லா பாத்துக்கோங்க! So, what tech topic are we diving into today?",
      ]),
      quickReplies: [
        "I ate! Let's talk courses",
        "Tell me a joke",
        "💰 ₹5,000 Opening Offer",
      ],
    };
  }

  // 6. JOKES & HUMOR ("TELL ME A JOKE", "COMEDY", "JOKE")
  if (hasAny(q, ["joke", "jokes", "comedy", "make me laugh", "funny", "sirikka vai"])) {
    const jokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs! 😂🐛",
      "There are 10 types of people in the world: those who understand binary, and those who don't! 🤓💻",
      "Why did the web developer go broke? Because they used up all their cache! 💸🤣",
      "Why was the JavaScript developer sad? Because they didn't 'Node' how to 'Express' themselves! 😅",
    ];
    return {
      text: `${pickRandom(jokes)}\n\nHaha, hope that brought a smile to your face! Ready to learn some real coding or digital marketing now? 🚀`,
      quickReplies: ["Tell me another joke", "🎓 Show me coding courses", "💰 Check fee offer"],
    };
  }

  // 7. COMPLIMENTS & PRAISE ("SUPER", "MASS", "NICE", "AWESOME", "COOL", "GREAT")
  if (
    hasAny(q, [
      "super",
      "semma",
      "mass",
      "nice",
      "awesome",
      "great",
      "cool",
      "love it",
      "good job",
      "well done",
      "proud of you",
      "nalla iruku",
      "kalakitta",
      "thalaiva",
    ]) &&
    q.length < 35
  ) {
    return {
      text: pickRandom([
        "Aww, thank you so much buddy! You just made my day! 🥰 You are super awesome too! Let's keep this positive vibe going—what shall we look into next?",
        "Haha, thank you! Romba nandri! ❤️ I'm always trying my best to be a great companion. Is there any course or question I can help you with right now?",
        "Yay! Thank you! 🚀 Keep that high energy! Have you checked out our ₹5,000 Grand Opening Offer yet? It's limited to the first 20 students!",
      ]),
      quickReplies: [
        "💰 Tell me about ₹5,000 Offer",
        "🎓 Which course is best?",
        "📜 Verify a Certificate",
      ],
      actionLink: { label: "View ₹5,000 Offer", href: "/opening-offer" },
    };
  }

  // 8. GRATITUDE & THANKS ("THANK YOU", "THANKS", "TQ", "NANDRI")
  if (hasAny(q, ["thank you", "thanks", "thx", "tq", "nandri", "நன்றி", "dhanyavadham"])) {
    return {
      text: pickRandom([
        "You are most welcome, buddy! 😊 Always happy to help you. Whenever you have questions, just ping me here. Take care!",
        "Anytime friend! ❤️ Your success is our mission. Feel free to ask anything else or talk to our mentors directly on WhatsApp!",
        "ரொம்ப சந்தோஷம் நண்பா! You're welcome! Best of luck with your tech journey—I'm cheering for you! 🌟",
      ]),
      quickReplies: ["🎓 Explore Courses", "📞 WhatsApp Admissions", "📍 Location of Lab"],
    };
  }

  // 9. FAREWELL & GOOD NIGHT ("BYE", "GOOD NIGHT", "TATA", "CYA")
  if (hasAny(q, ["bye", "good night", "tata", "see you", "cya", "gn", "catch you later"])) {
    return {
      text: pickRandom([
        "Bye buddy! 👋 Have a fantastic time ahead! Sleep well or enjoy your day, and remember Endovi is always right here 24/7 whenever you return! ✨",
        "Tata! Take care friend! 🚀 Looking forward to seeing you in our classroom lab soon!",
        "Good night / Good bye! 🌙 Dream big, and let's turn those dreams into high-paying tech careers tomorrow!",
      ]),
      quickReplies: ["Restart Chat", "📞 Save WhatsApp Number"],
      actionLink: {
        label: "Save WhatsApp: +91 63794 27852",
        href: "https://wa.me/916379427852?text=Hi%20EndowIT,%20saving%20your%20number!",
        external: true,
      },
    };
  }

  // 10. EMOTIONS, FEAR, NON-IT BACKGROUND, CAREER GAP
  if (
    hasAny(q, [
      "scared",
      "fear",
      "confused",
      "non it",
      "non-it",
      "arts",
      "bcom",
      "ba",
      "bsc",
      "mechanical",
      "civil",
      "gap",
      "career gap",
      "can i learn",
      "difficult",
      "maths",
      "kashdama",
      "bayama iruku",
      "puriyuma",
    ])
  ) {
    return {
      text:
        "Don't worry even 1% about it, buddy! 🤗 Seriously, take a deep breath!\n\n• Over **60% of our successful students** come from non-IT backgrounds (B.Com, B.A, Mechanical, Civil) and career gaps.\n• Coding and Digital Marketing are **skills, not magic**. You do not need advanced maths.\n• Our mentors teach from the absolute ABCs with hands-on daily lab exercises.\n• Plus, with our **3-Month Guaranteed Real Client Internship**, your resume will show authentic live project work, erasing any career gap worries!\n\nWould you like to attend a Free 1-on-1 Demo session to experience the teaching style first?",
      quickReplies: [
        "Book Free Demo Class",
        "Suggest a Beginner Course",
        "Chat with Senior Mentor",
      ],
      actionLink: {
        label: "Book Free 1-on-1 Demo Class",
        href: "https://wa.me/916379427852?text=Hi%20EndowIT,%20I%20am%20from%20a%20non-IT%20background%20and%20want%20a%20free%20demo.",
        external: true,
      },
    };
  }

  // 11. SALARY, PLACEMENTS & JOBS ("SALARY", "PLACEMENT", "PACKAGE", "VELAI")
  if (
    hasAny(q, [
      "salary",
      "package",
      "placement",
      "job",
      "jobs",
      "hire",
      "fresher salary",
      "velai",
      "interview",
      "career growth",
    ])
  ) {
    return {
      text:
        "Here is the realistic, transparent truth about tech placements today, buddy: 💼\n\n• **Fresher Salary Range**: Our students typically target roles from **₹3.5 LPA to ₹7.5 LPA** based on the tech stack.\n• **Why EndowIT Students Stand Out**: While college grads have only theoretical certificates, you will have **real client production code, live SaaS repos, and ad campaign spend results** on your GitHub and resume.\n• **Placement Support**: 100% resume crafting, LinkedIn profile optimization, intensive technical mock interviews, and direct interview scheduling with hiring partners!\n\nWhich role would you love to see yourself in?",
      quickReplies: [
        "Full Stack Developer Roadmap",
        "Digital Marketing Salary",
        "Data Analytics Jobs",
        "Book a Free Demo",
      ],
      actionLink: { label: "Explore All 6 Courses", href: "/courses" },
    };
  }

  // 12. COURSE RECOMMENDATIONS & WHICH COURSE TO CHOOSE
  if (
    hasAny(q, [
      "which course",
      "recommend",
      "suggest",
      "choose",
      "best course",
      "course list",
      "syllabus",
      "subjects",
      "what courses",
      "courses",
    ])
  ) {
    return {
      text:
        "Here is my personalized recommendation based on what you enjoy doing:\n\n💻 **If you love building websites & apps**: Full Stack Web Development (MERN Stack: React 19, Next.js, Node.js, MongoDB).\n📊 **If you love numbers & insights**: Data Analytics & BI (SQL, Python, Power BI, Excel dashboards).\n📈 **If you are creative / hate coding**: Digital Marketing & AI Growth Strategy (real client ad budgets on Meta & Google Ads).\n☁️ **If you like servers & cloud**: AWS Cloud Computing & DevOps Engineering.\n🛡️ **If you want bug hunting**: Software Testing & Automation (Selenium, Playwright, API Testing).\n\nEvery track is strictly 3 Months with a guaranteed 3-Month practical internship!",
      quickReplies: [
        "Full Stack Details",
        "Digital Marketing Details",
        "Data Analytics Details",
        "💰 ₹5,000 Grand Opening Offer",
      ],
      actionLink: { label: "View All 6 Courses & Syllabi", href: "/courses" },
    };
  }

  // 13. INDIVIDUAL COURSE QUERIES
  if (hasAny(q, ["full stack", "mern", "web development", "react", "coding", "programmer"])) {
    return {
      text:
        "🚀 **Full Stack Web Development (MERN Track)**:\n\n• **Stack**: React 19, Next.js 14/15, Tailwind CSS, Node.js, Express, MongoDB, REST APIs.\n• **Internship Deliverables**: Build and deploy full-stack production SaaS applications with auth, database models, and payment gateways.\n• **Batch**: 10–15 students max for 1-on-1 mentorship.\n• **Duration**: 3 Months Intensive + 3 Months Practical Internship.",
      quickReplies: ["Fee for Full Stack", "Book Demo Session", "View Syllabus"],
      actionLink: { label: "Full Stack Course Details", href: "/courses/full-stack-development" },
    };
  }

  if (hasAny(q, ["digital marketing", "seo", "google ads", "meta ads", "social media", "growth"])) {
    return {
      text:
        "🎯 **Digital Marketing & AI Growth Strategy**:\n\n• **Key Skills**: Performance Marketing (Meta & Google Ads), Technical SEO, AI Content Automation, Analytics & Conversion Optimization.\n• **Real Client Ad Spend**: You don't just learn slides—you manage live client budgets with real ROI targets!\n• **Duration**: 3 Months + 3 Months Internship Certificate.",
      quickReplies: ["Opening Offer ₹5,000", "Book Free Demo", "View All Courses"],
      actionLink: { label: "Digital Marketing Syllabus", href: "/courses/digital-marketing" },
    };
  }

  if (hasAny(q, ["data analytics", "power bi", "sql", "excel", "python"])) {
    return {
      text:
        "📊 **Data Analytics & Business Intelligence**:\n\n• **Key Skills**: Advanced SQL, Python for Data Analysis (Pandas, NumPy), Power BI Interactive Dashboards, Advanced Excel & EDA.\n• **Real Client Deliverables**: Build automated business dashboards analyzing real customer and sales datasets.\n• **Duration**: 3 Months + 3 Months Live Internship.",
      quickReplies: ["Course Fees", "Book Free Demo", "Explore Courses"],
      actionLink: { label: "Data Analytics Syllabus", href: "/courses/data-analytics" },
    };
  }

  // 14. FEES, COST, OPENING OFFER ("FEE", "5000", "5K", "OFFER", "COST")
  if (
    hasAny(q, [
      "fee",
      "fees",
      "cost",
      "price",
      "5000",
      "5k",
      "offer",
      "discount",
      "opening offer",
      "evlo",
      "panam",
      "charges",
    ])
  ) {
    return {
      text:
        "🎉 **Grand Opening Celebration Offer**:\n\n• **Flat ₹5,000 All-Inclusive** for the **First 20 Enrolled Students** across ANY course track!\n• **Regular Launch Price**: ₹14,999 (for subsequent batches).\n• **Zero Hidden Fees**: Real client ad budget, lab workstation, live repo access, and dual certificates are 100% included!\n• Flexible 2-part split installment options are also available.",
      quickReplies: [
        "Claim ₹5,000 Seat Now",
        "Book Free Demo First",
        "Talk to Admissions",
      ],
      actionLink: { label: "Claim ₹5,000 Offer Now", href: "/opening-offer" },
    };
  }

  // 15. INTERNSHIP & PRACTICAL CERTIFICATE
  if (
    hasAny(q, [
      "internship",
      "practical",
      "live project",
      "client",
      "experience",
      "real work",
      "intern certificate",
    ])
  ) {
    return {
      text:
        "Here is what makes our internship 100% authentic, buddy: 🏆\n\n• **No Dummy / College Projects**: You will be assigned to live client software repositories and active business ad accounts.\n• **Two Recognized Certificates**: You receive a **Course Completion Certificate** AND an official **3-Month Practical Internship Certificate** with a unique verifiable QR code!\n• Employers can verify your credentials online 24/7 on our public portal.",
      quickReplies: ["Verify Certificate", "Course Fees", "Book Free Demo"],
      actionLink: { label: "Learn About Certifications", href: "/certifications" },
    };
  }

  // 16. CERTIFICATE VERIFICATION ("VERIFY", "QR", "AUTHENTICITY")
  if (hasAny(q, ["verify", "certificate", "qr", "qr code", "authenticity", "check id", "portal"])) {
    return {
      text:
        "You can instantly verify any EndowIT Academy credential in seconds! 📜🔍\n\n1. Scan the **QR Code** on the physical or PDF certificate with your mobile camera.\n2. Or visit our verification portal and type the Certificate ID (e.g. `EIT-CC-2026-0101` or `EIT-INT-2026-0101`).\n\nHR recruiters and foreign universities can verify 100% authenticity 24/7!",
      quickReplies: ["Open Verify Portal", "Courses List", "Opening Offer"],
      actionLink: { label: "Open Verification Portal", href: "/verify" },
    };
  }

  // 17. DEMO CLASS & ADMISSION ENQUIRY
  if (hasAny(q, ["demo", "counseling", "trial", "visit", "join", "enroll", "book", "admission"])) {
    return {
      text:
        "You can attend a **100% Free 1-on-1 Practical Demo Session** before making any decision! 🎓\n\n• Sit in our physical tech lab in Chennai or join interactively online.\n• Meet senior mentors, see the live client projects, and get a clear personalized career roadmap.\n• Zero pressure, completely free of charge!\n\nShall I connect you with admissions right now?",
      quickReplies: ["Connect on WhatsApp", "Call Admissions Desk", "Check Fees"],
      actionLink: {
        label: "Book Free Demo via WhatsApp",
        href: "https://wa.me/916379427852?text=Hi%20EndowIT,%20I%20would%20like%20to%20book%20a%20free%20demo%20session.",
        external: true,
      },
    };
  }

  // 18. LOCATION & CHENNAI LAB
  if (
    hasAny(q, [
      "location",
      "address",
      "where",
      "chennai",
      "offline",
      "classroom",
      "lab",
      "centre",
      "center",
      "enga iruku",
    ])
  ) {
    return {
      text:
        "📍 **EndowIT Academy Practical Tech Lab**:\n\n• **Location**: Anna Nagar / Koyambedu Tech Corridor, Chennai, Tamil Nadu.\n• **Modes**: Hands-on Classroom Physical Lab & Live Interactive Online.\n• **Lab Perks**: Dedicated workstations, fast fiber internet, mentor desk next to you, and live server environments.\n• **Batch Size**: Strictly limited to 10–15 students!",
      quickReplies: ["Get Directions / Map", "Book Free Demo", "Opening Offer"],
      actionLink: { label: "View Contact Page & Map", href: "/contact" },
    };
  }

  // 19. CONTACT & PHONE / WHATSAPP
  if (hasAny(q, ["contact", "phone", "call", "whatsapp", "email", "support", "mobile", "number"])) {
    return {
      text:
        "You can directly reach our mentors and admissions team anytime: 📞💬\n\n• **Direct Call**: +91 63794 27852\n• **WhatsApp**: +91 63794 27852\n• **Email**: admissions@endowitacademy.com\n\nWe usually reply on WhatsApp within 10–15 minutes!",
      quickReplies: ["Chat on WhatsApp", "View Courses", "₹5,000 Offer"],
      actionLink: {
        label: "Direct WhatsApp Chat (+91 63794 27852)",
        href: "https://wa.me/916379427852?text=Hello%20EndowIT%20Academy,%20I%20would%20like%20to%20talk%20to%20a%20mentor.",
        external: true,
      },
    };
  }

  // 20. NATURAL INTELLIGENT FALLBACK (HUMAN-LIKE, NOT ROBOTIC!)
  return {
    text: pickRandom([
      `That's interesting, buddy! 😊 I'm always eager to learn more. As your personal AI buddy at EndowIT, I can help you choose high-paying tech courses, explain our real client internship, or answer anything about coding and digital marketing.\n\nTell me, what are your career goals or what do you feel like learning right now?`,
      `I hear you! 💡 You can talk to me just like a friend. Whether you're curious about switching to an IT career, checking out our flat ₹5,000 Grand Opening Offer, or booking a free hands-on demo class in Chennai—I've got your back!\n\nWhat would you like to explore together?`,
      `Got it! Let's talk about it friend! 🤝 Whether you want to master coding, dive into data analytics, or launch marketing campaigns with real client budgets, EndowIT is ready for you.\n\nWhat sounds most exciting to you?`,
    ]),
    quickReplies: [
      "🎓 Which course fits me best?",
      "💰 Tell me about ₹5,000 Offer",
      "💼 3-Month Real Internship",
      "📞 Chat with Mentor on WhatsApp",
    ],
    actionLink: {
      label: "Chat with Mentor on WhatsApp",
      href: `https://wa.me/916379427852?text=Hi%20EndowIT%20Academy,%20I%20asked%20Endovi:%20${encodeURIComponent(rawInput)}`,
      external: true,
    },
  };
}
