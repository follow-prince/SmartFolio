import { Spinner } from '@nextui-org/react';
import React, { FC, useCallback, useEffect, useState } from 'react';

import { GraphMonthActivity } from './widgets/GraphMonthActivity';
import { PieChartActivity } from './widgets/PieChartActivity';
import { PieChartWorkingStatus } from './widgets/PieChartWorkingStatus';

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
    return <Spinner className='flex items-center justify-center w-full h-full' label="Loading..." color="danger" aria-live="polite" />
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    < >
      <GraphMonthActivity />

      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
        <PieChartActivity />
        <PieChartWorkingStatus />
      </div>
    </>
  )
})

CodingActivity.displayName = 'CodingActivity'

export { CodingActivity }
