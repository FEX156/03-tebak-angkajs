import prompt from "./prompt.js";

// play again?
export default async function playAgain() {
  while (true) {
    const playAgain = (
      await prompt("\nDo you want to play again? (Y/n): ")
    ).toLowerCase();

    if (playAgain === "y" || playAgain === "") {
      return true;
    } else if (playAgain === "n") {
      return false;
    } else {
      console.log(
        "\nInvalid option! Please enter 'Y' to play again or 'n' to exit.\n"
      );
    }
  }
}
