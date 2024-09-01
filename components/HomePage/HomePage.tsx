import React from 'react'
import { HeroScrollDemo } from '@/components/HomePage/components/HeroScrollDemo'

export const HomePage = ({ blogListShare }) => {
  return (
    <>
      <HeroScrollDemo blogListShare={blogListShare} />
    </>
  )
}
