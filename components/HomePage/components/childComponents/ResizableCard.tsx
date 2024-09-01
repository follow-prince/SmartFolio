import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/HomePage/ui/resizable'
import { GithubActivity } from '@/components/HomePage/components/childComponents/GithubActivity'
import { BlogListingInCard } from '@/components/HomePage/components/childComponents/BlogListingInCard'

export function ResizableCard({ blogListShare }) {
  return (
    <div
      className='min-h-[480px] max-w-md rounded-lg border md:min-w-full  border-rose-500 dark:border-slate-100'
    >
          <BlogListingInCard blogListShare={blogListShare} />
        </div>
    

  )
}
