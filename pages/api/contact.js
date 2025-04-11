// pages/api/contact.ts
import { supabase } from '@/lib/supabaseClient'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const { error } = await supabase.from('contacts').insert([{ name, email, message }])

  if (error) return res.status(500).json({ error: error.message })

  return res.status(200).json({ success: true })
}
