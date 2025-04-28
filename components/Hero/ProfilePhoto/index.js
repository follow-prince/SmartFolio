import React from 'react'
import Avatar from './NotionAvatar'
import { GetRandomBackground } from '@/components/Common/getRandomBackground'

export const ProfilePhoto = () => {
  const background = GetRandomBackground()

  return (
    <div className='flex flex-col  justify-center  h-full w-full relative max-w-5xl mx-auto  border-4 border-[#6C6C6C] p-2  bg-[#222222] rounded-[30px] shadow-2xl overflow-hidden'>
      <Avatar randomBackground={background} />
      <div className='absolute bottom-0 left-0 w-full  bg-gradient-to-t from-slate-950 to-transparent h-2/4 rounded-[30px]'>
        <div className='flex flex-col items-center justify-end h-full pb-3'>
          <div
            className={`text-white text-center text-2xl font-extrabold  ${background} bg-clip-text text-transparent`}
          >
            ELAVARASAN
          </div>
          <div className='text-white text-center text-xs font-semibold'>
            Software Engineer
          </div>
        </div>
      </div>
    </div>
  )
}
