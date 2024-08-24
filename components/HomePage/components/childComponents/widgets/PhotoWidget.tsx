import * as React from 'react'
import { Card, CardContent } from '@/components/HomePage/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/HomePage/ui/Carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Spinner } from '@nextui-org/react'

// Memoize the Carousel component
const MemoizedCarousel = React.memo(Carousel);

export function PhotoWidget() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000); // Delay for 3 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <>
      {loaded && (
        <MemoizedCarousel
          opts={{
            align: 'start',
            slidesToScroll: 1,
            loop: true
          }}
          plugins={[
            Autoplay({
              delay: 1000
            })
          ]}
          className='max-w-[11rem] max-h-[11rem] '
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index + 1}>
                <div className='p-2'>
                  <Card className='relative w-full h-32 overflow-hidden'>
                    <Image
                      
                      src={`https://raw.githubusercontent.com/follow-prince/project-images/main/achievements/${index + 1}.jpg`}
                      alt={`Image ${index + 1}`}
                      layout='fill'
                      objectFit='cover'
                      placeholder='blur'
                      blurDataURL={`https://raw.githubusercontent.com/follow-prince/project-images/main/achievements/${index + 1}-blur.jpg`} // Use a low-res placeholder image
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </MemoizedCarousel>
      )}
      {!loaded && <div className='flex justify-center max-w-[11rem] max-h-[11rem]  '><Spinner  color='danger' /></div>} {/* Optionally, you can display a loading spinner or message */}
    </>
  )
}
