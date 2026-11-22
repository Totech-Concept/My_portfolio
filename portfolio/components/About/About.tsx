'use client'
import React from 'react'
import AboutText from './AboutText'
import SkillsSection from './SkillsSection'
import AboutIntro from './AboutIntro'
import ServicesSection from './ServicesSection'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className='bg-background text-foreground py-20 transition-colors duration-300 border-t border-border/40'>
      <div className='container mx-auto px-6 space-y-16'>

        {/* Section Header (A Little about myself) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='text-center max-w-2xl mx-auto space-y-3'
        >
          <AboutText />
        </motion.div>

        {/* Main Split Grid (Intro Card & Skills/Toolset) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className='mx-auto w-full bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-sm'
          >
              <AboutIntro />
            </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className='space-y-6'
          >
            <SkillsSection />
          </motion.div>

        {/* Services Section Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='pt-8 border-t border-border/40'
        >
          <ServicesSection />
        </motion.div>
    
    </div>
    </section>
  )
}
