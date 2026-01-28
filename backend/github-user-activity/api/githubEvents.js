const BASE_URL = "https://api.github.com";

export const fetchGitHubEvents = async (username) => {
  const url = `${BASE_URL}/users/${username}/events`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
