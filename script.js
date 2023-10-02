"use strict";
console.log("Hello");

/* problem - make rock-paper-scissors 
1. get input from user, store it
2. computer must make a random choice 
3. check for the conditions to determine who won
4. display score - 0 --> increment if won 
5. max score - 5
*/

let choices = ["rock", "paper", "scissors"];
let randomNum;
let computerSelection; /*= getComputerChoice();*/
let playerSelection; /*= prompt("Enter your choice - rock,paper,scissors ");
playerSelection = playerSelection.toLowerCase();*/
let result;

// console.log(choices[randomNum]);

// const getComputerChoice = choices[randomNum];

// computer's choice
function getComputerChoice() {
  randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

//game function for a single round
function playAround(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    result = "tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result = "computer won";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "player won";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "player won";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    result = "tie";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "computer won";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "computer won";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "player won";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    result = "tie";
  } else {
    result = "invalid choice";
  }
  return result;
}

//calling the function for multiple rounds
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

for (let i = 0; i < 5; i++) {
  computerSelection = getComputerChoice();
  playerSelection = prompt("Enter your choice - rock,paper,scissors ");
  playerSelection = playerSelection.toLowerCase();
  playAround(playerSelection, computerSelection);
  if (result === "computer won") {
    computerScore++;
  } else if (result === "player won") {
    playerScore++;
  }
  console.log(`---------- Round ${roundNumber} ----------`);
  console.log(`Player Selected - ${playerSelection}`);
  console.log(`Computer Selected - ${computerSelection}`);
  console.log(`Result - ${result}`);

  roundNumber++;
  //   console.log(playAround(playerSelection, computerSelection));
}

//printing out winner
console.log(
  `Player Scored - ${playerScore}, Computer Scored - ${computerScore}`
);

let winner;
if (playerScore > computerScore) {
  console.log(`Player won 🎉`);
} else if (playerScore < computerScore) {
  console.log(`Computer won 🤖 `);
} else {
  console.log("Go for another round!!");
}
