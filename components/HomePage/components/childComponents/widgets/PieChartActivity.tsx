'use client'

import * as React from 'react'
import { Label, Pie, PieChart } from 'recharts'
import { CardContent } from '@/components/HomePage/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/HomePage/ui/PieChart'

// Define the structure of the fetched data
interface ChartData {
  name: string
  percent: number
  color: string
}

export function PieChartActivity() {
  const [chartData, setChartData] = React.useState<ChartData[]>([])
  const [totalPercent, setTotalPercent] = React.useState<number>(0)

  // Fetch data from Wakatime API
  React.useEffect(() => {
    fetch(
      'https://wakatime.com/share/@follow_prince/9a3e9631-78b7-4c54-9ac4-7227b592c9e0.json'
    )
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = data.data.map((item: ChartData) => ({
          name: item.name,
          percent: item.percent,
          fill: item.color // Setting the fill color here
        }))

        setChartData(fetchedData)

        // Calculate total percentage (in this case, it's always 100%)
        const total = fetchedData.reduce((acc, curr) => acc + curr.percent, 0)
        setTotalPercent(total)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
      <CardContent className=''>
        <div className='p-1 text-xs font-bold text-center text-rose-600 '>
          Languages over last 1 year
        </div>

        <ChartContainer config={{}} className='h-[100px]'>
          <PieChart>
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <Pie
              data={chartData}
              dataKey='percent'
              nameKey='name'
              innerRadius={35}
              outerRadius={50}
              strokeWidth={10}
              // No need for a fill here, as it is handled in the data
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='text-xs font-bold fill-foreground'
                        >
                          {totalPercent.toFixed(2)}%
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </>
  )
}
