import Image from 'next/image'
import React from 'react'
import { FlipWordsDemo } from '@/components/HomePage/components/childComponents/widgets/FlipWordsDemo'
import { SkillsStack } from './widgets/SkillsStack'
import { Chip } from '@nextui-org/react'
import { HeroImage } from './widgets/HeroImage'
import { Button } from '@/components/HomePage/ui/moving-border'

const InfoCard = () => {
  return (
    <div className='flex w-full h-full rounded-xl'>
      <Button borderRadius='1.75rem' className='w-full h-full '>
        <div className='p-2 '>
          <HeroImage />
        </div>
        <div className='flex flex-col justify-start max-[900px]:p-0'>
          <h1 className='text-[25px] font-extrabold  text-transparent p-2 max-[900px]:text-[24px]   bg-gradient-to-bl from-rose-500 to-[#f31260] bg-clip-text shadow-[#ff0059]'>
            ELAVARASAN
          </h1>
          <div className=''>
          <FlipWordsDemo />
          </div>
          
          <div className='p-2 max-[900px]:hidden'>
            <SkillsStack />
          </div>
        </div>
      </Button>
    </div>
  )
}

export default InfoCard
