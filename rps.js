// randomly returns rock, paper or scissors
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

// uses the player input as a parameter and plays the round
function playRound(playerSelection) {
    // declares the result of each round
    const result_declaration = document.querySelector('#round-result');

    let computerSelection;
    computerSelection = computerChoice();

    let playerWin = new Event('playerWin');
    let computerWin = new Event('computerWin');

    if (playerSelection === computerSelection){
        result_declaration.textContent = ("Tie! Roll again.")
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            result_declaration.textContent = "You lose! Paper beats rock";
            computer.dispatchEvent(computerWin);
        } else {
            result_declaration.textContent = "You win! Rock beats scissors";
            player.dispatchEvent(playerWin);
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result_declaration.textContent = "You win! Paper beats rock";
            player.dispatchEvent(playerWin);
        } else {
            result_declaration.textContent = "You lose! Scissors beats paper";
            computer.dispatchEvent(computerWin);
        }
    } else {
        if (computerSelection === 'paper') {
            result_declaration.textContent = "You win! Scissors beats paper";
            player.dispatchEvent(playerWin);
        } else {
            result_declaration.textContent = "You lose! Rock beats scissors";
            computer.dispatchEvent(computerWin);
        }
    }
}

// the three buttons representing rock, paper, scissors
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// when any of the buttons are clicked, run playRound()
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'))

// variables storing player score and computer score
let playerScore = 0;
let computerScore = 0;

// references to text fields displaying player and computer score
const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');

// the player score field listens for a playerWin event.
player.addEventListener('playerWin', (e) => {
    playerScore += 1;
    e.target.textContent = "Player: " + playerScore;

    // if the playerscore hits 5, send a game-end event to gameResult indicating that the player won
    if (playerScore === 5) {
        let playerVictory = new CustomEvent('gameEnd', {
            detail: {
                winner: 'Player'
            }
        });
        gameResult.dispatchEvent(playerVictory);
    }
})

// computer score field listens for a computerWin event.
computer.addEventListener('computerWin', (e) => {
    computerScore += 1;
    e.target.textContent = "Computer: " + computerScore;

    // if the computer score hits 5, send a game-end event to gameResult indiciating that the computer won
    if (computerScore === 5) {
        let computerVictory = new CustomEvent('gameEnd', {
            detail: {
                winner: 'Computer'
            }
        });
        gameResult.dispatchEvent(computerVictory);
    }
})

// when someone wins, display it in the gameResult field
const gameResult = document.querySelector('#game-result');
gameResult.addEventListener('gameEnd', (e) => {
    gameResult.textContent = e.detail.winner + ' wins!';
})