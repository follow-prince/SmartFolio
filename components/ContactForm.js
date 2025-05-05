import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

function Contact() {
  const [showResult, setShowResult] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { locale } = useRouter()
  const t = lang[locale]

  const sentMessage = async (event) => {
    event.preventDefault()
    setSubmitting(true)

    const form = event.target
    const res = await fetch('/api/sendtotg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.value.trim(),
        email: form.mail.value.trim(), // ✅ Consistent with backend
        message: form.message.value.trim(),
        purpose: form.purpose.value
      })
    })

    const result = await res.json()
    setSubmitting(false)

    if (result.status === 'Success') {
      setShowResult(true)
    } else {
      alert(result.message || t.CONTACT.FAILED_MESSAGE)
    }
  }

  return (
    <>
      {showResult ? (
        <div>
          <p className='max-w-screen-md font-bold md:text-lg text-center mx-auto'>
            {t.CONTACT.SUCCESS_MESSAGE}
          </p>
        </div>
      ) : (
        <form
          className='max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto'
          onSubmit={sentMessage}
        >
          <div>
            <input
              name='name'
              type='text'
              required
              placeholder={t.CONTACT.FORM_USERNAME}
              className='block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none'
            />
          </div>
          <div>
            <input
              name='mail'
              type='email'
              required
              placeholder={t.CONTACT.FORM_EMAIL}
              className='block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none'
            />
          </div>
          <div className='sm:col-span-2'>
            <select
              name='purpose'
              required
              className='block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 focus:outline-none'
            >
              <option value='Hiring'>{t.CONTACT.FORM_PURPOSE_OPTIONS.HIRING}</option>
              <option value='Project Discussion'>{t.CONTACT.FORM_PURPOSE_OPTIONS.DISCUSSION}</option>
              <option value='Freelancing'>{t.CONTACT.FORM_PURPOSE_OPTIONS.FREELANCE}</option>
              <option value='Others'>{t.CONTACT.FORM_PURPOSE_OPTIONS.OTHERS}</option>
            </select>
          </div>
          <div className='sm:col-span-2'>
            <textarea
              name='message'
              required
              placeholder={t.CONTACT.FORM_CONTENT}
              className='h-64 block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none'
            ></textarea>
          </div>
          <div className='sm:col-span-2 flex justify-between items-center'>
            {submitting ? (
              <button
                disabled
                className='cursor-not-allowed bg-gray-300 dark:bg-gray-600 text-center rounded-lg px-8 py-3'
              >
                <svg
                  className='animate-spin h-5 w-5 text-gray-600 dark:text-day'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='white' strokeWidth='4'></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                type='submit'
                className='bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg px-8 py-3'
              >
                <p className='text-gray-400'>{t.CONTACT.SEND_BUTTON}</p>
              </button>
            )}
            <p className='mb-2 text-gray-400 text-xs'>
              {t.CONTACT.FORM_EMAIL_REQUIRED}
            </p>
          </div>
        </form>
      )}
    </>
  )
}

export default Contact
