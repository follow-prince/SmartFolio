import React from 'react'
import { GraphMonthActivity } from './widgets/GraphMonthActivity'
import { PieChartActivity } from './widgets/PieChartActivity'
import { PieChartWorkingStatus } from './widgets/PieChartWorkingStatus'

export const CodingActivity = () => {
  return (
    <div>
      <GraphMonthActivity />
      <div className='grid grid-flow-col'>
        <PieChartActivity />
        <PieChartWorkingStatus />
      </div>
    </div>
  )
}
