// Initialize DOM State
import compareNumbers from './compare-numbers.js';
const correctNumber = Math.floor((Math.random() * 20) + 1);
const userNumber = document.getElementById('user-number');
const guessButton = document.getElementById('guess-button');
const attemptsRemainingDisplay = document.getElementById('attempts-remaining');
const gameResultsDisplay = document.getElementById('game-results');

attemptsRemainingDisplay.textContent = 4;
let attempts = 4;

// Utilities
const displayResults = () => {
    console.log(correctNumber);
    let userInput = userNumber.value;
    userInput = Number(userInput);
    let result = compareNumbers(userInput, correctNumber);   

    if (result === 0) {
        gameResultsDisplay.textContent = 'You Win!';
        guessButton.disabled = true;    
    } else if (attempts === 0) {
        guessButton.disabled = true;
        gameResultsDisplay.textContent = 'You Lose!';
    } else if (result === 1){
        gameResultsDisplay.textContent = 'Your guess was too high!';
    } else if (result === -1){
        gameResultsDisplay.textContent = 'Your guess was too low!';
    }
};

// Change DOM State
const providedUserFeedback = () => {
    attempts--;
    attemptsRemainingDisplay.textContent = attempts;

    displayResults();
};

// Event Listeners
guessButton.addEventListener('click', providedUserFeedback);