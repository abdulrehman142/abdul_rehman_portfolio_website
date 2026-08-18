// ============================================================
// portfolioData.js - Centralized configuration for Abdul Rehman's Portfolio
// Update this file to change content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Abdul Rehman",
  firstName: "Abdul",
  brandName: "Abdul Rehman",
  title: "Software Engineer & AI/ML Developer",
  location: "Lahore, Punjab, Pakistan",
  phone: "+92 322 5455658",
  emails: {
    primary: "abdulrehmantahir142@gmail.com",
    secondary: "",
  },
  summary:
    "Aspiring AI/ML Engineer and Software Developer with hands-on experience in AI, machine learning, full-stack development, and enterprise technology. Passionate about building scalable web and intelligent systems that solve real-world problems.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/abdulrehman142",
  linkedin: "https://www.linkedin.com/in/abdul-rehman2020",
  portfolio: "#home",
  instagram: "https://portfolio-website-abdul-rehman.netlify.app/",
};

export const heroContent = {
  greeting: "Hi, I'm Abdul Rehman",
  titleHighlight: "Software Engineer & AI/ML Developer",
  subtitle:
    "I build scalable full-stack and AI-powered systems with Python, FastAPI, React, Next.js, TypeScript, Docker, MLflow, and AWS.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: { text: "Contact Me", href: "#contact" },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Abdul Rehman</span>, a software engineer and AI/ML developer based in Lahore, Pakistan. I build production-grade web applications and intelligent systems, combining clean architecture with practical machine learning workflows.`,
  techStack: [
    "React",
    "Next.js",
    "FastAPI",
    "Tailwind CSS",
    "MongoDB",
    "TensorFlow",
    "PyTorch",
    "TypeScript",
  ],
};

export const skillsContent = {
  badge: "My Process",
  heading: "How I build scalable intelligent systems",
  description:
    "I combine product thinking, software engineering discipline, and machine learning workflows to deliver robust solutions.",
  cards: [
    {
      number: "01",
      title: "Discover",
      text: "Define problem scope, users, and constraints with structured research and measurable goals.",
    },
    {
      number: "02",
      title: "Architect",
      text: "Design clean backend and frontend flows with secure APIs, maintainable components, and data-first models.",
    },
    {
      number: "03",
      title: "Build",
      text: "Implement full-stack and AI features using modern frameworks, test-driven workflows, and reusable modules.",
    },
    {
      number: "04",
      title: "Optimize",
      text: "Evaluate performance, automate deployment pipelines, and iterate based on measurable outcomes.",
    },
  ],
  endText: "Ready to scale!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 92 },
        { name: "TypeScript", level: 84 },
        { name: "JavaScript", level: 88 },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "PyTorch", level: 88 },
        { name: "TensorFlow", level: 86 },
        { name: "Keras", level: 85 },
        { name: "Scikit-learn", level: 86 },
        { name: "OCR Systems", level: 82 },
      ],
    },
    {
      title: "Full Stack Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 86 },
        { name: "FastAPI", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
      ],
    },
    {
      title: "MLOps & Cloud",
      skills: [
        { name: "MLflow", level: 86 },
        { name: "DVC", level: 84 },
        { name: "Docker", level: 83 },
        { name: "AWS S3", level: 80 },
      ],
    },
    {
      title: "Databases & APIs",
      skills: [
        { name: "MongoDB", level: 86 },
        { name: "MariaDB", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Authentication", level: 84 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "n8n", level: 78 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: "Professional Focus",
  heading: "Engineering Domains I Work In",
  description:
    "I work across AI engineering, modern full-stack systems, and enterprise technology workflows.",
  categories: [
    {
      title: "AI Engineering",
      description:
        "Building practical AI features including OCR, recommendation flows, and neural network-based solutions.",
      stats: "AI/ML Projects",
      icon: "AI",
    },
    {
      title: "Full-Stack Systems",
      description:
        "Developing responsive web applications with robust APIs, auth flows, and scalable architecture.",
      stats: "Production Workflows",
      icon: "FS",
    },
    {
      title: "MLOps Practices",
      description:
        "Applying MLflow, DVC, Docker, and cloud integrations for reproducible model development and deployment.",
      stats: "Model Lifecycle",
      icon: "ML",
    },
    {
      title: "Leadership & Outreach",
      description:
        "Driving student engagement, ambassador initiatives, and cross-functional collaboration in campus communities.",
      stats: "Community Impact",
      icon: "LD",
    },
  ],
};

export const leadershipList = [
  {
    title: "Aspire Institute",
    description:
      "Created Canva-based promotional content and drove student engagement through targeted campaigns. Supported career readiness initiatives and early-stage outreach to expand program participation.",
    role: "University Leader · Aug 2026 – Present",
    badge: "Current",
  },
  {
    title: "The TalentBeacon",
    description:
      "Promoted campus awareness and student engagement. Completed certified leadership training and peer outreach as Campus Ambassador.",
    role: "Campus Ambassador · Jul 2026 – Present",
    badge: "Current",
  },
  {
    title: "FAST Business Club",
    description:
      "Led execution support and coordination as Deputy Head, enabling event planning and team alignment.",
    role: "Deputy Head",
    badge: "Leadership",
  },
  {
    title: "Young Ravians Club (GCU)",
    description:
      "Represented students, maintained discipline, and contributed to club initiatives as part of the prefect body.",
    role: "Prefect",
    badge: "Student Leadership",
  },
  {
    title: "Dr. Samar Mubarak Mand Society for Physics",
    description:
      "Participated in seminars, competitions, and student-led events to promote scientific learning and collaboration.",
    role: "Member",
    badge: "Academic Activity",
  },
];

export const educationTimeline = [
  {
    title: "FAST National University of Computer and Emerging Sciences",
    role: "BS Computer Science",
    period: "2023 - 2027",
    description:
      "Focused on software engineering, AI/ML systems, and scalable full-stack application development.",
    badge: "Education",
  },
  {
    title: "Government College University (GCU), Lahore",
    role: "HSSC - Pre Engineering",
    period: "2021 - 2023",
    description:
      "Completed higher secondary pre-engineering studies with strong foundations in mathematics and science.",
    badge: "Education",
  },
  {
    title: "Beaconhouse",
    role: "SSC - Science",
    period: "2008 - 2021",
    description:
      "Completed school education with a science focus, building the base for future engineering and computing studies.",
    badge: "Education",
  },
];

export const internshipsList = [
  {
    organization: "Solacebit",
    role: "AI/ML Intern",
    duration: "July 2026 - August 2026",
    skills: [
      "Built a local RAG pipeline improving retrieval relevance by 35% with Sentence Transformers and Ollama 3.2",
      "Developed a semantic search system cutting information lookup time by 70% across 100+ webpages",
      "Applied retrieval-augmented generation for practical AI workflows",
      "Experimented with embedding models and local LLM tooling",
    ],
    tech: ["RAG", "Sentence Transformers", "Ollama", "Semantic Search", "Python"],
  },
  {
    organization: "Telenor Pakistan",
    role: "B2B Intern",
    duration: "June 2026 - August 2026",
    skills: [
      "Built 5+ lead databases and researched 20+ businesses, securing 6+ client meetings via a B2B pipeline",
      "Supported GSM, IVR, and Automated Voice Agent pitching, improving communication efficiency by 20%",
      "Lead generation, prospecting, and market research",
      "Enterprise outreach and client communication support",
    ],
    tech: ["B2B Workflows", "CRM", "Market Research", "Enterprise Solutions"],
  },
  {
    organization: "Tintash",
    role: "Web Development Intern",
    duration: "July 2025 - September 2025",
    skills: [
      "Supported end-to-end development workflows, contributing to 2–3 key deliverables",
      "Built reusable components and implemented dark mode",
      "Enhanced UX, improving user experience by 30%",
      "Collaborated across the frontend engineering team",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Frontend Engineering"],
  },
  {
    organization: "Punjab Information Technology Board (PITB)",
    role: "AI/ML Intern",
    duration: "July 2025 - August 2025",
    skills: [
      "Contributed to AI/ML/DL projects, supporting 3+ core components across development pipelines",
      "Improved task execution efficiency through structured workflows",
      "Cross-team collaboration on applied machine learning work",
      "Model experimentation and pipeline support",
    ],
    tech: ["Python", "TensorFlow", "Keras", "Deep Learning", "Machine Learning"],
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "PS",
    desc: "Turning ambiguous requirements into structured, high-impact engineering solutions.",
  },
  {
    name: "Communication",
    icon: "CM",
    desc: "Clear technical and business communication across teams and stakeholders.",
  },
  {
    name: "Leadership",
    icon: "LD",
    desc: "Leading initiatives in clubs and ambassador programs with ownership and consistency.",
  },
  {
    name: "Collaboration",
    icon: "CL",
    desc: "Working effectively across AI, full-stack, and enterprise-focused teams.",
  },
  {
    name: "Adaptability",
    icon: "AD",
    desc: "Rapidly learning new frameworks, tooling, and workflows as project needs evolve.",
  },
  {
    name: "Execution",
    icon: "EX",
    desc: "Delivering practical outcomes with disciplined implementation and quality focus.",
  },
  {
    name: "Ownership",
    icon: "OW",
    desc: "Taking responsibility for outcomes, reliability, and long-term maintainability.",
  },
  {
    name: "Growth Mindset",
    icon: "GM",
    desc: "Continuously improving through feedback, experimentation, and measurable progress.",
  },
];

export const projects = [
  {
    id: "scrapify",
    number: "01",
    badge: "Web RAG Chat",
    title: "Scrapify",
    description:
      "Scrape any website, then chat with it. Paste a URL — the backend fetches the page, chunks and embeds it into a local knowledge base. Ask a question and it retrieves the closest chunks; Gemini 3.5 Flash answers from that context only. No vector database or local LLM: embeddings and generation both go through Gemini so it deploys on a small Render instance.",
    techTags: [
      "React",
      "TypeScript",
      "FastAPI",
      "Gemini API",
      "BeautifulSoup",
      "NumPy",
    ],
    links: {
      github: "https://github.com/abdulrehman142/scrapify_frontend",
      githubBackend: "https://github.com/abdulrehman142/scrapify_backend",
      demo: "https://scrapifyit.netlify.app",
    },
    isFlagship: true,
  },
  {
    id: "medirator-2",
    number: "02",
    badge: "Hospital RAG Assistant",
    title: "Medirator 2.0",
    description:
      "An AI hospital knowledge assistant for a synthetic Houston hospital. Sign in with Google, open Medibot, and ask in plain English about patients, medicines, inventory, and instruments. Keyword search over ~1,270 local JSON records feeds Gemini, which answers from that context only — results as SOAP, medicine, stock, and equipment cards. Demo data only; not for clinical decisions.",
    techTags: [
      "React",
      "Gemini API",
      "RAG",
      "Google Auth",
      "Netlify",
      "Render",
    ],
    links: {
      github: "https://github.com/abdulrehman142/medirator2_frontend",
      githubBackend: "https://github.com/abdulrehman142/medirator2_backend",
      demo: "https://medirator2.netlify.app",
    },
    isFlagship: true,
  },
  {
    id: "medirator",
    number: "03",
    badge: "AI Healthcare",
    title: "Medirator",
    description:
      "A multimodal healthcare platform combining AI diagnostics, patient management, explainable AI, and accessibility. Chest X-ray classification with DenseNet-121, symptom-based disease prediction with Random Forest, and Medibot powered by Gemini Pro. Patient, doctor, and admin roles cover family history, appointments, prescriptions, report verification, and monitoring — plus adjustable fonts, visibility options, and Urdu support after surveys with 66+ participants. Frontend on Netlify, FastAPI on Render, MongoDB Atlas, models on Hugging Face Spaces.",
    techTags: [
      "React",
      "FastAPI",
      "MongoDB",
      "DenseNet-121",
      "Random Forest",
      "Gemini Pro",
      "Hugging Face",
    ],
    links: {
      github: "https://github.com/abdulrehman142/medirator_frontend",
      githubBackend: "https://github.com/abdulrehman142/medirator_backend",
      demo: "https://medirator.netlify.app/",
    },
    isFlagship: false,
  },
  {
    id: "fixify",
    number: "04",
    badge: "Marketplace Platform",
    title: "Fixify",
    description:
      "A marketplace that connects customers with verified home-service providers — cleaning, electrical, plumbing, carpentry, gardening, and more. Customers browse and book, schedule appointments, track orders, leave reviews, and chat in real time, with dark/light mode. Providers manage offerings, accept jobs, and use an analytics dashboard. Admins approve registrations, monitor orders, and handle complaints. Built with React 18, TypeScript, Tailwind CSS, Vite, and FastAPI.",
    techTags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "RBAC",
    ],
    links: {
      github: "https://github.com/abdulrehman142/fixify_frontend",
      githubBackend: "https://github.com/abdulrehman142/fixify_backend",
      demo: "https://fixify-a-servicemarketplace.netlify.app/",
    },
    isFlagship: false,
  },
  {
    id: "curator",
    number: "05",
    badge: "Recommendation System",
    title: "Curator",
    description:
      "An AI wardrobe assistant that identifies clothes, recognizes style, and recommends compatible outfits. YOLO detects and classifies clothing, face recognition personalizes suggestions, and a Siamese MobileNetV2 model predicts outfit compatibility. Next.js and Tailwind UI on a FastAPI backend, with MLflow, DVC, AWS S3 and EC2, and a fully containerized Docker Compose pipeline.",
    techTags: [
      "Next.js",
      "FastAPI",
      "YOLO",
      "MobileNetV2",
      "MLflow",
      "DVC",
      "AWS",
      "Docker",
    ],
    links: {
      github: "https://github.com/abdulrehman142/Curator-Custom-Wardrobe-Stylist",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "AWS Cloud Foundations Course",
      issuer: "AWS",
      icon: "AWS",
    },
    {
      name: "Microsoft Applied Skills: Generate Reports with AI Research Agents",
      issuer: "Microsoft",
      icon: "MS",
    },
    {
      name: "Aspire Leadership Program 2026",
      issuer: "Aspire Institute",
      icon: "AL",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/abdul-rehman2020",
};

export const education = {
  degree: "BS Computer Science",
  institution: "FAST National University of Computer and Emerging Sciences",
  cgpa: "In Progress",
  graduation: "2027",
  twelfth: "HSSC Pre-Engineering (2021-2023), Government College University Lahore",
  tenth: "SSC Science (2008-2021), Beaconhouse",
};

export const footerContent = {
  taglines: [
    "Software Engineering & AI/ML",
    "Python · FastAPI · React · Next.js",
    "Scalable Web & Intelligent Systems",
  ],
  credential: "BS Computer Science · FAST NUCES (2023-2027)",
  copyright: `© ${new Date().getFullYear()} Abdul Rehman | Built with React`,
};

// Contact form posts to FormSubmit so messages land in the inbox below.
export const contactFormConfig = {
  endpoint: `https://formsubmit.co/ajax/${personalInfo.emails.primary}`,
};
