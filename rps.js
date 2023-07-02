let choices = ["paper","rock","scissors"];
function getComputerChoice(){
    return(choices[Math.floor(Math.random()*3)]);
}
function play(playerChoice,computerChoice){
    if(playerChoice == computerChoice){
        return(2)
    }else if(playerChoice == "scissors"){
        if(computerChoice == "rock"){
            return(0)
        }else{
            return(1)
        }
    }else if(playerChoice == "paper"){
        if(computerChoice == "scissors"){
            return(0)
        }else{
            return(1)
        }
    }else if(playerChoice == "rock"){
        if(computerChoice == "paper"){
            return(0)
        }else{
            return(1)
        }
    }else{
        console.log("There is a problem");
    }
}
function game(){
    let userScore = 0;
    let computerScore = 0;
    for(let i=0 ; i<5 ; i++ ){
        let playerChoice=prompt("Enter your choice from rock paper scissors").toLowerCase();
        let computerChoice=getComputerChoice(); 
        if(play(playerChoice,computerChoice) == 1){
            userScore++;
            console.log(`You Won! , ${playerChoice} beats ${computerChoice}`);
        }else if (play(playerChoice,computerChoice) == 0){
            computerScore++;
            console.log(`You Lose , ${computerChoice} beats ${playerChoice}`);
        }else{
            console.log("it is a tie")
        }
    }
    if(userScore == computerScore){
        return("it is a tie")
    }else if(userScore>computerScore){
        return("You WON!!")
    }else{
        return("You Lose :(")
    }
}
let score = game();
console.log(score);
