import BLOG from '@/blog.config'
import BlogPost from '@/components/BlogPost'
import Container from '@/components/Container'
import Hero from '@/components/Hero/Home'
import Pagination from '@/components/Pagination'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import React from 'react'
import { Timeline } from 'antd'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyPost: true })
  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'index')

  let blockMap
  try {
    blockMap = await getPostBlocks(hero.id)
  } catch (err) {
    console.error(err)
  }

  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage

  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext,
      blockMap
    },
    revalidate: 1
  }
}

const Blog = React.memo(({ postsToShow, page, showNext, blockMap }) => {
  return (
      <Container title={BLOG.title} description={BLOG.description}>
        <Hero blockMap={blockMap} />

        {postsToShow.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}

        <Timeline items={[]} />

        {showNext && <Pagination page={page} showNext={showNext} />}
      </Container>
  )
})

Blog.displayName = 'Blog'

export default Blog
