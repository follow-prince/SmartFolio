import BLOG from '@/blog.config'
import Link from 'next/link'
import Social from '../Common/Social.js'
import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { NewspaperIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import NotionRenderer from '@/components/Post/NotionRenderer'

const NewsletterHero = ({ blockMap }) => {
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
      <div className='container flex flex-col items-center px-5 py-2 mx-auto mb-10 md:flex-row'>
        <div className='flex flex-col mb-6 md:w-4/5 md:items-start md:mb-0 md:text-left'>
          <NotionRenderer
            className='md:ml-0'
            blockMap={blockMap}
            frontMatter={{}}
            subPageTitle={null}
          />
          <Social />
          <h2 className='pt-8 pb-4 text-xl font-light text-gray-500 dark:text-day'>
            {t.HERO.NEWSLETTER.SUBSCRIPTION_HEAD}
          </h2>

          <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
            <Link passHref href={BLOG.telegramChannelUrl} scroll={false} className='flex'>
              <button className='inline-flex items-center w-full px-5 py-3 bg-gray-100 rounded-lg dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='mt-1 text-gray-600 dark:text-day w-7 h-7'
                  viewBox='0 0 24 24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z' />
                </svg>
                <span className='flex flex-col items-start ml-4 leading-none'>
                  <span className='mb-1 text-xs text-gray-600 dark:text-day'>
                    {t.HERO.NEWSLETTER.TG_CHANNEL}
                  </span>
                  <span className='font-medium'>@{BLOG.telegramChannelName}</span>
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
                  <span className='mb-1 text-xs text-gray-600 dark:text-day'>
                    {t.HERO.RSS_BUTTON_DES_COPIED}
                  </span>
                  <span className='font-medium'>{t.HERO.RSS_BUTTON_COPIED}</span>
                </span>
              </button>
            ) : (
              <button
                onClick={() => clickCopy()}
                className='inline-flex items-center px-5 py-3 bg-gray-100 rounded-lg dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='w-6 h-6 text-gray-600 dark:text-day'
                  viewBox='0 0 24 24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M3 17a4 4 0 0 1 4 4H3v-4zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9v-2zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16V3z' />
                </svg>
                <span className='flex flex-col items-start ml-4 leading-none'>
                  <span className='mb-1 text-xs text-gray-600 dark:text-day'>
                    {t.HERO.RSS_BUTTON_DES}
                  </span>
                  <span className='font-medium'>{t.HERO.NEWSLETTER.RSS_BUTTON}</span>
                </span>
              </button>
            )}
          </div>
        </div>
        <div className='w-1/5'>
          <NewspaperIcon className='object-cover object-center text-gray-500 dark:text-gray-300' />
        </div>
      </div>
    </>
  )
}

export default NewsletterHero
