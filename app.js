const container = document.querySelector('#container');

const results = document.createElement('div');
results.classList.add('results');
container.appendChild(results);

const resultsTitle = document.createElement('h1');
resultsTitle.classList.add('resultsTitle');
resultsTitle.innerHTML = 'RESULTS:';
results.appendChild(resultsTitle);

const resultDisplay = document.createElement('h2');
results.appendChild(resultDisplay);

const choices = ['rock', 'paper', 'scissors'];


const handleClick = (e) =>{
    const userChoice = e.target.innerHTML
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    
}

choices.forEach(choice =>{
    const buttons = document.createElement('button');
    buttons.innerHTML = choice;
    buttons.addEventListener('click', handleClick);
    container.appendChild(buttons);
});




let playerScore =0;
let computerScore =0;

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        playerScore++;
        resultDisplay.innerHTML = `It's a tie! you both picked ${playerSelection}`;
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        resultDisplay.innerHTML =`You win! ${playerSelection} beats ${computerSelection}`;
        
     } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        resultDisplay.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;

     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        resultDisplay.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
        
     } else {
        computerScore++;
        resultDisplay.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
        
     }
}





function game(){
    
    // for(let i = 0; i < 5; i++){
    //     const playerSelection = "rock";
    //     const computerSelection = getComputerChoice();
    //     playRound(playerSelection, computerSelection);
    //     console.log(`Player Score: ${playerScore}`);
    //     //.innerHTML = `Player Score: ${playerScore}
    //     console.log(`Computer Score: ${computerScore}`);
    //     //.innerHTML = `Computer Score: ${computerScore}
    // }
    if(playerScore > computerScore){
        console.log( `Player Wins!`);
    }else{
        console.log( `Computer Wins!`);
    }
}

game();

