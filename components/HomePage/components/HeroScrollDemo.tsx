'use client'
import React, { useState, useEffect } from 'react'
import { ContainerScroll } from '../ui/container-scroll-animation'
import InfoCard from './childComponents/InfoCard'
import { CodingActivity } from './childComponents/CodingActivity'
import { LeetCodeActivity } from './childComponents/LeetCodeActivity'
import { Button } from '@/components/HomePage/ui/moving-border'
import { ArrowLeft } from 'lucide-react';

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
      <div className='col-start-3 row-span-2 border rounded-lg'>2</div>
      <div className='col-span-2 col-start-4 row-span-4 border rounded-lg'>
        3
      </div>
      <div className='col-span-2 col-start-4 row-start-5 border rounded-lg'>
        4
      </div>
      <div className='col-start-3 row-span-3 row-start-3 overflow-hidden border rounded-lg border-rose-700'>
          <LeetCodeActivity />
      </div>
      <div className='col-span-2 col-start-1 row-span-3 row-start-3 border rounded-lg'>
      <Button duration={20000}  borderRadius='0.5rem' className='w-full h-full p-0 pt-0'>

        <CodingActivity />
      </Button>
      </div>
    </div>
  )
}
