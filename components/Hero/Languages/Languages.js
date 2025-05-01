import React, { useState, useEffect } from 'react'
import useGitHubData from '@/lib/stores/useGitHubStore'
import { Icons } from '@/components/Common/Icons'
import { Progress, Spin } from 'antd'

const Languages = () => {
  const { cache, loading, error, fetchGitHubData } = useGitHubData()

  useEffect(() => {
    fetchGitHubData()
  }, [])

  // ✅ Safe fallback if languagesSize is undefined or not an array
  const languagesSize = Array.isArray(cache?.languagesSize) ? cache.languagesSize : []
  console.log('LanguagesSize', languagesSize)

  const conicColors = {
    '0%': 'red',
    '30%': 'yellow',
    '70%': 'green',
    '100%': 'blue',
  }

  return (
    <div className='flex flex-col justify-center h-full w-full relative mx-auto border-2 border-[#6C6C6C] p-1 bg-[#222222] rounded-[10px] shadow-2xl'>
      <div className='flex flex-col justify-center items-center h-full w-full bg-day dark:bg-night rounded-lg'>
        <div className='flex justify-between w-full p-2'>
          <div className='dark:text-gray-300 text-gray-600 font-extrabold'>
            Most Used Languages
          </div>
          <div>
            <p className='text-sm text-gray-500 font-extrabold'>
              {loading
                ? 'Loading...'
                : error
                ? 'Error fetching data'
                : languagesSize.length > 0
                ? `Top ${languagesSize.length} languages`
                : 'No data available'}
            </p>
          </div>
        </div>

        <div className='grid gap-4 grid-cols-4 h-full w-full overflow-y-auto scrollbar-thin selection:bg-gray-500 scrollbar-thumb-gray-400/40 scrollbar-track-gray-200/30 dark:scrollbar-track-transparent dark:scrollbar-thumb-gray-500/40'>
          {languagesSize.length > 0 ? (
            languagesSize.map(({ name, size }) => {
              const Icon = Icons[name] || (() => <span>❓</span>) // Fallback icon
              return (
                <div
                  key={name}
                  className='box group flex items-center justify-around gap-4 p-3'
                >
                  <div className='flex flex-col items-center justify-center'>
                    <Progress
                      type='dashboard'
                      percent={size}
                      size='small'
                      trailColor='rgba(0, 0, 0, 0.06)'
                      strokeWidth={9}
                      strokeColor={conicColors}
                      status='active'
                      format={() => (
                        <div className='h-full w-full flex justify-center items-center'>
                          <Icon className='w-7 h-7' />
                        </div>
                      )}
                    />
                    <p className='text-base font-bold md:text-xl'>{size}%</p>
                    <h5 className='text-sm text-gray-500 md:text-base font-extrabold'>{name}</h5>
                  </div>
                </div>
              )
            })
          ) : (
            
              <div className='col-span-4 text-center text-gray-400 font-semibold'>
                <Spin />
              </div>
            
          )}
        </div>
      </div>
    </div>
  )
}

export { Languages }
