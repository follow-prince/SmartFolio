import BLOG from '@/blog.config'
import nodemailer from 'nodemailer'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body

      // Create a Nodemailer transporter with SMTP details
      const transporter = nodemailer.createTransport({
        host: BLOG.smtp_host,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: BLOG.smtp_user,
          pass: BLOG.smtp_passwd
        }
      })

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: `"From Contact Form" <1@princey.tech>`, // sender address
        to: 'contact@elavarasan.me', // list of receivers
        subject: 'New Message from Contact Form', // Subject line
        html: `
       <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #4CAF50;">New Message from Contact Form</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Field</th>
          <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Details</th>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">Name</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">Email</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">Message</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${message}</td>
        </tr>
      </table>
      <p style="margin-top: 20px;">Regards,</p>
      <p style="margin-top: 5px;">Contact Form System</p>
    </div>

        ` // HTML body
      })

      console.log('Message sent: %s', info.messageId)
      res.status(200).json({ success: true })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ success: false, error: 'Failed to send email' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler
