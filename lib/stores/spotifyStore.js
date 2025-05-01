// stores/spotifyStore.js
import { create } from 'zustand';

export const useSpotifyStore = create((set, get) => ({
  url: '',
  loading: false,
  error: null,
  hasFetched: false, // caching flag

  fetchUrl: async (force = false) => {
    const { hasFetched } = get();

    // Cache check
    if (hasFetched && !force) return;

    set({ loading: true, error: null });

    try {
      const res = await fetch('/api/spotify');
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch');
      }

      set({ url: data.url, loading: false, hasFetched: true });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  clearCache: () => set({ hasFetched: false, url: '' }),
}));
