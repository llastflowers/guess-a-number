import compareNumbers from './compare-numbers.js';

const correctNumber = 17;

const userNumber = document.getElementById('user-number');
const guessButton = document.getElementById('guess-button');
const attemptsRemaining = document.getElementById('attempts-remaining');
const gameResults = document.getElementById('game-results');

attemptsRemaining.textContent = 4;

let attempts = 4;

guessButton.addEventListener('click', () => {
    attempts = attempts - 1;
    let userGuess = userNumber.value;
    console.log(userGuess);

    attemptsRemaining.textContent = attempts;

    userGuess = Number(userGuess);

    console.log(compareNumbers(userGuess, correctNumber));

    let result = compareNumbers(userGuess, correctNumber);   

    if (result === 0) {
        gameResults.textContent = 'You Win!';
        guessButton.disabled = true;    
    } else if (attempts === 0) {
        guessButton.disabled = true;
        gameResults.textContent = 'You Lose!';
    } else if (result === 1){
        gameResults.textContent = 'Your guess was too high!';
    } else if (result === -1){
        gameResults.textContent = 'Your guess was too low!';
    }

//     const compareNumbers = (attempts) => {

//         if (attempts < 1) return true;
         
//         return false;

//         function youLose(attempts, )

//    };
});
