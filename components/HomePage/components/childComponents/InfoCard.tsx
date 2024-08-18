import Image from 'next/image'
import React from 'react'
import heroImage from '@/public/hero-image.png'

const InfoCard = () => {
  return (
    <div className='flex w-full h-full rounded-xl'>
      <div className='p-2 w-[140px]'>
        <Image
          className='border rounded-xl'
          src={heroImage}
          width={140}
      
          alt='hero'
        />
      </div>
      <div className='p-2'>
        <h1 className='text-2xl font-bold dark:text-white text-slate-800'>ELAVARASAN</h1>
        <p className='text-white'>Software Engineer</p>
      </div>
    </div>
  )
}

export default InfoCard
