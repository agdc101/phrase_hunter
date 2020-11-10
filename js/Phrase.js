/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay () {
        let phraseHTML = '';
        const phraseArray = this.phrase.split('');
        phraseArray.forEach(letter => {
            letter === ' ' ? phraseHTML = `<li class='space'> </li>` : phraseHTML = `<li class='hide letter ${letter}'>${letter}</li>`;
            return phraseHTML;
        });
    }
    checkLetter (userGuess) {
        let phrase = document.querySelectorAll('letter');
        const boolean = false;
        phrase.forEach(letter => {
            letter.textContent === userGuess.textContent ? ( this.showMatchedLetter(userGuess.textContent), boolean = true ) : ( console.log('wrong Guess'));
        });
        return boolean;
    };
    showMatchedLetter (letter) {
        let matchedLetter = document.querySelectorAll(`${letter}`);
        matchedLetter.forEach(letter => {
            letter.classList.remove('hide');
            letter.classList.add('show');
        })
    };
};
