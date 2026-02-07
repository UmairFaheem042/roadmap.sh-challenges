import { formatDate } from "./date.js";

export const listFormat = (data) => {
  const COL_ID = 15;
  const COL_DATE = 22;
  const COL_DESC = 30;
  const COL_AMOUNT = 8;

  console.log(
    "ID".padEnd(COL_ID) +
      "DATE".padEnd(COL_DATE) +
      "  " +
      "DESCRIPTION".padEnd(COL_DESC) +
      "AMOUNT".padStart(COL_AMOUNT),
  );

  data.forEach((d) => {
    const id = String(d.id).padEnd(COL_ID);
    const date = formatDate(d.createdAt).padEnd(COL_DATE);
    const desc = String(d.description).padEnd(COL_DESC);
    const amount = String(d.amount).padStart(COL_AMOUNT - 3);

    console.log(id + date + "  " + desc + amount);
  });
};
