import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const Experience = () => {
  return (
    <section id="experience" className="section py-5 bg-gray-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-3xl font-bold mb-5 text-center fluid-h2"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          Experience
        </motion.h2>
        <motion.p
          className="text-center text-text-secondary mb-12 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          My professional journey and career milestones in the tech industry.
        </motion.p>
        <div className="max-w-4xl mx-auto">
          <motion.div className="bg-card shadow hover:shadow-md transition-shadow subtle-glow hover-float rounded-lg" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <Card className="bg-transparent shadow-none">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <CardTitle className="text-xl">Frontend Developer Intern</CardTitle>
                  <span className="text-text-secondary font-medium">Aug 2024 - Sep 2024</span>
                </div>
                <CardDescription className="font-medium text-base">GrapplTech</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  Contributed to web development projects by designing and implementing responsive, user-friendly components using HTML, CSS, JavaScript, and React. Collaborated with the development team through GitHub for version control, created visually engaging hero sections, and enhanced overall site performance. This role provided hands-on experience in front-end development, React-based design, and effective teamwork within a professional environment.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
