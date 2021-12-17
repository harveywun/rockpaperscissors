console.log("hello world")
let youWin = 0;
let youLose = 0;
let draws = 0;
let gamesPlayed = 0;

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
    gamesPlayed++;

    if (playerSelection == computerSelection) {
        draws++;
        return "You draw!";
    }

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            youWin++;
            return "You win! Rock beats scissors";
        } else {
            youLose++;
            return "You lose. Paper beats rock";
        }
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            youWin++;
            return "You win! Paper beats rock";
        } else {
            youLose++;
            return "You lose. Scissors beats paper";
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            youWin++;
            return "You win! Scissors beats paper";
        } else {
            youLose++;
            return "You lose. Rock beats scissors";
        }
    }

}

function game() {
    let playerSelection = prompt("You play?", "eg. rock");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    console.log(`You won ${youWin} games`);
}

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelection = computerPlay();
        console.log(button.value);

        result.innerHTML = '<div>' + playRound(button.value, computerSelection) + '</div>';
        result.innerHTML += `<div>Wins: ${youWin} Losses: ${youLose} Draws: ${draws} </div>`;
    
        if (gamesPlayed == 5) {
            result.innerHTML += `<div>You have played 5 games.  ${youWin > youLose ? 'You won!' : 'You did not win.'} </div>`;
            youWin = 0;
            youLose = 0;
            draws = 0;
            gamesPlayed = 0;
        }
    });
});
