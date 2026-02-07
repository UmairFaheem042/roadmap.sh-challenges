import { operations } from "./functions.js";

const args = process.argv;
const myArg = args.slice(2);

(function main() {
  operations(myArg);
})();
