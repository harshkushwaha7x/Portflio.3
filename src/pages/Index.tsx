import { useEffect, useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Section components (lazy-loaded for performance)
const Hero = lazy(() => import("@/sections/Hero"));
const About = lazy(() => import("@/sections/About"));
const Education = lazy(() => import("@/sections/Education"));
const Experience = lazy(() => import("@/sections/Experience"));
const ProjectsSection = lazy(() => import("@/sections/Projects"));
const Extracurricular = lazy(() => import("@/sections/Extracurricular"));
const SkillsSection = lazy(() => import("@/sections/Skills"));
const CodingStatistics = lazy(() => import("@/sections/CodingStatistics"));
const CertificationsSection = lazy(() => import("@/sections/Certifications"));
const ContactSection = lazy(() => import("@/sections/Contact"));
import Footer from "@/sections/Footer";
import SectionDivider from "@/components/SectionDivider";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Moon, Sun, Menu, X, ExternalLink, ChevronDown, ChevronUp, Github, Linkedin, Mail, MapPin, Phone, FileText } from "lucide-react";

// Import images
import profileHero from "@/assets/profile-hero.jpeg";
import profileAbout from "@/assets/profile-about.jpeg";
import projectAiExam from "@/assets/project-ai-exam.jpg";
import projectUpscaler from "@/assets/project-upscaler.jpg";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectDetection from "@/assets/project-credit-card-fraud-detection.jpeg";
import projectResearch from "@/assets/project-research.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import iconMl from "@/assets/icon-ml.png";
import iconProgramming from "@/assets/icon-programming.png";
import iconFrontend from "@/assets/icon-frontend.png";
import iconBackend from "@/assets/icon-backend.png";
import iconDatabase from "@/assets/icon-database.png";
import iconDevops from "@/assets/icon-devops.png";
import iconSkills from "@/assets/icon-skills.png";
import iconCertification from "@/assets/icon-certification.png";
import certIcon from "@/assets/Certification.png";
import iconDeepLearning from "@/assets/icon-deep-learning.png";
import iconAi from "@/assets/icon-ai.png";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("home");
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  // Typing animation effect (loop with delete, heading has min-height to avoid layout shift)
  useEffect(() => {
    const text = "Hi, I'm Harsh Kushwaha";
    let index = 0;
    let deleting = false;
    let timeoutId: number | undefined;

    const schedule = (delay: number) => {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(tick, delay);
    };

    const tick = () => {
      if (!deleting) {
        setTypedText(text.slice(0, index));
        index += 1;
        if (index > text.length) {
          deleting = true;
          schedule(1000); // pause before deleting
          return;
        }
        schedule(90); // typing speed
      } else {
        index = Math.max(0, index - 1);
        setTypedText(text.slice(0, index));
        if (index === 0) {
          deleting = false;
          schedule(700); // pause before typing again
          return;
        }
        schedule(45); // deleting speed
      }
    };

    schedule(200);
    return () => {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  // Hash persistence: scroll to section on load after fonts are ready
  useEffect(() => {
    const hash = window.location.hash.replace('#','');
    if (!hash) return;
    const go = () => setTimeout(() => scrollToSection(hash), 50);
    // @ts-ignore
    if (document.fonts && document.fonts.ready) {
      // @ts-ignore
      document.fonts.ready.then(go).catch(go);
    } else {
      go();
    }
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Back to top button visibility + scroll progress + active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 300);
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Determine active section for aria-current
      const ids = navItems.map(n => n.id);
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - navH <= 20) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AOS removed: framer-motion handles animations per-section.

  // Set CSS var for nav height for consistent anchor offset (used by scroll-padding-top)
  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector('nav') as HTMLElement | null;
      const h = nav?.offsetHeight ?? 72;
      document.documentElement.style.setProperty('--nav-h', `${h}px`);
    };
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use native smooth scroll; scroll-padding-top handles the fixed nav offset
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "AI Exam Generator - Papershapers.in",
      description: "AI-powered platform for automated mock exam creation and deep research insights.",
      image: projectAiExam,
      tags: ["React.js", "Node.js", "TypeScript", "+8"],
      liveDemo: "https://papershapers.in/",
      sourceCode: "https://papershapers.in/",
      details: {
        description: [
          "Launched an AI-powered platform for generating custom Mock exam papers and Deep Research insights.",
          "Utilized AWS Lambda for on-demand question generation and deployed container workloads via Amazon EKS for scalability.",
          "Built and maintained CI/CD pipelines to enable efficient, cost-effective updates."
        ],
        technologies: ["React.js", "Node.js", "TypeScript", "MongoDB", "OpenAI API", "AWS Lambda", "Docker", "LangChain", "Tailwind CSS", "CI/CD", "AWS EKS"]
      }
    },
    {
      id: 2,
      title: "QuickGPT - Advanced AI Chatbot",
      description: "Built a secure, scalable AI chatbot using MERN and Gemini API.",
      image: projectChatbot,
      tags: ["React", "Node.js", "MongoDB", "+1"],
      liveDemo: "https://quick-gpt-ai-assistant.vercel.app/",
      sourceCode: "https://github.com/harshkushwaha7x/QuickGPT-AI-Assistant",
      details: {
        description: [
          "Built a full-stack MERN application integrating Google Gemini Pro API and ImageKit AI for text and image generation with a credit-based payment system (Stripe)",
          "Designed scalable backend using Express.js, MongoDB, JWT, and RESTful APIs for authentication, chat management, and real-time AI responses",
          "Developed responsive React frontend with Vite, Tailwind CSS, and context-based state, featuring live chat, community gallery, and subscription plans"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Google Gemini"],
      }
    },
    {
      id: 3,
      title: "Credit Card Fraud Detection",
      description: "Built an ML app with Logistic Regression and Streamlit, deployed on Azure using Docker and CI/CD.",
      image: projectDetection,
      tags: ["Python", "scikit-learn", "Docker", "+3"],
      liveDemo: "https://creditcard-h3e5aaaffcajawc8.centralindia-01.azurewebsites.net/",
      sourceCode: "https://github.com/harshkushwaha7x/Credit-Card-Fraud-Detection",
      details: {
        description: [
          "Implemented a complete pipeline: undersampled imbalanced data, trained Logistic Regression, and exported artifacts (model pickle, classification report, heatmap); exposed predictions via a responsive Streamlit app with 9 inputs auto-padded to the model’s 15‑feature schema.",
          "Productionized delivery with Docker and Azure Container Registry; added GitHub Actions to retrain the model and publish artifacts on push, and to build/push/deploy the container to Azure Web App.",
          "Improved reliability and UX by validating inputs and aligning feature shapes at inference, preventing runtime errors and enabling smooth one‑click predictions."
        ],
        technologies: ["Python", "scikit-learn", "Docker", "Azure", "GitHub Actions (CI/CD)"]
      }
    },
    {
      id: 4,
      title: "Smart Assistant for Research Summarization",
      description: "NLP + transformers to summarize research papers and extract key insights.",
      image: projectResearch,
      tags: ["Python", "Streamlit", "Groq API"],
      liveDemo: "https://github.com/harshkushwaha7x/Smart-Assistant-for-Research-Summarization",
      sourceCode: "https://github.com/harshkushwaha7x/Smart-Assistant-for-Research-Summarization",
      details: {
        description: [
          "Developed an AI-powered research assistant in Python and Streamlit that automatically summarizes, answers questions, and generates logic-based challenges from user-uploaded PDF/TXT documents, showcasing advanced contextual understanding and reasoning.",
          "Leveraged large language models (LLMs) via API integration to deliver document-grounded Q&A, logic-based question generation, and real-time feedback, with advanced features such as conversational memory for follow-up questions and answer snippet highlighting.",
          "Designed a clean, interactive web interface and modular backend architecture, ensuring all responses are justified with direct references from the source document and providing a seamless user experience for research comprehension and analysis."
        ],
        technologies: ["Python", "Streamlit", "Groq API"]
      }
    },
    {
      id: 5,
      title: "Image Upscaler using ESRGAN",
      description: "Upscaled low-resolution images 4× using ESRGAN for high-quality enhancement.",
      image: projectUpscaler,
      tags: ["TensorFlow 2", "ESRGAN", "Python", "+1"],
      liveDemo: "https://github.com/harshkushwaha7x/Image-Upscaler-using-ESRGAN",
      sourceCode: "https://github.com/harshkushwaha7x/Image-Upscaler-using-ESRGAN",
      details: {
        description: [
          "Developed a image upscaling application using TensorFlow 2 and ESRGAN architecture, achieving 4x resolution enhancement with automatic GPU acceleration, processing images 10x faster than CPU-only implementations",
          "Engineered dual-interface system comprising a Python CLI for batch processing and a Flask-based web application with drag-and-drop functionality, RESTful API endpoints, and responsive UI",
          "Implemented production-grade features including automatic model management from TensorFlow Hub, secure file handling with validation, alpha channel processing for PNG transparency, and automated cleanup mechanisms with comprehensive error handling and logging"
        ],
        technologies: ["TensorFlow 2", "ESRGAN", "Python", "Flask"]
      }
    },
    {
      id: 6,
      title: "E-commerce Application",
      description: "Built a scalable multi-vendor app with secure authentication and responsive UI.",
      image: projectEcommerce,
      tags: ["Next.js", "React.js", "Node.js", "+5"],
      liveDemo: "https://quick-cart-e-commerce-beryl.vercel.app/",
      sourceCode: "https://github.com/harshkushwaha7x/QuickCart-E-Commerce",
      details: {
        description: [
          "Developed a complete e-commerce platform with user authentication, seller/buyer dashboards, product management (CRUD operations), shopping cart functionality, and secure payment processing using Stripe integration with webhook handling",
          "Implemented scalable backend architecture using Next.js API routes, MongoDB with Mongoose ODM, Cloudinary for image management, and Inngest for background job processing, supporting multi-vendor marketplace functionality with role-based access control",
          "Built responsive, mobile-first UI with Tailwind CSS, featuring dynamic product catalogs, real-time cart updates, order tracking system, and optimized user experience across all devices with modern React patterns and server-side rendering"
        ],
        technologies: ["Next.js", "React.js", "Node.js", "MongoDB", "Clerk Auth", "Cloudinary", "Inngest", "Tailwind CSS"]
      }
    }
  ];

  // Derive selected project once for reliable modal rendering
  const selected = selectedProject ? projects.find((p) => p.id === selectedProject) : null;

  const skills = [
    {
      title: "Programming Languages",
      description: "Python, Java, JavaScript, TypeScript, C.",
      icon: iconProgramming
    },
    {
      title: "Machine Learning",
      description: "Scikit-Learn, NumPy, Pandas, Matplotlib, Seaborn.",
      icon: iconMl
    },
    {
      title: "Deep Learning",
      description: "TensorFlow, PyTorch, Neural Networks (CNNs, RNNs).",
      icon: iconDeepLearning
    },
    {
      title: "NLP, Computer Vision & Generative AI",
      description: "NLP, Computer Vision, OpenCV, Hugging Face Transformers, LangChain, Generative AI.",
      icon: iconAi
    },
    {
      title: "Frontend Technologies",
      description: "React.js, Next.js, Tailwind, Streamlit.",
      icon: iconFrontend
    },
    {
      title: "Backend Technologies",
      description: "Node.js, Express, Django, Flask, FastAPI, REST API, GraphQL.",
      icon: iconBackend
    },
    {
      title: "Database",
      description: "SQL, PostgreSQL, MongoDB.",
      icon: iconDatabase
    },
    {
      title: "DevOps and Cloud",
      description: "AWS, Azure, GCP, Docker, Kubernetes.",
      icon: iconDevops
    },
    {
      title: "Additional Skills",
      description: "Data Structures and Algorithms (DSA), System Design, Git, GitHub, CI/CD Pipelines, Project Management.",
      icon: iconSkills
    }
  ];

  const certifications = [
    {
      title: "Introduction to Generative AI Learning Path Specialization",
      issuer: "Google",
      date: "December 2024",
      link: "https://coursera.org/share/fbd02c20c98bc0785f348af199bc6e64"
    },
    {
      title: "Natural Language Processing Specialization",
      issuer: "DeepLearning.AI",
      date: "October 2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/BO4L51RZZ0AV"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "July 2024",
      link: "https://coursera.org/verify/specialization/EJJN2RW3VHZL"
    },
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      date: "March 2025",
      link: "https://learn.nvidia.com/certificates?id=jHjK11EsRZ6ZS47e3agq4Q#"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI",
      date: "February 2024",
      link: "https://coursera.org/verify/specialization/FSJQWLULKMBA"
    },
    {
      title: "AWS Fundamentals: Your First Steps into the AWS Cloud Specialization",
      issuer: "Amazon Web Services",
      date: "November 2025",
      link: "https://coursera.org/verify/specialization/QW3CPOCN9JTQ"
    },
    {
      title: "Full Stack Developer Bootcamp",
      issuer: "GeeksforGeeks",
      date: "May 2024",
      link: "https://media.geeksforgeeks.org/courses/certificates/784306a1cf7c0bb6dc59fd0751e9ce92.pdf"
    },
    {
      title: "Crash Course on Python",
      issuer: "Google",
      date: "December 2023",
      link: "https://coursera.org/verify/BBNPZ7LJ7J27"
    },
    {
      title: "Data Science",
      issuer: "Coding Ninjas",
      date: "July 2024",
      link: "https://files.codingninjas.in/certi_image625387da379e345f57881546c963d1694a639f.jpg"
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Coding Ninjas",
      date: "June 2024",
      link: "https://files.codingninjas.in/certi_image607784478a044981a2e860b1b9ac51225c7e00.jpg"
    },
    {
      title: "Data Structures",
      issuer: "Coursera",
      date: "December 2023",
      link: "https://coursera.org/verify/67XMLBDA6PQ4"
    },
    {
      title: "C for Everyone Programming Fundamentals",
      issuer: "Coursera",
      date: "June 2023",
      link: "https://coursera.org/verify/MFVK85DKAN87"
    },
    {
      title: "Introduction to Data, Signal, and Image Analysis with MATLAB",
      issuer: "Coursera",
      date: "April 2024",
      link: "https://www.coursera.org/account/accomplishments/verify/2M78QD45RBEC"
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      date: "December 2023",
      link: "https://www.coursera.org/account/accomplishments/verify/G2DEKFB3BVA7"
    }
  ];

  const githubTheme = darkMode ? "dark" : "default";
  const githubStatsImgUrl = `https://github-readme-stats.vercel.app/api?username=harshkushwaha7x&show_icons=true&theme=${githubTheme}&hide_border=true&title_color=${darkMode ? "ffffff" : "1E40AF"}&icon_color=${darkMode ? "ffffff" : "1E40AF"}&text_color=${darkMode ? "ffffff" : "000000"}`;
  const githubLangsImgUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=harshkushwaha7x&layout=compact&theme=${githubTheme}&hide_border=true&langs_count=8&title_color=${darkMode ? "ffffff" : "1E40AF"}&text_color=${darkMode ? "ffffff" : "000000"}`;

  const leetcodeTheme = darkMode ? "dark" : "white";
  const leetcodeImgUrl = `https://leetcard.jacoblin.cool/harsh_kushwaha_7x?theme=${leetcodeTheme}&ext=heatmap`;

  return (
    <div className="min-h-screen bg-gray-surface text-foreground">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[999]">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-nav-bg border-b border-nav-border shadow-lg" role="navigation" aria-label="Primary">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-portfolio-blue hover:text-portfolio-blue-dark transition-colors"
              aria-label="Go to home"
            >
              HK
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({label, id}) => {
                const base = "nav-link hover:text-blue-600 dark:hover:text-blue-400"; // default items turn blue on hover
                const pill = "px-4 py-2 rounded-xl bg-blue-600 text-white shadow-sm hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"; // Contact always pill
                const homeHover = "nav-link hover:text-blue-600 dark:hover:text-blue-400"; // Home only turns blue on hover
                const cls = id === 'contact' ? pill : id === 'home' ? homeHover : base;
                return (
                  <button
                    key={label}
                    onClick={() => scrollToSection(id)}
                    className={cls}
                    aria-current={(activeSection === id) ? 'page' : undefined}
                  >
                    {label}
                  </button>
                );
              })}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {navItems.map(({label, id}) => {
                const base = "block nav-link hover:text-blue-600 dark:hover:text-blue-400";
                const pill = "block px-4 py-2 rounded-xl bg-blue-600 text-white shadow-sm hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors";
                const homeHover = "block nav-link hover:text-blue-600 dark:hover:text-blue-400";
                const cls = id === 'contact' ? pill : id === 'home' ? homeHover : base;
                return (
                  <button
                    key={label}
                    onClick={() => scrollToSection(id)}
                    className={cls}
                    aria-current={(activeSection === id) ? 'page' : undefined}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      <main id="main" role="main">
        <Suspense fallback={<div className="py-8 text-center">Loading...</div>}>
        {/* Hero Section */}
        <Hero typedText={typedText} onScrollTo={scrollToSection} />
        <SectionDivider />

        {/* About Section */}
        <About />
        <SectionDivider />

        {/* Education Section */}
        <Education />
        <SectionDivider />

        {/* Experience Section */}
        <Experience />
        <SectionDivider />

        {/* Projects Section */}
        <ProjectsSection projects={projects} onSelect={(id) => setSelectedProject(id)} />
        <SectionDivider />

      {/* Project Modal (custom fallback, independent of Radix) */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelectedProject(null)} aria-hidden="true" />
          {/* Content */}
          <div className="relative bg-card text-card-foreground w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl mx-4 p-6">
            {/* Close button (top-right) */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="mb-4">
              <h2 className="text-3xl font-bold">
                {selected?.title ?? "Project Details"}
              </h2>
            </div>
            <div className="space-y-6">
              {selected?.image && (
                <img 
                  src={selected.image} 
                  alt={selected.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}
              <ul className="space-y-2">
                {(selected?.details.description ?? []).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-portfolio-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {(selected?.details.technologies ?? []).map((tech) => (
                    <span
                      key={tech}
                      className="project-modal-tag bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

        {/* Skills Section */}
        <SkillsSection skills={skills} />
        <SectionDivider />

        {/* Coding Statistics Section */}
        <CodingStatistics githubStatsImgUrl={githubStatsImgUrl} leetcodeImgUrl={leetcodeImgUrl} />
        <SectionDivider />

        {/* Certifications Section */}
        <CertificationsSection certifications={certifications} />
        <SectionDivider />

        {/* Extracurricular Activities Section */}
        <Extracurricular />
        <SectionDivider />

        {/* Contact Section */}
        <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Floating Button (shows after scroll) */}
      {showBackToTop && (
        <button
          id="backToTopFab"
          aria-label="Back to top"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-green-500 text-white flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.25)] z-50 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
      {/* I'll implement the rest in the next part due to length constraints */}
    </div>
  );
};

export default Index;
