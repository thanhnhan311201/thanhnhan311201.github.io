'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 500) + 1;
let score = 10;
let highscore = 0;
let lowerBound = 0;
let upperBound = 1000;

let popup = document.querySelector('.popup_message');

console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const popupMessage = function (message) {
  document.querySelector('.popup_mssg_desc').textContent = message;
};

const disabledButton = function (idName) {
  document.getElementById(idName).disabled = true;
  document.getElementById(idName).style.backgroundColor = '#ccc';
};

const enableButton = function (idName) {
  document.getElementById(idName).disabled = false;
  document.getElementById(idName).style.backgroundColor = '#eee';
};

const checkNumber = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess < lowerBound || guess > upperBound) {
    popup.classList.add('open_popup');

    disabledButton('disabled_check');
    disabledButton('disabled_again');

    let popup_mssg = `You must enter a number between ${lowerBound} and ${upperBound}!`;
    popupMessage(popup_mssg);
  } else {
    // When there is no input
    if (!guess) {
      // document.querySelector('.message').textContent = '⛔️ No number!';
      displayMessage('⛔️ No number!');

      // When player wins
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '🎉 Correct Number!';
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      disabledButton('disabled_check');

      if (score > highscore) {
        highscore = score;
        // document.querySelector('.highscore').textContent = highscore;
      }

      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
        if (guess > secretNumber) {
          upperBound = guess;
          displayMessage(`Between ${lowerBound} and ${upperBound}`);
        } else {
          lowerBound = guess;
          displayMessage(`Between ${lowerBound} and ${upperBound}`);
        }
        // score--;
        // document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = '💥 You lost the game!';
        displayMessage(
          `💥 You lost the game! The correct number is ${secretNumber}.`
        );

        disabledButton('disabled_check');

        // document.querySelector('.score').textContent = 0;
      }
    }

    document.querySelector('.guess').value = '';

    //   // When guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   // When guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
};

document.querySelector('.check').addEventListener('click', function () {
  checkNumber();
});

document
  .getElementById('guessNumber')
  .addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      checkNumber();
    }
  });

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  lowerBound = 0;
  upperBound = 1000;
  secretNumber = Math.trunc(Math.random() * 500) + 1;
  console.log(secretNumber);

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  enableButton('disabled_check');
});

document.querySelector('.stupid_again').addEventListener('click', function () {
  popup.classList.remove('open_popup');

  enableButton('disabled_check');
  enableButton('disabled_again');

  score = 10;
  lowerBound = 0;
  upperBound = 1000;
  secretNumber = Math.trunc(Math.random() * 500) + 1;
  console.log(secretNumber);

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
