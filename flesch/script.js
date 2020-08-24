// stopped here last
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash

// note: basically no reason to use "var" when declaring a variable
// use "let" instead
let randomNum = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

alert("I am a placeholder");

function checkGuess() {
    alert("I am a placeholder");
}