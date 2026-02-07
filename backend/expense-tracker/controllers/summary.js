import fs from "fs";

const filePath = "./expense.json";

export const summaryOps = () => {
  if (!fs.existsSync(filePath)) {
    console.warn("No expenses found to delete");
    return;
  }
  // get the total expenses
  const raw = fs.readFileSync(filePath, "utf-8").trim();
  if (!raw) {
    console.warn("No expense found");
    return;
  }

  const expenses = JSON.parse(raw);
  if (!Array.isArray(expenses))
    throw new Error("expense.json does not contain an array of expenses.");

  let totalExp = 0;

  expenses.forEach((e) => {
    totalExp += e.amount;
  });

  console.log(`Total expenses: ${totalExp}`);
};
