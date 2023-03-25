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
  const formattedPlayerChoice = firstLetterUpperCase(playerChoice);

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

function firstLetterUpperCase(word) {
  word = word.toLowerCase();
  let firstLetter = word.charAt(0);
  let firstLetterCap = firstLetter.toUpperCase();
  let remainingWord = word.slice(1);
  let formattedWord = firstLetterCap + remainingWord;
  return formattedWord;
}

const playerChoice = "Rock";
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));
