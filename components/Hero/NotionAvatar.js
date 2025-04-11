import React, { useEffect, useState } from 'react'
import { Image } from 'antd'

const NotionAvatar = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/drive-images')
        if (!response.ok) throw new Error('Network response was not ok')

        const data = await response.json()

        const filtered = data.filter((img) => img.fileType.startsWith('image/'))

        setImages(filtered.map((img) => img.url))
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [])

  return (
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
        items={images || []}
      >
          <Image
            className='portfolio-img object-cover'
            width={180}
            height={250}
            alt='ELAVARASAN S ;Image'
            src='/portrait.png'
          />
        </Image.PreviewGroup>
      </div>
    </div>
  )
}

export default NotionAvatar
