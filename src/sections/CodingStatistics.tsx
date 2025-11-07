import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";

export type CodingStatisticsProps = {
  githubStatsImgUrl: string;
  leetcodeImgUrl: string;
};

const CodingStatistics = ({ githubStatsImgUrl, leetcodeImgUrl }: CodingStatisticsProps) => {
  return (
    <section id="coding-statistics" className="section py-5 bg-gray">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          Coding Statistics
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerChildren(0.08, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div className="space-y-8" variants={fadeUp}>
            <div className="w-full flex flex-col justify-between items-center bg-card rounded-xl p-4 min-h-[450px]">
              <div className="text-xl font-bold mb-4 text-center">GitHub</div>
              <Card className="bg-card w-full flex flex-col flex-1 border border-border subtle-glow hover-float">
                <img src={githubStatsImgUrl} alt="GitHub statistics showing repositories, commits, and contributions" className="w-full object-contain rounded" loading="lazy" width="495" height="195" />
                <div className="text-lg font-semibold text-center">GitHub Contributions</div>
                <div className="p-2 rounded-lg bg-card">
                  <img src="https://ghchart.rshah.org/00ff00/harshkushwaha7x" alt="GitHub contribution activity heatmap calendar" className="w-full object-contain rounded" loading="lazy" width="722" height="112" />
                </div>
              </Card>
              <a href="https://github.com/harshkushwaha7x" target="_blank" rel="noopener noreferrer" className="mt-5 text-portfolio-blue hover:text-portfolio-blue-dark">🔗 <span>View Full Profile on GitHub</span></a>
            </div>
          </motion.div>
          <motion.div className="space-y-8" variants={fadeUp}>
            <div className="w-full flex flex-col justify-between items-center bg-card rounded-xl p-4 min-h-[450px]">
              <div className="text-xl font-bold mb-4 text-center">LeetCode</div>
              <Card className="bg-card w-full flex flex-col flex-1 border-0 subtle-glow hover-float">
                <img src={leetcodeImgUrl} alt="LeetCode statistics showing problems solved and ranking" className="w-full object-contain rounded" loading="lazy" width="500" height="200" />
              </Card>
              <a href="https://leetcode.com/u/harsh_kushwaha_7x/" target="_blank" rel="noopener noreferrer" className="mt-5 text-portfolio-blue hover:text-portfolio-blue-dark">🔗 <span>View Full Profile on LeetCode</span></a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStatistics;
