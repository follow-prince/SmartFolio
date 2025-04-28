import React, { useEffect, useState } from 'react'
import { Image } from 'antd'

const NotionAvatar = ({randomBackground}) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('/api/drive-images')
        if (!res.ok) throw new Error('Failed to fetch images')
        const data = await res.json()
        setImages(
          data
            .filter((img) => img.fileType.startsWith('image/'))
            .map((img) => img.url)
        )
      } catch (err) {
        console.error('Error fetching images:', err)
      }
    })()
  }, [])


  return (
    <div
      className={` w-full h-full flex justify-center items-center  rounded-[20px]   ${randomBackground}`}
    >
      <Image.PreviewGroup items={images}>
        <Image
          width='100%'
          height='100%'
          alt='ELAVARASAN S'
          className='aspect-3/2 object-cover rounded-[20px]'
          src='/portrait.png'
        />
      </Image.PreviewGroup>
    </div>
  )
}

export default NotionAvatar
