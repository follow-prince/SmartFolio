import { useEffect } from 'react'
import useGitHubData from '@/lib/stores/useGitHubStore'
import RepoCard from '@/components/Common/RepoCard'
import { Spin } from 'antd'

export const MostActiveProjects = () => {
  const { cache, loading, error, fetchGitHubData } = useGitHubData()

  useEffect(() => {
    fetchGitHubData()
  }, [])

  // ✅ Always fallback to an empty array to prevent undefined access
  const popularRepositories = Array.isArray(cache?.popularRepositories)
    ? cache.popularRepositories
    : []


  return (
    <div className='flex flex-col justify-center h-full w-full relative mx-auto border-2 border-[#6C6C6C] p-1 bg-[#222222] rounded-[10px] shadow-2xl'>
      <div className='flex flex-col justify-center items-center h-full w-full bg-day dark:bg-night rounded-lg'>
        <div className='flex w-full justify-around pt-2'>
          <div className='dark:text-gray-300 text-gray-600 font-extrabold text-sm'>
            Most Active Projects
          </div>
          <div>
            <p className='text-sm text-gray-500 font-extrabold'>
              {loading
                ? 'Loading...'
                : error
                ? 'Error fetching data'
                : popularRepositories.length > 0
                ? `Top ${popularRepositories.length} projects`
                : 'No data available'}
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2 overflow-auto scrollbar-thin selection:bg-gray-500 scrollbar-thumb-gray-400/40 scrollbar-track-gray-200/30 dark:scrollbar-track-transparent dark:scrollbar-thumb-gray-500/40 px-2'>
          {popularRepositories.length > 0 ? (
            popularRepositories.map((repo) => (
              <RepoCard key={repo.id} {...repo} />
            ))
          ) : (
              <div className='text-center text-gray-400 font-semibold'>
                <Spin />
              </div>
            
          )}
        </div>
      </div>
    </div>
  )
}
