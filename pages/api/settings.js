import { getPreferences } from '@/lib/notionDB';

export default async function handler(req, res) {
  try {
    const preferences = await getPreferences();
    res.status(200).json(preferences);
  } catch (error) {
    console.error('Error fetching preferences:', {
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({ error: 'Failed to fetch preferences', details: error.message });
  }
}