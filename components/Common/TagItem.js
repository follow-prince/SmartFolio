import Link from 'next/link'
import { useMemo } from 'react'

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360)
  return `hsl(${hue}, 70%, 80%)`
}

const TagItem = ({ tag }) => {
  const bgColor = useMemo(() => getRandomColor(), [])

  return (
    <Link href={`/tag/${encodeURIComponent(tag)}`} scroll={false}>
      <p
        className='mr-2 rounded-full px-2 py-1 leading-none text-sm hover:brightness-90 transition'
        style={{ backgroundColor: bgColor }}
      >
        {tag}
      </p>
    </Link>
  )
}

export default TagItem
