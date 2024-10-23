import { NOTTYPED, MISS, HIT, OVERFLOW } from '@/typenigma/LetterStateEnum.js';
import Letter from '@/typenigma/Letter.js';
export default class TypenigmaInputProcessor {
    constructor() {
        this.sentence = 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident',
        this.charMap = { 32:" ", 48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l", 77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z", 96:"0", 97:"1", 98:"2", 99:"3", 100:"4", 101:"5", 102:"6", 103:"7", 104:"8", 105:"9", 106:"*", 107:"+", 109:"-", 110:".", 111:"/", 186:";", 187:"=", 188:",", 189:"-", 190:".", 191:"/", 192:"`", 219:"[", 220:"\\", 221:"]", 222:"'" },
        this.inputData = {
            userInput: ''
        }
    }

    onInput(e) {
        this.userInput = e;
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
    onKeyDownPress(e) {
        if (!this.getInputChar(e)) {
            if (e.ctrlKey && e.which === 8) {
                const inputSplit =  this.inputData.userInput.split(' ');
                this.inputData.userInput = inputSplit.slice(0, inputSplit.length - 1).join(' ') + " ";

                return;
            }
            if (e.which === 8) {
                this.inputData.userInput = this.inputData.userInput.slice(0, this.inputData.userInput.length - 1);
                return;
            }
            return;
        }
        this.inputData.userInput = this.inputData.userInput += this.getInputChar(e);
    }
    getInputChar(e) {
        if (this.charMap[e.which]) {
            e.stopPropagation();
            return e.key;
        }
        return null;
    }
}
