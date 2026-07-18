// Portfolio content data — all text and structured data in one place

export const personalInfo = {
  name: "Vraj Mistry",
  initials: "VM",
  title: "Software Development Engineer",
  titles: [
    "Full-Stack Solutions",
    "AI-Powered Systems",
    "Scalable Microservices",
    "Cutting-Edge Frontends",
  ],
  summary:
    "Software Development Engineer with 3+ years of hands-on experience spanning .NET microservices, AI chatbot development, and Angular-based frontend engineering. Proven track record of architecting full-stack solutions including enterprise-scale RAG chatbots and high-performance backend microservices — with a focus on performance, security, and maintainable architecture.",
  location: "Vadodara, Gujarat, India",
  email: "vrajmistry0311@gmail.com",
  phone: "+91 9624470453",
  links: {
    linkedin: "https://www.linkedin.com/in/vraj-mistry-3127501b6",
    github: "https://github.com/VrajMistry0311",
    leetcode: "https://leetcode.com/u/vrajmistry0311/",
  },
};

export const skills = {
  frontend: {
    label: "Frontend",
    color: "#00f0ff",
    items: [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Micro-Frontends",
      "Accessibility (WCAG)",
    ],
  },
  backend: {
    label: "Backend",
    color: "#34d399",
    items: [
      "ASP.NET Core",
      "C#",
      "Node.js",
      "Python",
      "REST APIs",
      "Microservices",
      "Event-Driven Architecture",
    ],
  },
  ai: {
    label: "AI / ML",
    color: "#ffb347",
    items: [
      "OpenAI APIs",
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "Semantic Search",
      "CNNs",
      "Vector Databases",
    ],
  },
  devops: {
    label: "DevOps & Cloud",
    color: "#a855f7",
    items: [
      "Kubernetes",
      "Azure",
      "Docker",
      "CI/CD Pipelines",
      "K6 Load Testing",
      "Azure Service Bus",
    ],
  },
  database: {
    label: "Databases",
    color: "#f472b6",
    items: [
      "PostgreSQL",
      "Elasticsearch",
      "MongoDB",
      "Cosmos DB",
      "Redis",
      "MySQL",
    ],
  },
};

export interface ExperienceProject {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string; suffix?: string }[];
  techStack: string[];
}

export const experience: ExperienceProject[] = [
  {
    id: "ai-chatbot",
    icon: "🤖",
    title: "AI-Powered Enterprise Chatbot",
    subtitle: "Lead Developer — Full-Stack & AI",
    description:
      "Architected an end-to-end conversational AI platform serving enterprise users across multiple products, combining natural language understanding with real-time data retrieval.",
    highlights: [
      "Built 8+ intent types including FAQ, Navigation, DataSearch, Tag Management, Theme switching, and Voice",
      "Engineered an event-driven RAG pipeline with Zendesk webhooks and web scrapers for real-time knowledge updates",
      "Implemented LLM-as-a-judge evaluation processing 3.6B+ tokens with 99% cache-hit rate",
      "Migrated intent classification from legacy system to OpenAI Response API, reducing latency by 40-50%",
      "Delivered as a discrete Micro-Frontend integrated across multiple company products",
      "Reduced L1 support tickets by 85% after production deployment",
    ],
    metrics: [
      { label: "Intents Built", value: "8", suffix: "+" },
      { label: "Latency Reduction", value: "50", suffix: "%" },
      { label: "Ticket Reduction", value: "85", suffix: "%" },
      { label: "Cache Hit Rate", value: "99", suffix: "%" },
    ],
    techStack: [
      "Angular",
      "ASP.NET Core",
      "OpenAI",
      "Elasticsearch",
      "Redis",
      "RAG",
    ],
  },
  {
    id: "assessment",
    icon: "📊",
    title: "Real-Time Assessment Platform",
    subtitle: "Lead Developer — Full-Stack",
    description:
      "Architected a micro-frontend assessment system from zero to production, featuring question banks, rubric management, and AI auto-grading.",
    highlights: [
      "Designed scalable relational schemas in PostgreSQL with Unit of Work transaction pattern",
      "Built AI Auto-Grading engine using LLMs to evaluate responses against rubric matrices",
      "Implemented question versioning, drag-and-drop ordering, and configuration-based question types",
      "Achieved 0 bugs during Angular version upgrade while other teams received 50-230 bugs",
      "Optimized p95 latency from 1s to 200ms and p99 from 1.7s to 350ms via K6 load testing",
    ],
    metrics: [
      { label: "p95 Latency", value: "200", suffix: "ms" },
      { label: "p99 Latency", value: "350", suffix: "ms" },
      { label: "Bugs in Upgrade", value: "0" },
      { label: "Test Coverage", value: "95", suffix: "%" },
    ],
    techStack: [
      "Angular",
      "ASP.NET Core",
      "PostgreSQL",
      "OpenAI",
      "K6",
      "Micro-Frontend",
    ],
  },
  {
    id: "search-ai",
    icon: "🔍",
    title: "Intelligent Search & AI Agents",
    subtitle: "Backend Developer — AI/ML",
    description:
      "Built an AI agents controller powering intelligent workflows including evaluation form generation, syllabus analysis, and multi-intent classification.",
    highlights: [
      "Achieved ~100% accuracy for evaluation form generation across various form types",
      "Wrote 670+ test cases for intent classification accuracy validation",
      "Built web scraping pipeline for dynamic knowledge base ingestion",
      "Implemented conversational capabilities with token optimization and context compaction",
      "Designed Elastic index for conversation history with background async indexing",
    ],
    metrics: [
      { label: "Form Accuracy", value: "100", suffix: "%" },
      { label: "Test Cases", value: "670", suffix: "+" },
      { label: "Tokens Processed", value: "3.6", suffix: "B+" },
      { label: "Intents Classified", value: "12", suffix: "+" },
    ],
    techStack: [
      "ASP.NET Core",
      "OpenAI",
      "Elasticsearch",
      "Vector Search",
      "RAG",
      "MongoDB",
    ],
  },
  {
    id: "infra",
    icon: "⚡",
    title: "Infrastructure & Performance",
    subtitle: "DevOps & Backend Optimization",
    description:
      "Optimized critical services and built reusable middleware adopted across the entire engineering organization.",
    highlights: [
      "Led Kubernetes migration with K6 performance testing, fine-tuning CPU/memory for cost optimization",
      "Payment API optimization: reduced response time from 2+ minutes to 40 seconds",
      "Built and distributed sanitization middleware as an organization-wide NuGet package",
      "Integrated Redis caching across multiple services for high-frequency data access",
      "Resolved production 409 conflict errors through proactive container existence checks",
    ],
    metrics: [
      { label: "API Speed Up", value: "3", suffix: "x" },
      { label: "Services Migrated", value: "4", suffix: "+" },
      { label: "Orgs Using Middleware", value: "10", suffix: "+" },
      { label: "Production Bugs", value: "0" },
    ],
    techStack: [
      "Kubernetes",
      "K6",
      "Redis",
      "Azure",
      "ASP.NET Core",
      "Docker",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  language: string;
  languageColor: string;
}

export const projects: Project[] = [
  {
    id: "fitness",
    title: "House of Fitness",
    description:
      "A full-stack MERN e-commerce website for fitness products with authentication, cart management, and payment integration.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/VrajMistry0311/House-Of-Fitness-MERN-WebSite",
    language: "JavaScript",
    languageColor: "#f1e05a",
  },
  {
    id: "har",
    title: "Human Activity Recognition",
    description:
      "ML project using Convolutional Neural Networks to classify human activities from accelerometer data with high accuracy.",
    techStack: ["Python", "TensorFlow", "CNN", "Jupyter"],
    github: "https://github.com/VrajMistry0311/Human-Activity-Recognition",
    language: "Python",
    languageColor: "#3572A5",
  },
  {
    id: "car-price",
    title: "Car Price Prediction",
    description:
      "Machine learning regression model to predict used car prices based on multiple features using various algorithms.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/VrajMistry0311/Car-Price-Prediction",
    language: "Python",
    languageColor: "#3572A5",
  },
  {
    id: "heart",
    title: "Heart Disease Prediction",
    description:
      "Classification model to predict heart disease presence using patient clinical data and machine learning techniques.",
    techStack: ["Python", "ML", "Flask", "HTML"],
    github: "https://github.com/VrajMistry0311/Heart-Disease-Prediction",
    language: "HTML",
    languageColor: "#e34c26",
  },
  {
    id: "blog",
    title: "Blog Website",
    description:
      "A full-stack blog platform where users can share thoughts, post daily activities, and interact with community content.",
    techStack: ["JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/VrajMistry0311/Blog-WebSite",
    language: "JavaScript",
    languageColor: "#f1e05a",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    description:
      "A comprehensive e-commerce platform for gym supplements built with PHP, featuring product catalog and shopping cart.",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/VrajMistry0311/E-Commerce-Website",
    language: "PHP",
    languageColor: "#4F5D95",
  },
];

export const resumeData = {
  education: {
    degree: "B.E. Computer Engineering",
    institution:
      "G. H. Patel College of Engineering and Technology (GCET), Gujarat",
    cgpa: "9.26 / 10",
    year: "2019 — 2023",
  },
  positions: [
    {
      title: "Software Development Engineer II",
      company: "Exxat Systems Pvt. Ltd.",
      location: "Vadodara, Gujarat",
      period: "Jan 2026 — Present",
      bullets: [
        "Spearheaded the backend foundation of a new Assessment microservice, designing scalable relational schemas in PostgreSQL and implementing the Unit of Work design pattern",
        "Developed an advanced AI Auto-Grading engine utilizing Large Language Models to evaluate student responses against complex, multi-level rubric matrices",
        "Integrated smart AI insights and generative features, enabling automatic generation of assessment questions from course documents",
        "Executed rigorous load testing with K6, reducing p95 latency from 1s to 200ms and p99 from 1.7s to 350ms",
      ],
    },
    {
      title: "Software Development Engineer I",
      company: "Exxat Systems Pvt. Ltd.",
      location: "Vadodara, Gujarat",
      period: "Jun 2023 — Jan 2026",
      bullets: [
        "Architected an AI-powered enterprise chatbot handling dynamic user intents using Semantic Search and RAG",
        "Designed a scalable event-driven knowledge pipeline with Zendesk webhooks and custom web scrapers",
        "Engineered an LLM-as-a-judge evaluation pipeline processing over 3.6 billion tokens with 99% cache-hit rate",
        "Built a high-performance conversation history system using MongoDB and Elasticsearch",
        "Led UI development of the Conversational chatbot as a Micro-Frontend, reducing L1 support tickets by 85%",
      ],
    },
  ],
  technicalSkills: {
    "Languages & Frameworks":
      "C#, .NET / ASP.NET Core, TypeScript, JavaScript, Angular",
    "AI & Search":
      "OpenAI Assistants & Responses APIs, LLMs, Prompt Engineering, RAG, Semantic Search, Elasticsearch",
    "Databases & Caching":
      "MySQL, PostgreSQL, MongoDB, Cosmos DB, Redis",
    "Architecture & Patterns":
      "RESTful APIs, Microservices, Micro-Frontends (MFE), Service-to-Service Communication, Event-Driven Systems",
  },
};
