import { portraitDataUri } from '../assets/portrait';

export const personalInfo = {
  name: "Stuart Mzimba",
  title: "Full-Stack Developer & Software Engineer",
  subtitle: "Building intelligent, modern software.",
  bio: "Final-year Bachelor of Information and Communication Technology student at the University of Mpumalanga (Expected 2027). Proficient in Python, Java, JavaScript, Kotlin, and SQL, building clean web & mobile applications and AI-powered systems.",
  location: "Mbombela, Mpumalanga, South Africa",
  educationBadge: "Final-Year BICT @ UMP • Mbombela, SA",
  emailPersonal: "stuartmzimba@gmail.com",
  emailUniversity: "240919246@ump.ac.za",
  phone: "076 669 6948",
  phoneRaw: "0766696948",
  githubUrl: "https://github.com/stuartmzimba",
  githubUsername: "stuartmzimba",
  linkedinUrl: "https://www.linkedin.com/in/stuart-mzimba-95836832a/",
  cvPdf: "/Stuart_Mzimba_CV.pdf",
  avatarImg: portraitDataUri,
  reference: {
    name: "B.P. Ngomane",
    relation: "Uncle",
    phone: "076 987 7545"
  },
  languagesSpoken: ["English", "SiSwati", "isiZulu"]
};

export const typewriterRoles = [
  "Full-Stack Developer",
  "Python & Java Engineer",
  "AI & Data Enthusiast",
  "BICT Student @ UMP"
];

export const technicalExpertise = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "bx-code-alt",
    description: "Designing responsive, accessible, and high-performance user interfaces with modern component architectures and micro-interactions.",
    tags: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "Responsive Design"]
  },
  {
    id: "backend",
    title: "Backend, Mobile & Databases",
    icon: "bx-server",
    description: "Developing robust APIs, object-oriented Java & Kotlin applications, and relational or cloud-native database schemas.",
    tags: ["Python", "Java 17", "Kotlin", "Node.js", "Jakarta EE", "SQL / MySQL"]
  },
  {
    id: "ai-data",
    title: "AI & Data Science",
    icon: "bx-brain",
    description: "IBM CognitiveClass.ai certified in Data Science 101 & Tools — building hybrid recommendation engines, association rule mining, and AI agents.",
    tags: ["Data Science", "Machine Learning", "FP-Growth", "FastAPI", "IBM Certified"]
  }
];

export const curatedProjects = [
  {
    repoName: "ai-code-tutor",
    aliases: ["aicodetutor", "ai-code-tutor", "ai_code_tutor", "code-tutor"],
    title: "AI Code Tutor (BICT131)",
    category: ["ai", "python", "web"],
    language: "AI & Web",
    icon: "bx-bot",
    previewTitle: "bict131-code-tutor.vercel.app",
    previewLines: [
      "<span class='kw'>async def</span> <span class='fn'>analyze_code</span>(snippet, lang):",
      "  ast_tree = <span class='fn'>parse_syntax</span>(snippet)",
      "  <span class='kw'>return</span> <span class='str'>'Live on Vercel: Interactive Tutor'</span>"
    ],
    architecture: ["Code Input", "Syntax & AST Parser", "AI Reasoning Engine", "Vercel Live Web UI"],
    description: "Interactive AI-powered coding tutor and debugging assistant deployed on Vercel that explains programming concepts, reviews code snippets, and guides BICT students step-by-step.",
    highlights: [
      "Live deployed web application (bict131-code-tutor.vercel.app) providing real-time code explanations and debugging help.",
      "Tailors interactive programming hints and learning paths for students and developers.",
      "Integrates modern AI prompting workflows with a clean, browser-accessible code interface."
    ],
    tech: ["AI / LLM", "JavaScript", "Python", "Code Analysis", "Vercel", "EdTech"],
    githubUrl: "https://github.com/stuartmzimba/ai-code-tutor",
    liveUrl: "https://bict131-code-tutor.vercel.app",
    updated: "Nov 2026",
    stars: 1,
    forks: 0,
    license: "Public Repo"
  },
  {
    repoName: "Job-Finder",
    aliases: ["jobfinder", "job-finder", "job_finder", "job-search"],
    title: "Youth Job & Internship Finder",
    category: ["web", "java"],
    language: "Jakarta EE & Java",
    icon: "bx-briefcase-alt-2",
    previewTitle: "job-finder-production-0c08.up.railway.app",
    previewLines: [
      "<span class='kw'>@Singleton @Startup</span> <span class='fn'>CompanyDataInitializer</span>",
      "company = <span class='fn'>verifyCompany</span>(employerUrl);",
      "<span class='kw'>return</span> <span class='str'>'Live on Railway: Vetted Jobs'</span>;"
    ],
    architecture: ["Company Vetting Workflow", "Jakarta EE 10 + Payara", "Student Reviews & JPA", "Railway Cloud Live UI"],
    description: "The Youth Job & Internship Finder is a Jakarta EE 10 web platform deployed on Railway designed to connect students with legitimate companies offering jobs and internships. Emphasizes trust, transparency, and accessibility through company vetting workflows, student reviews, and admin oversight.",
    highlights: [
      "Live deployed on Railway (Payara Micro 6 + Jakarta EE 10) with pre-seeded verified companies (Google, Amazon) and 20+ internship/job listings.",
      "Enforces trust and transparency through automated URL verification, multi-step company vetting workflows, and system admin oversight.",
      "Empowers students with verified peer reviews, smart role filtering, CV upload/preview, and BCrypt role-based authentication."
    ],
    tech: ["Jakarta EE 10", "Java 17", "Payara Micro", "JPA / EclipseLink", "Railway", "BCrypt Security"],
    githubUrl: "https://github.com/stuartmzimba/Job-Finder",
    liveUrl: "https://job-finder-production-0c08.up.railway.app",
    updated: "Nov 2026",
    stars: 1,
    forks: 0,
    license: "Public Repo"
  },
  {
    repoName: "music-recommendation-system",
    aliases: ["music-recommendation-system"],
    title: "Hybrid Music Recommendation System",
    category: ["ai", "python", "web"],
    language: "Python",
    icon: "bx-headphone",
    previewTitle: "music-recommender-production-9141.up.railway.app",
    previewLines: [
      "rules = <span class='fn'>fpgrowth</span>(playlists, min_sup=<span class='str'>0.02</span>)",
      "sim = <span class='fn'>cosine_similarity</span>(acoustic_vecs)",
      "<span class='kw'>return</span> <span class='fn'>hybrid_rank</span>(rules, sim)"
    ],
    architecture: ["Audio Feature Vectors", "FP-Growth Mining", "Hybrid Scoring Engine", "Apple Music Clean UI"],
    description: "Hybrid Music Recommendation System featuring an Apple Music-inspired Clean UI, FastAPI backend, FP-Growth Association Rules mining (657 rules), and Acoustic Feature Vector similarity matching.",
    highlights: [
      "Combines collaborative pattern discovery (FP-Growth association rules) with content-based acoustic vector similarity.",
      "Delivers personalized track recommendations through a sleek Apple Music-inspired web application.",
      "Analyzes 8D audio feature vectors (tempo, energy, valence, acoustics) + TF-IDF matrices for cold-start and session-based discovery."
    ],
    tech: ["Python", "FastAPI", "FP-Growth", "Acoustic Vectors", "Railway", "Clean UI"],
    githubUrl: "https://github.com/stuartmzimba/music-recommendation-system",
    liveUrl: "https://music-recommender-production-9141.up.railway.app",
    updated: "Nov 2026",
    stars: 1,
    forks: 0,
    license: "Public Repo"
  },
  {
    repoName: "StudentMarkApp2",
    aliases: ["studentmarkapp2", "student-mark-app"],
    title: "Student Mark Management System",
    category: ["java"],
    language: "Java",
    icon: "bx-graduation",
    previewTitle: "StudentMarkApp.java — OOP Engine",
    previewLines: [
      "<span class='kw'>public class</span> <span class='fn'>StudentMarkApp</span> {",
      "  <span class='kw'>double</span> avg = student.<span class='fn'>computeAverage</span>();",
      "  <span class='kw'>return</span> <span class='fn'>assignDistinction</span>(avg); }"
    ],
    architecture: ["Student Records Input", "Java OOP Domain Model", "Grade & GPA Calculator", "Academic Report Output"],
    description: "Java object-oriented academic grade management application designed to record, compute, and analyze student assessment marks and performance metrics.",
    highlights: [
      "Built with clean Object-Oriented Programming (OOP) principles and modular Java classes.",
      "Automates calculation of student averages, grade classifications, and pass/fail analytics.",
      "Provides structured validation and reporting for academic record management."
    ],
    tech: ["Java", "OOP", "Data Structures", "Academic Analytics", "MIT License"],
    githubUrl: "https://github.com/stuartmzimba/StudentMarkApp2",
    updated: "Mar 2026",
    stars: 0,
    forks: 0,
    license: "MIT License"
  },
  {
    repoName: "first-repo",
    aliases: ["first-repo"],
    title: "Python Foundations & Algorithms",
    category: ["python"],
    language: "Python",
    icon: "bx-terminal",
    previewTitle: "algorithms.py — Core Python",
    previewLines: [
      "<span class='kw'>def</span> <span class='fn'>solve_problem</span>(data_stream):",
      "  cleaned = [x <span class='kw'>for</span> x <span class='kw'>in</span> data_stream <span class='kw'>if</span> x]",
      "  <span class='kw'>return</span> <span class='fn'>optimize</span>(cleaned)"
    ],
    architecture: ["Problem Specification", "Python Algorithm Design", "CLI Execution", "Git Version Control"],
    description: "Foundational Python programming repository exploring core algorithms, scripting workflows, and Git version control best practices.",
    highlights: [
      "Demonstrates core Python syntax, control flow, and algorithmic problem solving.",
      "Establishes clean Git and GitHub repository workflow under an MIT open-source license.",
      "Serves as a sandbox for experimenting with Python automation and data manipulation."
    ],
    tech: ["Python", "Algorithms", "Git", "CLI", "MIT License"],
    githubUrl: "https://github.com/stuartmzimba/first-repo",
    updated: "Feb 2026",
    stars: 0,
    forks: 0,
    license: "MIT License"
  },
  {
    repoName: "portfolio",
    aliases: ["portfolio"],
    title: "Modern React Developer Portfolio",
    category: ["web"],
    language: "React & Vite",
    icon: "bx-layer",
    previewTitle: "App.jsx — React & Vite",
    previewLines: [
      "<span class='kw'>import</span> React <span class='kw'>from</span> <span class='str'>'react'</span>;",
      "<span class='kw'>const</span> Portfolio = () =&gt; &lt;<span class='fn'>ModernSaaS</span> /&gt;;",
      "<span class='kw'>export default</span> Portfolio;"
    ],
    architecture: ["React 18 + Vite", "Component Architecture", "SaaS Glassmorphism UI", "Vercel Production Deploy"],
    description: "Modern dark-mode developer portfolio rebuilt in React and Vite, featuring ambient aurora glassmorphism, instant search, category filtering, Command Palette, and CV modal.",
    highlights: [
      "Designed with an obsidian glassmorphism UI and ambient aurora mesh gradients.",
      "Rebuilt in React with Vite for blazingly fast bundle sizes, component isolation, and instant hydration.",
      "Keyboard-accessible Command Palette (Ctrl+K), interactive CV preview modal, and toast feedback."
    ],
    tech: ["React", "Vite", "JavaScript", "CSS3", "Glassmorphism", "Vercel"],
    githubUrl: "https://github.com/stuartmzimba",
    liveUrl: "https://stuart-mzimba-portfolio.vercel.app",
    updated: "Nov 2026",
    stars: 1,
    forks: 0,
    license: "Custom"
  }
];

export const educationList = [
  {
    institution: "University of Mpumalanga",
    qualification: "Bachelor of Information and Communication Technology (BICT)",
    period: "Expected 2027",
    status: "Final-Year Student",
    description: "Comprehensive coursework in Systems Analysis, Advanced Programming (Java & Python), Data Structures & Algorithms, Mobile Computing (Kotlin), Database Management Systems, and Cloud Software Architecture."
  },
  {
    institution: "Mjokwane Secondary School",
    qualification: "National Senior Certificate (Matric)",
    period: "2023",
    status: "Completed",
    description: "Solid foundation in Mathematics, Physical Sciences, and computing fundamentals."
  }
];

export const certificationsList = [
  {
    title: "Data Science 101",
    issuer: "IBM Developer Skills Network (CognitiveClass.ai)",
    badge: "IBM Verified",
    description: "Foundational data science lifecycle, machine learning concepts, data preparation, modeling, and real-world analytical case studies."
  },
  {
    title: "Data Science Tools",
    issuer: "IBM Developer Skills Network (CognitiveClass.ai)",
    badge: "IBM Verified",
    description: "Hands-on mastery of industry-standard tools including Jupyter Notebooks, RStudio IDE, Git/GitHub version control, and data visualization libraries."
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "bx-code-curly",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java (17 / Jakarta EE)", level: 85 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Kotlin", level: 75 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Web & UI Engineering",
    icon: "bx-layout",
    skills: [
      { name: "React / Vite", level: 85 },
      { name: "HTML5 / Semantic Web", level: 95 },
      { name: "CSS3 / Modern Glassmorphism", level: 90 },
      { name: "Responsive Design & A11y", level: 90 },
      { name: "RESTful API Integration", level: 88 }
    ]
  },
  {
    title: "Backend, Frameworks & Cloud",
    icon: "bx-server",
    skills: [
      { name: "FastAPI / Node.js", level: 82 },
      { name: "Jakarta EE 10 / Payara", level: 80 },
      { name: "Railway Cloud Deployment", level: 88 },
      { name: "Vercel Serverless Hosting", level: 90 },
      { name: "MySQL / Relational DBs", level: 85 }
    ]
  },
  {
    title: "AI, Machine Learning & Tools",
    icon: "bx-brain",
    skills: [
      { name: "Association Mining (FP-Growth)", level: 80 },
      { name: "Data Science (IBM Certified)", level: 85 },
      { name: "Git & GitHub Version Control", level: 90 },
      { name: "VS Code / IntelliJ IDEA", level: 92 },
      { name: "Problem Solving & Algorithmic OOP", level: 88 }
    ]
  }
];
