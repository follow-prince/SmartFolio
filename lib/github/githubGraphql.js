import axios from 'axios';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN_PERSONAL
const githubGraphql = ({ query, variables }) => {
  if (!GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN is not defined');
  }
  return new Promise((resolve, reject) => {
    axios.post(
      'https://api.github.com/graphql',
      { query, variables },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
      }
    )
    .then(response => resolve(response.data.data))
    .catch(error => reject(error));
  });
};

export default githubGraphql;
