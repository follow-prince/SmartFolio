import githubGraphql from '@/lib/github/githubGraphql';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { username, year } = req.query;

    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    const now = new Date();
    const currentYear = now.getFullYear();
    const selectedYear = year ? parseInt(year, 10) : currentYear;

    const fromDate = selectedYear === currentYear
      ? new Date(now.setDate(now.getDate() - 365)).toISOString()
      : new Date(`${selectedYear}-01-01T00:00:00Z`).toISOString();

    const toDate = selectedYear === currentYear
      ? new Date().toISOString()
      : new Date(`${selectedYear}-12-31T23:59:59Z`).toISOString();

    const query = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
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

    const variables = { username, from: fromDate, to: toDate };
    const data = await githubGraphql({ query, variables });

    const contributions = data.user.contributionsCollection.contributionCalendar.weeks
      .flatMap((week) => week.contributionDays);

    return res.status(200).json({ contributions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch contributions' });
  }
}
