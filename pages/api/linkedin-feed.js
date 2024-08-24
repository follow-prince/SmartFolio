import axios from 'axios';

export default async function handler(req, res) {
  const accessToken = 'AQVX7Ds0T4o85gHfWbk7wn6CShru-hl7TsDxtvAGkQgptnPoVwb4KOLR4QpzZJKp4L6xwgM-QG9TiqpJLBYFh7jvJOEiTNBMzLzG9AqDcxJuRF-5sk45mHBini6NywZti8LjyLedC0I7Xt2CoKwzllk6nsRco3-1XQqtUQxA1tCBpm9RChy_-Fqhp6z3lnUONyU7vox3737u47AFXFtmifnhVHnjw-TpXkQMUHaq2F7MGBzqWvjFb7NVB9ERk5kPjuC40xob-euxo5JXDyHFpX2EOrHNueS5ZEStVpdq_OajHrDnXhb-Zh7ekGSwLQPpZCjmbkbdNjXuuCrJMhbw7n0JBrxOyQ'; // Store your access token in environment variables

  try {
    // Replace {personId} with the actual LinkedIn person ID
    const response = await axios.get(
      `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=urn:li:person:86h72lzcqdfl1m`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching LinkedIn posts' });
  }
}
