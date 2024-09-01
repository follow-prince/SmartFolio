'use client'

import * as React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent } from '@/components/HomePage/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/HomePage/ui/chart'
import { Chip, Tooltip, Spinner } from '@nextui-org/react'

// Define chart configuration
const chartConfig = {
  hours: {
    label: 'Hours',
    color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig

export function GraphMonthActivity() {
  const [chartData, setChartData] = React.useState<
    { date: string; hours: number }[]
  >([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://wakatime.com/share/@follow_prince/1137126b-4b71-4f06-a3ae-27f6bf4f52fc.json'
        )
        const data = await response.json()

        // Transform data for chart
        const transformedData = data.data.map((entry: any) => ({
          date: entry.range.date,
          hours: Math.round(entry.grand_total.hours * 100) / 100
        }))
        setChartData(transformedData)
      } catch (err) {
        setError('Failed to fetch data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return    <div className='flex justify-center w-full h-full '>
  <Spinner label='Loading...' color='danger' />
</div>

  if (error) return <p>Error: {error}</p>

  return (
    <Card className='m-2 border dark:border-stone-50/70 border-rose-500/70 '>
      <div className='flex items-center justify-around'>
        {' '}
        <div className='p-2 text-sm font-extrabold text-rose-600'>
          Daily Working Hours
        </div>
        <Tooltip
          showArrow={true}
          color='success'
          content='Data Up-to-Date'
          className='rounded-[4px]  text-white font-extrabold'
        >
          <Chip
            color='success'
            className='font-extrabold'
            size='sm'
            variant='dot'
          >
            Live
          </Chip>
        </Tooltip>
      </div>
      <CardContent className=''>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[160px] w-full'
        >
          <BarChart
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className='w-[100px] '
                  nameKey='hours'
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })
                  }}
                />
              }
            />
            <Bar dataKey='hours' fill={`var(--color-hours)`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
