import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/HomePage/ui/Carousel'
import { Card, Divider, Link, Spinner } from '@nextui-org/react'
import {
  IconBrandJavascript,
  IconBrandPython,
  IconBrandTypescript,
  IconCalendarTime,
  IconCode,
  IconCoffee,
  IconDeviceSdCard,
  IconFolderOpen,
  IconWorld
} from '@tabler/icons-react'
import Autoplay from 'embla-carousel-autoplay'
import React, { useEffect, useState } from 'react'

const GithubActivity = () => {
  const [repos, setRepos] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Function to format file size
  function formatSize(sizeInBytes: number): string {
    if (sizeInBytes < 1024) {
      return `${sizeInBytes} Bytes`
    } else if (sizeInBytes < 1024 * 1024) {
      return `${(sizeInBytes / 1024).toFixed(2)} KB`
    } else if (sizeInBytes < 1024 * 1024 * 1024) {
      return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`
    } else {
      return `${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`
    }
  }

  // Function to return language icons based on the language string
  const languageIcon = (language: string) => {
    switch (language) {
      case 'TypeScript':
        return <IconBrandTypescript className='w-3' stroke={1.5} />
      case 'JavaScript':
        return <IconBrandJavascript className='w-3' stroke={1.5} />
      case 'Python':
        return <IconBrandPython className='w-3' stroke={1.5} />
      case 'Java':
        return <IconCoffee className='w-3' stroke={1.5} />
      default:
        return <IconCode className='w-3' stroke={1.5} />
    }
  }

  // Fetch GitHub repos data
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/follow-prince/repos'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    const timeoutId = setTimeout(() => {
      fetchRepos()
    }, 3000) // 3 seconds delay

    return () => clearTimeout(timeoutId) // Cleanup the timeout if the component unmounts
  }, [])

  if (loading) {
    return (
      <div className='flex justify-center w-full h-full '>
        <Spinner label='Loading...' color='danger' />
      </div>
    )
  }

  if (error) {
    return <p className='text-red-500'>{error}</p>
  }

  return (
    <Carousel
      opts={{
        align: 'end',
        slidesToScroll: 1,
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 1400
        })
      ]}
      orientation='vertical'
      className='w-full p-2 '
    >
      <div className='text-[12px] text-rose-500 font-extrabold text-center'>
        GitHub Repo
      </div>
      <div className='w-full h-full overflow-hidden '>
        <CarouselContent className='h-[470px]'>
          {repos.map((repo) => (
            <CarouselItem key={repo.id} className='md:basis-1/6'>
              <Card className='w-full h-[100px] p-1    border rounded-lg border-rose-500 dark:border-slate-100'>
                <Link
                  disableAnimation={true}
                  isExternal
                  showAnchorIcon
                  href={repo.html_url}
                  className='flex items-center gap-1 font-extrabold text-md text-rose-500 '
                >
                  <IconFolderOpen className='w-5' stroke={1.5} />{' '}
                  <span>{repo.name}</span>
                </Link>
                <div className='flex flex-wrap'>
                  <div className='flex items-center justify-start gap-1 px-1 dark:text-slate-50'>
                    <IconDeviceSdCard className='w-3' stroke={1.4} />
                    <span className='text-[10px]'>{formatSize(repo.size)}</span>
                    <Divider
                      className='h-3 dark:bg-slate-100'
                      orientation='vertical'
                    />
                    {languageIcon(repo.language)}
                    <span className='text-[10px]'>{repo.language}</span>
                  </div>

                  <div className='flex flex-wrap items-center gap-1 px-1 dark:text-slate-50'>
                    <IconCalendarTime className='w-3' stroke={2} />
                    <span className='text-[10px]'>
                      {new Date(repo.created_at).toLocaleDateString()}
                    </span>
                    <Divider
                      className='h-3 dark:bg-slate-100'
                      orientation='vertical'
                    />
                    <IconWorld className='w-3' stroke={2} />
                    <span className='text-[10px]'>{repo.visibility}</span>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  )
}

export { GithubActivity }
