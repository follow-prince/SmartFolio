import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/outline'

const RssFeed = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!email) {
      setError('Please enter your email!')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email!')
      return
    }

    setError('')
    setLoading(true)

    try {
      // RSS feed subscription disabled - Supabase backend removed
      toast.error('RSS feed subscription is currently unavailable.')
      setEmail('')
    } catch (error) {
      console.error('RSS Feed Error:', error)
      toast.error(error.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit}
        style={{ fontSize: '12px', fontFamily: 'sans-serif', fontWeight: '900', margin: '0px', marginBottom: '0px' }}
      >
        <div style={{ marginBottom: '0px', marginTop: '0px' }}>
          <div className="flex items-center border rounded-md overflow-hidden bg-white dark:bg-gray-700">
            <div className="flex items-center justify-center px-3 bg-gray-100 dark:bg-gray-600 border-r dark:border-gray-500">
              <EnvelopeIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 outline-none bg-transparent text-gray-900 dark:text-gray-100"
              style={{ fontSize: '12px', fontFamily: 'sans-serif' }}
            />
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-1 px-3 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              style={{ fontWeight: '900', fontSize: '12px' }}
            >
              {loading ? (
                <span className="animate-spin">⏳</span>
              ) : (
                <PaperAirplaneIcon className="w-4 h-4" />
              )}
              Send
            </button>
          </div>
          {error && (
            <div className="text-red-500 text-xs mt-1" style={{ fontSize: '11px' }}>
              {error}
            </div>
          )}
        </div>
      </form>
    </>
  )
}

export default RssFeed
