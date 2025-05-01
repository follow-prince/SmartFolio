import React, { useEffect } from 'react'
import { useSpotifyStore } from '@/lib/stores/spotifyStore'
import { Spin } from 'antd'

export const Spotify = () => {
  const { url, loading, fetchUrl } = useSpotifyStore()

  useEffect(() => {
    fetchUrl()
  }, [])

  return (
    <div className='flex flex-col justify-center h-full w-full relative mx-auto border-2 border-[#6C6C6C] p-1 bg-[#222222] rounded-[10px] shadow-2xl'>
      <div className='h-full w-full bg-day dark:bg-night rounded-lg overflow-hidden'>
        <div className='flex justify-between w-full px-3 pt-1'>
          <div className='dark:text-gray-300 text-gray-600 font-extrabold'>
            Podcasts
          </div>
          <div className='dark:text-gray-300 text-gray-600 font-light text-xs'>
            Inspired by{' '}
            <a
              className='font-extrabold hover:text-blue-500'
              href='https://www.linkedin.com/in/vijaypravin/'
              target='_blank'
              rel='noreferrer'
            >
              @Vijay Pravin
            </a>
            , turning big ideas into reality, just like he does with data!
          </div>
        </div>

        <div className='h-full w-full overflow-y-auto scrollbar-thin selection:bg-gray-500 scrollbar-thumb-gray-400/40 scrollbar-track-gray-200/30 dark:scrollbar-track-transparent dark:scrollbar-thumb-gray-500/40'>
          {loading && (
            <div className='flex items-center justify-center h-full'>
              <Spin />
            </div>
          )}
          {!loading && url && (
            <iframe
              className='rounded-[20px] p-2'
              src={url}
              width='100%'
              height='94%'
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              allowFullScreen
                loading='lazy'
            ></iframe>
          )}
        </div>
      </div>
    </div>
  )
}
