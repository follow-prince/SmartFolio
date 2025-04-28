import React, { useState } from 'react'
import { Button, Popconfirm, ConfigProvider, theme as themeAntd, message } from 'antd'
import { useTheme } from 'next-themes'
import ContactButton from './contactButton'
import BLOG from '@/blog.config'
import RssFeed from '@/components/Common/RssFeed'
import { CopyOutlined } from '@ant-design/icons'

const SubscribeButton = () => {
  const { theme } = useTheme()
  const [showCopied, setShowCopied] = useState(false)
  const [open, setOpen] = useState(false)

  const clickCopy = async () => {
    try {
      await navigator.clipboard.writeText(BLOG.link + '/feed')
      message.success('Copied RSS feed to clipboard!')
    } catch (err) {
      message.error('Failed to copy RSS feed link.')
    } finally {
      setShowCopied(true)
      setTimeout(() => {
        setShowCopied(false)
      }, 1000)
      setOpen(false)
    }
  }

  const showPopconfirm = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextBase: theme === 'dark' ? '#ffffff' : '#000000',
          colorBgContainer: 'transparent',
        },
        algorithm: themeAntd.darkAlgorithm,
      }}
    >
      <Popconfirm
        title='Newsletter Subscription'
        open={open}
        description={<RssFeed />}
        onConfirm={clickCopy}
        onCancel={handleCancel}
        okText={<div className='flex font-extrabold gap-2'>RSS Link <CopyOutlined /></div>}
        cancelText='Cancel'
        color={theme === 'dark' ? '#0d1b2a' : '#ffffff'}
      >
        <Button
          type='primary'
          size='small'
          style={{
            fontWeight: '900',
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.6)',
          }}
          onClick={showPopconfirm}
        >
          Subscribe
        </Button>
      </Popconfirm>
    </ConfigProvider>
  )
}

const ActionButtons = () => {
  return (
    <div className='flex flex-row gap-4  sm:flex-row sm:justify-center'>
      <ContactButton />
      <SubscribeButton />
    </div>
  )
}

export default ActionButtons
