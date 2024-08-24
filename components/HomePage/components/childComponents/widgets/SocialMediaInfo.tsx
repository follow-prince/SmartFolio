import * as React from 'react'
import { Card } from '@/components/HomePage/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/HomePage/ui/Carousel'
import { Spinner, Image, Link } from '@nextui-org/react'
import { IconUserSearch } from '@tabler/icons-react'
import Autoplay from 'embla-carousel-autoplay'

// Memoize the Carousel component
const MemoizedCarousel = React.memo(Carousel)

export function SocialMediaInfo() {
  const [loaded, setLoaded] = React.useState(false)
  const [data, setData] = React.useState<any[]>([])
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    // Fetch data from the API
    fetch('https://raw.githubusercontent.com/follow-prince/project-images/main/achievements/link.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData)
      })
      .catch((error) => {
        setError('Failed to load data')
      })

    // Add a 3-second loading delay
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 2000)

    return () => clearTimeout(timer) // Clean up the timer on unmount
  }, [])

  if (!loaded) {
    return (
      <div className='flex justify-center max-w-[11rem] max-h-[11rem]'>
        <Spinner color='danger' />
      </div>
    )
  }

  if (error) {
    return <div className='text-center text-red-500'>{error}</div>
  }

  return (
    <MemoizedCarousel
      opts={{
        align: 'start',
        slidesToScroll: 1,
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 800,
        }),
      ]}
      className='max-w-[11rem] max-h-[11rem]'
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <div className='p-2'>
              <Card className='relative w-full h-32 overflow-hidden'>
                <div className='flex flex-col items-center'>
                  <div className="p-1 mt-1 rounded-md dark:bg-slate-50">

                  <Image
                    isBlurred
                    width={40}
                    height={40}
                    src={item.icon}
                    alt={`${item.platform} Profile`}
                    className=''
                  />
                  </div>
               
                  <span className='text-xs font-extrabold'>
                    {item.platform} Profile
                  </span>
                </div>
                <div className='flex items-center gap-1 px-2 text-xs'>
                  <IconUserSearch className='w-5' stroke={1.5} />
                  <span>@{item.id}</span>
                </div>
                <div className='flex items-center justify-center gap-1 px-3  text-[8px]'>
                  <Link
                    className='text-[10px] '
                    isExternal
                    href={item.idLink}
                    showAnchorIcon
                  >
                    <span className=''>{item.shortLink}</span>
                  </Link>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </MemoizedCarousel>
  )
}
