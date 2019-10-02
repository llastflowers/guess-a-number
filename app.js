const compareNumbers = (attempts) => {

    if (attempts < 1) return true;

    return false;
};

const correctNumber = 17;

let userNumber = document.getElementById('user-number');

function compareNumbers = (userNumber, correctNumber) => {
    if (userNumber === correctNumber) return 0;
    else if (userNumber > correctNumber) return 1;
    else if (userNumber < correctNumber) return -1;
   
};

const guessButton = document.getElementById('guess-button');
const attemptsRemaining = document.getElementById('attempts-remaining');

attemptsRemaining.textContent = 3;

let attempts = 3;

guessButton.addEventListener('click', () => {
    attempts = attempts - 1;

    attemptsRemaining.textContent = attempts;
});
