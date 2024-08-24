import React from 'react'
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react'
import { PhotoWidget } from './widgets/PhotoWidget'
import {SocialMediaInfo} from './widgets/SocialMediaInfo'

export function TwoTapSection() {
  return (
    <div className='flex flex-col items-center w-full h-full mt-1 overflow-hidden'>
      <Tabs
        radius='sm'
        variant='bordered'
        className='p-0 '
        aria-label='Options'
      >
        <Tab key='profile' className='h-4 text-[9px] rounded-none' title='Profile'>
          <Card>
            <SocialMediaInfo />
          </Card>
        </Tab>

        <Tab
          className='h-4 text-[9px] rounded-none '
          key='photos'
          title='Photos'
        >
          <Card className='bg-transparent'>
            <PhotoWidget />
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}
