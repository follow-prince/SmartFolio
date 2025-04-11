import NotionRenderer from '@/components/Post/NotionRenderer'
import { useRouter } from 'next/router'

import Social from '../Common/Social.js'
import Avatar from './NotionAvatar.js'
import ActionButtons from './actionButtons.js'

const Hero = ({ blockMap }) => {

  return (
    <>
      <div className='container flex flex-col items-center  py-2 mx-auto mb-2 md:flex-row'>
        <div className='flex flex-col mb-5 text-left md:w-3/5 md:items-start md:mb-10'>
          <NotionRenderer
            className='md:ml-0'
            blockMap={blockMap}
            frontMatter={{}}
            subPageTitle={null}
          />
          <Social />

          <ActionButtons />
        </div>
        <div className='content-center mx-10 mt-3 mb-5 '>
          <Avatar className='text-gray-600 dark:text-gray-300' />
        </div>
      </div>
    </>
  )
}

export default Hero
