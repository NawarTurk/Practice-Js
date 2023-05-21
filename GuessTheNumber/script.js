'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 4;
let highScore = 0;

const checkButtonEle = document.querySelector('.checkButton');
const userGuessEle = document.querySelector('.userGuess');
const scoreEle = document.querySelector('.score');
const highScoreEle =document.querySelector('.highScore');

scoreEle.textContent = score;
highScoreEle.textContent = 0;




document.querySelector('.number').textContent = secretNumber;

checkButtonEle.addEventListener('click', function() {
    const userGuess = Number(document.querySelector('.userGuess').value);
    
    if(!userGuess) {  
        displayMSG("No number was provided")
    } else if (userGuess === secretNumber) {
        displayMSG("Correct Numner");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').getElementsByClassName.width = '40rem';
        document.querySelector('body').style.backgroundColor = 'green';
        highScore = score;
        highScoreEle.textContent = highScore;
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

const displayMSG = function (msg) {
    document.querySelector('.message').textContent = msg;
};

const displayScore = function() {
    scoreEle.textContent = score;
};

const endGame = function() {
    displayMSG("GAME OVER !!! ... Try again")
    document.querySelector('body').style.backgroundColor = 'red';
    userGuessEle.disabled = true;
    checkButtonEle.disabled = true;
    displayScore();
};