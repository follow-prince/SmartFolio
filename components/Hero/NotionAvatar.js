// https://react-svgr.com/playground/
import * as React from 'react'
import Image from 'next/image'

const NotionAvatar = () => (
  <div
    style={{
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center'
    }}
    className='myCard'
  >
    <div className='innerCard'>
      <div className='frontSide'>
        <Image className='portfolio-img' width={180} height={200}  alt='ELAVARASAN Front Photo' src='/portrait.png' />
      </div>
      <div className='backSide'>
        <Image className='portfolio-img1' width={180} height={200}  alt='ELAVARASAN Back Photo' src='/portrait1.png' />
      </div>
    </div>
  </div>
)

export default NotionAvatar
