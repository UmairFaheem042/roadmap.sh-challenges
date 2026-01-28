export const outputFormatter = (data) => {
  let formattedOutput = [];

  let eventTypes = {
    PushEvent: {},
    PullRequestEvent: {},
    IssuesEvent: {},
    IssueCommentEvent: {},
    CreateEvent: {},
    DeleteEvent: {},
    ForkEvent: {},
    StarredEvent: {},
    Others: {},
  };

  data.forEach((e) => {
    const category = e.type in eventTypes ? e.type : "Others";
    const repoName = e.repo.name;

    if (!eventTypes[category][repoName]) {
      eventTypes[category][repoName] = 0;
    }

    eventTypes[category][repoName]++;
  });

  // Formatting
  console.log("Recent Activities:");

  Object.keys(eventTypes).forEach((type) => {
    const repos = eventTypes[type];

    if (Object.keys(repos).length === 0) return;

    Object.entries(repos).forEach(([repoName, count]) => {
      switch (type) {
        case "PushEvent":
          console.log(
            `\t- Pushed ${count} commit${count === 1 ? "" : "s"} to ${repoName}`,
          );
          break;
        case "PullRequestEvent":
          console.log(`\t- Pulled ${count} from ${repoName}`);
          break;
        case "CreateEvent":
          console.log(
            `\t- Created ${count} event${count === 1 ? "" : "s"} in ${repoName}`,
          );
          break;
        case "Others":
          console.log(
            `\t- Did ${count} other activit${count === 1 ? "y" : "ies"} in ${repoName}`,
          );
          break;
        // Add other cases as needed...
      }
    });
  });

  return formattedOutput;
};
