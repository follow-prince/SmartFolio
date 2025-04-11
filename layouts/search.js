import { useState } from 'react'
import BlogPost from '@/components/BlogPost'
import Container from '@/components/Container'
import Tags from '@/components/Common/Tags'
import PropTypes from 'prop-types'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { Collapse } from 'antd'


const SearchLayout = ({ tags, posts, currentTag }) => {
  const [searchValue, setSearchValue] = useState('')
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

      <div className=' mt-2'>
        <Collapse
          size='small'
          className='dark:bg-gray-600 custom-collapse'
          bordered={true}
          style={{ background: 'transparent' }}
          items={[
            {
              key: '1',
              label: (
                <div className='font-black text-base dark:text-gray-300 '>
                  {' '}
                  Categories or Tags
                </div>
              ),
              children: <Tags tags={tags} currentTag={currentTag} />,
              styles: {
                body: {
                  backgroundColor: 'red !important'
                }
              }
            }
          ]}
        />
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
