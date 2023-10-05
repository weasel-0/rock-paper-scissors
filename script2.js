/* TODO
1. make a button for each opttion
2. add an event listener which upon btn click saves the option as player selection .
3. generate a random option for the computer's choice
4. show who won the match
5. increment the score 
6. do this until one reaches score - 5

*/
let choices = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");

let playerSelection;
let choseRock;
let chosePaper;
let choseScissors;
let result;
let playerScore = 0;
let computerScore = 0;

choseRock = rock.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});
chosePaper = paper.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});
choseScissors = scissors.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});
console.log(playerScore, computerScore);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    result = "tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "computer won";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "player won";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "player won";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "tie";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "computer won";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "computer won";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "player won";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "tie";
  } else {
    return "invalid choice";
  }
  //   return result;
}
