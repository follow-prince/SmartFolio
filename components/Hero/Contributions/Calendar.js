import { useEffect, useState, useMemo } from 'react'
import { Tooltip, Spin } from 'antd'

const Calendar = ({ username = 'follow-prince' }) => {
  const [contributions, setContributions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `/api/github/contributions?username=${username}`
        )
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`)
        }
        const data = await res.json()
        setContributions(data.contributions || [])
      } catch (error) {
        console.error(error)
        setError(error.message || 'Something went wrong.')
      } finally {
        setLoading(false)
      }
    }

    fetchContributions()
  }, [username])

  const formatLevelClass = (level) => level.toLowerCase().replace('_', '-')

  // Calculate stats
  const { totalContributedDays, totalContributions, highestStreak } =
    useMemo(() => {
      let totalContributedDays = 0
      let totalContributions = 0
      let highestStreak = 0
      let currentStreak = 0

      contributions.forEach((contribution) => {
        if (contribution.contributionCount > 0) {
          totalContributedDays += 1
          totalContributions += contribution.contributionCount
          currentStreak += 1
          if (currentStreak > highestStreak) {
            highestStreak = currentStreak
          }
        } else {
          currentStreak = 0
        }
      })

      return { totalContributedDays, totalContributions, highestStreak }
    }, [contributions])

  return (
    <div className='flex flex-col justify-center h-full w-full relative mx-auto border-2 border-[#6C6C6C] p-1 bg-[#222222] rounded-[10px] shadow-2xl'>
      <div className='h-full w-full bg-day dark:bg-night rounded-lg flex flex-col overflow-hidden'>
        <div>
            2024 to 2025 
        </div>
        <div className='flex  justify-evenly text-sm font-extrabold dark:text-white text-black mt-2'>
          <div className='text-xs font-normal dark:text-white text-slate-700 mx-2'>
            Contributions made in the last 365 days.
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

        <div className='block overflow-x-auto  mx-2 pb-2'>
          <div className='grid w-full grid-flow-col grid-rows-7 gap-[1px] gap-x-[1px] md:w-auto lg:gap-[4px] lg:gap-x-[2px] px-2'>
            {contributions.map((contribution, i) => (
              <Tooltip
                key={i}
                title={
                  <div className='text-sm'>
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
                color='#ffffff'
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
      </div>
    </div>
  )
}

export default Calendar
