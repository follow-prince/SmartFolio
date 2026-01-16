import BLOG from '@/blog.config'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

const Utterances = ({ issueTerm, layout }) => {
  const { theme, resolvedTheme } = useTheme()
  
  useEffect(() => {
    const currentTheme = theme === 'system' ? resolvedTheme : theme
    const utterancesTheme = currentTheme === 'dark' ? 'github-dark' : 'github-light'
    
    const script = document.createElement('script')
    const anchor = document.getElementById('comments')
    
    if (!anchor) return
    
    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', true)
    script.setAttribute('repo', BLOG.comment.utterancesConfig.repo)
    script.setAttribute('issue-term', issueTerm)
    script.setAttribute('theme', utterancesTheme)
    anchor.appendChild(script)
    
    return () => {
      const commentsEl = document.getElementById('comments')
      if (commentsEl) {
        commentsEl.innerHTML = ''
      }
    }
  }, [issueTerm, theme, resolvedTheme])

  // Update theme when it changes
  useEffect(() => {
    const currentTheme = theme === 'system' ? resolvedTheme : theme
    const utterancesTheme = currentTheme === 'dark' ? 'github-dark' : 'github-light'
    
    const iframe = document.querySelector('iframe.utterances-frame')
    if (iframe) {
      const message = {
        type: 'set-theme',
        theme: utterancesTheme
      }
      iframe.contentWindow.postMessage(message, 'https://utteranc.es')
    }
  }, [theme, resolvedTheme])

  return (
    <>
      <div
        id='comments'
        className={layout && layout === 'fullWidth' ? '' : 'md:-ml-16 mb-3'}
      >
      </div>
    </>
  )
}

export default Utterances
