// Return random computer choice of Rock, Paper or Scissors
function getComputerChoice() {
  let choiceInt = Math.floor(Math.random() * 3);
  if (choiceInt === 0) {
    return "Rock";
  } else if (choiceInt === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Play one round of rock, paper, scissors
function playRound(playerChoice, computerChoice, scoreTracker) {
  const formattedPlayerChoice = firstLetterUpperCase(playerChoice);

  if (formattedPlayerChoice === computerChoice) {
    return "It is a draw!";
  } else if (formattedPlayerChoice === "Rock" && computerChoice === "Paper") {
    scoreTracker[1] = scoreTracker[1] + 1;
    return "You lose! Paper beats Rock!";
  } else if (
    formattedPlayerChoice === "Rock" &&
    computerChoice === "Scissors"
  ) {
    scoreTracker[0] = scoreTracker[0] + 1;
    return "You win! Rock beats Scissors!";
  } else if (formattedPlayerChoice === "Paper" && computerChoice === "Rock") {
    scoreTracker[0] = scoreTracker[0] + 1;
    return "You win! Paper beats Rock!";
  } else if (
    formattedPlayerChoice === "Paper" &&
    computerChoice === "Scissors"
  ) {
    scoreTracker[1] = scoreTracker[1] + 1;
    return "You lose! Scissors beats Paper!";
  } else if (
    formattedPlayerChoice === "Scissors" &&
    computerChoice === "Paper"
  ) {
    scoreTracker[0] = scoreTracker[0] + 1;
    return "You win! Scissors beats Paper!";
  } else {
    scoreTracker[1] = scoreTracker[1] + 1;
    return "You lose! Rock beats Scissors!";
  }
}

// Return word with first letter capitalized and remaining letters lower case
function firstLetterUpperCase(word) {
  word = word.toLowerCase();
  let firstLetter = word.charAt(0);
  let firstLetterCap = firstLetter.toUpperCase();
  let remainingWord = word.slice(1);
  let formattedWord = firstLetterCap + remainingWord;
  return formattedWord;
}

// Play 5 rounds
function playGame() {
  // scoreTracker[0] = player score
  // scoreTracker[1] = computer score
  let scoreTracker = [0, 0];
  let round = 1;

  while (scoreTracker[0] < 3 && scoreTracker[1] < 3) {
    let computerChoice = getComputerChoice();
    let playerChoice = playerSelect();
    console.log(
      `Round ${round}: ` +
        playRound(playerChoice, computerChoice, scoreTracker) +
        `\nPlayer Score: ${scoreTracker[0]} | Computer Score: ${scoreTracker[1]}`
    );
    round++;
  }

  if (scoreTracker[0] === 3) {
    console.log(
      `You won!\nFinal Score:\nPlayer: ${scoreTracker[0]} || Computer: ${scoreTracker[1]}`
    );
  } else {
    console.log(
      `You lost!\nFinal Score:\nPlayer: ${scoreTracker[0]} || Computer: ${scoreTracker[1]}`
    );
  }
}

// Prompt user for selection
function playerSelect() {
  const playerSelection = prompt("Enter your choice: ");
  return playerSelection;
}

playGame();
