const {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  updateTaskStatus,
} = require("./tasks");
const { STATUS } = require("./constants");

const [, , command, ...args] = process.argv;

switch (command) {
  case "add":
    if (!args.length) {
      console.error("Please provide a task description.");
      process.exit(1);
    }
    addTask(args.join(" "));
    break;

  case "list":
    const status = args[0];
    if (!status) {
      listTasks();
    } else if (Object.values(STATUS).includes(status)) {
      listTasks(status);
    } else {
      console.error("Invalid status.");
    }
    break;

  case "update":
    if (args.length < 2) {
      console.error('Usage: update <id> "new description"');
      process.exit(1);
    }
    updateTask(Number(args[0]), args.slice(1).join(" "));
    break;

  case "delete":
    if (!args.length) {
      console.error("Usage: delete <id>");
      process.exit(1);
    }

    deleteTask(Number(args[0]));
    break;

  case "mark-todo":
    updateTaskStatus(Number(args[0]), STATUS.TODO);
    break;

  case "mark-in-progress":
    updateTaskStatus(Number(args[0]), STATUS.IN_PROGRESS);
    break;

  case "mark-done":
    updateTaskStatus(Number(args[0]), STATUS.DONE);
    break;

  default:
    console.error("Unknown command.");
}
