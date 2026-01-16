import Link from 'next/link'

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
      <div className='flex flex-wrap '>
        {Object.keys(tags).map((key) => {
          const selected = key === currentTag
          return (
            <div
              key={key}
              className={`text-xs mt-1 mr-1 font-extrabold rounded-sm whitespace-nowrap hover:text-gray-100 dark:hover:text-gray-100  dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-900 ${
                selected
                  ? 'text-gray-100 bg-gray-400 dark:bg-gray-600'
                  : 'text-gray-600 bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <Link key={key} scroll={false}
                href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
                className='px-2 py-1 block'
              >
                {`${key} (${tags[key]})`}
              </Link>
            </div>
          )
        })}
      </div>
  )
}

export default Tags
