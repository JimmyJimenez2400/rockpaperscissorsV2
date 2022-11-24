const winner = document.querySelector('.winner');
const roundWinner = document.querySelector('.roundWinner');
const round = document.querySelector('.round');
const displayPlayerScore = document.querySelector('.displayPlayerScore');
const displayComputerScore = document.querySelector('.displayComputerScore');
const displayRoundNum = document.querySelector('.displayRoundNum');
const openModal = document.querySelector('#openModal');


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

function resetGame(){
    window.location.reload();
    return false;
}

function openEndGameModal(){
    openModal.classList.remove('hide');
}



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
        //append img to screen for playerSelection and computerSelection
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
    const allBtns = document.querySelectorAll('.gameBtn');
    if (playerScore === 5 || computerScore === 5) {
        Array.from(allBtns).forEach(button => {
            button.disabled = true;
        });
        if(gameWinner()){
            openEndGameModal();
        }
    }
    
}


function gameWinner() {
    return playerScore > computerScore ? winner.textContent = `You won the game!` : winner.textContent = `You lost the game...`;
}




function game() {

    playRound();
    isGameOver();
    


}


game();