// Variables
let userGuesses = [];
let wins = 0;
let losses = 0;
let numGuesses = 9;

// Random Letter Function
function randLetter() {
    const letters = ['q', 'w', 'e', 'r', 't', 'y'];
    let letter = letters[Math.floor(Math.random() * letters.length)];
    return letter;
} 

let cpuChoice = randLetter();
console.log('CPU: ' + cpuChoice);

// This function runs whenver the user presses a key
document.onkeyup = function(event) {
    
    // Store user's guess
    let userGuess = event.key;
    console.log('User: ' + userGuess);
    userGuesses.push(userGuess);
    console.log(userGuesses);

    // Go through guesses 
    // Determine if winner
    if (userGuess === cpuChoice) {

        wins++;
        console.log('Wins: ' + wins);

        // New CPU choice
        cpuChoice = randLetter();
        console.log('CPU: ' + cpuChoice);
        numGuesses = 9;

    } else if (userGuess !== cpuChoice && numGuesses > 1) {

        console.log('Keep going');
        numGuesses--;
        console.log('Guesses Left: ' + numGuesses);

    } else {

        losses++;
        console.log('Losses: ' + losses);

        // New CPU choice
        cpuChoice = randLetter();
        console.log('CPU: ' + cpuChoice);
        numGuesses = 9;
    }

    
}