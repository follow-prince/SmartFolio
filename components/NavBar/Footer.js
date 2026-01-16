import Link from 'next/link'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import {
  NewspaperIcon,
  PhotographIcon,
  BookOpenIcon,
} from '@heroicons/react/outline'
import Social from '../Common/Social.js'
import { motion } from 'framer-motion'

const Footer = ({ fullWidth }) => {
  const router = useRouter()
  const { locale } = useRouter()
  const t = lang[locale]

  let activeMenu = ''
  if (router.query.slug) {
    activeMenu = '/' + router.query.slug
  } else {
    activeMenu = router.pathname
  }

  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since

  const links = [
    {
      id: 0,
      name: t.NAV.NEWSLETTER,
      to: BLOG.path || '/newsletter',
      icon: <NewspaperIcon className='inline-block w-4 h-4 mb-1' />,
      show: true
    },
    {
      id: 1,
      name: t.NAV.GALLERY,
      to: '/gallery',
      icon: <PhotographIcon className='inline-block w-4 h-4 mb-1' />,
      show: BLOG.pagesShow.gallery
    },
    {
      id: 2,
      name: t.NAV.BOOKS,
      to: '/books',
      icon: <BookOpenIcon className='inline-block w-4 h-4 mb-1' />,
      show: BLOG.pagesShow.books
    }
  ]

  return (
    <motion.div
      className={`mt-6 flex-shrink-0 m-auto  w-full text-gray-600 dark:text-gray-300 transition-all ${
        !fullWidth ? 'max-w-5xl md:px-8' : 'px-4 md:px-24'
      }`}
    >
      <footer className='px-4 mx-auto max-w-screen-2xl md:px-8 '>
        <div className='flex flex-col items-center justify-between py-1 border-b md:flex-row dark:border-gray-600'>
          <ul className='flex flex-wrap justify-center md:justify-start md:gap-1'>
            {links.map(
              (link) =>
                link.show && (
                  <Link passHref key={link.id} href={link.to} scroll={false}>
                    <li
                      key={link.id}
                      className={`${
                        activeMenu === link.to
                          ? 'bg-gray-200 dark:bg-gray-700'
                          : ''
                      } hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav`}
                    >
                      <div className='font-light'>
                        {link.icon}
                        <span className='inline-block m-1 text-xs'>{link.name}</span>
                      </div>
                    </li>
                  </Link>
                )
            )}
          </ul>
          <div className='hidden md:flex'>
            <Social />
          </div>
        </div>

        <div className='py-4 text-xs font-light text-gray-400'>
          © {from === y || !from ? y : `${from} - ${y}`} | {BLOG.author}
          <p className='md:float-right '>
           
            {t.FOOTER.COPYRIGHT_START}
            <a className='underline' href={`${t.FOOTER.COPYRIGHT_LINK}`}>
              {t.FOOTER.COPYRIGHT_NAME}
            </a>
            {t.FOOTER.COPYRIGHT_END}
          </p>


        </div>
      </footer>
    </motion.div>
  )
}

export default Footer
