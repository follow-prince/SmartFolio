import BLOG from '@/blog.config'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const SupaComments = () => {
  const { locale, asPath } = useRouter()
  useEffect(() => {
    const script = document.createElement('script')
    const anchor = document.getElementById('comments')
    script.setAttribute('src', `/comments/comments-${locale}.js`)
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', true)
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ''
    }
  }, [locale, asPath])
  return (
    <>
      {/* SupaComments share existing tailwind css styles, don't need to import an additional css file. */}
      <div className='hidden w-10 h-10 mt-10 space-y-4 rounded-full' />
      <div className='flex-1 hidden w-20 h-2 grid-cols-3 col-span-2 gap-4 space-x-4 rounded animate-pulse' />
      <div
        id='comments'
        data-url={BLOG.link.split('/').slice(2) || 'localhost:3000'}
            //  data-url={ 'http://localhost:3000' }

  supabase-url={BLOG.comment.supaCommentsConfig.supabaseUrl}
        anon-key={BLOG.comment.supaCommentsConfig.supabaseAnonKey}
      ></div>
    </>
  )
}

export default SupaComments
