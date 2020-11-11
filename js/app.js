/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrases = [
        'Better late than never',
        'Bite the bullet',
        'Break a leg',
        'Call it a day',
        'Easy does it',
        'To make matters worse',
        'You can say that again',
        'A blessing in disguise',
        'Once in a blue moon',
        'Speak of the devil'
];

 const newGame = new Game (phrases);
 document.querySelector('#btn__reset').addEventListener('click', (e) => {
    const newGame = new Game (phrases);
    newGame.startGame();
});

document.querySelector('#qwerty').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        handleInteraction(e.target);
    }
});
// Create a new instance of the Game class and add event listeners for the start button 
// and onscreen keyboard buttons:
// Add a click event listener to the "Start Game" button which creates a new Game object 
// and starts the game by calling the startGame() method.
// Add click event listeners to each of the onscreen keyboard buttons, 
// so that clicking a button calls the handleInteraction() method on the Game object. 
// Event delegation can also be used in order to avoid having to add an event listener to each 
// individual keyboard button. Clicking the space between and around the onscreen keyboard buttons 
// should not result in the handleInteraction() method being called.
