// https://react-svgr.com/playground/
import * as React from 'react'
import Image from 'next/image'

const Logo = (props) => (
    <h1 className='items-center space-x-2 home-page-title'>
      <Image
        src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Crown.webp'
        alt='Crown'
        width={20}
        height={20}
      />
      Prince
    </h1>
)

export default Logo
