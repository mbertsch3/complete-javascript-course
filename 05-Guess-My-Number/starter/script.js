'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = '😒 No Number!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '🤣 Try again! 👆🏾';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '🤣 Try again! 👇🏾';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You lose!';
    }
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct!!';
  }
});
