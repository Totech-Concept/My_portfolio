import React from 'react'

export default function AboutText() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <span className='inline-block rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-primary shadow-xs'>
          ABOUT ME</span>
        <h2 className='font-bold text-3xl md:text-4xl my-3 tracking-tight'>A little about myself</h2>
        <p className='text-muted text-base md:text-lg max-w-xl'>Passionate about building beautiful, functional, and user-centered web experiences that make an impact.</p> 
        </div>
  )
}
