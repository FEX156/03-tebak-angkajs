import gameStart from "./gameStart.js";
import playAgain from "./playAgain.js";

const args = process.argv.slice(2);
const [command] = args;

// main function (entry point program)
async function main() {
  if (!command) {
    console.log("please input some command!");
    return;
  }

  if (command === "start") {
    let start = true;
    while (start) {
      await gameStart();
      const again = await playAgain();
      start = again;
    }
    console.log("\nGoodBye!, see you next time!");
  } else {
    console.log("invalid command, consider to give an arguments: 'start");
  }
}
main();
