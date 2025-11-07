import { CardDescription, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";
import type { Skill } from "@/types";

export type SkillsProps = { skills: Skill[] };

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="section py-5 bg-gray-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-3xl font-bold mb-5 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="text-center text-text-secondary mb-12 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          A comprehensive overview of my technical expertise and proficiency in various technologies.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerChildren(0.08, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} className="bg-card p-8 shadow hover:shadow-md transition-shadow flex flex-col items-center text-center subtle-glow hover-float rounded-lg" variants={fadeUp}>
              <img src={skill.icon} alt={`${skill.title} icon`} className="h-16 mb-4" width="64" height="64" loading="lazy" />
              <CardTitle className="text-xl mb-2">{skill.title}</CardTitle>
              <CardDescription>{skill.description}</CardDescription>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
