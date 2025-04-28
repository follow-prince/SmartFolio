import React from 'react'
import NotionRenderer from '@/components/Post/NotionRenderer'
import ActionButtons from '@/components/Hero/actionButtons'
import Social from '@/components/Common/Social'

export const AboutInfo = ({ blockMap }) => {
  return (
    <div className='flex flex-col  justify-center  h-full w-full relative  mx-auto  border-2 border-[#6C6C6C] p-1 bg-[#222222] rounded-[20px] shadow-2xl overflow-hidden '>
      <div className={`h-full w-full text-sm bg-day dark:bg-night scroll-smooth rounded-2xl px-4  flex  flex-col  text-white font-extrabold`}>
        <div
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onDragStart={(e) => e.stopPropagation()}
          onFocus={(e) => e.stopPropagation()}
          
          className='overflow-y-auto overflow-x-hidden scrollbar-hide'
        >
          <NotionRenderer
            className=''
            blockMap={blockMap}
            frontMatter={{}}
            subPageTitle={null}
          />
                <div className='flex flex-col  items-center  gap-2 mt-4'> 
        <Social />
        <ActionButtons/> 
        </div>

        </div>
      </div>
    </div>
  )
}
