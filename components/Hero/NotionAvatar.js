
import dynamic from 'next/dynamic';
import animationData from '@/public/rocket.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export const NotionAvatar = () => {
  return (
    <div className='overflow-hidden  w-full h-full md:h-[200px] flex justify-center items-center'>
      <Lottie animationData={animationData} height={300} width={300} />
    </div>
  )
}
