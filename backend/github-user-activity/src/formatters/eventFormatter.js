function formatEvent(event) {
  // Add null checks for safety
  if (!event || !event.repo || !event.type) {
    return null;
  }

  const repo = event.repo.name;
  const type = event.type;
  const payload = event.payload || {};

  switch (type) {
    case "PushEvent":
      const commits = payload.commits || [];
      const commitCount = commits.length;
      if (commitCount === 0) {
        return `- Pushed to ${repo}`;
      }
      return `- Pushed ${commitCount} commit${commitCount > 1 ? "s" : ""} to ${repo}`;

    case "IssuesEvent":
      const action = payload.action || "updated";
      return `- ${capitalize(action)} an issue in ${repo}`;

    case "WatchEvent":
      return `- Starred ${repo}`;

    case "ForkEvent":
      return `- Forked ${repo}`;

    case "CreateEvent":
      const refType = payload.ref_type || "resource";
      if (refType === "repository") {
        return `- Created repository ${repo}`;
      }
      return `- Created ${refType} in ${repo}`;

    case "DeleteEvent":
      const deleteRefType = payload.ref_type || "resource";
      return `- Deleted ${deleteRefType} in ${repo}`;

    case "PullRequestEvent":
      const prAction = payload.action || "updated";
      return `- ${capitalize(prAction)} a pull request in ${repo}`;

    case "PullRequestReviewEvent":
      return `- Reviewed a pull request in ${repo}`;

    case "PullRequestReviewCommentEvent":
      return `- Commented on a pull request in ${repo}`;

    case "IssueCommentEvent":
      return `- Commented on an issue in ${repo}`;

    case "MemberEvent":
      return `- Added a collaborator to ${repo}`;

    case "PublicEvent":
      return `- Made ${repo} public`;

    case "ReleaseEvent":
      return `- Published a release in ${repo}`;

    default:
      return `- ${type.replace("Event", "")} in ${repo}`;
  }
}

function formatEvents(events) {
  // Limit to most recent 10 events for cleaner output
  const recentEvents = events.slice(0, 10);

  // Filter out null values from events that couldn't be formatted
  const formatted = recentEvents
    .map(formatEvent)
    .filter((event) => event !== null)
    .join("\n");

  return formatted;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  formatEvents,
  formatEvent,
};
