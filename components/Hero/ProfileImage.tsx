import React from 'react'
import Image from 'next/image'

export default function ProfileImage() {
  return (
    <Image 
        src="/images/tobiloba.jpg"
        alt="Profile Image"
        height={330}
        width={400}
        className='md:mr-1'
    />
  )
}
