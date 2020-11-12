
class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }
    // each character from phrase is split into an array, then one by one added to the display.
    // spaces are checked for so they are not presented into li tags.
    addPhraseToDisplay () {
        let phraseHTML = '';
        const phraseArray = this.phrase.split('');
        phraseArray.forEach(letter => {
            letter === ' ' ? phraseHTML += `<li class='space'> </li>` : phraseHTML += `<li class='hide letter ${letter}'>${letter}</li>`;
        });
        document.querySelector('#phrase ul').innerHTML = phraseHTML;
    }
    // checks to see whether the letter the user has guessed is present in the phrase.
    checkLetter (userGuess) {
        let phrase = document.querySelectorAll('.letter');
        let boolean = false;
        phrase.forEach(letter => {
            if (letter.textContent === userGuess.textContent) boolean = true;
        });
        return boolean;
    }
    // the matched letter is then revealed by changing classes to 'show'.
    showMatchedLetter (letter) {
        let matchedLetter = document.querySelectorAll(`.${letter}`);
        matchedLetter.forEach(letter => {
            letter.classList.remove('hide');
            letter.classList.add('show');
        });
    }
}
