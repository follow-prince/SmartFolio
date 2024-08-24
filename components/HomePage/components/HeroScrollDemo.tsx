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
    <div className='flex overflow-hidden flex-col'>
      <ContainerScroll>
        <CardsInScroll />
      </ContainerScroll>
    </div>
  )
}

const CardsInScroll = () => {
  return (
    <div className='grid grid-cols-5 grid-rows-5 gap-4 p-2 w-full h-full'>
      <div className='col-span-2 row-span-2'>
        <InfoCard />
      </div>
      <div className='col-start-3 row-span-2 rounded-lg border'>
        <TwoTapSection />
      </div>
      <div className='col-span-2 col-start-4 row-span-5 -lg'>
        <div className='flex overflow-hidden flex-col justify-between h-full'>
          <div className=''>
          
            sfgfdg
          </div>
          <div className='py-2 rounded-xl border border-rose-500 dark:border-gray-500'>
            <AnimatedTooltipPreview />
          </div>
        </div>
      </div>

      <div className='overflow-hidden col-start-3 row-span-3 row-start-3'>
        <div className='flex flex-col gap-3'>
          <div className='h-[140px] border rounded-lg dark:border-slate-100 border-rose-700/50'>
            <GithubActivity />
          </div>

          <div className='h-[140px] border rounded-lg dark:border-slate-100 border-rose-700/50'>
            <LeetCodeActivity />
          </div>
        </div>
      </div>
      <div className='col-span-2 col-start-1 row-span-3 row-start-3 rounded-lg border'>
        <Button
          duration={20000}
          borderRadius='0.5rem'
          className='p-0 pt-0 w-full h-full'
        >
          <CodingActivity />
        </Button>
      </div>
    </div>
  )
}
