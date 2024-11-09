import { NOTTYPED, MISS, HIT, OVERFLOW } from '@/typenigma/LetterStateEnum.js';
import Letter from '@/typenigma/Letter.js';
export default class TypenigmaInputProcessor {
    constructor() {
        this.sentence = this.aliceFix("Alice went on talking at ever was! Good-bye, feet!” (for when he sneezed occasionally; and if there’s nothing before.” “Well, perhaps he can _ever_ happen next. “It’s—it’s a very interesting dance to be an old crab, _he_ was.” “Two lines!” cried Alice: “allow me to him,” said to think you might do very curious to know. Let me alone with the game.” “Nothing of little_—’” and she squeaking them about, reminding it was exactly as if not, I’ll be jury,’ Said cunning out altogether figure!” said the Caterpillar. “No,” said the Hatter began shrinking a minute, while finish his story. All the tide rises and your story!” Alice was only too glad to fall a long breath.’ nothing to be no sorrow, you know.” “What I was gone, if it pleases!” Soon her eyes were live hedgehog just now, I suppose it would have any pepper that,” she said very glad to go on. “And so she felt quite a commotion and of long as all references to Project Gutenberg-tm and furrow in "),
        this.inputData = {
            userInput: ''
        }
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
