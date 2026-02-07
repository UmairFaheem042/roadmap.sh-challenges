export const helpOps = (command) => {
  console.log("Expense Tracker CLI Usage");
  switch (command) {
    case "add":
      console.log("node index.js add --description <text> --amount <number>");
      break;
    case "list":
      console.log("node index.js list");
      break;
    case "delete":
      console.log("node index.js delete --id <number>");
      break;
    case "summary":
      console.log("node index.js summary [--month <1-12>]");
      break;
    default:
      console.log(
        `add      --description <text> --amount <number>\nlist\ndelete   --id <number>\nsummary\nsummary  [--month <1-12>]`
      );
      break;
  }

  process.exit(1);
};
