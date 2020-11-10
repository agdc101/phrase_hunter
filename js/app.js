/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
document.querySelector('#qwerty').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        handleInteraction(e.target);
    }
});