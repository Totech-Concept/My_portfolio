import React from 'react'
import AboutText from './AboutText'
import SkillsSection from './SkillsSection'
import AboutIntro from './AboutIntro'
import ServicesSection from './ServicesSection'

export default function About() {
  return (
    <section id="about" className='bg-background text-foreground py-20 transition-colors duration-300 border-t border-border/40'>
      <div className='container mx-auto px-6 space-y-16'>

        {/* Section Header (A Little about myself) */}
        <div className='text-center max-w-2xl mx-auto space-y-3'>
          <AboutText />
        </div>

        {/* Main Split Grid (Intro Card & Skills/Toolset) */}
          <div className='mx-auto w-full bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-sm'>
              <AboutIntro />
            </div>
            
          <div className='space-y-6'>
            <SkillsSection />
          </div>

        {/* Services Section Integration */}
        <div className='pt-8 border-t border-border/40'>
          <ServicesSection />
        </div>
    
    </div>
    </section>
  )
}
