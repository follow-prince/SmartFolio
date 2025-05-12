import { QRCode } from 'antd'

const Pay = () => {
  return (
    <div className='fixed inline-flex shadow-lg bg-gray-100 dark:bg-gray-400 p-5 rounded-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
      <div className='flex flex-col items-center'>
      <QRCode
        errorLevel='H'
        value='ethereum:0xd12f6bbb6d9e9f0f1c02eb96da3f0563c3a9dc369'
        icon='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.svg'
      />
        <div className='text-center text-gray-600 dark:text-gray-300'>
          <p className='text-lg font-extrabold'>Scan to pay</p>
          <p className='font-medium'>0xd12f6bbb6d9e9f0f1c02eb96da3f0563c3a9dc369</p>
        </div>
      
      </div>
    </div>
  )
}

export default Pay
