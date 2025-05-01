import {create} from 'zustand';

const useLeetCodeStore = create((set) => ({
  userSessionProgress: null,
  userPublicProfile: null,
  userProfileCalendar: null,
  isLoading: false,
  error: null,
  cache: {}, // In-memory cache for usernames

  // Fetch data for the given LeetCode username
  fetchLeetCodeData: async (username = 'iam-prince') => {
    set({ isLoading: true, error: null });

    // Check if data is already cached for this username
    if (username in useLeetCodeStore.getState().cache) {
      const cachedData = useLeetCodeStore.getState().cache[username];
      set({
        userSessionProgress: cachedData.userSessionProgress,
        userPublicProfile: cachedData.userPublicProfile,
        userProfileCalendar: cachedData.userProfileCalendar,
        isLoading: false,
      });
      return;
    }

    try {
      const response = await fetch(`/api/leetcode?username=${username}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();

      // Cache the data for this username
      set((state) => ({
        cache: {
          ...state.cache,
          [username]: data, // Store the data in the cache
        },
        userSessionProgress: data.userSessionProgress,
        userPublicProfile: data.userPublicProfile,
        userProfileCalendar: data.userProfileCalendar,
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useLeetCodeStore;
