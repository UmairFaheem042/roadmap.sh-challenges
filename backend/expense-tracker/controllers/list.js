import fs from "fs";
import { listFormat } from "../utils/outputFormatter.js";

const filePath = "./expense.json";


export const listOps = () => {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);

    // 3) Ensure it’s an array before using forEach
    if (!Array.isArray(data)) {
      throw new Error("expense.json does not contain an array of expenses.");
    }

    listFormat(data);
  } catch (err) {
    console.error("Error while listing expenses", err);
  }
};
