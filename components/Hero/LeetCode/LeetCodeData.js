import React, { useEffect } from 'react'
import useLeetCodeStore from '@/lib/stores/useLeetCodeStore'
import { Progress, Tooltip, Spin, Alert } from 'antd'
import Image from 'next/image'

export const LeetCodeData = () => {
  const {
    userSessionProgress,
    fetchLeetCodeData,
    userPublicProfile,
    userProfileCalendar,
    isLoading,
    error
  } = useLeetCodeStore()

  useEffect(() => {
    const username = 'iam-prince'
    fetchLeetCodeData(username)
  }, [fetchLeetCodeData])

  const progressData = () => {
    if (!userSessionProgress) return []

    const totalByDifficulty = {}
    userSessionProgress.allQuestionsCount.forEach((item) => {
      totalByDifficulty[item.difficulty] = item.count
    })

    return userSessionProgress.matchedUser.submitStats.acSubmissionNum.map(
      (item) => {
        const total = totalByDifficulty[item.difficulty] || 0
        const percent = total > 0 ? Math.round((item.count / total) * 100) : 0
        return {
          difficulty: item.difficulty,
          count: item.count,
          total,
          percent
        }
      }
    )
  }

  const progressItems = progressData()
  const profile = userPublicProfile?.matchedUser?.profile
  const username = userPublicProfile?.matchedUser?.username

  return (
    <div className='flex flex-col justify-center h-full w-full relative mx-auto border-2 border-[#6C6C6C] p-1 bg-[#222222] rounded-[10px] shadow-2xl'>
      <div className='flex flex-col items-center h-full w-full bg-day dark:bg-night rounded-lg'>
        <p className='dark:text-gray-300 text-gray-600 font-extrabold text-xs'>
          LeetCode Stats
        </p>

        <div className='w-full flex justify-around p-2'>
          <p className='text-xs dark:text-gray-400 text-gray-600 font-extrabold'>
            🔥 Streak:{' '}
            {userProfileCalendar?.matchedUser?.userCalendar?.streak ?? 0} days —
            still on fire! 🔥🚀
          </p>
          <p className='text-xs dark:text-gray-400 text-gray-600 font-extrabold'>
            📅 Active Days:{' '}
            {userProfileCalendar?.matchedUser?.userCalendar?.totalActiveDays ??
              0}{' '}
            days of pure brain gains! 🧠💪
          </p>
        </div>

        {isLoading && (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg'>
            <Spin size='small' />
          </div>
        )}

        <div className='flex justify-around items-center w-full px-2 h-full'>
          {profile && (
            <div className='flex flex-col items-center justify-center my-4 w-40'>
              <div className='bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[4px] rounded-full shadow-md shadow-amber-300/50'>
                <div className='bg-white dark:bg-black p-[1px] rounded-full'>
                  <Image
                    src={profile.userAvatar}
                    alt='Profile'
                    width={100}
                    height={100}
                    className='rounded-full backdrop:blur-sm'
                  />
                </div>
              </div>
              <p className='text-sm dark:text-gray-400 text-gray-600 mt-2 font-extrabold'>
                @{username}
              </p>
              <p className='text-sm dark:text-gray-400 text-gray-600 mb-2 font-extrabold'>
                Rank: #{profile.ranking.toLocaleString()}
              </p>
            </div>
          )}

          <div className='grid gap-4 grid-cols-2 h-full w-full overflow-y-auto scrollbar-thin selection:bg-gray-500 scrollbar-thumb-gray-400/40 scrollbar-track-gray-200/30 dark:scrollbar-track-transparent dark:scrollbar-thumb-gray-500/40'>
            {progressItems.map((item) => (
              <div key={item.difficulty} className=' px-4'>
                <div className='flex justify-between mb-1'>
                  <span className='text-sm dark:text-gray-300 text-gray-600 font-extrabold'>
                    {item.difficulty}
                  </span>
                  <span className='text-base dark:text-gray-300 text-gray-600 font-extrabold'>
                    {item.count}/<span className='text-xs'>{item.total}</span>
                  </span>
                </div>
                <Progress
                  percent={item.percent}
                  showInfo={false}
                  status='active'
                  strokeColor={
                    item.difficulty === 'Easy'
                      ? '#52c41a'
                      : item.difficulty === 'Medium'
                      ? '#faad14'
                      : item.difficulty === 'Hard'
                      ? '#f5222d'
                      : '#1890ff'
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
