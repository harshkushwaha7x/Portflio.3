import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import profileAbout from "@/assets/profile-about.jpeg";

const About = () => {
  return (
    <section id="about" className="section py-5 bg-gray-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-3xl font-bold mb-5 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-center text-text-secondary mb-12 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          | Full Stack Web Developer | AI & Cloud Enthusiast | Python Java DSA | Open-Source Contributor |
        </motion.p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={profileAbout}
              alt="Harsh Kushwaha - Full Stack Developer profile picture"
              className="w-full max-w-md mx-auto h-auto max-h-[85vh] rounded-2xl shadow-2xl blur-up"
              loading="lazy"
              decoding="async"
              width="480"
              height="640"
              sizes="(max-width: 768px) 90vw, 480px"
              onLoad={(e) => e.currentTarget.classList.remove('blur-up')}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 text-text-primary">
            <p className="text-lg leading-relaxed">
              Hi, I'm Harsh Kushwaha, a final-year B.Tech (IT) student at Manipal University Jaipur with a strong interest in Generative AI and Full-Stack Development. I've built and contributed to scalable, real-world projects that integrate AI with modern web technologies.
            </p>
            <p className="text-lg leading-relaxed">
              I'm skilled in Python, TypeScript, React/Next.js, Node.js, and ML frameworks like TensorFlow and PyTorch. I build scalable applications, deploy to AWS, Azure, and GCP, and manage CI/CD workflows using Docker and Kubernetes.
            </p>
            <p className="text-lg leading-relaxed">
              I've solved 500+ DSA problems on LeetCode and GeeksforGeeks, and I'm currently exploring LangChain and custom transformer pipelines in the Generative AI space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
