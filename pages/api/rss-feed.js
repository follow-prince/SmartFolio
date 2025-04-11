import { supabase } from '@/lib/supabaseClient'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { email } = req.body

  if (!email || typeof email !== 'string' || !email.trim()) {
    return res.status(400).json({ error: 'Valid email is required' })
  }

  const normalizedEmail = email.trim().toLowerCase()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(normalizedEmail)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  try {
    const { data: existingEmail, error: fetchError } = await supabase
      .from('rssfeed')
      .select('email')
      .eq('email', normalizedEmail)
      .maybeSingle()

    if (fetchError) {
      throw new Error(`Database error: ${fetchError.message}`)
    }

    if (existingEmail) {
      return res.status(409).json({ error: 'Email already subscribed' })
    }

    const { error: insertError } = await supabase
      .from('rssfeed')
      .insert([{ email: normalizedEmail }])

    if (insertError) {
      throw new Error(`Failed to subscribe: ${insertError.message}`)
    }

    return res.status(200).json({ success: true, message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Error in subscription handler:', error)
    return res.status(500).json({ error: error.message || 'Internal server error' })
  }
}
