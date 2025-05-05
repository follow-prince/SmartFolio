import { createContactMessage } from '@/lib/notionDatabase/contact'

const validPurposes = ['Hiring', 'Project Discussion', 'Freelancing', 'Others'] // match frontend

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'Error', message: 'Method Not Allowed' })
  }

  const { name, email, message, purpose } = req.body

  if (!name || !email || !message || !purpose) {
    return res.status(400).json({
      status: 'Error',
      message: 'Missing required fields: name, email, message, or purpose'
    })
  }

  if (!validPurposes.includes(purpose)) {
    return res.status(400).json({
      status: 'Error',
      message: `Invalid purpose. Allowed values: ${validPurposes.join(', ')}`
    })
  }

  try {
    await createContactMessage({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      purpose
    })

    return res.status(200).json({ status: 'Success', message: 'Message sent to Notion' })
  } catch (error) {
    console.error('Notion integration failed:', error.message, error)
    return res.status(500).json({
      status: 'Error',
      message: 'Failed to save message. Try again later.'
    })
  }
}
