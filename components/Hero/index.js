import React from 'react'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { WidthProvider, Responsive } from 'react-grid-layout'
import { ProfilePhoto } from './ProfilePhoto'
import { AboutInfo } from './AboutInfo'
import ActionButtons from './actionButtons'
import Calendar from './Contributions/Calendar'

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
        h: 7,
        minH: 8,
        maxW: 5,
        static: true,
        CustomElement: <AboutInfo blockMap={blockMap} />
      },
      {
        i: '3',
        x: 0,
        y: 7,
        w: 6,
        h: 5,
        minH: 8,
        maxW: 4,
        static: true,
        CustomElement: <Calendar />
      },
      { i: '4', x: 0, y: 6, w: 4, h: 2, minH: 8, maxW: 4 },
      { i: '5', x: 12, y: 0, w: 4, h: 8, minH: 8, maxW: 4 }
    ],
    sm: [
      { i: '1', x: 0, y: 0, w: 12, h: 8, minH: 9, maxW: 12 },
      { i: '2', x: 0, y: 8, w: 12, h: 2, minH: 2, maxW: 12 },
      { i: '3', x: 0, y: 10, w: 12, h: 2, minH: 8, maxW: 12 },
      { i: '4', x: 0, y: 12, w: 12, h: 2, minH: 8, maxW: 12 },
      { i: '5', x: 0, y: 14, w: 12, h: 8, minH: 8, maxW: 12 }
    ]
  }

  return (
    <ResponsiveReactGridLayout
      className='layout'
      layouts={layouts}
      draggableHandle='.draggable-handle'
      breakpoints={{ lg: 768, sm: 200 }}
      cols={{ lg: 16, sm: 16 }}
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
