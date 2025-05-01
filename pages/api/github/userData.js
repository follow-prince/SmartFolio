import fetchUserData from '@/lib/github/fetchUserData';

// API Handler
export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed. Use GET.' });
  }

  // Extract username from dynamic route
  const { username } = req.query;

  // Validate username
  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Username is required and must be a string.' });
  }

  try {
    // Fetch user data using the provided function
    const data = await fetchUserData(username);

    // Return successful response
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error('Error fetching GitHub data:', error);

    // Handle specific errors
    if (error.message === 'GITHUB_TOKEN is not defined') {
      return res.status(500).json({ error: 'Server configuration error.' });
    }

    // Handle GitHub API errors (e.g., user not found)
    if (error.response?.status === 404) {
      return res.status(404).json({ error: `User '${username}' not found.` });
    }

    // Generic error
    return res.status(500).json({ error: 'Failed to fetch user data.' });
  }
}