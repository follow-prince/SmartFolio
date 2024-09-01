import * as React from "react"

import { Card, CardContent } from "@/components/HomePage/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/HomePage/ui/Carousel"
import Autoplay from 'embla-carousel-autoplay'


export function Achievement() {
  return (
    <Carousel
    opts={{
        align: 'start',
        slidesToScroll: 1,
        loop: true,
        
  
      }}
      plugins={[
        Autoplay({
          delay: 2000
        })
      ]}
    className="w-full ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 ">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
