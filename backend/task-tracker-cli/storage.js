const fs = require("fs");
const path = require("path");
const { TASK_FILE } = require("./constants");

const filePath = path.join(process.cwd(), TASK_FILE);

function ensureFileExists() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
}

function readTasks() {
  ensureFileExists();
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to read tasks.json. Is it valid JSON?");
    return [];
  }
}

function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

module.exports = {
  readTasks,
  writeTasks,
};
