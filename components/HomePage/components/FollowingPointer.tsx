import Image from 'next/image'
import { FollowerPointerCard } from '../ui/following-pointer'

export function FollowingPointerDemo() {
  return (
    <div className='w-full mx-auto'>
      <div className='w-full md:h-[60rem] '>
        <div className='flex justify-center '>
          <button
            className='cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]'
          >
            Button
          </button>
        </div>
      </div>
    </div>
  )
}
