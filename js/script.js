// Randomly produce computer choice of Rock, Paper or Scissors
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
