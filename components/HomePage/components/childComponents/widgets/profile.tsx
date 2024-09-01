import axios from 'axios';

export const getServerSideProps = async (context) => {
  const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your OAuth token

  try {
    const response = await axios.get('https://api.linkedin.com/v2/shares', {
      params: {
        q: 'owners',
        owners: 'urn:li:person:PERSON_ID', // Replace with your LinkedIn Person ID
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return {
      props: {
        activities: response.data.elements,
      },
    };
  } catch (error) {
    console.error('Error fetching LinkedIn activities:', error);
    return {
      props: {
        activities: [],
      },
    };
  }
};

const LinkedInActivityFeed = ({ activities }) => {
  return (
    <div>
      <h1>LinkedIn Activity Feed</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default LinkedInActivityFeed;
