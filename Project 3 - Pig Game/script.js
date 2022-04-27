'use strict';

// document.querySelector('score--0') ==  document.querySelector('#score--0')

const playeZeroElement = document.querySelector('.player--0');
const playeOneElement = document.querySelector('.player--1');

const scoreZeroElement = document.querySelector('#score--0');
const scoreOneElement = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');

const currentScoreZero = document.querySelector('#current--0');
const currentScoreOne = document.querySelector('#current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  playeZeroElement.classList.toggle('player--active');
  playeOneElement.classList.toggle('player--active');
};

scoreZeroElement.textContent = 0;
scoreOneElement.textContent = 0;

diceElement.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceElement.classList.remove('hidden');

    diceElement.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;

      diceElement.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  currentScore = 0;
  scores = [0, 0];

  scoreZeroElement.textContent = 0;
  scoreOneElement.textContent = 0;

  currentScoreZero.textContent = 0;
  currentScoreOne.textContent = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  playeZeroElement.classList.add('player--active');
  playeOneElement.classList.remove('player--active');

  activePlayer = 0;
});
