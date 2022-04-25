'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    document.querySelector('.message').textContent = '🛑 No number';
  } else if (secretNumber === guessNumber) {
    document.querySelector(
      '.message'
    ).textContent = `🎉You win... 🎉You guess my number is ${guessNumber}`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guessNumber > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = `📈Too high!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `☠️You lost the game!`;
    }
  } else if (guessNumber < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = `📉 Too low!`;
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
