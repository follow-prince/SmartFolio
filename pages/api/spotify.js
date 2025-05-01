import { getPreferences } from '@/lib/notionDB';

export default async function handler(req, res) {
  try {
    const preferences = await getPreferences();
    const spotifyPref = preferences.find((item) => item.Setting === 'Spotify');
    if (!spotifyPref) {
      return res.status(404).json({ error: 'Spotify URL not found' });
    }
    res.status(200).json({ url: spotifyPref.Value });
  } catch (error) {
    console.error('Error fetching Spotify URL:', error);
    res.status(500).json({ error: 'Failed to fetch Spotify URL' });
  }
}
