import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline";

// interface question
export default function prompt(question) {
  const rl = readline.createInterface({
    input,
    output,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}
