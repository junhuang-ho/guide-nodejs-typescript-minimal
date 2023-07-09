import { hello } from "./test-folder/test.js";
import { MongoClient } from "mongodb";

console.log("HELLO", hello);

const main = async () => {
  console.log("HOHO");
  await 5;
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
