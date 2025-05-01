import React from 'react'
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import crownAnimation from '@/public/crown.json';



const Logo = (props) => (
    <div className=' home-page-title relative pt-5'>
     <div className='w-8 h-8 absolute -top-1 -left-2 -rotate-6'>
     <Lottie  animationData={crownAnimation}   />
      </div>
    <div>Prince</div>  
    </div>
)

export default Logo
