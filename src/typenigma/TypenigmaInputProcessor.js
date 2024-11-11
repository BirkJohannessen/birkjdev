import { NOTTYPED, MISS, HIT, OVERFLOW } from '@/typenigma/LetterStateEnum.js';
import Letter from '@/typenigma/Letter.js';
export default class TypenigmaInputProcessor {
    constructor() {
        this.sentence = this.aliceFix("Alice went on in the air off at once in her brother’s Latin Grammar, “A mouse—to a mouse—O mouse!”) The Mouse dear! Do come up: if not, I’ll tell its age, there stood near the very deep, hollow the soldiers, or corrupt data, transcription errors, a copyright in the second thought she had got its head. “Very uncommon way. “Hold you think I must go and get ready to play croquet she was a little thing you like to be talking. “It _began_ with us!’” “Yes,” said the Caterpillar contemptuously. “I dare say that Alice, the name “W. RABBIT,” engraved upon it.) “Here! Come and join the trees as well enough hatching out laughing: and while finished quite agree to come, so she began, in a solemnly. Alice dear!” cried Alice did not dare to disagree with his head impatient tone: “explanation; “I’ve tried the poor Alice, and she ran across the garden door. “Well, I’d hardly room for a dunce? Go on!” “Hold you like!” then that did they wouldn’t keep the same thing about as "),
        this.inputData = {
            userInput: ''
        }
    }

    calculateCorrectLetters() {
        const fact = this.sentence.split(' ');
        const input = this.inputData.userInput.split(' ');
        let correct = 0;
        for (let i = 0; i < input.length; i++) {
            if (fact[i] === input[i]) {
                correct += fact[i].length;
                if (i + 1 < input.length) {
                    correct += 1; // space
                }
            }
        }
        return correct;
    }

    calculateCorrectPercentage() {
        const fact = this.sentence.split(' ');
        const input = this.inputData.userInput.split(' ');
        let correct = 0;
        for (let i = 0; i < input.length; i++) {
            if (fact[i] === input[i]) {
                correct += 1;
            }
        }
        return parseFloat(correct / input.length).toFixed(2);
    }

    aliceFix(alicetxt) {
        let str = alicetxt
            .replace(/[!()”’“—]+/g, '')
            .replace(/[,._:;]+/g, '')
            .replace(/[-]+/g, ' ')
            .split('  ').join(' ')
            .toLowerCase();
        return str; 
    }

    reset() {
        this.inputData.userInput = '';
    }

    enstructSentence() {
        return this.sentence.split(' ').map(word => word.split(''));
    }
    enstructInput() {
        const fromInput = this.inputData.userInput.split(' ').map(word => word.split(''));
        for (let i = 0 ; i < this.enstructSentence().length - fromInput.length;) {
            fromInput.push([]);
        }
        return fromInput;
    }
    enstructData() {
        const enstructedInput = this.enstructInput(); 
        const data = [];

        this.enstructSentence().forEach((word, wordIdx) => {
            const inputWord = enstructedInput[wordIdx];
            const wordData = [];
            let lastIdx = null;
            word.forEach((letter, idx) => {
                lastIdx = idx;
                const letterData = new Letter(letter);
                if (inputWord.length - 1 < idx) {
                    letterData.setState(NOTTYPED);
                } else if (inputWord[idx] === letter) {
                    letterData.setState(HIT);
                } else {
                    letterData.setState(MISS);
                }
                wordData.push(letterData);
            });
            if (lastIdx !== null && inputWord.length - 1 > lastIdx) {
                for (let i = lastIdx + 1 ; i < inputWord.length; i++) {
                    const letterData = new Letter(inputWord[i]);
                    letterData.setState(OVERFLOW);
                    wordData.push(letterData);
                }
            }
            data.push(wordData);
        });
        this.putCursor(data);
        return data;
    }
    putCursor(data) {
        const userInputAsList = this.inputData.userInput.split(' ');

        let idxLastWordEdited = userInputAsList.length - 1;
        const idxLastLetterEdited = userInputAsList[idxLastWordEdited].length -1;

        if(idxLastWordEdited == -1) {
            idxLastWordEdited++;
        }

        
        if (idxLastLetterEdited === -1) {
            data[idxLastWordEdited][0].setCursor(true, true);
        } else if (idxLastLetterEdited === 0) {
            data[idxLastWordEdited][idxLastLetterEdited].setCursor(true, false);
        } else {
            data[idxLastWordEdited][idxLastLetterEdited].setCursor(true, false);
        }
    }
    onInput(e) {
        this.inputData.userInput = e.target.value;
    }
}
