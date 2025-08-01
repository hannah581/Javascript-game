"use strict";
/**
 * Number Guessing Game- "The Codebreaker Challenge"
 * - A simple game where the player has to guess a number between 1 and 100.
 * - The player has a limited number of attempts to guess the correct number.
 * - The game provides feedback on whether the guess is too high, too low, or correct.
 * - If the player guesses correctly, they win; otherwise, they lose after exhausting their attempts.
 * - The game can be played multiple times.
 * - The player can choose to play again after each game.
 * - The game keeps track of the number of attempts taken to guess the correct number.
 * - The game can be played in a web browser.
 */

// --- INTRO STORY ---
alert(" Welcome to the Codebreaker Challenge!\n\n" +
"The Evil AI has locked the digital core of the planet with a secret shutdown code.\n\n" +
"Your mission is to guess the secret code before the AI takes over the world.\n\n" +
"You have 10 attempts to guess the correct number between 1 and 100.\n\n" +
"Fail and the AI takes over the world!\n\nLet the mind games begin!");


// --- GENERATING RANDOM NUMBERS---
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
}

// --- GAME FUNCTION ---
function getPlayerGuess(round) {
    let input;
    while (true) {
        input = prompt( `Round ${round}/10- AI firewall is active!
Guess the secret code (1-100):`);

        if (input === null) {
            const giveUp = confirm("Are you sure you want to give up? The AI will take over the world if you do.");
            if (giveUp) return null; // Player chose to give up
            alert("Game cancelled. The AI will take over the world!");
            
        }
        let guess = parseInt(input, 10);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            return guess;
        } else {
            alert("Invalid input. Please enter a number between 1 and 100.");
            continue; // Prompt again for a valid guess
        }
        }
}

// --- MAIN GAME LOOP ---
function checkGuess(guess, target) {
    if (guess < target) {
        return " Too low! The AI laughs at your feeble attempt.";
    } else if (guess > target) {
        return " Too high! The AI smirks at your misguided guess.";
    } else {
        return " Direct hit! You have cracked the code!";
    }
}

// --- GAME START ---
function calculateScore(attemptsUsed) {
    return Math.max(0, 11 - (attemptsUsed ) * 10); // Calculates score based on attempts used
    // The fewer attempts used, the higher the score
    // Maximum score is 100, minimum is 0
}

// --- GAME LOGIC ---
function game() {
    const secretNumber = generateRandomNumber();
    let attempts = 0;
    let cracked = false;

    alert(" Mission started! The AI is on high alert. You have 10 rounds to guess the secret code.");

    while (attempts < 10) {
        attempts++;
        let guess = getPlayerGuess(attempts);

        if (guess === null) {
            alert("You have given up! The AI reigns supreme!");
            return;
        }

        let result = checkGuess(guess, secretNumber);
        alert(`Round ${attempts}: You guessed ${guess}. ${result}`);
        console.log(`Round ${attempts}: You guessed ${guess}. ${result}`);

        if (guess === secretNumber) { 
            cracked = true;
            break;
        } else if (attempts < 10) {
            alert(`You have ${10 - attempts} attempts left. The AI is getting impatient!`);
        
        }
    }
    // --- GAME OVER ---
    if (cracked) {
        const score = calculateScore(attempts);
        alert(`Congratulations! You cracked the code in ${attempts} attempts! Your score is ${score}. The AI has been defeated... for now.`);
    } else {
        alert(`Game over! The AI has won. The secret code was ${secretNumber}. Better luck next time!`);
    }
}

// Start the game
game ();