/*
     Create a simple number guessing game where the player can decide if they want to play or not. If they choose to play, they must guess a randomly generated number between 1 and 20.

     Prompt the user with the question:
    "Do you want to play my wonderful game? (yes/no)"

    If the user confirms (yes), start the game.
    If the user declines (no), display "Maybe Next Time." and exit.
    If the user chooses to play:

    Generate a random number between 1 and 20 (inclusive). //Hint-- Math.random() * 20
    Allow the player 3 chances to guess the number.
    For each guess:

    If the guess is too high, display: "Sorry the number is too big".
    If the guess is too low, display: "Sorry the number is too small".
    If the guess is correct, display: "Congratulations!!! You guessed correctly." and exit the guessing loop.
    Once the player uses all 3 attempts or guesses the correct number, the game ends.
*/

outer: do {
    let play = confirm("Do you want to play my wonderful game? (yes/no)");
    if (play) {
        let answer = Math.floor(Math.random() * 20) + 1;
        inner: for (let i = 3; i > 0; i--) {
            let guess = prompt(`Pick a number from 1-20. You have ${i} attempt(s) left:`);
            if (guess > answer) {
                console.log("Sorry, the number is too big.");
            } else if(guess < answer) {
                console.log("Sorry, the number is too small.");
            } else {
                console.log(`Congratulations!!! You guessed correctly. The answer is ${answer}`);
                break inner;
            }
        }
        console.log(`You can try again!!! The correct answer was ${answer}`)
    } else {
        console.log("Maybe Next Time.");
        break outer; // Exit the loop
    }
} while (true);
