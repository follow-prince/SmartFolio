import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

function Contact() {
  const [showResult, setShowResult] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const { locale } = useRouter()
  const t = lang[locale]

  const sentMessage = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError(null)
    setShowResult(false)

    const form = event.target
    
    // Prepare form data
    const formData = {
      name: form.name.value.trim(),
      email: form.mail.value.trim(),
      message: form.message.value.trim()
    }

    try {
      // Generate JWT token using HS256
      const header = {
        alg: 'HS256',
        typ: 'JWT'
      }

      const payload = {
        data: formData,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 300 // 5 minutes expiry
      }

      // Base64URL encode
      const base64UrlEncode = (obj) => {
        return btoa(JSON.stringify(obj))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '')
      }

      const encodedHeader = base64UrlEncode(header)
      const encodedPayload = base64UrlEncode(payload)

      // Create signature using HMAC SHA256
      const secret = 'Princey&0527'
      const message = `${encodedHeader}.${encodedPayload}`
      
      // Use Web Crypto API for HMAC
      const encoder = new TextEncoder()
      const keyData = encoder.encode(secret)
      const messageData = encoder.encode(message)
      
      const cryptoKey = await crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      )
      
      const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData)
      const base64Signature = btoa(String.fromCharCode(...new Uint8Array(signature)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '')

      const token = `${encodedHeader}.${encodedPayload}.${base64Signature}`

      // Send to n8n webhook
      const res = await fetch('https://n8n.princey.me/webhook/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        let errorMessage = 'Failed to send message'
        if (res.status === 401 || res.status === 403) {
          errorMessage = 'Authentication failed. Please try again.'
        } else if (res.status === 429) {
          errorMessage = 'Too many requests. Please wait a moment and try again.'
        } else if (res.status >= 500) {
          errorMessage = 'Server error. Please try again later.'
        } else if (res.status === 400) {
          errorMessage = 'Invalid request. Please check your information.'
        }
        throw new Error(errorMessage)
      }

      // Success - show result
      setSubmitting(false)
      setShowResult(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitting(false)
      
      // Determine error type and set appropriate message
      let errorMessage = 'An unexpected error occurred. Please try again.'
      
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        errorMessage = 'Network error. Please check your internet connection and try again.'
      } else if (error.message.includes('Authentication')) {
        errorMessage = 'Authentication failed. Please refresh the page and try again.'
      } else if (error.message) {
        errorMessage = error.message
      }
      
      setError({
        message: errorMessage,
        timestamp: new Date().toLocaleTimeString()
      })
    }
  }

  return (
    <>
      {error && (
        <div className='max-w-screen-md mx-auto mb-6'>
          <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4'>
            <div className='flex items-start'>
              <svg className='w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
              </svg>
              <div className='flex-1'>
                <h3 className='text-sm font-semibold text-red-800 dark:text-red-300 mb-1'>
                  Error Sending Message
                </h3>
                <p className='text-sm text-red-700 dark:text-red-400'>
                  {error.message}
                </p>
                <p className='text-xs text-red-600 dark:text-red-500 mt-1'>
                  Time: {error.timestamp}
                </p>
              </div>
              <button
                onClick={() => setError(null)}
                className='ml-3 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300'
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {showResult ? (
        <div className='max-w-screen-md mx-auto'>
          <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-4'>
            <div className='flex items-start'>
              <svg className='w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
              <div className='flex-1'>
                <h3 className='text-lg font-bold text-green-800 dark:text-green-300 mb-2'>
                  {t.CONTACT.SUCCESS_MESSAGE || 'Message Sent Successfully!'}
                </h3>
                <p className='text-sm text-green-700 dark:text-green-400'>
                  Thank you for reaching out. We&apos;ve received your message and will get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setShowResult(false)
              setError(null)
            }}
            className='bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg px-8 py-3'
          >
            <p className='text-gray-400'>Send Another Message</p>
          </button>
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
