import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="text-center">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <p className="mb-8">
        Got a project, question, or opportunity? Let’s connect and grow together!
      </p>
      <motion.a
        href="mailto:juan.alanderosv@outlook.com"
        className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Contact Me</span>
        <motion.div
          className="absolute inset-0 bg-white opacity-25"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{
            scale: 1.5,
            opacity: 0,
            transition: { repeat: Infinity, duration: 1.5, ease: "linear" }
          }}
          style={{ originX: 0.5, originY: 0.5 }}
        />
      </motion.a>
    </section>
  )
}

