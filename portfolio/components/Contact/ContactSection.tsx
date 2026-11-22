'use client'
import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id='contact' className='bg-background text-foreground py-20 transition-colors duration-300 border-t border-border/40'>
      <div className='container mx-auto px-6 space-y-12'>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center space-y-3"
      >
        <span className='inline-block rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-primary shadow-xs uppercase'>
          CONTACT US</span>
            <h2 className='font-extrabold text-3xl md:text-5xl tracking-tight'>Get in touch</h2>
            <p className='text-muted text-base md:text-lg max-w-xl'>Let's collaborate on your next modern web application. Have an idea or project? Let's build something great together.</p>
        </motion.div> 

          {/* Contact Content Grid (Info & Form) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className='flex flex-col gap-8 lg:flex-row lg:justify-between items-start w-full mt-2'
            >
              < ContactInfo />
              < ContactForm />
          </motion.div>

      </div>
    </section>
  )
}
