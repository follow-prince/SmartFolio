import React, { FC, useState, useEffect } from 'react';
import { FlipWordsDemo } from '@/components/HomePage/components/childComponents/widgets/FlipWordsDemo';
import { SkillsStack } from './widgets/SkillsStack';
import { HeroImage } from './widgets/HeroImage';
import { Button } from '@/components/HomePage/ui/moving-border';
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
    <div className='flex w-full h-full rounded-xl'>
      <Button borderRadius='1.75rem' className='w-full h-full'>
        <div className='p-2'>
          <HeroImage />
        </div>
        <div className='flex flex-col justify-start max-[900px]:p-0'>
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
      </Button>
    </div>
  );
};

InfoCard.displayName = 'InfoCard';

export default React.memo(InfoCard);
