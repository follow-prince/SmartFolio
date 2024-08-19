'use client'
import React from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger
} from '@/components/HomePage/ui/animated-modal'

export function AnimatedModalDemo() {
  return (
    <div className=''>
      <Modal>
        <ModalTrigger className='flex justify-center text-xs text-white bg-black dark:bg-white dark:text-black group/modal-btn'>
          <span className='text-center transition duration-500 group-hover/modal-btn:translate-x-40'>
            Resume / CV
          </span>
          <div className='absolute inset-0 z-20 flex items-center justify-center text-white transition duration-500 -translate-x-40 group-hover/modal-btn:translate-x-0'>
          👨🏻‍💻📃➡️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            {/* pdf view */}
            <iframe
              className='w-full h-screen'
              src='https://princey.tech/resume.pdf'
              title='resume'
            ></iframe>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  )
}
