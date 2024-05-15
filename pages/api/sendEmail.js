import BLOG from '@/blog.config';
import nodemailer from 'nodemailer';


const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Create a Nodemailer transporter with SMTP details
      const transporter = nodemailer.createTransport({
        host: BLOG.smtp_host,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: BLOG.smtp_user,
          pass: BLOG.smtp_passwd,
        },
      });

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: `"From Contact Form" <1@princey.tech>`, // sender address
        to: 'contact@elavarasan.me', // list of receivers
        subject: 'New Message from Contact Form', // Subject line
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        `, // HTML body
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
