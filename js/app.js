
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

let newGame = '';
// Start game button event listener.
document.querySelector('#btn__reset').addEventListener('click', () => {
newGame = new Game (phrases);
// on start game. keyboard buttons are reset to their normal state.
document.querySelectorAll('.key').forEach(key => {
    key.removeAttribute('disabled');
    key.classList.remove('chosen');
    key.classList.remove('wrong');
});
// resets 'lost hearts' to 'live hearts'
document.querySelectorAll('img[src="images/lostHeart.png"]').forEach(heart => {
    heart.setAttribute('src', 'images/liveHeart.png');
});
newGame.startGame();
});
// on-page keyboard event listener.
document.querySelector('#qwerty').addEventListener('click', (e) => {
if (e.target.tagName === 'BUTTON') {
    let rannumber = Math.floor(Math.random() * 10);
    console.log(rannumber);
    newGame.handleInteraction(e.target);
}
});

// event listener for user keyboard.
window.addEventListener('keyup', (e) => {
const keyValue = (String.fromCharCode(e.keyCode)).toLowerCase();
document.querySelectorAll('.key').forEach(key => {
    if (key.textContent === keyValue) newGame.handleInteraction(key);
});
});