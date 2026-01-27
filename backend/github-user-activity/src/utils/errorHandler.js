function handleError(error) {
  const message = error.message;

  // Check for specific error types
  if (message.startsWith("USER_NOT_FOUND:")) {
    console.error("\n❌ User Not Found");
    console.error(message.replace("USER_NOT_FOUND: ", ""));
    console.error("Please check the username and try again.\n");
    return;
  }

  if (message.startsWith("RATE_LIMIT:")) {
    console.error("\n❌ Rate Limit Exceeded");
    console.error("GitHub API rate limit reached (60 requests per hour).");
    console.error(
      "Please try again later or authenticate with a GitHub token.\n",
    );
    return;
  }

  if (message.startsWith("NETWORK_ERROR:")) {
    console.error("\n❌ Network Error");
    console.error("Could not connect to GitHub API.");
    console.error("Please check your internet connection and try again.\n");
    return;
  }

  if (message.startsWith("PARSE_ERROR:")) {
    console.error("\n❌ Parse Error");
    console.error("Failed to parse response from GitHub API.");
    console.error("This might be a temporary issue. Please try again.\n");
    return;
  }

  if (message.startsWith("API_ERROR:")) {
    console.error("\n❌ API Error");
    console.error(message.replace("API_ERROR: ", ""));
    console.error("GitHub API returned an unexpected error.\n");
    return;
  }

  // Generic error handler
  console.error("\n❌ Unexpected Error");
  console.error(error.message);
  console.error("\nPlease try again or report this issue.\n");
}

module.exports = {
  handleError,
};
