import React from 'react'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { WidthProvider, Responsive } from 'react-grid-layout'
import { ProfilePhoto } from './ProfilePhoto'
import { AboutInfo } from './AboutInfo'
import Calendar from './Contributions/Calendar'
import { Languages } from './Languages/Languages'
import { MostActiveProjects } from './MostActiveProjects/MostActiveProjects'
import { ActivityGraph } from './ActivityGraph/ActivityGraph'
import { Spotify } from './Spotify/Spotify'
import {LeetCodeData} from './LeetCode/LeetCodeData'





const ResponsiveReactGridLayout = WidthProvider(Responsive)

const HomeLayout = ({ blockMap }) => {

  const layouts = {
    lg: [
      {
        i: '1',
        x: 6,
        y: 0,
        w: 4,
        h: 17,
        minH: 17,
        maxW: 2,
        static: true,
        CustomElement: <ProfilePhoto />
      },
      {
        i: '2',
        x: 0,
        y: 0,
        w: 6,
        h: 8,
        minH: 8,
        maxW: 5,
        static: true,
        CustomElement: <AboutInfo blockMap={blockMap} />
      },
      {
        i: '3',
        x: 0,
        y: 10,
        w: 6,
        h: 5,
        minH: 8,
        maxW: 4,
        static: true,
        CustomElement: <Calendar />
      },
      {
        i: '4',
        x: 12,
        y: 3,
        w: 6,
        h: 5,
        minH: 2,
        maxW: 4,
        static: true,
        CustomElement: <Languages />
      },
      {
        i: '5',
        x: 6,
        y: 17,
        w: 4,
        h: 6,
        minH: 9,
        maxW: 4,
        static: true,
        CustomElement: <MostActiveProjects />
      },
      {
        i: '6',
        x: 0,
        y: 8,
        w: 6,
        h: 10,
        minH: 3,
        maxW: 4,
        static: true,
        CustomElement: <ActivityGraph />
      },
      {
        i: '7',
        x: 10,
        y: 12,
        w: 6,
        h: 11,
        minH: 2,
        maxW: 4,
        static: true,
        CustomElement: <Spotify />
      },
      {
        i: '8',
        x: 12,
        y: 0,
        w: 6,
        h: 7,
        minH: 2,
        maxW: 4,
        static: true,
        CustomElement: <LeetCodeData />
      }
    ],
    md: [
      {
        i: '1',
        x: 6,
        y: 0,
        w: 4,
        h: 17,
        minH: 17,
        maxW: 2,
        static: true,
        CustomElement: <ProfilePhoto />
      },
      {
        i: '2',
        x: 0,
        y: 0,
        w: 6,
        h: 8,
        minH: 8,
        maxW: 5,
        static: true,
        CustomElement: <AboutInfo blockMap={blockMap} />
      },
      {
        i: '3',
        x: 0,
        y: 31,
        w: 10,
        h: 5,
        minH: 8,
        maxW: 4,
        static: true,
        CustomElement: <Calendar />
      },
      {
        i: '4',
        x: 0,
        y: 8,
        w: 6,
        h: 5,
        minH: 2,
        maxW: 4,
        static: true,
        CustomElement: <Languages />
      },
      {
        i: '5',
        x: 6,
        y: 17,
        w: 4,
        h: 6,
        minH: 9,
        maxW: 4,
        static: true,
        CustomElement: <MostActiveProjects />
      },
      {
        i: '6',
        x: 6,
        y: 23,
        w: 4,
        h: 8,
        minH: 3,
        maxW: 4,
        static: true,
        CustomElement: <ActivityGraph />
      },
      {
        i: '7',
        x: 0,
        y: 14,
        w: 6,
        h: 11,
        minH: 2,
        maxW: 4,
        static: true,
        CustomElement: <Spotify />
      },
      {
        i: '8',
        x: 0,
        y: 13,
        w: 6,
        h: 7,
        minH: 2,
        maxW: 4,
        static: true,
        CustomElement: <LeetCodeData />
      }
    ],
    sm: [
      {
        i: '1',
        x: 4,
        y: 0,
        w: 4,
        h: 13,
        minH: 17,
        maxW: 2,
        static: true,
        CustomElement: <ProfilePhoto />
      },
      {
        i: '2',
        x: 0,
        y: 0,
        w: 4,
        h: 13,
        minH: 8,
        maxW: 5,
        static: true,
        CustomElement: <AboutInfo blockMap={blockMap} />
      },
    
      {
        i: '4',
        x: 0,
        y: 13,
        w: 8,
        h: 5,
        minH: 2,
        maxW: 8,
        static: true,
        CustomElement: <Languages />
      },
      {
        i: '3',
        x: 0,
        y: 25,
        w: 8,
        h: 5,
        minH: 8,
        maxW: 4,
        static: true,
        CustomElement: <Calendar />
      },
      {
        i: '5',
        x: 0,
        y: 33,
        w: 8,
        h: 6,
        minH: 9,
        maxW: 4,
        static: true,
        CustomElement: <MostActiveProjects />
      },
      {
        i: '6',
        x: 0,
        y: 30,
        w: 8,
        h: 8,
        minH: 3,
        maxW: 4,
        static: true,
        CustomElement: <ActivityGraph />
      },
      {
          i:'7',
          x :0 ,
          y :44 ,
          w :8,
          h :11 ,
          minH :2 ,
          maxW :4 ,
          static :true ,
          CustomElement:<Spotify/>
      },
      {
          i:'8',
          x :0 ,
          y : 13,
          w :8 ,
          h :7 ,
          minH :2 ,
          maxW :8 ,
          static :true ,
          CustomElement:<LeetCodeData/>
      }
    ],
    xs:[
      {
        i: '1',
        x: 0.5,
        y: 0,
        w: 3,
        h: 13,
        minH: 17,
        maxW: 2,
        static: true,
        CustomElement: <ProfilePhoto />
      },
      {
        i: '2',
        x: 0,
        y: 13,
        w: 4,
        h: 9,
        minH: 8,
        maxW: 5,
        static: true,
        CustomElement: <AboutInfo blockMap={blockMap} />
      },
    
      {
        i: '4',
        x: 0,
        y: 22,
        w: 4,
        h: 5,
        minH: 2,
        maxW: 8,
        static: true,
        CustomElement: <Languages />
      },
      {
        i: '3',
        x: 0,
        y: 33,
        w: 4,
        h: 5,
        minH: 8,
        maxW: 4,
        static: true,
        CustomElement: <Calendar />
      },
      {
          i:'5',
          x :0 ,
          y : 39 ,
          w :4 ,
          h :6 ,
          minH :9 ,
          maxW :4 ,
          static :true ,
          CustomElement:<MostActiveProjects/>
      },
      {
          i:'6',
          x :0 ,
          y :45 ,
          w :4 ,
          h :8 ,
          minH :3 ,
          maxW :4 ,
          static :true ,
          CustomElement:<ActivityGraph/>
      },
      {
          i:'7',
          x :0 ,
          y :53 ,
          w :4,
          h :11 ,
          minH :2 ,
          maxW :4 ,
          static :true ,
          CustomElement:<Spotify/>
      },
      {
        i:'8',
        x:0,
        y:27,
        w:4,
        h:7,
        minH:2,
        maxW:4,
        static:true,
        CustomElement:<LeetCodeData/>
      }

    ]

  }
  

  return (
    <ResponsiveReactGridLayout
      className='layout'
      layouts={layouts}
      draggableHandle='.draggable-handle'
      breakpoints={{ lg: 1200, md: 768, sm: 500, xs: 0,  }}
      cols={{ lg: 16, md: 10, sm: 8, xs: 4 }}
      rowHeight={30}
      draggableCancel='.draggable-cancel'
      resizeHandles={[]}
      compactType='vertical'
      preventCollision={false}
      autoSize
    >
      {layouts.lg.map((item) => (
        <div key={item.i} className='draggable-handle rounded-lg'>
          {item?.CustomElement}
        </div>
      ))}
    </ResponsiveReactGridLayout>
  )
}




export default HomeLayout
