// the three buttons representing rock, paper, scissors
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// when any of the buttons are clicked, run playRound()
rock.addEventListener('click', () => playRound('Rock'));
paper.addEventListener('click', () => playRound('Paper'));
scissors.addEventListener('click', () => playRound('Scissors'))

// variables storing player score and computer score
let playerScore = 0;
let computerScore = 0;

// win condition
const WINNING_NUMBER = 5;

// randomly returns rock, paper or scissors
function computerChoice(){
    number_mapping = ['Rock', 'Paper', 'Scissors'];
    let random_number = Math.floor(Math.random() * 3);
    return number_mapping[random_number];
}

// uses the player input as a parameter and plays the round
function playRound(playerSelection) {
    // gets computer selection
    let computerSelection = computerChoice();

    // declares the result of each round, and result of overall game
    const resultDeclaration = document.querySelector('#round-result');
    const gameResult = document.querySelector('#game-result');
    const gameFinishedDiv = document.querySelector('#game-finished');

    // dictionary holding each move's win condition
    let winConditions = {
        'Rock': 'Scissors',
        'Scissors': 'Paper', 
        'Paper': 'Rock'
    }
    
    // displays result based on outcome
    if (playerSelection === computerSelection){
        resultDeclaration.textContent = ("Tie! Roll again.");
    } else if (winConditions[playerSelection] === computerSelection) {
        resultDeclaration.textContent = ("You win! " + playerSelection + " beats " + computerSelection);
        playerScore++;
    } else {
        resultDeclaration.textContent = ("You lose! " + computerSelection + " beats " + playerSelection);
        computerScore++;
    }

    displayScores()

    // displays message if either one hits 5 points
    if (playerScore === WINNING_NUMBER || computerScore === WINNING_NUMBER){
        if(playerScore === WINNING_NUMBER) {
            gameResult.textContent = "Player wins " + playerScore + " - " + computerScore; 
        } else {
            gameResult.textContent = "Computer wins " + computerScore + " - " + playerScore;
        }
        const replayButton = document.createElement('button');
        replayButton.textContent = "Click to play again";
        replayButton.addEventListener('click', (e) => refresh(e))
        gameFinishedDiv.appendChild(replayButton);
    }
}

// basically 'refreshes' the state of the game
function refresh(e) {
    // removes the button which launched the callback
    e.target.remove()
    playerScore = 0;
    computerScore = 0;

    // displays the scores
    displayScores()

    // empties the game result field, and refreshes the result declaration field
    const resultDeclaration = document.querySelector('#round-result');
    const gameResult = document.querySelector('#game-result')
    resultDeclaration.textContent = 'Press a button to start playing!'
    gameResult.textContent = ''
}

// displays scores
function displayScores () {
    const playerScoreField = document.querySelector('#player-score');
    const computerScoreField = document.querySelector('#computer-score');
    playerScoreField.textContent = 'Player: ' + playerScore;
    computerScoreField.textContent = 'Computer: ' + computerScore;
}