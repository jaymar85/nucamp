const COLORS_ARRAY = [
  "blue",
  "cyan",
  "gold",
  "gray",
  "green",
  "magenta",
  "orange",
  "red",
  "white",
  "yellow",
];

function runGame() {
  let game = "";
  let guess = false;
  let numTries = 0;

  const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length - 1) + 1;
  const target = COLORS_ARRAY[targetIndex];

  do {
    guess = prompt(
      "I am thinking of one of these colors:\n\n" +
        COLORS_ARRAY +
        "What color am I thinking of?\n"
    );
    numTries += 1;

    if (guess === null) {
      alert("The game has been aborted.");
      return;
    }
    correct = checkGuess(guess, target);
  } while (!correct);

  alert(
    "Congratulations! You have guessed the color!\n\n" +
      "It took you " +
      numTries +
      " guesses to finish the game!\n\n" +
      "Hit OK to see the color in the background."
  );
}

function checkGuess(guess, target) {
  const sorryMsg = "Sorry, your guess is incorrect.\n\n";
  const tryMsg = "\n\nPlease try again.";
  let correct = false;

  if (!COLORS_ARRAY.includes(guess)) {
    alert("Sorry, I don't recognize your color. " + tryMsg);
  } else if (guess < target) {
    alert(
      sorryMsg + "Hint: your color is alphabetically lower than mine." + tryMsg
    );
  } else if (guess > target) {
    alert(
      sorryMsg + "Hint: your color is alphabetically higher than mine." + tryMsg
    );
  } else {
    correct = true;
  }
  return correct;
}
