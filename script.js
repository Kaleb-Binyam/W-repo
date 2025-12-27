

function getComputerChoice(){
    let computerChoice = Math.random();
    if(computerChoice <= 0.33){
        computerChoice = "scissors";
    }
    else if(computerChoice <= 0.66){
        computerChoice = 'rock';
    }
    else{
        computerChoice = "paper";
    }
    return computerChoice;
}
function getHumanChoice(){
    let humanChoice = prompt("rock, paper, scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
function playRound(humanChoice, computerChoice){

        
    if(humanSelection == 'rock' && computerSelection == 'scissors'){
            console.log("You won this round!!")
            humanScore += 1;

        }
        else if(humanSelection == 'scissors' && computerSelection == 'rock'){
            console.log('The bot won this round!!');
            computerScore += 1;
        }
        else if(humanSelection == 'paper' && computerSelection == 'rock'){
            console.log("You won this round!!");
            humanScore += 1;

        }
        else if(humanSelection == 'rock' && computerSelection == 'paper'){
            console.log("The bot won this round!!");
            computerScore += 1;
        }
        else if(humanSelection == 'paper' && computerSelection == 'scissors'){
            console.log('The bot won this round!!');
            computerScore += 1;
        }
        else if(humanSelection == 'scissors' && computerSelection == 'paper'){
            console.log('You won this round!!');
            humanScore += 1;
            
        }
        else if(humanSelection == 'paper' && computerSelection == 'paper'){
            console.log("Both paper");
        }
        else if(humanSelection == 'rock' && computerSelection == 'rock'){
            console.log("Both rock");
        }
        else if(humanSelection == 'scissors' && computerSelection == 'scissors'){
            console.log("Both scissors");
        }
        else{
            console.log("Something went wrong, maybe your choice was wrong")
        }
       
    }
function playGame(){
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
     return (humanScore > computerScore) ? `Here's your score ${humanScore} and here's the bot's score ${computerScore}. YOU WON THE GAME` : `Here's your score ${humanScore} and here's the bot's score ${computerScore}. YOU LOST TO A DAMN BOT`
}

console.log(playGame())