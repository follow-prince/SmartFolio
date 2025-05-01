
import { create } from 'zustand'

const useGitHubData = create((set, get) => ({
  cache: null,
  loading: false,
  error: null,

  fetchGitHubData: async () => {
    if (get().cache) return // use cached data

    set({ loading: true, error: null })

    try {
      const res = await fetch('/api/github/userData/?username=follow-prince') // your actual API
      const json = await res.json()

      if (!json.success) throw new Error('Failed to fetch data')

      set({ cache: json.data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },
}))
export default useGitHubData
