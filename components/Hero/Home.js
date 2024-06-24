import BLOG from '@/blog.config'
import Link from 'next/link'
import Avatar from './NotionAvatar.js'
import Social from '../Common/Social.js'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  MailIcon,
  RssIcon,
  ClipboardCheckIcon
} from '@heroicons/react/outline'
import NotionRenderer from '@/components/Post/NotionRenderer'

const Hero = ({ blockMap }) => {
  const [showCopied, setShowCopied] = useState(false)
  const { locale } = useRouter()
  const t = lang[locale]

  const clickCopy = async () => {
    setShowCopied(true)
    navigator.clipboard.writeText(BLOG.link + '/feed')
    setTimeout(() => {
      setShowCopied(false)
    }, 1000)
  }

  return (
    <>
      <div className='container flex flex-col items-center px-5 py-2 mx-auto mb-2 md:flex-row'>
        <div className='flex flex-col mb-5 text-left md:w-3/5 md:items-start md:mb-10'>
          <NotionRenderer
            className='md:ml-8'
            blockMap={blockMap}
            frontMatter={{}}
            subPageTitle={null}
          />
          <Social />
          <div className='flex flex-row gap-4 mt-5 sm:flex-row sm:justify-center'>
            <Link passHref href='/contact' scroll={false}>
              <button className='inline-flex items-center w-full px-5 py-3 bg-gray-100 rounded-lg dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'>
                <MailIcon className='inline-block mt-1 text-gray-600 dark:text-day h-7 w-7' />
                <span className='flex flex-col items-start ml-4 leading-none'>
                  <span className='mb-1 text-xs text-gray-600 dark:text-day'>
                    {t.HERO.HOME.CONTACT_BUTTON_DES}
                  </span>
                  <span className='font-medium'>{t.HERO.HOME.CONTACT_BUTTON}</span>
                </span>
              </button>
            </Link>
            {showCopied ? (
              <button
                disabled
                className='inline-flex items-center px-5 py-3 bg-gray-200 rounded-lg dark:bg-gray-600'
              >
                <ClipboardCheckIcon className='inline-block text-gray-600 dark:text-day h-7 w-7' />
                <span className='flex flex-col items-start ml-4 leading-none'>
                  <span className='mb-1 text-sm text-gray-600 dark:text-day'>
                    {t.HERO.RSS_BUTTON_DES_COPIED}
                  </span>
                  <span className='font-medium'>
                    {t.HERO.RSS_BUTTON_COPIED}
                  </span>
                </span>
              </button>
            ) : (
              <button
                onClick={() => clickCopy()}
                className='inline-flex items-center px-5 py-3 bg-gray-100 rounded-lg dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              >
                <RssIcon className='inline-block h-5 text-gray-600 dark:text-day w-7' />
                <span className='flex flex-col items-start ml-4 leading-none'>
                  <span className='mb-1 text-xs text-gray-600 dark:text-day'>
                    {t.HERO.RSS_BUTTON_DES}
                  </span>
                  <span className='font-medium'>{t.HERO.HOME.RSS_BUTTON}</span>
                </span>
              </button>
            )}
          </div>
        </div>
        <div className='content-center mx-10 mt-3 mb-5 '>
          <Avatar className='text-gray-600 dark:text-gray-300' />
        </div>
      </div>
    </>
  )
}

export default Hero
