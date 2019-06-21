// Variables
let userGuesses = [];
let wins = 0;
let losses = 0;
let numGuesses = 9;
let cpuChoice;
let userGuess;
let repeatCheck;

// Random Letter Function
function randLetter() {
    const alphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
    let letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    return letter;
} 

// let cpuChoice = randLetter();

function newGame() {
    userGuesses = [];
    cpuChoice = randLetter();
    numGuesses = 9;
    console.log('CPU: ' + cpuChoice);
    document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
    document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
    document.querySelector('#guessesLeft').innerHTML = 'Guesses Left: ' + numGuesses;
    document.querySelector('#guesses').innerHTML = 'Guesses: ' + userGuesses;
}

newGame();

// This function runs whenver the user presses a key
document.onkeyup = function(event) {
    
    // Store user's guess
    userGuess = event.key.toLowerCase();
    repeatCheck = userGuesses.includes(userGuess);

    // Check to see if letter is a repeat
    if (repeatCheck === false) {
        console.log('User: ' + userGuess);
        userGuesses.push(userGuess);
        console.log(userGuesses);
        numGuesses--;
    }
    

    // Go through guesses 
    // Determine if winner
    if (userGuess === cpuChoice) {

        wins++;
        console.log('Wins: ' + wins);
        newGame();

        // New CPU choice
        // cpuChoice = randLetter();
        // console.log('CPU: ' + cpuChoice);
        // numGuesses = 9;

    } else if (numGuesses > 0) {

        console.log('Keep going');
        // numGuesses--;
        console.log('Guesses Left: ' + numGuesses);
        document.querySelector('#guesses').innerHTML = 'Guesses: ' + userGuesses;
        document.querySelector('#guessesLeft').innerHTML = 'Guesses Left: ' + numGuesses;


    } else {

        losses++;
        console.log('Losses: ' + losses);
        newGame();

        // New CPU choice
        // cpuChoice = randLetter();
        // console.log('CPU: ' + cpuChoice);
        // numGuesses = 9;
    }

    
}