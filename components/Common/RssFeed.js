import React, { useState } from 'react'
import { Input, Button, Form, message } from 'antd'
import { MailOutlined, SendOutlined } from '@ant-design/icons'

const RssFeed = () => {
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (values) => {
    const { email } = values
    setLoading(true)
  
    try {
      const res = await fetch('/api/rss-feed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
  
      const result = await res.json()
  
      if (!res.ok) {
        throw new Error(result.error || 'Failed to subscribe to RSS feed.')
      }
  
      message.success(result.message || 'Subscribed successfully!')
    } catch (error) {
      console.error('RSS Feed Error:', error)
      message.error(error.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <Form
      onFinish={handleSubmit}
      style={{ fontSize: '12px', fontFamily: 'sans-serif', fontWeight: '900' , margin: '0px', marginBottom: '0px'}}
    >
      <Form.Item
        name='email'
        rules={[
          { required: true, message: 'Please enter your email!' },
          { type: 'email', message: 'Please enter a valid email!' }
        ]}
        style={{ marginBottom: '0px', marginTop: '0px' }}
        hasFeedback
      >
        <Input
          addonBefore={<MailOutlined  />}
          addonAfter={
            <Button
            size='small'
              type='text'
              icon={<SendOutlined />}
              loading={loading}
              htmlType='submit'
            />
          }
          placeholder='Enter your email'
        />
      </Form.Item>
    </Form>
  )
}

export default RssFeed
