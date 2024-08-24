'use client'
import React, { useState, useEffect } from 'react'
import { ContainerScroll } from '../ui/container-scroll-animation'
import InfoCard from './childComponents/InfoCard'
import { CodingActivity } from './childComponents/CodingActivity'
import { LeetCodeActivity } from './childComponents/LeetCodeActivity'
import { Button } from '@/components/HomePage/ui/moving-border'
import { ArrowLeft } from 'lucide-react'
import { GithubActivity } from './childComponents/GithubActivity'
import { Divider } from '@nextui-org/react'
import { TwoTapSection } from './childComponents/TwoTapSection'
import { AnimatedTooltipPreview } from './childComponents/AnimatedTooltipPreview'

export function HeroScrollDemo() {
  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll>
        <CardsInScroll />
      </ContainerScroll>
    </div>
  )
}

const CardsInScroll = () => {
  return (
    <div className='grid w-full h-full grid-cols-5 grid-rows-5 gap-4 p-2 '>
      <div className='col-span-2 row-span-2 '>
        <InfoCard />
      </div>
      <div className='col-start-3 row-span-2 border rounded-lg'>
        <TwoTapSection />
      </div>
      <div className='col-span-2 col-start-4 row-span-5 -lg'>
        <div className='flex flex-col justify-between h-full overflow-hidden'>
          <div>

          </div>
          <div className='p-2 border dark:border-gray-500 border-rose-500 rounded-xl '>
            <AnimatedTooltipPreview />
          </div>
        </div>
      </div>

      <div className='col-start-3 row-span-3 row-start-3 overflow-hidden border rounded-lg dark:border-slate-100 border-rose-700/50'>
        <GithubActivity />
        <Divider className='my-1 bg-rose-500 dark:bg-slate-100' />
        <LeetCodeActivity />
      </div>
      <div className='col-span-2 col-start-1 row-span-3 row-start-3 border rounded-lg'>
        <Button
          duration={20000}
          borderRadius='0.5rem'
          className='w-full h-full p-0 pt-0'
        >
          <CodingActivity />
        </Button>
      </div>
    </div>
  )
}
