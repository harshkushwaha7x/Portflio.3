// Project images
import projectAiExam from "@/assets/project-ai-exam.jpg";
import projectUpscaler from "@/assets/project-upscaler.jpg";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectDetection from "@/assets/project-credit-card-fraud-detection.jpeg";
import projectResearch from "@/assets/project-research.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";

// Skill icons
import iconMl from "@/assets/icon-ml.png";
import iconProgramming from "@/assets/icon-programming.png";
import iconFrontend from "@/assets/icon-frontend.png";
import iconBackend from "@/assets/icon-backend.png";
import iconDatabase from "@/assets/icon-database.png";
import iconDevops from "@/assets/icon-devops.png";
import iconSkills from "@/assets/icon-skills.png";
import iconDeepLearning from "@/assets/icon-deep-learning.png";
import iconAi from "@/assets/icon-ai.png";

// Types
import type { Project, Skill, Certification } from "@/types";

export const projects: Project[] = [
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
    description: "Built and deployed ML fraud detection app on Azure with Docker & CI/CD.",
    image: projectDetection,
    tags: ["Python", "scikit-learn", "Docker", "+3"],
    liveDemo: "https://creditcard-h3e5aaaffcajawc8.centralindia-01.azurewebsites.net/",
    sourceCode: "https://github.com/harshkushwaha7x/Credit-Card-Fraud-Detection",
    details: {
      description: [
        "Implemented a complete pipeline: undersampled imbalanced data, trained Logistic Regression, and exported artifacts (model pickle, classification report, heatmap); exposed predictions via a responsive Streamlit app with 9 inputs auto-padded to the model's 15‑feature schema.",
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

export const skills: Skill[] = [
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

export const certifications: Certification[] = [
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

export const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];
