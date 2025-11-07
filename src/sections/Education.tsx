import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="section py-5 bg-gray-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-3xl font-bold mb-5 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          Education
        </motion.h2>
        <motion.p
          className="text-center text-text-secondary mb-12 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          My academic background and educational achievements that validate my expertise.
        </motion.p>
        <div className="max-w-4xl mx-auto">
          <motion.div className="bg-card shadow hover:shadow-md transition-shadow subtle-glow hover-float rounded-lg" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <Card className="bg-transparent shadow-none">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <CardTitle className="text-xl">Manipal University Jaipur</CardTitle>
                  <span className="text-text-secondary font-medium">Expected May 2026</span>
                </div>
                <CardDescription className="font-medium text-base">
                  Bachelor of Technology in Information Technology, Jaipur, Rajasthan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-card-foreground">Relevant Coursework:</h4>
                  <p className="text-text-secondary">Data Structures and Algorithms (C), Object Oriented Programming (Java), RDBMS (MySQL), Operating Systems, Computer networks, Software Engineering</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Achievements:</h4>
                  <p className="text-text-secondary">Solved 500+ algorithmic problems on LeetCode and GeeksforGeeks.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Education;
