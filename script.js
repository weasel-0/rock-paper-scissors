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
const scores = document.querySelector(".scores");
const pscore = document.querySelector(".pscore");
const cscore = document.querySelector(".cscore");
const winner = document.querySelector(".winner");
const reset = document.querySelector(".tryAgain");
const card = document.querySelector(".card");
let newMessage = document.querySelector(".message");
let liveFeed = document.getElementById("liveFeed");
reset.style.display = "none";

const resetGame = reset.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  pscore.textContent = playerScore;
  cscore.textContent = computerScore;
  winner.textContent = "";
  reset.style.display = "none";
  newMessage.textContent = "";
});

let playerSelection;
let choseRock;
let chosePaper;
let choseScissors;
let result;
let playerScore = 0;
let computerScore = 0;

choseRock = rock.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
  // this.parentElement.style.backgroundColor = "yellow";
  checkScore(playerScore, computerScore);
  // gameStatus("rock", computerSelection);
});
chosePaper = paper.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
  checkScore(playerScore, computerScore);
  // gameStatus("paper", computerSelection);
});
choseScissors = scissors.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
  checkScore(playerScore, computerScore);
  // gameStatus("scissors", computerSelection);
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    newMessage.textContent = `It's a tie! you both chose rock`;
    return "tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    newMessage.textContent = `You have lost human! `;

    cscore.textContent = computerScore;
    return "computer won";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    newMessage.textContent = `You won! might be a fluke.. `;

    pscore.textContent = playerScore;

    return "player won";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    pscore.textContent = playerScore;
    newMessage.textContent = `You won! just a coincidence `;

    return "player won";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    newMessage.textContent = `It's a tie`;

    return "tie";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    cscore.textContent = computerScore;
    newMessage.textContent = `you have lost ..even a toddler could do better than that `;

    return "computer won";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    cscore.textContent = computerScore;
    newMessage.textContent = `you have lost! skill issue.. `;

    return "computer won";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    pscore.textContent = playerScore;
    newMessage.textContent = `You won! won't happen again `;

    return "player won";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    newMessage.textContent = `It's a tie`;

    return "tie";
  } else {
    return "invalid choice";
  }
  //   return result;
}

function checkScore(playerScore, computerScore) {
  if (playerScore === 5) {
    console.log("player won");
    newMessage.textContent = "";
    winner.textContent = `How is this possible? I want a rematch, unless you're scared.`;
    reset.style.display = "block";
  } else if (computerScore === 5) {
    console.log("compuuter won");
    newMessage.textContent = "";

    winner.textContent = `Better luck next time, kid.`;
    reset.style.display = "block";
  } else {
    // card.style.backgroundColor = "white";
  }
}
