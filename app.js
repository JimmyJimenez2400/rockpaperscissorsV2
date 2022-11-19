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
        return `It's a tie! you both picked ${playerSelection}`;
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
        
     } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;

     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
        
     } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
        
     }
}





function game(){
    
    for(let i = 0; i < 5; i++){
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Player Score: ${playerScore}`);
        //.innerHTML = `Player Score: ${playerScore}
        console.log(`Computer Score: ${computerScore}`);
        //.innerHTML = `Computer Score: ${computerScore}
    }
    if(playerScore > computerScore){
        console.log( `Player Wins!`);
    }else{
        console.log( `Computer Wins!`);
    }
}

game();

