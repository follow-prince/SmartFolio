// lib/ssr/preferences.js
import { getPreferences } from '@/lib/notion';

// Server fetch for SSR
export async function fetchPreferencesForSSR() {
  try {
    const preferences = await getPreferences();
    return preferences;
  } catch (error) {
    console.error('SSR fetch error:', error);
    return [];
  }
}
