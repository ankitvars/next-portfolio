export const siteConfig = {
  name: "Ankit Varshney",
  title: "Senior Frontend Developer",
  description:
    "Senior React.js Developer and Frontend Specialist with 3+ years of experience. Specializing in React.js, Next.js, and modern web technologies.",
  url: "https://ankits-portfolio.vercel.app",
  ogImage: "https://ankits-portfolio.vercel.app/og-image.jpg",
  links: {
    github: "https://github.com/ankitvars",
    linkedin: "https://linkedin.com/in/ankitvars",
    email: "mailto:varshneyankit011@gmail.com",
  },
  contact: {
    email: "varshneyankit011@gmail.com",
    phone: "+91-8433459166",
    location: "Gurugram, India",
  },
};

export const personalInfo = {
  name: "Ankit Varshney",
  role: "Senior Frontend Developer",
  location: "Gurugram, India",
  experience: "4+ years",
  currentRole:
    "Senior React.js Developer at Cognizant Technology Solutions (via Shephertz)",
  summary:
    "Passionate Senior Frontend Developer with 4+ years of experience in React.js, Next.js, and modern frontend stacks. Specialized in building scalable web applications for health tech and fintech domains. Currently working at Niva Bupa (Cognizant Technology Solutions), delivering high-quality solutions with a focus on performance and user experience. Previously contributed to fintech innovation at Ruptok.",
  specializations: [
    "Health Tech Solutions",
    "Fintech Platforms",
    "Progressive Web Apps (PWA)",
    "API Development",
    "Performance Optimization",
    "UI/UX Design",
  ],
};

export const skills = {
  frontend: [
    { name: "React.js", level: 95, icon: "react" },
    { name: "Next.js", level: 90, icon: "nextdotjs" },
    { name: "TypeScript", level: 85, icon: "typescript" },
    { name: "JavaScript (ES6+)", level: 95, icon: "javascript" },
    { name: "Redux", level: 80, icon: "redux" },
    { name: "HTML5", level: 95, icon: "html5" },
    { name: "CSS3", level: 90, icon: "css" },
    { name: "Tailwind CSS", level: 85, icon: "tailwindcss" },
    { name: "React Native", level: 75, icon: "react-native" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "nodedotjs" },
    { name: "Express.js", level: 80, icon: "express" },
    { name: "GraphQL", level: 70, icon: "graphql" },
    { name: "Firebase", level: 75, icon: "firebase" },
    { name: "MongoDB", level: 80, icon: "mongodb" },
    { name: "PostgreSQL", level: 70, icon: "postgresql" },
    { name: "Strapi", level: 65, icon: "strapi" },
  ],
  devops: [
    { name: "Git", level: 90, icon: "git" },
    { name: "GitHub", level: 90, icon: "github" },
    { name: "Docker", level: 70, icon: "docker" },
    { name: "AWS (Lambda, S3, EC2)", level: 65, icon: "aws" },
    { name: "NGINX", level: 60, icon: "nginx" },
    { name: "PM2", level: 75, icon: "pm2" },
    { name: "Jenkins", level: 60, icon: "jenkins" },
    { name: "CI/CD Pipelines", level: 70, icon: "cicd" },
  ],
};

export const experience = [
  {
    company: "Nivabupa Health Insurance",
    position: "Senior React.js Developer",
    duration: "December 2024 – Present",
    location: "Gurugram, India",
    logo: "/companies/nivabupa_logo.jpeg",
    description:
      "Working as a Senior React.js Developer through Shephertz, delivering high-quality solutions for enterprise clients.",
    achievements: [
      "Led AEM to Next.js migration project, improving performance by 40%",
      "Implemented VAPT security fixes, achieving 100% compliance",
      "Integrated Facebook/Instagram APIs for social media features",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with cross-functional teams for project delivery",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "AEM",
      "Facebook API",
      "Instagram API",
      "VAPT",
    ],
  },
  {
    company: "Ruptok Fintech",
    position: "Frontend Developer",
    duration: "January 2023 – December 2024",
    location: "Delhi, India",
    logo: "/companies/ruptok_fintech_logo.jpeg",
    description:
      "Developed and maintained frontend applications for fintech solutions with focus on user experience and performance.",
    achievements: [
      "Redesigned UI/UX resulting in 25% improvement in user retention",
      "Integrated OpenAI OCR technology for document processing",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Optimized application performance achieving 90+ Lighthouse scores",
      "Built responsive web applications using modern React patterns",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "OpenAI API",
      "CI/CD",
      "Lighthouse",
      "Responsive Design",
    ],
  },
  {
    company: "CS Mock",
    position: "Frontend Developer",
    duration: "January 2022 – December 2022",
    location: "Noida, India",
    logo: "/companies/csmock_logo.jpeg",
    description:
      "Contributed to frontend development for educational technology platform.",
    achievements: [
      "Optimized Webpack configuration reducing bundle size by 28%",
      "Migrated class components to React hooks improving maintainability",
      "Implemented lazy loading for better performance",
      "Enhanced user interface with modern design patterns",
      "Collaborated with backend team for API integration",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Webpack",
      "React Hooks",
      "API Integration",
    ],
  },
];

export const projects = [
  {
    title: "Paper Shapers",
    description:
      "Full-stack Mock Paper Creator Platform with advanced question management and user analytics.",
    longDescription:
      "A comprehensive platform for creating, managing, and taking mock exams. Features include question bank management, automated grading, performance analytics, and real-time collaboration tools.",
    image: "/projects/paper-shapers.png",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Redux",
      "Material-UI",
    ],
    github: "https://github.com/harshkushwaha7x/papershaper",
    live: "https://paper-shapers.vercel.app",
    features: [
      "Advanced question bank management",
      "Automated grading system",
      "Performance analytics dashboard",
      "Real-time collaboration",
      "Responsive design",
      "User authentication & authorization",
    ],
  },
  {
    title: "Open Chat AI",
    description:
      "Gemini API-powered chatbot with real-time streaming and conversation memory.",
    longDescription:
      "An intelligent chatbot application powered by Google's Gemini API, featuring real-time message streaming, conversation history, and advanced natural language processing capabilities.",
    image: "/projects/open-chat-ai.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Gemini API",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    github: "https://github.com/ankitvars/open-chat-ai",
    live: "https://open-chat-ai.netlify.app",
    features: [
      "Real-time message streaming",
      "Conversation memory",
      "Multiple AI models support",
      "Code syntax highlighting",
      "Export conversations",
      "Responsive design",
    ],
  },
  {
    title: "Resumind",
    description:
      "AI-powered resume analysis and optimization platform using Gemini API for intelligent insights.",
    longDescription:
      "An intelligent resume analysis platform that leverages Google's Gemini API to provide comprehensive resume feedback, optimization suggestions, and career insights. The platform helps users improve their resumes with AI-driven recommendations and industry-specific guidance.",
    image: "/projects/resumind.png",
    technologies: [
      "React.js",
      "Gemini API",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/Resumelyzer",
    live: "https://resumind.in",
    features: [
      "AI-powered resume analysis using Gemini API",
      "Intelligent feedback and optimization suggestions",
      "Industry-specific resume recommendations",
      "Real-time document processing and analysis",
      "Professional resume scoring and insights",
      "Career guidance and improvement tips",
    ],
  },
  {
    title: "Booking Clone",
    description:
      "Next.js-based Booking.com clone with hotel search, filtering, and booking functionality.",
    longDescription:
      "A comprehensive travel booking platform built with Next.js, featuring hotel search, location-based filtering, date selection, and accommodation booking. The app provides a seamless user experience for finding and booking travel accommodations.",
    image: "/projects/booking-clone.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    github: "https://github.com/ankitvars/booking-clone",
    live: "https://booking-clone-weld.vercel.app",
    features: [
      "Hotel search and filtering",
      "Location-based accommodation discovery",
      "Date selection and booking calendar",
      "Responsive design for all devices",
      "Modern UI with Tailwind CSS",
      "Single page application architecture",
    ],
  },
];

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ankitvars",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ankitvars",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:varshneyankit011@gmail.com",
    icon: "mail",
  },
];

export const stats = [
  { label: "Years of Experience", value: "3.5+" },
  { label: "Projects Completed (GitHub)", value: "40+" },
  { label: "Industrial Projects", value: "10+" },
  { label: "Technologies Mastered", value: "20+" },
  { label: "Production Deployments", value: "10+" },
];
