import { addOps } from "./controllers/add.js";
import { deleteOps } from "./controllers/delete.js";
import { helpOps } from "./controllers/help.js";
import { listOps } from "./controllers/list.js";
import { summaryOps } from "./controllers/summary.js";

export const operations = (myArg) => {
  if (myArg.length === 0) return helpOps();

  const command = myArg[0];
  const args = myArg.slice(1);

  const options = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const key = args[i].slice(2);
      const value = args[i + 1];

      if (!value || value.startsWith("--")) options[key] = true;
      else {
        options[key] = value;
        i++;
      }
    }
  }

  switch (command) {
    case "add":
      if (!options.description || !options.amount) return helpOps("add");

      const payload = {
        id: Date.now(),
        description: options.description,
        amount: Number(options.amount),
        createdAt: new Date().toISOString(),
      };

      addOps(payload);
      break;

    case "list":
      if (Object.keys(options).length > 0) return helpOps("list");
      listOps();
      break;

    case "delete":
      if (!options.id || isNaN(options.id)) return helpOps("delete");
      deleteOps(Number(options.id));
      break;

    case "summary":
      if (options.month) {
        const month = Number(options.month);
        if (month < 1 || month > 12) return helpOps("summary");
        summaryOps({ month });
      } else summaryOps();
      break;

    default:
      helpOps();
  }
};
