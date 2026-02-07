import fs from "fs";

const filePath = "./expense.json";

export const addOps = (newExpense) => {
  try {
    let expenses = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8").trim();
      if (fileContent) {
        expenses = JSON.parse(fileContent);
      }
    }

    if (!Array.isArray(expenses)) expenses = [expenses];

    expenses.push(newExpense);

    fs.writeFileSync(filePath, JSON.stringify(expenses, null, 2), "utf-8");
    console.log(`Expense added successfully (ID: ${newExpense.id})`);
  } catch (err) {
    console.error("Error while writing expense", err);
  }
};
