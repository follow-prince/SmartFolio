import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

function ContactForm() {
  const [showResult, setShowResult] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { locale } = useRouter()
  const t = lang[locale]

  const sentMessage = async (event) => {
    event.preventDefault()
    setSubmitting(true)

    const apiUrl = '/api/sendEmail' // Backend API endpoint for sending emails
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    }

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setSubmitting(false)
        setShowResult(true)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert(t.CONTACT.FAILED_MESSAGE)
      setSubmitting(false)
    }
  }

  return (
    <>
      {showResult ? (
        <div>
          <p className='max-w-screen-md mx-auto font-bold text-center md:text-lg'>
            {t.CONTACT.SUCCESS_MESSAGE}
            <div className='flex justify-center py-8'>
              <img
                src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Incoming%20Envelope.webp'
                alt='Send Image '
                width={250}
                height={250}
                placeholder='blur'
                blurDataURL='data:image/webp;base64,UklGRigAAABXRUJQVlA4WAoAAAAQAAAAKwAAASwAAwAAQUxQSDIAAAARL0Dkkkj0PxE8GSH3A//2Q=='
              />
            </div>
          </p>
        </div>
      ) : (
        <form
          className='grid max-w-screen-md gap-4 mx-auto sm:grid-cols-2'
          onSubmit={sentMessage}
        >
          <div>
            <input
              name='name'
              id='name'
              type='text'
              required
              placeholder={t.CONTACT.FORM_USERNAME}
              className='block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:bg-white dark:focus:bg-gray-600'
            />
          </div>
          <div>
            <input
              name='email'
              id='email'
              type='email'
              required
              placeholder={t.CONTACT.FORM_EMAIL}
              className='block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:bg-white dark:focus:bg-gray-600'
            />
          </div>
          <div className='sm:col-span-2'>
            <textarea
              name='message'
              id='message'
              required
              placeholder={t.CONTACT.FORM_CONTENT}
              className='block w-full h-64 px-4 py-3 leading-tight text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:bg-white dark:focus:bg-gray-600'
            ></textarea>
          </div>
          <div className='flex items-center justify-between sm:col-span-2'>
            {submitting ? (
              <button
                disabled
                className='inline-block px-8 py-3 text-center transition duration-100 bg-gray-300 rounded-lg outline-none cursor-not-allowed dark:bg-gray-600'
              >
                <svg
                  className='w-5 h-5 text-gray-600 animate-spin dark:text-day'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='white'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                type='submit'
                className='inline-block px-8 py-3 text-center transition duration-100 bg-gray-100 rounded-lg outline-none dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              >
                <p className='h-5 text-gray-400'>{t.CONTACT.SEND_BUTTON}</p>
              </button>
            )}
          </div>
        </form>
      )}
    </>
  )
}

export default ContactForm
