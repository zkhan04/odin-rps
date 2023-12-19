function computerChoice(){
    let random_number = Math.floor(Math.random() * 3);
    if (random_number === 0){
        return "rock";
    } else if (random_number === 1){
        return "paper";
    } else {
        return "scissors";
    }
}



function playRound() {
    let playerSelection = prompt("Enter your choice.");
    playerSelection = playerSelection.toLowerCase();

    let computerSelection;
    computerSelection = computerChoice();

    while (playerSelection === computerSelection) {
        playerSelection = prompt("Tie! Roll again.");
        computerSelection = computerChoice();
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log("You lose! Paper beats rock");
            return false;
        } else {
            console.log("You win! Rock beats scissors");
            return true;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log("You win! Paper beats rock");
            return true;
        } else {
            console.log("You lose! Scissors beats paper");
            return false;
        }
    } else {
        if (computerSelection === 'paper') {
            console.log("You win! Scissors beats paper");
            return true;
        } else {
            console.log("You lose! Rock beats scissors");
            return false;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        if (playRound()) {
            playerScore++;
        } else {
            computerScore++;
        }
        console.log("Player: " + playerScore + " Computer: " + computerScore);
    }
}

game();