import Image from 'next/image'

// export default function WechatPay() {
const WechatPay = () => {
  return (
    <div className='fixed inline-flex shadow-lg bg-gray-100 dark:bg-gray-400 p-5 rounded-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
      <Image
        src='/upi-pay.png'
        alt='UPI PAY '
        width={300}
        height={200}
      />
    </div>
  )
}

export default WechatPay
