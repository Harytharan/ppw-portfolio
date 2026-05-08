import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Briefcase,
  Building2,
  ClipboardList,
  Code2,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Layers,
  MessageSquare,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";

export type JournalEntry = {
  title: string;
  learningArea: string;
  learned: string;
  careerImpact: string;
  icon: LucideIcon;
};

export type CareerItem = {
  title: string;
  description: string;
  timeline: string;
};

export type CvData = {
  profileSummary: string;
  education: {
    degree: string;
    school: string;
    detail: string;
  }[];
  experience: {
    role: string;
    org: string;
    period: string;
    bullets: string[];
  }[];
  projectHighlights: string[];
  technicalSkills: string[];
  softSkillsParagraph: string;
  achievements: string[];
};

export type CertificateData = {
  id: number;
  courseName: string;
  platform: string;
  completedYear: string;
  skillImproved: string;
  description: string | null;
  imageUrl: string | null;
  fileUrl: string | null;
};

export type ProjectData = {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  imageUrl: string | null;
  githubLink: string | null;
  liveLink: string | null;
};

export type SkillCategory = {
  title: string;
  items: { name: string; level: number }[];
};

export type PortfolioData = {
  profile: {
    fullName: string;
    title: string;
    tagline: string;
    introduction: string;
    university: string;
    degree: string;
    careerGoal: string;
    profileImageUrl: string;
    cvUrl: string | null;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    address: string | null;
  };
  settings: {
    siteTitle: string;
    footerText: string;
    metaTitle: string;
    metaDescription: string;
  };
  journals: JournalEntry[];
  career: {
    short: CareerItem[];
    medium: CareerItem[];
    long: CareerItem[];
  };
  cv: CvData;
  certificates: CertificateData[];
  projects: ProjectData[];
  skills: SkillCategory[];
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journal", label: "Journal" },
  { href: "#career", label: "Career Plan" },
  { href: "#cv", label: "CV" },
  { href: "#certificate", label: "Certificate" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const heroTechBadges: { label: string; icon: LucideIcon }[] = [
  { label: "Next.js", icon: Layers },
  { label: ".NET", icon: Cpu },
  { label: "Oracle", icon: Database },
  { label: "React", icon: Boxes },
  { label: "Tailwind", icon: Sparkles },
  { label: "PHP", icon: Code2 },
];

export const aboutStats = [
  { label: "Final year", value: "SLIIT IT", sub: "Undergraduate" },
  { label: "Industry", value: "12+ mo.", sub: "Intern -> Associate" },
  { label: "Stack breadth", value: "Full-stack", sub: "Web + ERP" },
  { label: "Focus", value: "Enterprise", sub: ".NET · Oracle" },
];

function careerFromStrings(goals: string[], timeline: string): CareerItem[] {
  return goals.map((title) => ({
    title,
    description: "",
    timeline,
  }));
}

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Harytharan Satkunasingam",
    title: "Final-Year IT Student · Associate Software Engineer",
    tagline: "",
    introduction: [
      "I am a final-year Information Technology undergraduate at SLIIT, currently working as an Associate Software Engineer. My professional journey began as a Software Engineer Intern, where I contributed to enterprise-grade ERP solutions built with .NET and Oracle Database, alongside public-facing websites using PHP CodeIgniter and modern stacks such as Next.js.",
      "I am motivated by full-stack development, dependable releases, and interfaces that feel effortless for users. Long term, I aim to grow into a senior engineer who architects scalable systems and mentors teams — combining communication discipline with strong technical execution.",
    ].join("\n\n"),
    university: "SLIIT",
    degree: "BSc (Hons) in Information Technology — Final Year",
    careerGoal: "Software Engineer / Full Stack Developer",
    profileImageUrl: "/profile.png",
    cvUrl: "/cv/CV.pdf",
  },
  contact: {
    email: "harytharan24@gmail.com",
    phone: "0775518040",
    linkedin: "https://linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    address: null,
  },
  settings: {
    siteTitle: "Harytharan Satkunasingam",
    footerText:
      "Academic portfolio presentation.",
    metaTitle: "Harytharan Satkunasingam",
    metaDescription:
      "Final-year IT portfolio featuring reflective journal entries, career plan, CV, and project evidence.",
  },
  journals: [
    {
      title: "Presentation Skills",
      learningArea: "Presentation Skills",
      learned:
        "Learned how to create effective presentations using suitable fonts, color schemes, clear structure, and proper animations.",
      careerImpact:
        "This improved my confidence in academic presentations, research viva sessions, internship presentations, and technical speaking activities.",
      icon: MessageSquare,
    },
    {
      title: "Business Writing and Email Memo Writing",
      learningArea: "Business Writing and Email Memo Writing",
      learned:
        "Learned how to write professional emails, memos, and formal documents with clear subject lines, concise content, proper formatting, and a suitable tone.",
      careerImpact:
        "These skills helped me communicate better with lecturers, supervisors, and professionals.",
      icon: ClipboardList,
    },
    {
      title: "Telephone Etiquette",
      learningArea: "Telephone Etiquette",
      learned:
        "Learned how to answer calls professionally, use the correct tone of voice, listen actively, handle difficult conversations, and close calls properly.",
      careerImpact:
        "This improved my confidence during phone interviews and professional communication.",
      icon: Briefcase,
    },
    {
      title: "Report Writing",
      learningArea: "Report Writing",
      learned:
        "Learned how to structure reports with introductions, executive summaries, headings, visuals, conclusions, and proper references.",
      careerImpact:
        "These skills helped me in final year research documentation and internship report writing.",
      icon: Users,
    },
    {
      title: "Interview Skills",
      learningArea: "Interview Skills",
      learned:
        "Learned how to face interviews professionally by improving self-introduction, first impression, body language, attire, and STAR-based answers.",
      careerImpact:
        "The mock interview activity improved my confidence and interview readiness.",
      icon: GraduationCap,
    },
    {
      title: "Career Development Guest Lecture",
      learningArea: "Career Development Guest Lecture",
      learned:
        "Learned the importance of accepting feedback, continuous learning, avoiding self-doubt, building professional networks, and taking calculated risks.",
      careerImpact:
        "Protecting professional reputation is important for long-term career growth.",
      icon: Sparkles,
    },
  ],
  career: {
    short: careerFromStrings(
      [
        "Improve technical depth across full-stack patterns",
        "Strengthen written and verbal communication",
        "Complete final-year academic work with distinction",
        "Build a standout portfolio (this site)",
      ],
      "0–12 months",
    ),
    medium: careerFromStrings(
      [
        "Grow as a full stack developer across cloud-ready apps",
        "Gain deeper enterprise project exposure (.NET + Oracle)",
        "Advance database design, tuning, and backend architecture",
      ],
      "1–3 years",
    ),
    long: careerFromStrings(
      [
        "Progress toward senior software engineer responsibilities",
        "Lead software projects end-to-end",
        "Design and ship scalable, maintainable real-world systems",
      ],
      "3–7 years",
    ),
  },
  cv: {
    profileSummary:
      "Final-year IT undergraduate at SLIIT and Associate Software Engineer with hands-on experience in ERP systems (.NET, Oracle) and modern web stacks (Next.js, PHP CodeIgniter). Passionate about clean architecture, dependable releases, and continuous learning.",
    education: [
      {
        school: "Sri Lanka Institute of Information Technology (SLIIT)",
        degree: "BSc (Hons) in Information Technology",
        detail: "Final Year · Focus on software engineering & enterprise systems",
      },
    ],
    experience: [
      {
        role: "Associate Software Engineer",
        org: "David Pieris Motor Company Ltd",
        period: "April 2026 – Present",
        bullets: [
          "Enterprise features on ERP platforms using .NET and Oracle.",
          "Collaborates on delivery, testing, and production support cycles.",
        ],
      },
      {
        role: "Software Engineer Intern",
        org: "David Pieris Motor Company Ltd",
        period: "March 2025 – March 2026",
        bullets: [
          "Contributed to ERP modules and internal tooling.",
          "Supported websites built with PHP CodeIgniter and Next.js initiatives.",
        ],
      },
    ],
    projectHighlights: [
      "Paddy Farming AI Decision Support System",
      "ERP enhancements & integrations",
      "David Pieris Group corporate websites",
      "Customer feedback application",
      "DPMC Lottery System",
    ],
    technicalSkills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      ".NET",
      "Node.js",
      "PHP",
      "Oracle",
      "MySQL",
      "MongoDB",
      "Git",
      "VS Code",
      "Cursor",
      "XAMPP",
    ],
    softSkillsParagraph:
      "Communication, teamwork, leadership, adaptability, stakeholder empathy, and structured problem solving — strengthened through academic work and internship delivery.",
    achievements: [
      "Transitioned from Software Engineer Intern to Associate Software Engineer",
      "Delivered production-facing work on ERP and web properties",
      "Balancing final-year studies with professional engineering responsibilities",
    ],
  },
  certificates: [
    {
      id: 1,
      courseName: "AWS Academy Graduate - Cloud Web Application Builder",
      platform: "AWS Academy",
      completedYear: "2025",
      skillImproved: "Cloud web application development on AWS",
      description:
        "AWS Academy training badge for Cloud Web Application Builder.",
      imageUrl: null,
      fileUrl:
        "/certificates/AWS_Academy_Graduate___Cloud_Web_Application_Builder___Training_Badge_Badge20251002-32-eejn46.pdf",
    },
    {
      id: 2,
      courseName: "Microsoft Learn: Database",
      platform: "Microsoft Learn",
      completedYear: "2026",
      skillImproved: "Database fundamentals and practical SQL concepts",
      description: "Microsoft Learn achievement certificate.",
      imageUrl: null,
      fileUrl:
        "/certificates/Achievements - harytharan-9364 _ Microsoft Learn_14_09_database.pdf",
    },
    {
      id: 3,
      courseName: "Microsoft Learn Achievement",
      platform: "Microsoft Learn",
      completedYear: "2026",
      skillImproved: "Professional upskilling through Microsoft Learn modules",
      description: "Microsoft Learn achievement certificate.",
      imageUrl: null,
      fileUrl:
        "/certificates/Achievements - harytharan-9364 _ Microsoft Learn_14_09.pdf",
    },
    {
      id: 4,
      courseName: "AWS SimuLearn: Connecting VPC",
      platform: "AWS SimuLearn",
      completedYear: "2026",
      skillImproved: "AWS networking and VPC connectivity concepts",
      description: "AWS SimuLearn completion certificate for Connecting VPC.",
      imageUrl: null,
      fileUrl: "/certificates/Connecting VPCs_IT22346636.pdf",
    },
  ],
  projects: [
    {
      title: "Elitewear Fashion Website",
      description:
        "An online fashion storefront focused on modern UI layouts and product browsing experiences.",
      technologies: ["Web", "Frontend", "E-commerce"],
      icon: Sparkles,
      imageUrl: null,
      githubLink: "https://github.com/Harytharan/elitewear_fashion_website",
      liveLink: null,
    },
    {
      title: "PhotoLearn",
      description:
        "A learning-focused project that combines educational workflows with photo-based interaction.",
      technologies: ["Web app", "Education", "Media"],
      icon: Globe,
      imageUrl: null,
      githubLink: "https://github.com/Harytharan/PhotoLearn",
      liveLink: null,
    },
    {
      title: "Todo Web Application",
      description:
        "A task management application for creating, tracking, and organizing daily activities.",
      technologies: ["Web app", "Tasks", "CRUD"],
      icon: ClipboardList,
      imageUrl: null,
      githubLink: "https://github.com/Harytharan/Todo-web-application",
      liveLink: null,
    },
    {
      title: "Notes",
      description:
        "A lightweight note-taking application for capturing and managing personal notes efficiently.",
      technologies: ["Web app", "Notes", "Productivity"],
      icon: MessageSquare,
      imageUrl: null,
      githubLink: "https://github.com/Harytharan/Notes",
      liveLink: null,
    },
    {
      title: "Ecommerce Application",
      description:
        "An e-commerce project featuring catalog browsing and core online shopping workflows.",
      technologies: ["E-commerce", "Web", "Full stack"],
      icon: Boxes,
      imageUrl: null,
      githubLink: "https://github.com/Harytharan/ecommerce-application",
      liveLink: null,
    },
    {
      title: "Hotel Management System",
      description:
        "A management platform for hotel operations, including booking and administrative workflows.",
      technologies: ["Management system", "Database", "Web"],
      icon: Building2,
      imageUrl: null,
      githubLink: "https://github.com/Harytharan/Hotel_Management_System",
      liveLink: null,
    },
    {
      title: "AI-Driven Paddy farming System",
      description:
        "A research project repository covering documentation, experiments, and implementation artifacts.",
      technologies: ["Research", "Documentation", "Development"],
      icon: Sparkles,
      imageUrl: null,
      githubLink: "https://github.com/Harytharan/Research",
      liveLink: null,
    },
  ],
  skills: [
    {
      title: "Frontend",
      items: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: ".NET", level: 82 },
        { name: "Node.js", level: 70 },
        { name: "PHP", level: 78 },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "Oracle", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 65 },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", level: 88 },
        { name: "VS Code", level: 92 },
        { name: "Cursor", level: 85 },
        { name: "XAMPP", level: 75 },
      ],
    },
    {
      title: "Soft Skills",
      items: [
        { name: "Communication", level: 88 },
        { name: "Teamwork", level: 90 },
        { name: "Leadership", level: 72 },
        { name: "Problem solving", level: 87 },
      ],
    },
  ],
};
