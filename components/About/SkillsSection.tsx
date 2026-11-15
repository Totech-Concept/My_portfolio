import React from 'react'
import { mySkills } from '../data/skills'

const categories = ['Frontend', 'Backend', 'Database', 'Tools'] as const;

export default function SkillsSection() {
  return (
      <div className='bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm'>
          <h2 className='font-bold text-2xl md:text-3xl text-primary mb-8 text-center'>My Tech Stack & Tools</h2>

          <div className='space-y-10'>
            {categories.map((category) => {
              const categorySkills = mySkills.filter(
                (skill) => skill.category === category
              );

            // Skip category if no skills exist for it
            if (categorySkills.length === 0) return null;

              return (
                <div key={category} className='space-y-4'>
                  <h3 className='font-semibold text-xl text-foreground border-b border-border/60 pb-2'>{category}</h3>

                  <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                    {categorySkills.map((skill) => {
                      const IconComponent = skill.icon;

                  return (
                    <div key={skill.id} className='bg-background/50 border border-border rounded-xl p-5 transition-all duration-300 hover:shadow-md flex flex-col justify-between'>
                      <div>
                        <div className='flex items-center space-x-3 mb-3'>
                          {IconComponent && (
                            <IconComponent className={`w-8 h-8 ${skill.color}`} />
                        )}
                        <h4 className='font-bold text-lg text-foreground'>{skill.name}</h4>
                      </div>
                      <p className='text-muted text-sm leading-relaxed'>{skill.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
