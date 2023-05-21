'use strict';

const initialScore = 10;
let secretNumber=Math.trunc(Math.random()*20) + 1; 
let score = initialScore;
let highScore = 0;

const checkButtonEle = document.querySelector('.checkButton');
const tryAgainButtonEle = document.querySelector('.tryAgainButton');
const userGuessEle = document.querySelector('.userGuess');
const scoreEle = document.querySelector('.score');
const highScoreEle = document.querySelector('.highScore');
const secretNumberEle = document.querySelector('.secretNumber');
const bodyEle = document.querySelector('body');

scoreEle.textContent = score;
highScoreEle.textContent = 0;
secretNumberEle.textContent = secretNumber;

// show();


checkButtonEle.addEventListener('click', function() {
    const userGuess = Number(document.querySelector('.userGuess').value);
    
    if(!userGuess) {  
        displayMSG("No number was provided")
    } else if (userGuess === secretNumber) {
        displayMSG("Correct Numner");
        secretNumberEle.style.width = '100rem';
        bodyEle.style.backgroundColor = 'green';     
        updateHighScore();
        disbaleInputs();
        secretNumberEle.textContent = secretNumber;
    } else {
        score--;
        if(score === 0) {
            endGame();
        } else { 
            if (userGuess > secretNumber) {
                displayMSG("Try a smaller number!")
            } else {
                displayMSG("Try a bigger number!")
            }
            displayScore();
        }
    }
})

const generateSecretNumber = function() {
    secretNumber = Math.trunc(Math.random()*20) + 1;
};

tryAgainButtonEle.addEventListener('click', function () {
    enableInputs();
    bodyEle.style.backgroundColor = 'white';     
    displayMSG('Start guessing ...');
    score = initialScore;
    scoreEle.textContent = score; 
    generateSecretNumber();  
    secretNumberEle.textContent = '?';
})

const displayMSG = function (msg) {
    document.querySelector('.message').textContent = msg;
};

const displayScore = function() {
    scoreEle.textContent = score;
};

const endGame = function() {
    displayMSG("GAME OVER !!! ... Try again")
    bodyEle.style.backgroundColor = 'red';     
    disbaleInputs();
    displayScore();
    secretNumberEle.textContent = secretNumber;
};



const updateHighScore = function() {
    if(score > highScore) {
        highScore = score;
        highScoreEle.textContent = highScore;
    }
};

const disbaleInputs = function() {
    userGuessEle.disabled = true;
    checkButtonEle.disabled = true;
};

const enableInputs = function() {
    userGuessEle.disabled = false;
    checkButtonEle.disabled = false;
};


