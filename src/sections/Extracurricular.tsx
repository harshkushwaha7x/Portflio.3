import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="section py-5 bg-gray-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-3xl font-bold mb-5 text-center relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          Extracurricular Activities
        </motion.h2>
        <motion.p
          className="text-center text-text-secondary mb-12 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          My involvement in various hackathon, clubs, communities, and events that have shaped my growth and development.
        </motion.p>
        {/* Participation Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <motion.h3
            className="text-2xl font-bold mb-6 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            Participation
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerChildren(0.08, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* EY Techathon 5.0 */}
            <motion.div className="bg-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-border" variants={fadeUp}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2M4.636 6.636L6.05 8.05M3 12h2m1.636 6.364l1.414-1.414M12 21v-2m6.364-1.636l-1.414-1.414M8.05 17.95l-1.414 1.414M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center text-card-foreground">EY Techathon 5.0</h4>
              <p className="text-text-secondary text-center">EY</p>
            </motion.div>
            {/* Adobe India Hackathon */}
            <motion.div className="bg-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-border" variants={fadeUp}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="9" y="9" width="6" height="6" strokeWidth="2" stroke="currentColor" />
                    <path d="M3 9h3M3 15h3M18 9h3M18 15h3M9 3v3M15 3v3M9 18v3M15 18v3" strokeWidth="2" stroke="currentColor"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center text-card-foreground">Adobe India Hackathon</h4>
              <p className="text-text-secondary text-center">Adobe</p>
            </motion.div>
            {/* Flipkart GRiD 6.0 */}
            <motion.div className="bg-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-border" variants={fadeUp}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="14" rx="2" ry="2" strokeWidth="2" stroke="currentColor"/>
                    <path d="M8 8l3 3-3 3M13 14h3" strokeWidth="2" stroke="currentColor"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center text-card-foreground">Flipkart GRiD 6.0 - Software Development</h4>
              <p className="text-text-secondary text-center">Flipkart</p>
            </motion.div>
            {/* Face Recognition System */}
            <motion.div className="bg-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-border" variants={fadeUp}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                    </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center text-card-foreground">Face Recognition System</h4>
              <p className="text-text-secondary text-center">FLUXUS - IIT Indore</p>
            </motion.div>
            {/* Prompt Engineering (LLM) Hackathon 2025 */}
            <motion.div className="bg-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-border" variants={fadeUp}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m-8-8h16" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="6" cy="6" r="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                    <circle cx="18" cy="6" r="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                    <circle cx="6" cy="18" r="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                    <circle cx="18" cy="18" r="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center text-card-foreground">Prompt Engineering (LLM) Hackathon 2025</h4>
              <p className="text-text-secondary text-center">Certificate of Participation</p>
            </motion.div>
            {/* Code Gladiators 2024 */}
            <motion.div className="bg-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-border" variants={fadeUp}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center text-card-foreground">Code Gladiators 2024</h4>
              <p className="text-text-secondary text-center">Certificate of Participation</p>
            </motion.div>
            {/* H4CKP13T */}
            <motion.div className="bg-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-border" variants={fadeUp}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center text-card-foreground">H4CKP13T</h4>
              <p className="text-text-secondary text-center">Certificate of Participation</p>
            </motion.div>
            {/* Hacksagon */}
            <motion.div className="bg-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-border" variants={fadeUp}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center text-card-foreground">Hacksagon</h4>
              <p className="text-text-secondary text-center">Hackathon Participation</p>
            </motion.div>
            {/* OpenHack */}
            <motion.div className="bg-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-border" variants={fadeUp}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center text-card-foreground">OpenHack</h4>
              <p className="text-text-secondary text-center">Hackathon Participation</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Clubs Section */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            className="text-2xl font-bold mb-6 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            Clubs
          </motion.h3>
          <motion.div
            className="space-y-6"
            variants={staggerChildren(0.08, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Google Developer Student Clubs */}
            <motion.div className="bg-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-border" variants={fadeUp}>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-card-foreground">Google Developer Student Clubs</h3>
                <p className="text-text-secondary font-medium">August 2023 - July 2024</p>
              </div>
              <p className="text-text-secondary font-medium mb-3">Member | Jaipur</p>
              <div className="space-y-3">
                <p className="text-text-secondary">
                  My journey with the Google Developer Student Club has been like navigating a complex web of code, with each line representing a step toward a deeper understanding of the tech world. Through this club, I've had the privilege of learning, growing, and collaborating with passionate peers who share a love for innovation and problem-solving.
                </p>
              </div>
            </motion.div>

            {/* Randomize */}
            <motion.div className="bg-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-border" variants={fadeUp}>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-card-foreground">Randomize</h3>
                <p className="text-text-secondary font-medium">January 2023 - July 2023</p>
              </div>
              <p className="text-text-secondary font-medium mb-3">Member | Jaipur</p>
              <div className="space-y-3">
                <p className="text-text-secondary">
                  At Randomize, I learned coding, teamwork, creative problem-solving, and the value of continuous learning. The club's events encouraged me to think innovatively, and interactions with industry professionals demonstrated the real-world applications of my skills. It wasn't just a club; it was a community where I honed skills, made lasting connections.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
