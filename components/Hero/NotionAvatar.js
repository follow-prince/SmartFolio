// https://react-svgr.com/playground/
import * as React from 'react'
import { Image } from 'antd'

const NotionAvatar = () => (
  <div
    style={{
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center'
    }}
    className='myCard'
  >
    <div className='frontSide  '>
      <Image.PreviewGroup
        items={[
          'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
          'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
          'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp'
        ]}
      >
        <Image
          className='portfolio-img object-cover  '
          width={180}
          height={250}
          alt='ELAVARASAN Front Photo'
          preview={{            
            mask: (
              <div
                className='flex flex-col justify-end items-center '
                style={{
                  height: '100%',
                  width: '100%'
                }}
              >
                <div className='dark:bg-gray-100/50 bg-gray-700/50 rounded-tl-lg rounded-tr-lg p-1 text-center font-bold text-[10px] font-AppleFont'>
                <span>ELAVARASAN</span>
                </div>
              </div>

            ),
          }}

          src='/portrait.png'
        />
      </Image.PreviewGroup>
    </div>
  </div>
)

export default NotionAvatar
