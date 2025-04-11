import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import FormattedDate from '@/components/Common/FormattedDate'

const BlogPost = ({ post }) => {
  return (
    <motion.div className=''>
      <div className='relative group  '>
        <div className='absolute inset-0 duration-1000 opacity-100 md:opacity-0 transition-all bg-gradient-to-r from-[#80d0c7] via-[#80d0c8] to-[#0093e9] rounded-xl md:blur-lg blur-sm filter group-hover:opacity-100 group-hover:duration-200'></div>
        <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false}>
          <article  
            key={post.id}
            className='relative  flex flex-col p-5 mb-5 overflow-hidden cursor-pointer group md:mb-8 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#212936] shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out'
          >
            <Image
              fill
              alt={`${post.title}`}
              src={post?.page_cover}
              className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
            />
            <div className='absolute inset-0 hidden md:block md-cover'></div>
            <div className='absolute inset-0 md:hidden sm-cover'></div>
            <div className='relative mt-auto '>
              <header className='flex flex-col justify-between md:flex-row md:items-baseline'>
                <h2 className='mb-2 text-lg font-extrabold text-black md:text-xl dark:text-gray-100 '>
                  {post.title}
                </h2>
                <span className='flex-shrink-0 font-bold text-gray-600 text-color-fix dark:text-gray-400'>
                  <FormattedDate date={post.date} />
                </span>
              </header>
              <p className='hidden font-light leading-8 text-gray-700 md:block dark:text-gray-300 '>
                {post.summary}
              </p>
              {/* w-4/5  */}
            </div>
          </article>
        </Link>
      </div>
    </motion.div>
  )
}

export default BlogPost
