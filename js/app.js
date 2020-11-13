//-- Start game button event listener.
let newGame = '';
document.querySelector('#btn__reset').addEventListener('click', () => {
    newGame = new Game ();
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
//-- on-page keyboard event listener.
document.querySelector('#qwerty').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let rannumber = Math.floor(Math.random() * 10);
        console.log(rannumber);
        newGame.handleInteraction(e.target);
    }
});

//-- event listener for user keyboard.
window.addEventListener('keyup', (e) => {
    const keyValue = (String.fromCharCode(e.keyCode)).toLowerCase();
    if (keyChecker(keyValue)) {
        document.querySelectorAll('.key').forEach(key => {
            if (key.textContent === keyValue) newGame.handleInteraction(key);
        });
    }
});
// this function prevents the user from using the same keys twice!
// keys the user has already pressed are stored inside a variable.
let keysPressed = [];
const keyChecker = (key) => {
    if (!keysPressed.includes(key)) { 
        keysPressed.push(key);
        return true;
    } else {
        return false;
    }
};