// CalCall.js
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import Image from 'next/image'

export default function CalCall() {
  useEffect(() => {
    ;(async function initializeCalendar() {
      const cal = await getCalApi()
      cal('ui', {
        styles: {
          branding: {
            brandColor: '#000000'
          }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    })()
  }, [])

  return (
    <button className='p-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-100'>
      <Image
        alt='Meeting Book'
        width={20}
        height={20}
        data-cal-namespace=''
        data-cal-link='elavarasan/15min'
        data-cal-config='{"layout":"month_view"}'
        src='https://em-content.zobj.net/source/telegram/386/calendar_1f4c5.webp'
        className='w-5 h-5'
      />
    </button>
  )
}
