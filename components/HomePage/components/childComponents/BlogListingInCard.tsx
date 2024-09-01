import React, { FC, useState, useEffect, memo } from 'react'
import { Card, Spinner } from '@nextui-org/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/HomePage/ui/Carousel'
import Autoplay from 'embla-carousel-autoplay'
import BLOG from '@/blog.config'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import FormattedDate from '@/components/Common/FormattedDate'

// Define the type for the blog post
interface BlogPost {
  id: string
  title: string
  slug: string
  date: string // Ensure this is in a valid date format
  summary: string
  page_cover: string
}

// Define the props type for the component
interface BlogListingInCardProps {
  blogListShare: BlogPost[]
}

const BlogListingInCard: FC<BlogListingInCardProps> = memo(
  ({ blogListShare }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // Simulate a delay for loading state
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2000) // Adjust the delay as needed

      return () => clearTimeout(timer)
    }, [])

    // Sort the blog posts by date in descending order
    const sortedBlogList = [...blogListShare].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    if (isLoading) {
      return     <div className='flex justify-center w-full h-full '>
      <Spinner label='Loading...' color='danger' />
    </div>
    }

    return (
      <Carousel
        opts={{
          align: 'end',
          slidesToScroll: 1,
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 2000
          })
        ]}
        orientation='vertical'
        className='w-full p-2 '
      >
        <div className='w-full h-full overflow-hidden '>
          <div className='text-[12px] text-rose-500 font-extrabold text-center'>
            Blog Posts
          </div>
          <CarouselContent className='h-[490px]'>
            {sortedBlogList.map((post) => (
              <CarouselItem key={post.id} className='md:basis-1/5'>
                <Card className='w-full border rounded-lg border-rose-500 dark:border-slate-100'>
                  <motion.div>
                    <Link
                      passHref
                      href={`${BLOG.path}/${post.slug}`}
                      scroll={true}
                    >
                      <article className='relative flex flex-col items-start p-1 overflow-hidden rounded-lg cursor-pointer group min-h-20'>
                        <Image
                          fill
                          alt={post.title}
                          src={post.page_cover}
                          className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110 opacity-40'
                        />
                        <div className='absolute inset-0 hidden md:block bg-gradient-to-r to-transparent from-red-100 via-gray-200 dark:to-transparent dark:from-gray-900 dark:via-gray-600'></div>
                        <div className='absolute inset-0 cover'></div>
                        <div className='relative'>
                          <header className='flex flex-row'>
                            <h2 className='px-2 text-sm font-extrabold text-black dark:text-gray-100'>
                              {post.title}
                            </h2>
                            <span className='flex-shrink-0 font-bold text-slate-700 text-color-fix dark:text-blue-100'>
                              <FormattedDate date={post.date} />
                            </span>
                          </header>
                          <p className='px-2 text-xs font-light text-gray-700 leading-2 md:block dark:text-gray-300'>
                            {post.summary}
                          </p>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    )
  }
)

BlogListingInCard.displayName = 'BlogListingInCard'

export { BlogListingInCard }
