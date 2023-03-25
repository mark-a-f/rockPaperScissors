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

function playRound(playerChoice, computerChoice) {
  // Lowercase playerChoice and capitalize first letter to match computerChoice format
  playerChoice = playerChoice.toLowerCase();

  let firstLetter = playerChoice.charAt(0);
  let firstLetterCap = firstLetter.toUpperCase();
  let remainingWord = playerChoice.slice(1);
  let formattedPlayerChoice = firstLetterCap + remainingWord;

  if (formattedPlayerChoice === computerChoice) {
    return "It is a draw!";
  } else if (formattedPlayerChoice === "Rock" && computerChoice === "Paper") {
    return "You lose! Paper beats Rock!";
  } else if (
    formattedPlayerChoice === "Rock" &&
    computerChoice === "Scissors"
  ) {
    return "You win! Rock beats Scissors!";
  } else if (formattedPlayerChoice === "Paper" && computerChoice === "Rock") {
    return "You win! Paper beats Rock!";
  } else if (
    formattedPlayerChoice === "Paper" &&
    computerChoice === "Scissors"
  ) {
    return "You lose! Scissors beats Paper!";
  } else if (
    formattedPlayerChoice === "Scissors" &&
    computerChoice === "Paper"
  ) {
    return "You win! Scissors beats Paper!";
  } else {
    return "You lose! Rock beats Scissors!";
  }
}

const playerChoice = "Rock";
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));
