import githubGraphql from '@/lib/github/githubGraphql';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `;

      const { username } = req.query; // Get the username from query parameters

      // If username is not provided, return a bad request
      if (!username) {
        return res.status(400).json({ error: 'Username is required' });
      }

      const variables = { username };

      const data = await githubGraphql({ query, variables });

      const contributions = data.user.contributionsCollection.contributionCalendar.weeks
        .flatMap((week) => week.contributionDays);

      return res.status(200).json({ contributions });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch contributions' });
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
