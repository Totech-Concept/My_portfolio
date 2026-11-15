'use client'
import React from 'react'
import { useState } from "react";
import { myServices } from '../data/services'
import Link from 'next/link';

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<null | number>(null);

  function handleServiceClick(serviceId: number): void {
    if(expandedService === serviceId) {
      setExpandedService(null)
    } else {
      setExpandedService(serviceId)
    }
  }
  return (
    <div className='bg-surface border border-border rounded-2xl p-6 md:p-10 shadow-sm'>
      <div className='text-center md:text-left mb-8'>
        <span className='text-primary text-xs font-semibold tracking-wider uppercase'>WHAT I OFFER</span>
        <h3 className='font-bold text-2xl m-2 text-center md:text-left md:p-4'>Services I Provide</h3>
        </div>

        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch'>
          {myServices.map((service) => {
            const IconComponent = service.icon;
            const isExpanded = expandedService === service.id;

           return (
            <div key={service.id} 
              className='bg-bacground/50 border border-border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:shadow-md'>
                <div>
                  {IconComponent && (
                    <div className='w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center mb-4'>
                      <IconComponent className={`w-6 h-6 ${service.color}`} />
                    </div>
                  )}
                  <h4 className='font-bold text-xl my-3'>{service.name}</h4>
                  <p className='text-md h-24'>{service.shortDescription}</p>

                  {/* Conditional rendering for full description */}
                  {isExpanded && (
                    <div className='mt-4 pt-4 border-t border-border/60 animate-fadeIn'>
                      <p className='text-muted text-sm leading-relaxed text-justify'>
                        {service.fullDescription}</p>
                    </div>
                  )}
              </div>
              <button 
              className="mt-4 text-primary font-medium text-sm flex items-center gap-1 hover:opacity-80 transition-opacity self-start focus:outline-none"
              onClick={()=> handleServiceClick(service.id)}
                >{isExpanded ? "Show Less ↑": "Show More →"}
              </button>
            </div>
           );
        })}
        </div>
    </div>
  )
}
