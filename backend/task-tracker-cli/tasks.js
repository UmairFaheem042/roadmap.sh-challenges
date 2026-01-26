const { readTasks, writeTasks } = require("./storage");
const { STATUS } = require("./constants");
const { formatTimestamp } = require("./utils");

function addTask(description) {
  // Fetch all tasks
  const tasks = readTasks();

  // Create new task
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    description,
    status: STATUS.TODO,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // Push new task into tasks[]
  tasks.push(newTask);

  // Call writeTasks function to store task in tasks.json
  writeTasks(tasks);

  console.log(`Task added successfully (ID: ${newTask.id})`);
}

function listTasks(filterStatus = null) {
  // fetch all tasks
  const tasks = readTasks();

  // filter task based on the status -- if no status passed then all tasks
  const filtered = filterStatus
    ? tasks.filter((t) => t.status === filterStatus)
    : tasks;

  // If no tasks then show error
  if (!filtered.length) {
    console.log("No tasks found.");
    return;
  }

  // Iterate over each task and display them
  filtered.forEach((task) => {
    console.log(
      `[${task.id}] ${task.description} | STATUS: ${task.status} | UPDATED AT: ${formatTimestamp(task.updatedAt)}`,
    );
  });
}

function updateTask(id, newDescription) {
  // find task by id
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === id);

  // if task doesn't exist then show error
  if (!task) {
    console.error(`Task with ID ${id} not found.`);
    return;
  }

  // update description & updatedAt while preserving createdAt & status
  task.description = newDescription;
  task.updatedAt = new Date().toISOString();

  // Call writeTasks function to store task in tasks.json
  writeTasks(tasks);

  console.log(`Task ${id} updated successfully.`);
}

function deleteTask(id) {
  // Fetch all tasks
  const tasks = readTasks();

  // Find particular task
  const index = tasks.findIndex((t) => t.id === id);

  // If task is not found then show error
  if (index === -1) {
    console.error(`Task with ID: ${id} not found.`);
    return;
  }

  // Delete only 1 task
  tasks.splice(index, 1);

  // Call writeTasks function to store task in tasks.json
  writeTasks(tasks);

  console.log(`Task ${id} deleted successfully.`);
}

function updateTaskStatus(id, newStatus) {
  // Fetch all tasks
  const tasks = readTasks();

  // Find that particular task
  const task = tasks.find((t) => t.id === id);

  // If task is not found then show error
  if (!task) {
    console.error(`Task with ID ${id} not found.`);
    return;
  }

  // update fields
  task.status = newStatus;
  task.updatedAt = new Date().toISOString();

  // Call writeTasks function to store task in tasks.json
  writeTasks(tasks);

  console.log(`Task ${id} marked as ${newStatus}.`);
}

module.exports = {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  updateTaskStatus,
};
