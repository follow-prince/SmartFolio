import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/HomePage/ui/resizable'
import { GithubActivity } from '@/components/HomePage/components/childComponents/GithubActivity'
import { BlogListingInCard } from '@/components/HomePage/components/childComponents/BlogListingInCard'

export function ResizableCard({ blogListShare }) {
  return (
    <ResizablePanelGroup
      direction='vertical'
      className='min-h-[500px] max-w-md rounded-lg border md:min-w-full  border-rose-500 dark:border-slate-100'
    >
      <ResizablePanel defaultSize={30}>
      <div className='flex items-center justify-center h-full bg-slate-100/10 '>
          <div className='w-full h-full'>
            <GithubActivity />
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>


        <div className='flex items-center justify-center h-full '>
          <BlogListingInCard blogListShare={blogListShare} />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
