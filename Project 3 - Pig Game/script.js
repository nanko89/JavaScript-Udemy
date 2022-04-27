'use strict';

// document.querySelector('score--0') ==  document.querySelector('#score--0')

const scoreZeroElement = document.querySelector('#score--0');
const scoreOneElement = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('btn--new');
const btnRoll = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');

scoreZeroElement.textContent = 0;
scoreOneElement.textContent = 0;
diceElement.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  let dice = Math.trunc(Math.random * 6) + 1;

  diceElement.classList.remove('hidden');
});
