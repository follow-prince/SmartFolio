import React from 'react'
import { HeroScrollDemo } from '@/components/HomePage/components/HeroScrollDemo'

export const HomePage = ({blogListShare}) => {
  
  return (
    <>
      <div className=' md:flex md:flex-col scroll-smooth'>
        <HeroScrollDemo  blogListShare={blogListShare}  />
      </div>
    </>
  )
}
