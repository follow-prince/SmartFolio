import {
  Button,
  Form,
  Input,
  Modal,
  ConfigProvider,
  theme,
  message,
  Divider
} from 'antd'
import { SendOutlined , UserOutlined} from '@ant-design/icons'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import Social from '@/components/Common/Social'
const lightTheme = {
  components: {
    Modal: {
      contentBg: '#f3f4f6',
      headerBg: 'transparent'
    }
  },
  
}

const darkTheme = {
  components: {
    Modal: {
      headerBg: 'transparent',
      contentBg: 'rgba(33, 41, 54, 0.50)'
    }
  },
  token: {
    colorBgContainer: 'rgba(33, 41, 54, 0.75)'
  },
  algorithm: theme.darkAlgorithm
}

const ContactButton = () => {
  const { theme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const antdTheme = theme === 'dark' ? darkTheme : lightTheme

  const onFinish = async (values) => {
    setLoading(true)
    try {
      const { name, email, message: msg } = values

      if (!name || !email || !msg) {
        messageApi.error('All fields are required.', 2.5)
        setLoading(false)
        return
      }

      await messageApi
        .open({
          type: 'loading',
          content: 'Sending message...',
          duration: 2.5
        })
        .then(async () => {
          try {
            const res = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            })

            if (!res.ok) {
              const errorData = await res.json().catch(() => null)
              throw new Error(errorData?.message || 'Failed to send message')
            }

            return message.success('Message sent successfully!', 2.5)
          } catch (fetchError) {
            console.error('Fetch Error:', fetchError)
            throw new Error('Failed to connect to server.')
          }
        })
        .then(() => {
          setIsModalOpen(false)
        })
    } catch (error) {
      console.error('Error sending message:', error)
      messageApi.error(error.message || 'Something went wrong.', 2.5)
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed = (errorInfo) => {
    messageApi.error('Please check the form and try again.', 2.5)
  }

  const showModal = () => setIsModalOpen(true)
  const handleOk = () => setIsModalOpen(false)
  const handleCancel = () => setIsModalOpen(false)

  return (
    <ConfigProvider theme={antdTheme}>
      {contextHolder}
      <Button
      size='small'
      icon={<UserOutlined />}
      type='default'
        style={{
            fontWeight: '900',
          boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.6)'
        }}
        onClick={showModal}
      >
        Contact
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        okText='Submit'
        cancelText='Cancel'
        onCancel={handleCancel}
        footer={null}
        style={{
          filter: 'drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.6))',
          backdropFilter: 'blur(5px)',
          maxWidth: '300px',
          maxHeight: '200px'
        }}
      >
        <div className='flex justify-center font-extrabold text-gray-900 dark:text-gray-100'>
          Contact Us
        </div>

        <Form
          name='contact'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='on'
          layout='vertical'
          style={{
            maxWidth: '300px',
            marginBottom: '0px',
            fontSize: '12px',
            fontFamily: 'sans-serif',
            fontWeight: '900'
          }}
        >
          <Form.Item
            label='Name'
            name='name'
            style={{ marginBottom: '0px' }}
            rules={[{ required: true, message: 'Please enter your name!' }]}
            hasFeedback
          >
            <Input size='small' />
          </Form.Item>

          <Form.Item
            label='Email'
            name='email'
            style={{ marginBottom: '0px' }}
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
            hasFeedback
          >
            <Input size='small' />
          </Form.Item>

          <Form.Item
            label='Message'
            name='message'
            style={{ marginBottom: '0px' }}
            rules={[{ required: true, message: 'Please enter your message!' }]}
            hasFeedback
          >
            <Input.TextArea size='small' rows={4} />
          </Form.Item>

          <Form.Item style={{ marginTop: '5px', marginBottom: '0px' }}>
            <Button
              loading={loading}
              htmlType='submit'
              style={{
                width: '100%',
                boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.6)',
                fontWeight: '900'
              }}
              icon={<SendOutlined />}
              iconPosition='end'
              className='bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            >
              Send
            </Button>
          </Form.Item>
        </Form>
        <Divider
          style={{
            margin: '0px',
            marginTop: '5px',
            borderColor: 'gray'
          }}
        >
          {' '}
          <span className='font-bold text-sm   text-gray-900 dark:text-gray-100'>
            Social Media
          </span>
        </Divider>
        <div className='flex justify-center mt-2'>
          <Social />
        </div>
      </Modal>
    </ConfigProvider>
  )
}

export default ContactButton
