const { fetchUserEvents } = require("./src/api/github.js");
const { formatEvents } = require("./src/formatters/eventFormatter");
const { handleError } = require("./src/utils/errorHandler");

async function main() {
  const args = process.argv.slice(2);
  const username = args[0];

  if (!username) {
    console.error("Error: Please provide a GitHub username");
    console.log("Usage: node index.js <username>");
    process.exit(1);
  }

  try {
    console.log(`Fetching activity for GitHub user: ${username}...\n`);

    const events = await fetchUserEvents(username);

    if (events.length === 0) {
      console.log(`No recent activity found for user: ${username}`);
      return;
    }

    // Format and display events
    const formattedOutput = formatEvents(events);
    console.log("Recent Activity: ");
    console.log(formattedOutput);
  } catch (error) {
    handleError(error);
    process.exit(1);
  }
}

main();
