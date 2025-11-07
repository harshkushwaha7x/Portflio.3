import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, Github, Linkedin } from "lucide-react";
import profileHero from "@/assets/profile-hero.jpeg";

export type HeroProps = {
  typedText: string;
  onScrollTo: (id: string) => void;
};

const Hero = ({ typedText, onScrollTo }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-surface pt-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:items-start">
          <div className="text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-text-primary leading-tight min-h-[3.25rem] lg:min-h-[3.75rem]">
              <span className="typing-animation">{typedText}</span>
            </h1>
            <p className="text-xl mb-8 text-text-secondary">
              Hi, I'm Harsh Kushwaha — Full Stack Developer specializing in AI/ML, building modern applications with a focus on great user experience.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={() => onScrollTo("projects")} className="bg-button-primary text-white hover:bg-button-primary-hover transform hover:scale-105 transition-all duration-300">View Work</Button>
              <Button variant="outline" onClick={() => onScrollTo("contact")} className="bg-white text-black border-2 border-button-primary hover:bg-button-primary hover:text-white transform hover:scale-105 transition-all duration-300">Get In Touch</Button>
              <Button asChild className="bg-[#1456d9] text-white hover:bg-button-primary-hover transform hover:scale-105 transition-all duration-300">
                <a href="https://drive.google.com/file/d/1NnyrF1vk0ri0-RLjjNqsfDgtQsaPZLVO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/harsh-kushwaha-7x" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-portfolio-blue transition-colors" aria-label="LinkedIn profile">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://github.com/harshkushwaha7x" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-green-600 dark:hover:text-green-400 transition-colors" aria-label="GitHub profile">
                <Github className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end lg:self-start lg:-mt-12">
            <img
              src={profileHero}
              alt="Harsh Kushwaha - Full Stack Developer and AI/ML Enthusiast"
              className="w-full max-w-md mx-auto h-auto max-h-[85vh] rounded-2xl shadow-2xl blur-up"
              loading="eager"
              decoding="async"
              width="480"
              height="640"
              fetchPriority="high"
              onLoad={(e) => e.currentTarget.classList.remove('blur-up')}
            />
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <Button variant="ghost" size="icon" onClick={() => onScrollTo("about")} className="w-10 h-10 rounded-full animate-bounce bg-white text-black shadow-lg hover:bg-gray-200 hover:text-black dark:bg-button-primary dark:text-white dark:hover:bg-button-primary-hover">
            <ChevronDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
