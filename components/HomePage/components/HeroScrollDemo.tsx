import { AnimatedTooltipPreview } from '@/components/HomePage/components/childComponents/AnimatedTooltipPreview';
import { CodingActivity } from '@/components/HomePage/components/childComponents/CodingActivity';
import InfoCard from '@/components/HomePage/components/childComponents/InfoCard';
import { ResizableCard } from '@/components/HomePage/components/childComponents/ResizableCard';
import { TwoTapSection } from '@/components/HomePage/components/childComponents/TwoTapSection';
import { ContainerScroll } from '@/components/HomePage/ui/container-scroll-animation';
import React, { useEffect, useState } from 'react';

import { GithubActivity } from './childComponents/GithubActivity';

export function HeroScrollDemo({ blogListShare }) {
  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll>
        <InsideCard blogListShare={blogListShare} />
      </ContainerScroll>
    </div>
  )
}

const InsideCard = ({ blogListShare }) => {
  return (
    <div className='grid w-full h-full grid-cols-5 grid-rows-5 gap-4 p-2'>
      <div className='col-span-2 row-span-2'>
        <InfoCard />
      </div>
      <div className='col-start-3 row-span-2 border rounded-lg'>
        <TwoTapSection />
      </div>
      <div className='col-span-2 col-start-4 row-span-5 -lg'>
        <div className='flex flex-col justify-between h-full overflow-hidden'>
          <div className=''>
            <ResizableCard blogListShare={blogListShare} />
          </div>
          <div className='py-2 border rounded-xl border-rose-500 dark:border-gray-500'>
            <AnimatedTooltipPreview />
          </div>
        </div>
      </div>

      <div className='col-start-3 row-span-3 row-start-3 overflow-hidden'>
        <div className='flex flex-col gap-3'>
          <div className='h-[360px] border rounded-lg dark:border-slate-100 border-rose-700/50 overflow-hidden'>
            <GithubActivity />
          </div>
        </div>
      </div>
      <div className='col-span-2 col-start-1 row-span-3 row-start-3 border rounded-lg border-rose-500 dark:border-white'>
        <div
          style={{ borderRadius: '0.5rem' }}
          className='w-full h-full p-0 pt-0'
        >
          <CodingActivity />
        </div>
      </div>
    </div>
  )
}
