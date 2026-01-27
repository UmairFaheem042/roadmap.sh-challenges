# GitHub Activity CLI

> A simple command-line interface to fetch and display recent GitHub user activity.

> Challenge URL: [https://roadmap.sh/projects/github-user-activity](https://roadmap.sh/projects/github-user-activity)

## Project Structure

```
github-activity/
├── package.json
├── index.js              # Entry point & CLI argument parsing
├── src/
│   ├── api/
│   │   └── github.js     # API calls to GitHub
│   ├── formatters/
│   │   └── eventFormatter.js  # Format events into readable strings
│   └── utils/
│       └── errorHandler.js    # Centralized error handling
└── README.md
```

## Usage

### Basic Usage

```bash
node index.js <username>
```

### Examples

```bash
# Fetch activities for a specific user
node index.js umairfaheem042

```

### Expected Output

```
Fetching activity for GitHub user: umairfaheem042...

Recent Activity:
- Pushed 3 commits to Fetching activity for GitHub user: umairfaheem042...
/developer-roadmap
- Opened an issue in Fetching activity for GitHub user: umairfaheem042...
/developer-roadmap
- Starred Fetching activity for GitHub user: umairfaheem042...
/developer-roadmap
- Forked example/repository
- Created branch in Fetching activity for GitHub user: umairfaheem042...
/project
```

## Features

✅ **Modular Architecture** - Clean separation of concerns  
✅ **Error Handling** - User-friendly error messages  
✅ **No Dependencies** - Uses Node.js built-in modules only  
✅ **Event Support** - Handles 12+ GitHub event types  
✅ **Rate Limit Aware** - Detects and reports API rate limits

## Supported GitHub Events

- Push Events (commits)
- Issues (opened, closed)
- Stars (watch events)
- Forks
- Pull Requests
- Comments
- Repository creation
- Branch/Tag creation and deletion
- Releases
- And more!

## Error Handling

The CLI handles various error scenarios:

- User not found (404)
- Rate limit exceeded (403)
- Network errors
- Invalid responses
- Missing arguments

## License

MIT
