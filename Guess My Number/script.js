'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    displayMessage('🛑 No number');
  } else if (secretNumber === guessNumber) {
    displayMessage(`🎉You win... 🎉You guess my number is ${guessNumber}`);
    document.querySelector('.number').textContent = guessNumber;
    displayNumber('#60b347', '30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (secretNumber !== guessNumber) {
    if (score > 0) {
      displayMessage(
        guessNumber > secretNumber ? `📈Too high!` : `📉 Too low!`
      );
      score--;
      displayScore(score);
    } else {
      displayMessage(`☠️You lost the game!`);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  displayNumber('#222', '15rem');
});
