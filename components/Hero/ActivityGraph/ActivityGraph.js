import { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import useGitHubData from '@/lib/stores/useGitHubStore'
import { Spin } from 'antd'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const graphConfig = {
  hoverBackgroundColor: 'rgba(255, 99, 132, 0.9)',
  borderColor: 'rgba(255, 99, 132, 0.6)',
  borderWidth: 3,
  label: 'Commits',
  tension: 0.4,
  fill: false,
  backgroundColor: 'rgba(256, 256, 256, 0.9)',
  backgroundColor: (context) => {
    const ctx = context.chart.ctx
    const gradient = ctx.createLinearGradient(0, 0, 0, 250)
    gradient.addColorStop(0, 'rgba(256, 256, 256,0.4)')
    gradient.addColorStop(1, 'rgba(256, 256, 256,0)')
    return gradient
  }
}

const graphOptions = {
  maintainAspectRatio: true,
  interaction: {
    mode: 'index',
    intersect: false
  }
}

const ActivityGraph = () => {
  const { cache, loading, error, fetchGitHubData } = useGitHubData()

  useEffect(() => {
    fetchGitHubData()
  }, [])

  const contributionCalendar = cache?.contributionCalendar || []

  console.log('contributionCalendar', contributionCalendar)


  const monthlyActivity = contributionCalendar.reduce((acc, curr) => {
    const month = new Date(curr.date).toLocaleString('default', {
      month: 'short',
      year: '2-digit'
    })
    if (!acc[month]) acc[month] = 0
    acc[month] += curr.contributionCount
    return acc
  }, {})

  const weekDaysActivity = contributionCalendar.reduce((acc, curr) => {
    const day = new Date(curr.date).toLocaleString('default', {
      weekday: 'long'
    })
    if (!acc[day]) acc[day] = 0
    acc[day] += curr.contributionCount
    return acc
  }, {})

  // last 30 days
  const lastMonthActivity = contributionCalendar
    .slice(-30)
    .reduce((acc, curr) => {
      const day = new Date(curr.date).toLocaleString('default', {
        month: 'short',
        day: '2-digit'
      })
      if (!acc[day]) acc[day] = 0
      acc[day] += curr.contributionCount
      return acc
    }, {})

  return (
    <div className='flex flex-col justify-center h-full w-full relative mx-auto border-2 border-[#6C6C6C] p-1 bg-[#222222] rounded-[10px] shadow-2xl'>
      <div className='  h-full w-full bg-day dark:bg-night rounded-lg '>
       {
        !loading ? ( <div className='  h-full w-full  overflow-y-auto scrollbar-thin selection:bg-gray-500 scrollbar-thumb-gray-400/40 scrollbar-track-gray-200/30 dark:scrollbar-track-transparent dark:scrollbar-thumb-gray-500/40 '>
            <div className='bg-white m-2 rounded-lg border-2 border-[#afacac80] dark:bg-gray-800 dark:border-gray-700 '>
              <Line
                options={{
                  plugins: {
                    title: {
                      text: 'Monthly Activity (1 year)',
                      display: true
                    }
                  },
                  ...graphOptions
                }}
                data={{
                  labels: Object.keys(monthlyActivity),
                  datasets: [
                    {
                      data: Object.values(monthlyActivity),
                      ...graphConfig
                    }
                  ]
                }}
              />
            </div>
            <div className='bg-white m-2 rounded-lg border-2 border-[#afacac80] dark:bg-gray-800 dark:border-gray-700 '>
              <Line
                options={{
                  ...graphOptions,
                  plugins: {
                    title: {
                      text: 'Weekly Frequency (1 year)',
                      display: true
                    }
                  }
                }}
                data={{
                  labels: Object.keys(weekDaysActivity),
                  datasets: [
                    {
                      data: Object.values(weekDaysActivity),
                      ...graphConfig
                    }
                  ]
                }}
              />
            </div>
            <div className='bg-white m-2 rounded-lg border-2 border-[#afacac80] dark:bg-gray-800 dark:border-gray-700 '>
              <Line
                options={{
                  ...graphOptions,
                  plugins: {
                    title: {
                      text: 'Last 30 days',
                      display: true
                    }
                  }
                }}
                data={{
                  labels: Object.keys(lastMonthActivity),
                  datasets: [
                    {
                      data: Object.values(lastMonthActivity),
                      ...graphConfig
                    }
                  ]
                }}
              />
            </div>
          </div>):(
            <div className='flex items-center justify-center h-full w-full'>
                <Spin />
            </div>
          )
       }
      </div>
    </div>
  )
}

export { ActivityGraph }
