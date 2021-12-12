console.log("hello world")
let youWin = 0;
let computerWin = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay(){
    let plays = ['rock', 'paper', 'scissors'];
    return plays[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "You draw!";
    }

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            youWin++;
            return "You win! Rock beats scissors";
        } else {
            return "You lose. Paper beats rock";
        }
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            youWin++;
            return "You win! Paper beats rock";
        } else {
            return "You lose. Scissors beats paper";
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            youWin++;
            return "You win! Scissors beats paper";
        } else {
            return "You lose. Rock beats scissors";
        }
    }

}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("You play?", "eg. rock");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`You won ${youWin} games`);
}