import { motion } from 'framer-motion';

export default function AboutMeSection() {
    return (
      <section id="about" className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-prose mx-auto">
            <motion.p
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.4 }}
                 className="relative font-mono text-lg whitespace-normal break-words"
            >
                <span className="relative inline-block">
              I am a software developer with a passion for creating and developing software solutions.
               I am a quick learner and a team player, and I am always looking to grow and improve my skills.
              <span className="absolute inset-0 animate-typewriter" />
              </span>
            </motion.p>
        </div>
      </section>
    );
  }