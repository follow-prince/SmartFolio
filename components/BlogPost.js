import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import FormattedDate from '@/components/Common/FormattedDate'

const BlogPost = ({ post }) => {
  return (
    <motion.div>
      <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false}>
        <article
          key={post.id}

          className='group  border-1 dark:border-[#ffffff] border-[#000000] shadow-lg flex flex-col overflow-hidden relative mb-5 md:mb-8 cursor-pointer rounded-xl p-5'
        >
          <Image
            fill
            alt={`${post.title}`}
            src={post?.page_cover}
            className='object-cover object-center absolute inset-0 w-full h-full transition duration-200 group-hover:scale-110'
          />
          <div className='hidden absolute inset-0 md:block md-cover'></div>
          <div className='absolute inset-0 md:hidden sm-cover'></div>
          <div className='relative mt-auto'>
            <header className='flex flex-col justify-between md:flex-row md:items-baseline'>
              <h2 className='mb-2 text-lg font-extrabold text-black md:text-xl dark:text-gray-100'>{post.title}</h2>
              <span className='flex-shrink-0 font-bold text-gray-600 text-color-fix dark:text-gray-400'>
                <FormattedDate date={post.date} />
              </span>
            </header>
            <p className='hidden font-light leading-8 text-gray-700 md:block dark:text-gray-300'>{post.summary}</p>
            {/* w-4/5  */}
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

export default BlogPost
