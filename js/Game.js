/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor (missed = 0, phrases, activePhrase = null) {
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase;
    }
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseDisplay();
    };
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * 6);
        return this.phrases[randomNumber];
    };
    handleInteraction (userLetter) {
        userLetter.setAttribute('disabled', true);
        if (!this.activePhrase.checkLetter(userLetter)) {
            userLetter.classList.add('wrong');
            this.removeLife();
        } else {
            userLetter.classList.add('chosen');
            this.activePhrase.showMatchedLetter(userLetter);
            if (this.checkForWin()) gameOver();
        };
    };
    removeLife() {
        this.missed += 1;
        document.querySelector('tries img').setAttribute('src', 'images/lostHeart.png');
        if (missed == 5) this.gameOver();
    };
    checkForWin() {
        const letters = document.querySelectorAll('letter');
        const lettersShown = document.querySelectorAll('chosen');
        return letters.length == lettersShown.length ? true : false;
    };
    gameOver() {
        document.querySelector('#overlay').style.display = 'flex';
        this.checkForWin() ? ( document.querySelector('#game-over-message').textContent = 'Well Done! You Got The Correct Answer!',
                               document.querySelector('.title').classList.remove('start'),
                               document.querySelector('.title').classList.add('win'))
                           : ( document.querySelector('#game-over-message').textContent = 'Unlucky! You Ran Out Of Guesses!',
                               document.querySelector('.title').classList.remove('start'),
                               document.querySelector('.title').classList.add('lose'));
    };
};
const game1 = new Game(0, 'piss flaps', null);
game1.getRandomPhrase();

// gameOver(): this method displays the original start screen overlay, and depending 
// on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, 
// and replaces the overlay’s start CSS class with either the win or lose CSS class.
