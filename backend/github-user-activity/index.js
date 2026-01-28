const { fetchGitHubEvents } = require("./api/githubEvents.js");
const { outputFormatter } = require("./formatter/eventFormatter.js");

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
  outputFormatter(rawData);
};

main();
