'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = '😒 No Number!';
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent = guess < secretNumber ? '🤣 Try again! 👆🏾' : '🤣 Try again! 👇🏾';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
      document.querySelector('.message').textContent = '😢 You lose!';
    }
  } 
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = '👌Start guessing!';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
