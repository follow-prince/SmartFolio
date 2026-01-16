import { useState } from 'react'
import BlogPost from '@/components/BlogPost'
import Container from '@/components/Container'
import Tags from '@/components/Common/Tags'
import PropTypes from 'prop-types'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { ChevronDownIcon } from '@heroicons/react/outline'


const SearchLayout = ({ tags, posts, currentTag }) => {
  const [searchValue, setSearchValue] = useState('')
  const [isCollapsed, setIsCollapsed] = useState(true)
  const { locale } = useRouter()
  const t = lang[locale]

  let filteredBlogPosts = []
  if (posts) {
    filteredBlogPosts = posts.filter((post) => {
      const tagContent = post.tags ? post.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  return (
    <Container>
      <div className='relative'>
        <input
          type='text'
          placeholder={
            currentTag
              ? `${t.SEARCH.ONLY_SEARCH} #${currentTag}`
              : `${t.SEARCH.PLACEHOLDER}`
          }
          className='w-full p-3 bg-white rounded-lg shadow-md outline-none dark:bg-gray-600 focus:shadow'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <svg
          className='absolute w-5 h-5 text-gray-400 right-3 top-3'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          ></path>
        </svg>
      </div>

      <div className='mt-2'>
        <div className='border rounded-lg overflow-hidden bg-white dark:bg-gray-600'>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className='w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
          >
            <div className='font-black text-base dark:text-gray-300'>
              Categories or Tags
            </div>
            <div className={`transform transition-transform duration-300 ${isCollapsed ? '' : 'rotate-180'}`}>
              <ChevronDownIcon className='w-5 h-5 text-gray-600 dark:text-gray-300' />
            </div>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out border-t dark:border-gray-500 ${
              isCollapsed 
                ? 'max-h-0 opacity-0 overflow-hidden' 
                : 'max-h-[2000px] opacity-100'
            }`}
          >
            <div className={`p-3 transform transition-transform duration-300 ${
              isCollapsed ? 'translate-y-[-10px]' : 'translate-y-0'
            }`}>
              <Tags tags={tags} currentTag={currentTag} />
            </div>
          </div>
        </div>
      </div>

      <div className='my-3 article-container'>
        {!filteredBlogPosts.length && (
          <p className='text-gray-500 dark:text-gray-300'>
            {t.SEARCH.NOT_FOUND}
          </p>
        )}
        {filteredBlogPosts.slice(0, 20).map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </Container>
  )
}
SearchLayout.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.object.isRequired,
  currentTag: PropTypes.string
}
export default SearchLayout
