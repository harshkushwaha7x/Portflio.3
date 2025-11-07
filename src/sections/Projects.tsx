import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";
import type { Project } from "@/types";

export type ProjectsProps = {
  projects: Project[];
  onSelect: (id: number) => void;
};

const Projects = ({ projects, onSelect }: ProjectsProps) => {
  return (
    <section id="projects" className="section py-5 bg-gray-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold mb-5 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-center text-text-secondary mb-12 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          A showcase of my best work, demonstrating technical skills and creative problem-solving
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch"
          variants={staggerChildren(0.08, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-card overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 project-card cursor-pointer h-full flex flex-col subtle-glow hover-float rounded-lg"
              variants={fadeUp}
              onClick={() => onSelect(project.id)}
            >
              <div className="h-48 bg-muted flex items-center justify-center">
                <img
                  src={project.image}
                  alt={`${project.title} - Project screenshot`}
                  className="w-full h-full object-cover blur-up"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="192"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onLoad={(e) => e.currentTarget.classList.remove('blur-up')}
                />
              </div>
              <CardContent className="p-5 flex flex-col flex-1">
                <CardTitle className="text-xl mb-2" style={{ minHeight: "48px" }}>{project.title}</CardTitle>
                <CardDescription className="mb-3 text-sm line-clamp-2">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto border-t border-border pt-4">
                  <div className="grid grid-cols-3 items-center gap-4 min-h-[40px]">
                    <div className="text-left">
                      <button className="text-portfolio-blue hover:text-portfolio-blue-dark underline-offset-4 hover:underline inline-flex items-center text-xs md:text-sm font-medium p-0 h-auto justify-start whitespace-nowrap" onClick={(e) => { e.stopPropagation(); onSelect(project.id); }}>
                        View Details
                      </button>
                    </div>
                    <div className="text-center">
                      <a className="text-portfolio-blue hover:text-portfolio-blue-dark underline-offset-4 hover:underline inline-flex items-center text-xs md:text-sm font-medium p-0 h-auto whitespace-nowrap" href={project.liveDemo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        Live Demo
                      </a>
                    </div>
                    <div className="text-right">
                      <a className="text-portfolio-blue hover:text-portfolio-blue-dark underline-offset-4 hover:underline inline-flex items-center text-xs md:text-sm font-medium p-0 h-auto whitespace-nowrap" href={project.sourceCode} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/harshkushwaha7x"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-blue-700 text-white shadow-sm hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
