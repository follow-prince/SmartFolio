import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/HomePage/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/HomePage/ui/Carousel'
import { formatDistanceToNow } from 'date-fns'
import { Chip } from '@nextui-org/react'
import {
  IconCircleDashedCheck,
  IconBrandPython,
  IconBrandJavascript,
  IconCoffee,
  IconCalendarTime,
  IconExternalLink
} from '@tabler/icons-react'
import {ScrollShadow} from "@nextui-org/react";


interface Submission {
  title: string
  titleSlug: string
  timestamp: string
  statusDisplay: string
  lang: string
}

interface Data {
  count: number
  submission: Submission[]
}

const LeetCodeActivity: React.FC = () => {
  const [data, setData] = React.useState<Data | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)

  const AlternativeData: Data = {
    count: 20,
    submission: [
      {
        title: "Three Consecutive Odds",
        titleSlug: "three-consecutive-odds",
        timestamp: "1721807801",
        statusDisplay: "Accepted",
        lang: "javascript"
      },
      {
        title: "Three Consecutive Odds",
        titleSlug: "three-consecutive-odds",
        timestamp: "1721806670",
        statusDisplay: "Runtime Error",
        lang: "javascript"
      },
      {
        title: "Three Consecutive Odds",
        titleSlug: "three-consecutive-odds",
        timestamp: "1721805572",
        statusDisplay: "Wrong Answer",
        lang: "javascript"
      },
      {
        title: "Three Consecutive Odds",
        titleSlug: "three-consecutive-odds",
        timestamp: "1721805469",
        statusDisplay: "Wrong Answer",
        lang: "javascript"
      },
      {
        title: "Two Sum",
        titleSlug: "two-sum",
        timestamp: "1718787760",
        statusDisplay: "Wrong Answer",
        lang: "javascript"
      },
      {
        title: "Two Sum",
        titleSlug: "two-sum",
        timestamp: "1718787541",
        statusDisplay: "Wrong Answer",
        lang: "javascript"
      },
      {
        title: "Two Sum",
        titleSlug: "two-sum",
        timestamp: "1718787269",
        statusDisplay: "Wrong Answer",
        lang: "javascript"
      },
      {
        title: "Append Characters to String to Make Subsequence",
        titleSlug: "append-characters-to-string-to-make-subsequence",
        timestamp: "1717434620",
        statusDisplay: "Accepted",
        lang: "python3"
      },
      {
        title: "Score of a String",
        titleSlug: "score-of-a-string",
        timestamp: "1717261776",
        statusDisplay: "Accepted",
        lang: "python3"
      },
      {
        title: "Single Number III",
        titleSlug: "single-number-iii",
        timestamp: "1717198151",
        statusDisplay: "Accepted",
        lang: "python3"
      },
      {
        title: "Count Triplets That Can Form Two Arrays of Equal XOR",
        titleSlug: "count-triplets-that-can-form-two-arrays-of-equal-xor",
        timestamp: "1717101147",
        statusDisplay: "Accepted",
        lang: "python3"
      },
      {
        title: "Two Sum",
        titleSlug: "two-sum",
        timestamp: "1717036110",
        statusDisplay: "Accepted",
        lang: "python3"
      },
      {
        title: "Number of Steps to Reduce a Number in Binary Representation to One",
        titleSlug: "number-of-steps-to-reduce-a-number-in-binary-representation-to-one",
        timestamp: "1717008473",
        statusDisplay: "Accepted",
        lang: "python3"
      },
      {
        title: "Two Sum",
        titleSlug: "two-sum",
        timestamp: "1717007604",
        statusDisplay: "Accepted",
        lang: "python3"
      },
      {
        title: "Two Sum",
        titleSlug: "two-sum",
        timestamp: "1717002637",
        statusDisplay: "Accepted",
        lang: "python3"
      },
      {
        title: "Word Break II",
        titleSlug: "word-break-ii",
        timestamp: "1716640188",
        statusDisplay: "Accepted",
        lang: "java"
      },
      {
        title: "Palindrome Partitioning",
        titleSlug: "palindrome-partitioning",
        timestamp: "1716384962",
        statusDisplay: "Accepted",
        lang: "java"
      },
      {
        title: "Palindrome Partitioning",
        titleSlug: "palindrome-partitioning",
        timestamp: "1716384912",
        statusDisplay: "Accepted",
        lang: "java"
      },
      {
        title: "Sum of All Subset XOR Totals",
        titleSlug: "sum-of-all-subset-xor-totals",
        timestamp: "1716219940",
        statusDisplay: "Accepted",
        lang: "java"
      },
      {
        title: "Merge Sorted Array",
        titleSlug: "merge-sorted-array",
        timestamp: "1715849490",
        statusDisplay: "Accepted",
        lang: "javascript"
      }
    ]
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://alfa-leetcode-api.onrender.com/iam-prince/submission'
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result: Data = await response.json()
        setData(result)
      } catch (error: any) {
        setError(error.message)
        // Use alternative data in case of an error
        setData(AlternativeData)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const renderStatusChip = (status: string) => (
    <Chip
      className='w-1 h-4 text-[9px] font-bold bg-transparent border border-[#333] hover:bg-slate-700/50 rounded-small'
      startContent={<IconCircleDashedCheck className='w-3' stroke={1.5} />}
      variant='light'
      color={status === 'Accepted' ? 'success' : 'danger'}
      size='sm'
    >
      {status}
    </Chip>
  )

  const renderLangChip = (lang: string) => {
    const icons = {
      python3: <IconBrandPython className='w-4' stroke={1.5} />,
      javascript: <IconBrandJavascript className='w-4' stroke={1.5} />,
      java: <IconCoffee className='w-4' stroke={1.5} />
    }
    return (
      <Chip
        className='w-1 h-4 text-[9px] font-bold bg-transparent border border-[#333] hover:bg-slate-700/50 rounded-small'
        startContent={icons[lang]}
        variant='light'
        size='sm'
      >
        {lang}
      </Chip>
    )
  }

  if (loading) return <div>Loading...</div>
  if (error) console.warn(error) // Optionally log the error to the console
  if (!data) return <div>No data available</div>

  return (
    <Carousel
      opts={{
        align: 'start',
        slidesToScroll: 1,
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 2000
        })
      ]}
      orientation='vertical'
      className='w-full '
    >
      <div className='text-xs text-center'>LeetCode Submission</div>
      <ScrollShadow hideScrollBar className="w-full h-[255px]">

      <CarouselContent className='h-[280px] '>

        {data.submission.map((item, index) => (
          <CarouselItem key={index} className='md:basis-1/5 '>
            <div className='p-1 -h-2'>
              <Card className='overflow-hidden border-rose-700'>
                <CardContent className='text-xs '>
                  <div className='p-1 text-start'>
                    <a
                      href={`https://leetcode.com/problems/${item.titleSlug}`}
                      className='font-black text-rose-500 text-[12px] items-center gap-1 flex'
                    >
                      <span>{item.title}</span>
                    </a>
                    <div className='flex justify-between pt-3'>
                      {renderStatusChip(item.statusDisplay)}
                      {renderLangChip(item.lang)}
                    </div>
                    <div className='text-[10px]'>
                      <div className='flex items-center justify-end gap-1'>
                        <IconCalendarTime className='w-3' stroke={1.5} />
                        <span>
                          {formatDistanceToNow(
                            new Date(Number(item.timestamp) * 1000),
                            { addSuffix: true }
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          
        ))}
      </CarouselContent>
      </ScrollShadow>

    </Carousel>
  )
}

export  {LeetCodeActivity}
