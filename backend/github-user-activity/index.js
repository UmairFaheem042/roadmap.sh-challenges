import { fetchGitHubEvents } from "./api/githubEvents.js";
import { outputFormatter } from "./formatter/eventFormatter.js";

const main = async () => {
  const args = process.argv.slice(2);
  const username = args[0];

  if (!username) {
    console.error("No username provided");
    console.error("Usage: node index.js <username>");
    return;
  }
  console.log(`Fetching GitHub events for user: ${username}`);

  const rawData = await fetchGitHubEvents(username);
  // const formattedData = outputFormatter(rawData);
  outputFormatter(rawData);
};

main();
