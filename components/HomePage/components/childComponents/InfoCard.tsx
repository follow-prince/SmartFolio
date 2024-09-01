import React, { FC, useState, useEffect } from 'react';
import { FlipWordsDemo } from '@/components/HomePage/components/childComponents/widgets/FlipWordsDemo';
import { SkillsStack } from './widgets/SkillsStack';
import { HeroImage } from './widgets/HeroImage';
import { Spinner } from '@nextui-org/react';

const InfoCard: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <div className='flex justify-center w-full h-full '> <Spinner  label="Loading..." color="danger" /></div>;
  }

  return (
    <div className='flex w-full h-full border rounded-xl border-rose-500 dark:border-white'>
      <div style={{borderRadius:'1.75rem}'}} className='w-full h-full  max-[900px]:flex-col hidden md:flex'>
        <div className='min-[900px]:p-6'>
          <HeroImage />
        </div>
        <div className='flex flex-col   justify-start max-[900px]:p-0'>
          <h1 className='text-[25px] font-extrabold text-transparent p-2 max-[900px]:text-[24px] bg-gradient-to-bl from-rose-500 to-[#f31260] bg-clip-text shadow-[#ff0059]'>
            ELAVARASAN
          </h1>
          <div>
            <FlipWordsDemo />
          </div>
          <div className='p-2 max-[900px]:hidden'>
            <SkillsStack />
          </div>
        </div>
      </div>
    </div>
  );
};

InfoCard.displayName = 'InfoCard';

export default React.memo(InfoCard);
