import { useEffect, useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
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
import { Moon, Sun, Menu, X } from "lucide-react";

// Import data from constants
import { projects, skills, certifications, navItems } from "@/constants/data";


const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("home");

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

  // Derive selected project once for reliable modal rendering
  const selected = selectedProject ? projects.find((p) => p.id === selectedProject) : null;

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
    </div>
  );
};

export default Index;
