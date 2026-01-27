const GITHUB_API_BASE = "https://api.github.com";

export const fetchUserEvents = async (username) => {
  const url = `${GITHUB_API_BASE}/users/${username}/events`;
  try {
    const res = await fetch(url);
    if (res.status === 404) {
      console.error(`USER_NOT_FOUND: GitHub user ${username} not found`);
      return;
    }

    if (res.status === 403) {
      console.error(
        `RATE_LIMIT: GitHub API rate limit exceeded. Please try again later`,
      );
      return;
    }

    if (res.status !== 200) {
      console.error(`API_ERROR: GitHub API returned status code ${res.status}`);
      return;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
