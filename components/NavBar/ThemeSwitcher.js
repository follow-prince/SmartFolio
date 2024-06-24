import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])
  return (
    <>
      <button
        // title={`Toggle theme - current ${theme}`}
        aria-label='ThemeSwitcher'
        onClick={() =>
          setTheme(
            theme === 'light' ? 'dark' : theme === 'system' ? 'dark' : 'light'
          )
        }
        className='p-2 ml-1 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-100'
      >
        {hasMounted && theme === 'dark' ? (
          <MoonIcon className='w-5 h-5' />
        ) : (
          <SunIcon className='w-5 h-5' />
        )}
      </button>
    </>
  )
}

export default ThemeSwitcher
