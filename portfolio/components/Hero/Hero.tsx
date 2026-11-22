'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProfileImage from './ProfileImage'

export default function Hero() {
  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='space-y-6'
    >
      <section className='min-h-screen bg-background text-foreground transition-colors duration-300'>
        <div className='container mx-auto px-6 py-20'>
          <div className='grid items-center gap-12 md:grid-cols-2'>

            {/* Introduction */}
            <div className='space-y-6'>
              <p className='text-primary font-semibold'>Hello, I'm Tobiloba</p>
              <h1 className='text-4xl font-bold md:text-6xl'>Full Stack Developer</h1>
              <p className='text-muted text-lg leading-relaxed'>I build modern, responsive, and functional web applications that solve real-world problems. 
                From crafting engaging user interfaces to developing backend systems and managing databases, I enjoy bringing ideas to life through code.</p>
                
              <Link 
              href="#projects"
              className='inline-block bg-primary text-button-text font-medium py-3 px-6 rounded-md shadow-md transition-opacity hover:opacity-90'>View my projects</Link>
            </div>

            {/* Profile Image */}
              <div className='flex justify-center'>
                <div className='rounded-2xl border-2 border-primary p-2'>
                  < ProfileImage />
                </div>
              </div>

          </div>

        </div>
      </section>
    </motion.div>
  )
}
