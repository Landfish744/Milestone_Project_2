/**
 * Declear coonstants for the DOM
 */
const buttons = document.getElementsByClassName('control');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];




/**
 * Add event listener to buttons
 */
for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerChoice = this.getAttribute('data-choice');
        playGame(playerChoice);
    })
}


/**
 * The main game function
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    if (result === 'playerScore') {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (result === 'computerScore') {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

}

/**
 * Check to see who the winner is
 */
function checkWinner(computer, player) {
    if (player === computer) {
        return 'Draw';
    } else if (
        (computer === 'rock' && (player === 'scissors' || player === 'lizard')) ||
        (computer === 'paper' && (player === 'rock' || player === 'spock')) ||
        (computer === 'scissors' && (player === 'paper' || player === 'lizard')) ||
        (computer === 'lizard' && (player === 'spock' || player === 'paper')) ||
        (computer === 'spock' && (player === 'rock' || player === 'scissors'))
    ) {
        return 'computerScore';
    } else {
        return 'playerScore';
    }
}
