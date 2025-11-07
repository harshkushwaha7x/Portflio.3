import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";
import type { Certification } from "@/types";
import certIcon from "@/assets/Certification.png";

export type CertificationsProps = { certifications: Certification[] };

const Certifications = ({ certifications }: CertificationsProps) => {
  return (
    <section id="certifications" className="section pt-5 pb-12 bg-gray-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          Certifications
        </motion.h2>
        <motion.p
          className="text-center text-text-secondary mb-12 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          Professional certifications and credentials that validate my expertise in various domains.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren(0.08, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} className="bg-card border border-border p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300" variants={fadeUp}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full">
                  <img src={certIcon} alt="Certification badge icon" className="h-8 w-8" width="32" height="32" loading="lazy" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-center leading-tight text-card-foreground">{cert.title}</h3>
              <div className="text-center mb-3">
                <p className="text-sm text-text-secondary">{cert.issuer}</p>
                <p className="text-xs text-text-muted">{cert.date}</p>
              </div>
              <div className="flex justify-center">
                <a href={cert.link} className="text-portfolio-blue hover:text-portfolio-blue-dark flex items-center text-xs md:text-sm font-medium" target="_blank" rel="noopener noreferrer">
                  View Credential
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
