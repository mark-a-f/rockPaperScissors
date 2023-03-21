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
  playerChoice = playerChoice.charAt(0).toUpperCase + playerChoice.slice(1);

  if (playerChoice === computerChoice) {
    return "It is a draw!";
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    return "You lose! Paper beats Rock!";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    return "You win! Rock beats Scissors!";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    return "You win! Paper beats Rock!";
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    return "You lose! Scissors beats Paper!";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    return "You win! Scissors beats Paper!";
  } else {
    return "You lose! Rock beats Scissors!";
  }
}
