import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="text-center mb-20">
      <motion.h1
        className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Juan Antonio Landeros Velazquez
      </motion.h1>
      <motion.p
        className="text-xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Computer Science Student
      </motion.p>
      <motion.div
        className="flex justify-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200">
          Contact Me
        </a>
      </motion.div>
    </section>
  )
}

