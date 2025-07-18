import prompt from "./prompt.js";
import playGame from "./playGame.js";

// gameStart
export default async function gameStart() {
  console.log(
    "\nWelcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number."
  );

  console.log();

  const option = await prompt(
    "Please select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n\nEnter your choice: "
  );

  let succes;

  switch (parseInt(option)) {
    case 1:
      succes = await playGame(10);
      break;
    case 2:
      succes = await playGame(5);
      break;
    case 3:
      succes = await playGame(3);
      break;
    default:
      console.log("invalid options");
      return;
  }

  if (succes.status) {
    console.log("\nCongratulations you won!");
  } else {
    console.log(`Sorry you lose!, the anwer is ${succes.answer}`);
  }
}
