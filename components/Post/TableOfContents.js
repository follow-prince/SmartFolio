import PropTypes from 'prop-types'
import { getPageTableOfContents } from 'notion-utils'
import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/outline'
import BLOG from '@/blog.config'

export default function TableOfContents({ blockMap, frontMatter, pageTitle }) {
  let collectionId, page
  if (pageTitle) {
    collectionId = Object.keys(blockMap.block)[0]
    page = blockMap.block[collectionId].value
  } else {
    collectionId = Object.keys(blockMap.collection)[0]
    page = Object.values(blockMap.block).find(
      (block) => block.value.parent_id === collectionId
    ).value
  }
  const nodes = getPageTableOfContents(page, blockMap)
  if (!nodes.length) return null

  /**
   * @param {string} id - The ID of target heading block (could be in UUID format)
   */
  function scrollTo(id) {
    id = id.replaceAll('-', '')
    const target = document.querySelector(`.notion-block-${id}`)
    if (!target) return
    // `65` is the height of expanded nav
    // TODO: Remove the magic number
    const top =
      document.documentElement.scrollTop +
      target.getBoundingClientRect().top -
      65
    document.documentElement.scrollTo({
      top,
      behavior: 'smooth'
    })
  }

  console.log('TableOfContents', { collectionId, page, nodes })
  return (
    <div className=' xl:block xl:fixed ml-4 text-sm text-gray-500 dark:text-gray-400 whitespace h-[70dvh] overflow-y-auto hidden scrollbar-none  '>
      {pageTitle && (
        <Link
          passHref
          href={`${BLOG.path}/${frontMatter.slug}`}
          scroll={false}
          className='block -ml-6 mb-2 p-2 hover:bg-gray-200 hover:dark:bg-gray-700 rounded-lg'
        >
          <ChevronLeftIcon className='inline-block mb-1 h-5 w-5' />
          <span className='ml-1'>{frontMatter.title}</span>
        </Link>
      )}
      {nodes.map((node) => (
        <div
          key={node.id}
          style={{ marginLeft: `${node.indentLevel * 1.25}rem` }} // 1.25rem = 20px per level
          className='py-1 px-2 text-xs hover:text-base rounded-lg hover:bg-gray-300 hover:dark:bg-gray-700 hover:text-blue-500 dark:hover:text-gray-100 font-medium cursor-pointer'
          onClick={() => scrollTo(node.id)}
        >
          {node.text}
        </div>
      ))}
    </div>
  )
}

TableOfContents.propTypes = {
  blockMap: PropTypes.object.isRequired,
  frontMatter: PropTypes.object.isRequired,
  pageTitle: PropTypes.string
}
