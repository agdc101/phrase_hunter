
class Game {
    constructor (phrases) {
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
    }
    // start game! overlay is hidden. random phrase is retrieved and displayed!
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    // random number is created then passed as an index value to create a new phrase.
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * 10)];
        return new Phrase(randomPhrase);
    }
    // if the user guesses correctly, keyboard is assigned a class and the letter is revealed.
    // if the user is wrong, a life is lost and the appropriate class is assigned to keyboard key.
    handleInteraction (userLetter) {
        userLetter.setAttribute('disabled', true);
        if (!this.activePhrase.checkLetter(userLetter)) {
            userLetter.classList.add('wrong');
            this.removeLife();
        } else {
            userLetter.classList.add('chosen');
            this.activePhrase.showMatchedLetter(userLetter.textContent);
            if (this.checkForWin()) this.gameOver();
        }
    }
    // selects closest 'live heart' and replaces src att with the 'lost heart' image.
    removeLife() {
        this.missed += 1;
        const heart = document.querySelector('img[src="images/liveHeart.png"]');
        heart.setAttribute('src', 'images/lostHeart.png');
        if (this.missed == 5) this.gameOver();
    }
    // checks for win by comparing the array lengths of letters, with letters that have the show class.
    checkForWin() {
        const letters = document.querySelectorAll('.letter');
        const lettersShown = document.querySelectorAll('.show');
        return letters.length == lettersShown.length ? true : false;
    }
    // based on the result, the appropriate message is display, styling also added to the title.
    gameOver() {
        document.querySelector('#overlay').style.display = 'flex';
        this.checkForWin() ? ( document.querySelector('#game-over-message').textContent = 'Well Done! You Got The Correct Answer!',
                               document.querySelector('.title').classList.remove('lose'),
                               document.querySelector('.title').classList.add('win'))
                           : ( document.querySelector('#game-over-message').textContent = 'Unlucky! You Ran Out Of Guesses!',
                               document.querySelector('.title').classList.remove('lose'),
                               document.querySelector('.title').classList.add('lose'));
    }
}
