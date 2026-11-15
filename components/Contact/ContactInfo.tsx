import React from 'react'
import { contactMe } from '../data/contact'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa6';

export default function ContactInfo() {
  return (
    <div className='bg-surface w-full mx-auto my-3 lg:w-[35%] border border-border rounded-2xl p-6 shadow-sm'>
        <h4 className='font-bold text-2xl text-foreground'>Let's Connect</h4>
        <p className='text-base font-medium text-muted mb-4 mt-2'>I'm always interested in discussing new ideas, internships, and exciting projects.</p> 
        
        <div className="space-y-3 mb-6">
            {contactMe.map((contact) => {
                const IconComponent = contact.icon;
                return (
                    <div key={contact.id} className='bg-background/50 border border-border p-4 rounded-xl flex items-start space-x-4 transition-all hover:border-primary/50'>
                        {IconComponent && (
                        <div className='p-2 rounded-lg bg-surface border border-border text-primary shrink-0'>
                          <IconComponent className='w-5 h-5'/>
                        </div>
                        )}
                        <div>
                            <h6 className='font-semibold text-foreground text-sm'>{contact.name}</h6>
                            <p className='text-muted text-sm mt-0.5'>{contact.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>

        <hr className='border-border/60 my-6' />

        <div>
            <h4 className="text-sm font-semibold text-muted mb-4">Follow My Work</h4>
            <div className="flex gap-4">
              <a href="#" aria-label='GitHub' className="p-3 bg-background/50 border border-border rounded-xl text-foreground hover:border-primary/50 transition-all">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" arial-label="LinkedIn" className="p-3 bg-background/50 border border-border rounded-xl text-foreground hover:border-primary/50 transition-all">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label='Twitter' className="p-3 bg-background/50 border border-border rounded-xl text-foreground hover:border-primary/50 transition-all">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
            </div>
    </div>
  )
}
