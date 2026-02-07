import fs from "fs";
const filePath = "./expense.json";


export const deleteOps = (expenseId) => {
  if (!fs.existsSync(filePath)) {
    console.warn("No expenses found to delete");
    return;
  }

  // Read and parse file
  const raw = fs.readFileSync(filePath, "utf-8").trim();
  if (!raw) {
    console.warn("No expense found");
    return;
  }

  const expenses = JSON.parse(raw);

  if (!Array.isArray(expenses)) {
    throw new Error("expense.json does not contain an array of expenses.");
  }

  // Filter out the expense with the given ID
  const filtered = expenses.filter((exp) => exp.id !== expenseId);

  if (filtered.length === expenses.length) {
    console.log(`No expense found with ${expenseId}`);
  }

  // Write file
  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2), "utf-8");

  console.log("Expense deleted successfully");
};
