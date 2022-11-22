const spansWinner = document.querySelector('.spanWinner');
const roundWinner = document.querySelector('.roundWinner');
const round = document.querySelector('.round');
const displayPlayerScore = document.querySelector('.displayPlayerScore');
const displayComputerScore = document.querySelector('.displayComputerScore');
const displayRoundNum = document.querySelector('.displayRoundNum');


let roundNum = 0;
let playerScore = 0;
let computerScore = 0;



const buttons = document.querySelectorAll('button');

// const handleClick = (e) => {
//     const userChoice = e.target.value;
//     console.log(userChoice);
//     const computerChoice = getComputerChoice();
//     playRound(userChoice, computerChoice);

// }






buttons.forEach(button => {
    // button.addEventListener('click', handleClick);
    button.addEventListener('click', (e) => {
        let playerSelection = e.target.value;
        console.log(playerSelection);
        playRound(playerSelection);
    });
    button.addEventListener('click', isGameOver);
})






function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        roundWinner.textContent = "It's a draw!";
    }
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        roundWinner.textContent = `Player wins the round! ${playerSelection} beats ${computerSelection}`;
    }
    if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        roundWinner.textContent = `Computer wins the round! ${computerSelection} beats ${playerSelection}`;
    }
    displayPlayerScore.textContent = `${playerScore}`;
    displayComputerScore.textContent = `${computerScore}`;
    displayRoundNum.textContent = `${roundNum++}`;
}

function isGameOver(){
    const allBtns = document.querySelectorAll('button');
    if (playerScore === 5 || computerScore === 5) {
        Array.from(allBtns).forEach(button => {
            button.disabled = true;
        });
    }
}


function gameWinner() {
    if (playerScore === computerScore) {
        //display result


    } else if (playerScore > computerScore) {
        //display result for player win

    } else if (computerScore > playerScore) {
        //display result for computer win

    }
    // resetGame();
}


function game() {

    playRound();
    gameWinner();

}


game();