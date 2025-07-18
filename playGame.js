import prompt from "./prompt.js";

// playGame
export default async function playGame(chances) {
  const computer = Number((Math.random() * 100).toFixed());
  console.log(computer);
  for (let i = 0; i < chances; i++) {
    const playerGuess = Number(await prompt("Enter your guess: "));

    if (Number.isNaN(playerGuess)) {
      console.log("\nInvalid number! Please enter a valid number.\n");
      i--;
      continue;
    }

    if (playerGuess === computer) {
      console.log("\nCorrect!");
      return { status: true };
    } else if (playerGuess > computer) {
      console.log(`\nIncorrect! The number is less than ${playerGuess}\n`);
    } else if (playerGuess < computer) {
      console.log(`\nIncorrect! The number is greater than ${playerGuess}\n`);
    }
  }
  return { status: false, answer: computer };
}
