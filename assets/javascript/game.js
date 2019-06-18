// Variables
let userGuesses = [];
let wins = 0;
let losses = 0;
let numGuesses = 9;
let cpuChoice;
let userGuess;

// Random Letter Function
function randLetter() {
    const letters = ['q', 'w', 'e', 'r', 't', 'y'];
    let letter = letters[Math.floor(Math.random() * letters.length)];
    return letter;
} 

// let cpuChoice = randLetter();

function newGame() {
    userGuesses = [];
    cpuChoice = randLetter();
    numGuesses = 9;
    console.log('CPU: ' + cpuChoice);
}

newGame();

// This function runs whenver the user presses a key
document.onkeyup = function(event) {
    
    // Store user's guess
    userGuess = event.key;
    console.log('User: ' + userGuess);
    userGuesses.push(userGuess);
    console.log(userGuesses);
    numGuesses--;

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

    } else if (userGuess !== cpuChoice && numGuesses > 0) {

        console.log('Keep going');
        // numGuesses--;
        console.log('Guesses Left: ' + numGuesses);

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