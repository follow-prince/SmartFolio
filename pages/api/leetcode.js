import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { username } = req.query;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Username is required' });
  }

  const headers = {
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/json',
    Cookie: process.env.LEETCODE_COOKIE,
    'X-Csrftoken': process.env.LEETCODE_CSRF,
    Origin: 'https://leetcode.com',
    Referer: `https://leetcode.com/u/${username}/`,
    'User-Agent':
      'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
  };

  const url = 'https://leetcode.com/graphql/';

  const queries = [
    {
      operationName: 'userSessionProgress',
      query: `
        query userSessionProgress($username: String!) {
          allQuestionsCount { difficulty count }
          matchedUser(username: $username) {
            submitStats {
              acSubmissionNum { difficulty count submissions }
            }
          }
        }
      `,
      variables: { username },
    },
    {
      operationName: 'userPublicProfile',
      query: `
        query userPublicProfile($username: String!) {
          matchedUser(username: $username) {
            username
            githubUrl
            twitterUrl
            linkedinUrl
            profile {
              ranking
              userAvatar
              realName
              websites
            }
          }
        }
      `,
      variables: { username },
    },
    {
      operationName: 'userProfileCalendar',
      query: `
        query userProfileCalendar($username: String!, $year: Int) {
          matchedUser(username: $username) {
            userCalendar(year: $year) {
              activeYears
              streak
              totalActiveDays
              submissionCalendar
            }
          }
        }
      `,
      variables: { username },
    },
  ];

  try {
    const [res1, res2, res3] = await Promise.all(
      queries.map((payload) => axios.post(url, payload, { headers }))
    );

    res.status(200).json({
      userSessionProgress: res1.data.data,
      userPublicProfile: res2.data.data,
      userProfileCalendar: res3.data.data,
    });
  } catch (error) {
    console.error('LeetCode API error:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch LeetCode data' });
  }
}
