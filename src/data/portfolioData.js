export const personalInfo = {
  name: "Tigran Khachaturyan",
  location: "Toronto, Ontario, Canada",
  email: "thacaturan740@gmail.com",
  phone: "+1 437-838-4689",
  linkedin: "https://www.linkedin.com/in/tigran-khachaturyan-4155a0266/",
  objective:
    "To obtain a position in Software Engineering or Cybersecurity, where I can leverage my education in Computer Programming and Analysis from George Brown College to develop secure and efficient software solutions."
};

export const about =
  "I am a Computer Programming and Analysis student at George Brown College, graduating in April 2026. I am motivated, detail-oriented, and career-focused, with hands-on experience building full-stack applications through academic projects and collaborative development. My interests include software engineering, cybersecurity, and cloud technologies. I bring a strong problem-solving mindset, a structured approach to system design, and practical teamwork experience from project-based environments.";

export const careerPhilosophy = [
  'Bill Hicks wrote that "we are the facilitators of our own creative evolution." I take that to mean my career is not something that happens to me—I shape it through deliberate choices, practice, and reflection. Past experience in collaborative academic projects and professional development work taught me that growth comes from owning problems end to end: clarifying requirements, writing maintainable code, and learning from code review and feedback. Today, as a Computer Programming and Analysis student, I see my role as both builder and learner—someone who turns ideas into reliable software while staying curious about security, architecture, and how systems affect real people.',
  "Looking ahead, I want internships and early roles where I can deepen my craft in software engineering and cybersecurity and contribute to teams that value clarity and integrity. My motivation is straightforward: to build systems that are secure, understandable, and useful, and to keep evolving—through coursework, side projects, and honest self-assessment—so that my skills match the responsibility I hope to earn. That, for me, is what it means to facilitate my own evolution in this field."
];

export const education = {
  institution: "George Brown College",
  program: "Computer Programming and Analysis",
  graduation: "April 2026",
  highlights: [
    "Built a full-stack e-commerce platform as part of academic coursework.",
    "Integrated Stripe for secure payment processing workflows.",
    "Implemented Firebase authentication with OAuth and JWT flows.",
    "Developed responsive React + Redux interfaces for complex UI state management."
  ]
};

export const experience = [
  {
    role: "Front-End and Full-Stack Developer",
    company: "Ample Insight Inc.",
    location: "Toronto, ON (Remote)",
    period: "Jan 2024 - Dec 2024",
    responsibilities: [
      "Developed applications using React, Node.js, and TypeScript for feature delivery and product improvements.",
      "Contributed to scalable SaaS architecture decisions and modular code organization.",
      "Worked with GCP, Docker, and Kubernetes to support cloud-native development workflows.",
      "Collaborated in Agile teams, participating in planning, code reviews, and iterative delivery.",
      "Built production-ready features with maintainability, testing, and performance in mind."
    ]
  }
];

/** Repository links for the “professional work samples” area (coursework + capstone team code). */
export const professionalWorkSamples = [
  {
    title: "COMP2139 — Assignment 01",
    description:
      "Academic coursework repository demonstrating assigned programming concepts and deliverables.",
    url: "https://github.com/Tigran120/COMP2139-Assignement01"
  },
  {
    title: "QuickTasks — COMP3074 (Group 8)",
    description:
      "Android task-management app prototype (Kotlin): categories, due dates, local persistence, and polished UI flow.",
    url: "https://github.com/Tigran120/COMP3074_G8_Project"
  },
  {
    title: "Schedulo — Capstone (team repository)",
    description:
      "Capstone workforce-management project codebase; collaborative development with scheduled releases and shared ownership.",
    url: "https://github.com/SamiArRahman/capstone_project"
  }
];

export const skills = {
  Programming: ["Python", "Java", "C++", "JavaScript"],
  Web: ["HTML", "CSS", "React"],
  Backend: ["Node.js", "Express", "GraphQL"],
  Databases: ["SQL", "MySQL", "MongoDB"],
  Tools: ["Git", "GitHub", "Docker", "Jenkins"],
  "Operating Systems": ["Linux", "Windows", "macOS"],
  Cybersecurity: ["Network Security", "Ethical Hacking", "Cryptography"],
  Cloud: ["GCP", "Kubernetes"]
};

/** Schedulo capstone UI mockups (high-fidelity screens) */
export const capstoneMockups = [
  {
    src: "/mockups/schedulo-dashboard.png",
    title: "Manager dashboard",
    caption:
      "KPI overview, action-required alerts, and daily coverage for the current week."
  },
  {
    src: "/mockups/schedulo-scheduling.png",
    title: "Scheduling",
    caption:
      "Weekly schedule calendar with shift blocks, auto-scheduler entry point, and manager tools."
  },
  {
    src: "/mockups/schedulo-employees.png",
    title: "Team members",
    caption:
      "Employee profiles with roles, skills, availability, and management actions."
  },
  {
    src: "/mockups/schedulo-requests.png",
    title: "Requests",
    caption:
      "PTO and shift-swap workflows with approval actions and pending request visibility."
  },
  {
    src: "/mockups/schedulo-analytics.png",
    title: "Analytics & audit log",
    caption:
      "Activity history, filters, and summary metrics for accountability and reporting."
  }
];

export const projects = [
  {
    title: "Schedulo",
    type: "Capstone Project (Featured)",
    description:
      "Schedulo is an intelligent workforce management capstone system for planning and scheduling: manager dashboards, employee profiles, PTO and shift-swap requests, weekly scheduling, and analytics with audit visibility—built to improve coordination through structured workflows, role-aware access, and clear operational reporting.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Docker"],
    features: [
      "Defined end-to-end project vision aligned with business workflow objectives.",
      "Produced business requirements, implementation plan, and iterative status reports.",
      "Completed requirements analysis, design documentation, and system architecture mapping.",
      "Created wireframe/mockup package for interface flow and stakeholder review.",
      "Implemented core scheduling modules with team-based collaboration and source control practices."
    ],
    learning:
      "Strengthened my ability to move from requirement discovery to implementation, while coordinating technical decisions and collaboration in a capstone team setting."
  },
  {
    title: "SmartTask Pro",
    type: "Academic Project",
    description:
      "A productivity and task management application focused on clean information architecture, prioritization, and usability for everyday planning.",
    technologies: ["React", "JavaScript", "CSS", "Node.js"],
    features: [
      "Task categorization with priority and progress states.",
      "User-focused layout for clear workflow navigation.",
      "Reusable component structure for maintainability."
    ],
    learning:
      "Learned to design interfaces around user behavior and structure application state for long-term extensibility."
  },
  {
    title: "E-commerce Platform",
    type: "Academic Project",
    description:
      "A full-stack online shopping platform with secure authentication, payment processing, and responsive frontend architecture.",
    technologies: ["React", "Redux", "Firebase Auth", "Node.js", "Express", "Stripe API"],
    features: [
      "Secure sign-in with Firebase authentication (OAuth + JWT).",
      "Stripe integration for checkout and payment flow.",
      "Redux state management for cart and product workflows."
    ],
    learning:
      "Built practical full-stack integration skills by connecting authentication, payments, and state management into one coherent system."
  },
  {
    title: "Gomoku Game Implementation",
    type: "Academic Project",
    description:
      "A turn-based board game implementation in Java with OOP-driven structure and algorithmic win-detection logic.",
    technologies: ["Java", "OOP", "Algorithms"],
    features: [
      "Grid-based board representation and turn engine.",
      "Directional win detection for horizontal, vertical, and diagonal sequences.",
      "Class-based architecture for game state management."
    ],
    learning:
      "Improved algorithmic thinking and object-oriented design for rule-driven interactive systems."
  },
  {
    title: "ThreatLens - Cybersecurity Monitoring Dashboard",
    type: "Independent Project",
    description:
      "A cybersecurity-focused dashboard concept for monitoring user activity trends, suspicious events, and system alert patterns.",
    technologies: ["React", "TypeScript", "Charting", "Node.js"],
    features: [
      "Real-time style activity stream for security event visibility.",
      "Alert module with severity grouping and notification timeline.",
      "Login behavior monitoring and analytics-oriented UI."
    ],
    learning:
      "Demonstrates applied cybersecurity awareness, dashboard design, and secure-thinking user interface patterns."
  },
  {
    title: "VaultNote - Secure Notes Application",
    type: "Independent Project",
    description:
      "A secure notes management concept featuring authentication, protected CRUD operations, and encrypted-storage design principles.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "React"],
    features: [
      "JWT-based authentication flow for protected endpoints.",
      "Structured CRUD operations for personal note management.",
      "Encrypted-storage concept for sensitive user content."
    ],
    learning:
      "Shows backend security fundamentals, API design discipline, and practical authentication implementation."
  },
  {
    title: "DevTrack - Developer Productivity Tracker",
    type: "Independent Project",
    description:
      "A personal productivity analytics application designed to track development tasks, progress consistency, and individual performance trends.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Charting"],
    features: [
      "Task management workflow with progress dashboards.",
      "Performance metrics visualization over time.",
      "Goal tracking structure for sprint-like planning."
    ],
    learning:
      "Demonstrates product thinking, data presentation, and structured full-stack implementation practices."
  }
];

export const capstoneDetails = {
  summary:
    "Schedulo is the core capstone initiative in this portfolio: an intelligent workforce management system for scheduling, team visibility, and request workflows. It supports structured planning, manager and employee views, and team collaboration across the full development lifecycle.",
  vision:
    "Build a reliable, user-friendly Schedulo platform that helps teams organize workforce scheduling with visibility, accountability, and scalability—from dashboards and calendars to requests and analytics.",
  businessRequirements: [
    "Provide role-aware scheduling workflows for different stakeholders.",
    "Reduce manual coordination overhead and scheduling conflicts.",
    "Offer clear visibility into assignment status and operational coverage."
  ],
  projectPlan: [
    "Discovery and requirement gathering",
    "Analysis and system design",
    "Wireframing and user-flow validation",
    "Incremental implementation and integration",
    "Status reporting and refinement"
  ],
  analysisAndDesign: [
    "Use-case mapping and feature decomposition",
    "Data model planning for schedules, users, and assignments",
    "Component-level UI planning and API contract definition"
  ],
  statusReports: [
    "Initial scope and milestones documented",
    "Mid-project progress review and feature tracking",
    "Final implementation summary and handoff readiness"
  ],
  implementation: [
    "Frontend modules for scheduling and dashboard views",
    "Backend APIs for assignment operations and authentication",
    "Data persistence and validation with secure request handling"
  ],
  collaboration:
    "The capstone was executed with structured team communication, shared task ownership, Git-based collaboration, and iterative feedback loops."
};

export const coverLetterTemplate = `Dear Hiring Manager,

I am writing to express my interest in internship or junior-level opportunities in Software Engineering or Cybersecurity. I am currently a Computer Programming and Analysis student at George Brown College, graduating in April 2026, with hands-on experience building full-stack applications and academic software projects.

Through my coursework and development experience, I have worked with React, Node.js, TypeScript, cloud tooling, and secure authentication workflows. I am especially motivated by projects that require structured problem-solving, clear collaboration, and thoughtful software design.

I would welcome the opportunity to contribute to your team, learn from experienced engineers, and help deliver reliable and maintainable software solutions.

Thank you for your time and consideration.

Sincerely,
Tigran Khachaturyan`;
