let choices = ["paper", "rock", "scissors"];
const scoreCard = document.querySelector(".scoreCard");
let userScore = 0;
let computerScore = 0;
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}
function play(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return 2;
  } else if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      return 0;
    } else {
      return 1;
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "scissors") {
      return 0;
    } else {
      return 1;
    }
  } else if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      return 0;
    } else {
      return 1;
    }
  } else {
    console.log("There is a problem");
  }
}
function game() {
  const button = document.querySelectorAll(`button`);
  button.forEach((button) => {
    button.addEventListener("click", () => {
      let computerChoice = getComputerChoice();
      if (play(button.className, computerChoice) == 1) {
        userScore++;
        document.querySelector(".info").innerHTML= `You've won this round ${button.className} beats ${computerChoice}`;
      } else if (play(button.className, computerChoice) == 0) {
        computerScore++;
        document.querySelector(".info").innerHTML= `You've lost this round ${computerChoice} beats ${button.className}`;
      } else {
        document.querySelector(".info").innerHTML= `It is a tie`;
      }
      document.querySelector(".score-player").innerHTML = userScore;
      document.querySelector(".score-computer").innerHTML = computerScore;
      console.log(button.className, computerChoice, userScore, computerScore);
      check();
    });
  });
}
function check() {
  if (userScore == 5) {
    userScore = 0;
    computerScore = 0;
    document.querySelector(".info").innerHTML= `You've won the game , computer is defeated (click a option to play again)`;
    document.querySelector(".score-player").innerHTML = userScore;
    document.querySelector(".score-computer").innerHTML = computerScore;   
    return true;
  } else if (computerScore == 5) {
    userScore = 0;
    computerScore = 0;
    document.querySelector(".info").innerHTML= `you've lost to the computer (click a option to play again)`;
    document.querySelector(".score-player").innerHTML = userScore;
    document.querySelector(".score-computer").innerHTML = computerScore;   
    return true;
  } else {
    return false;
  }
}
game();
