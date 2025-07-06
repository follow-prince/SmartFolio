'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Blog from '@/blog.config'
import HeroImages from './images'

export const ResponsiveCarousel = () => {
  return (
    <div className='overflow-hidden  '>
      <h1
        className='text-xs font-bold text-center text-gray-800 dark:text-gray-200 mb-6'
        style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}
      >
        Driven by Purpose. Built with Passion.
      </h1>

      <Carousel
        autoPlay
        infiniteLoop
        renderArrowNext={() => null}
        renderArrowPrev={() => null}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={1500}
        transitionTime={200}
      >
        {Blog.landingPageCarousel.map((item, idx) => {
          const ImageComponent = HeroImages[item?.image] || null
          return (
            <div
              key={idx}
              className='flex flex-col items-center justify-center md:max-h-64 md:max-w-64'
            >
              {ImageComponent ? (
                <ImageComponent className='w-full h-full ' />
              ) : null}

              <h3
                className=' text-xs text-center font-bold text-gray-800 dark:text-gray-200 '
                style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}
              >
                {item?.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 text-center'>
                {item?.subtitle}
              </p>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
