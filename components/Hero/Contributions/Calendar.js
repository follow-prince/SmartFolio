import { useEffect, useState, useMemo } from 'react'
import { Tooltip, Spin, Button } from 'antd'
import Link from 'next/link'
import BLOG from '@/blog.config'


const Calendar = ({ username = 'follow-prince' }) => {
  const [contributions, setContributions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const currentYear = new Date().getFullYear()
  const years = useMemo(() => {
    return [currentYear, currentYear - 1, currentYear - 2, currentYear - 3]
  }, [])

  useEffect(() => {
    const fetchContributions = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `/api/github/contributions?username=${username}&year=${selectedYear}`
        )
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)

        const { contributions } = await res.json()
        setContributions(contributions || [])
      } catch (err) {
        console.error(err)
        setError(err.message || 'Something went wrong.')
      } finally {
        setLoading(false)
      }
    }

    fetchContributions()
  }, [username, selectedYear])

  const formatLevelClass = (level) => level.toLowerCase().replace('_', '-')

  const { totalContributedDays, totalContributions, highestStreak } =
    useMemo(() => {
      let totalContributedDays = 0
      let totalContributions = 0
      let highestStreak = 0
      let currentStreak = 0

      contributions.forEach(({ contributionCount }) => {
        if (contributionCount > 0) {
          totalContributedDays += 1
          totalContributions += contributionCount
          currentStreak += 1
          highestStreak = Math.max(highestStreak, currentStreak)
        } else {
          currentStreak = 0
        }
      })

      return { totalContributedDays, totalContributions, highestStreak }
    }, [contributions])

  return (
    <div className='flex flex-col justify-center h-full w-full relative mx-auto border-2 border-[#6C6C6C] p-1 bg-[#222222] rounded-[10px] shadow-2xl'>
      <div className='h-full w-full bg-day dark:bg-night rounded-lg flex flex-col overflow-hidden'>
        {/* Year Tabs */}
        <div className='flex justify-end gap-x-4 mx-3 mt-1 '>
         
          {years.map((year) => (
            <div
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`font-bold text-xs p-[2px] hover:font-extrabold  ${
                selectedYear === year
                  ? ' text-blue-600 dark:text-blue-400 font-extrabold underline underline-offset-2 decoration-2'
                  : ' text-black dark:text-white'
              }`}
            >
              {year === currentYear ? 'Current' : year}
            </div>
          ))}
        </div>

        {/* Contribution Stats */}
        <div className='flex justify-between text-sm font-extrabold dark:text-white text-black mx-3 '>
          <div className='text-xs font-normal dark:text-white text-slate-700 mx-2'>
            Contributions made in{' '}
            {selectedYear === currentYear ? 'last 365 days' : selectedYear}.
          </div>
          <div className='flex flex-wrap gap-x-4 text-xs font-normal dark:text-white text-slate-700'>
            <div>
              Days: <span className='font-bold'>{totalContributedDays}</span>
            </div>
            <div>
              Contribs: <span className='font-bold'>{totalContributions}</span>
            </div>
            <div>
              Streak: <span className='font-bold'>{highestStreak}d</span>
            </div>
          </div>
        </div>

        {/* Loading or Calendar */}
        {loading ? (
          <div className='flex justify-center items-center h-64'>
            <Spin percent='auto' size='default' />
          </div>
        ) : (
          <div className='block overflow-x-auto mx-2 pb-2  scrollbar-thin   scroll-smooth  overflow-y-auto scrollbar-thin selection:bg-gray-500 scrollbar-thumb-gray-400/40 scrollbar-track-gray-200/30 dark:scrollbar-track-transparent dark:scrollbar-thumb-gray-500/40'>
            <div className='grid w-full grid-flow-col grid-rows-7 gap-[1px] md:w-auto lg:gap-[4px] px-2'>
              {contributions.map((contribution, idx) => (
                <Tooltip
                  key={idx}
                  title={
                    <div className='text-xs'>
                      <strong>{contribution.contributionCount}</strong>{' '}
                      contributions on{' '}
                      <strong>
                        {new Date(contribution.date).toLocaleDateString(
                          undefined,
                          {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          }
                        )}
                      </strong>
                    </div>
                  }
                  color='white'
                  overlayInnerStyle={{ color: '#000', fontWeight: 500 }}
                >
                  <div
                    className={`level shadow-inner border-[1px] border-gray-400 dark:border-gray-600 ${formatLevelClass(
                      contribution.contributionLevel
                    )} cursor-pointer`}
                  />
                </Tooltip>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Calendar
