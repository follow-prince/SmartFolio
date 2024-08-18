import React from 'react'
import { HeroScrollDemo } from './components/HeroScrollDemo'

export const HomePage = () => {
  return (
    <>
      <div className='hidden md:flex md:flex-col'>
        <HeroScrollDemo />
      </div>
    </>
  )
}
