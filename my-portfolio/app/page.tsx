'use client'

import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </motion.div>
    </main>
  )
}

