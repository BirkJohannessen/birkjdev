import { NOTTYPED, MISS, HIT, OVERFLOW } from '@/models/typenigma/LetterStateEnum';
import Letter from '@/models/typenigma/Letter';
import type { Sentence } from '@/models/typenigma/Sentence';

interface TypenigmaInput {
    userInput: string;
}

export default class TypenigmaInputProcessor {
    public sentence: string;
    public inputData: TypenigmaInput;

    constructor() {
        this.sentence = this.aliceFix("Alice went on in the air off at once in her brother’s Latin Grammar, “A mouse—to a mouse—O mouse!”) The Mouse dear! Do come up: if not, I’ll tell its age, there stood near the very deep, hollow the soldiers, or corrupt data, transcription errors, a copyright in the second thought she had got its head. “Very uncommon way. “Hold you think I must go and get ready to play croquet she was a little thing you like to be talking. “It _began_ with us!’” “Yes,” said the Caterpillar contemptuously. “I dare say that Alice, the name “W. RABBIT,” engraved upon it.) “Here! Come and join the trees as well enough hatching out laughing: and while finished quite agree to come, so she began, in a solemnly. Alice dear!” cried Alice did not dare to disagree with his head impatient tone: “explanation; “I’ve tried the poor Alice, and she ran across the garden door. “Well, I’d hardly room for a dunce? Go on!” “Hold you like!” then that did they wouldn’t keep the same thing about as "),
        this.inputData = {
            userInput: ''
        }
    }

    calculateCorrectLetters() : number {
        const fact: string[] = this.sentence.split(' ');
        const input: string[] = this.inputData.userInput.split(' ');
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

    calculateCorrectPercentage() : string {
        const fact: string[] = this.sentence.split(' ');
        const input: string[] = this.inputData.userInput.split(' ');
        let correct = 0;
        for (let i = 0; i < input.length; i++) {
            if (fact[i] === input[i]) {
                correct += 1;
            }
        }
        return (correct / input.length).toFixed(2);
    }

    aliceFix(alicetxt: string) : string {
        let str = alicetxt
            .replace(/[!()”’“—]+/g, '')
            .replace(/[,._:;]+/g, '')
            .replace(/[-]+/g, ' ')
            .split('  ').join(' ')
            .toLowerCase();
        return str; 
    }

    reset() : void {
        this.inputData.userInput = '';
    }

    enstructSentence() : string[][] {
        return this.sentence.split(' ').map(word => word.split(''));
    }

    enstructInput(): string[][] {
        const fromInput = this.inputData.userInput.split(' ').map(word => word.split(''));
        for (let i = 0 ; i < this.enstructSentence().length - fromInput.length;) {
            fromInput.push([]);
        }
        return fromInput;
    }

    enstructData() : Sentence {
        const enstructedInput: string[][] = this.enstructInput(); 
        const data: Sentence = [];

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

    putCursor(data: Sentence) : void {
        const userInputAsList: string[] = this.inputData.userInput.split(' ');

        let idxLastWordEdited: number = userInputAsList.length - 1;
        const idxLastLetterEdited: number = userInputAsList[idxLastWordEdited].length -1;

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

    onInput(e: KeyboardEvent) {
        this.inputData.userInput = (e?.target as HTMLInputElement).value;
    }
}
