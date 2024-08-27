import React, { useState, useEffect, useCallback, FC } from 'react'
import { GraphMonthActivity } from './widgets/GraphMonthActivity'
import { PieChartActivity } from './widgets/PieChartActivity'
import { PieChartWorkingStatus } from './widgets/PieChartWorkingStatus'
import { Spinner, Divider } from '@nextui-org/react'

const CodingActivity: FC = React.memo(() => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const loadData = useCallback(async () => {
    try {
      // Simulate data fetching with a delay
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // Optionally simulate an error
      // throw new Error('Failed to fetch data')
    } catch (err) {
      setError('Failed to load data. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  if (isLoading) {
    return <Spinner label='Loading...' color='danger' aria-live='polite' />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <GraphMonthActivity />

      <div className='grid grid-flow-col'>
        <PieChartActivity />
        <Divider
          orientation='vertical'
          className='mt-2 h-28 bg-rose-500/50 dark:bg-slate-100/50'
        />
        <PieChartWorkingStatus />
      </div>
    </div>
  )
})

CodingActivity.displayName = 'CodingActivity'

export { CodingActivity }
