'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'

export const ContainerScroll = ({
  children
}: {
  children: React.ReactNode
}) => {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [0.8, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -20])

  return (
    <div
      className='flex relative flex-col justify-start items-center p-6 h-full'
      ref={containerRef}
    >
      <div
        className='relative py-10 w-full md:py-10'
        style={{
          perspective: '1000px'
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate
      }}
      className='mx-auto max-w-6xl text-center div'
    >
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  children
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  children: React.ReactNode
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003'
      }}
      className='max-w-6xl -mt-12 mx-auto md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-4 bg-[#222222] rounded-[30px] shadow-lg'
    >
      <div className='overflow-hidden w-full h-full bg-gray-100 rounded-2xl dark:bg-zinc-900 md:rounded-2xl'>
        {children}
      </div>
    </motion.div>
  )
}
