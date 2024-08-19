'use client'
import React from 'react'
import Image from 'next/image'
import heroImg from '@/public/hero-image.png'

export function HeroImage() {
  return (
    <div>

        <Image
          className=' border dark:border-slate-800/[0.8] border-gray-400/[0.8] rounded-[1.85rem]  max-[900px]:w-36  '
          src={heroImg}
          alt='Prince Elavarasan'
        />
    </div>
  )
}
