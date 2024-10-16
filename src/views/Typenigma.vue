<template>
    <div class="wrapper">
        <div class="center">
            <div id="sentence">
                <span v-for="word in this.enstructData()" class="word">
                    <div v-for="letter in word" class="letter">
                        <span v-if="letter.isCursor() && letter.isCursorLeft()" class="cursor"></span>
                        <span v-if="letter.getState() === 0" class="default">{{ letter.getLetter() }}</span>
                        <span v-if="letter.getState() === 1" class="miss">{{ letter.getLetter() }}</span>
                        <span v-if="letter.getState() === 2" class="hit">{{ letter.getLetter() }}</span>
                        <span v-if="letter.getState() === 3" class="miss">{{ letter.getLetter() }}</span>
                        <span v-if="letter.isCursor() && !letter.isCursorLeft()" class="cursor"></span>
                    </div>
                </span>
            </div>
            <div class="btns">
                <button class="material-symbols-outlined" @click="this.restart()">restart_alt</button>
            </div>
        </div>
    </div>
</template>

<script>
import Letter from '@/typenigma/Letter.js';
import { NOTTYPED, MISS, HIT, OVERFLOW } from '@/typenigma/LetterStateEnum.js';

export default {
    name: 'Typenigma',
    beforeMount() {
        document.addEventListener("keydown", this.onKeyDownPress);

    },
    methods: {
        onInput(e) {
            this.userInput = e;
        },
        restart() {
            this.userInput = '';
            document.activeElement.blur()
            document.getElementById('sentence').focus();
        },
        enstructSentence() {
            return this.sentence.split(' ').map(word => word.split(''));
        },
        enstructInput() {
            const fromInput = this.userInput.split(' ').map(word => word.split(''));
            // add padding by definition on sentence.
            for (let i = 0 ; i < this.enstructSentence().length - fromInput.length;) {
                fromInput.push([]);
            }
            return fromInput;
        },
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
        },
        putCursor(data) {
            const userInputAsList = this.userInput.split(' ');

            let idxLastWordEdited = userInputAsList.length - 1;
            let idxLastLetterEdited = userInputAsList[idxLastWordEdited].length -1;
            if (idxLastLetterEdited == -1) {
                idxLastLetterEdited++;
            }

            if(idxLastWordEdited == -1) {
                idxLastWordEdited++;
            }

            
            if (idxLastLetterEdited === 0) {
                data[idxLastWordEdited][idxLastLetterEdited].setCursor(true, true);
            } else {
                data[idxLastWordEdited][idxLastLetterEdited].setCursor(true, false);
            }
        },
        onKeyDownPress(e) {
            if (!this.getInputChar(e)) {
                if (e.ctrlKey && e.which === 8) {
                    const inputSplit =  this.userInput.split(' ');
                    this.userInput = inputSplit.slice(0, inputSplit.length - 1).join(' ') + " ";

                    return;
                }
                if (e.which === 8) {
                    this.userInput = this.userInput.slice(0, this.userInput.length - 1);
                    return;
                }
                return;
            }
            this.userInput = this.userInput += this.getInputChar(e);
        },
        getInputChar(e) {
            if (this.charMap[e.which]) {
                e.stopPropagation();
                return e.key;
            }
            return null;
        },
    },
    data() {
        return {
            sentence: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident',
            charMap:  { 32:" ", 48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l", 77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z", 96:"0", 97:"1", 98:"2", 99:"3", 100:"4", 101:"5", 102:"6", 103:"7", 104:"8", 105:"9", 106:"*", 107:"+", 109:"-", 110:".", 111:"/", 186:";", 187:"=", 188:",", 189:"-", 190:".", 191:"/", 192:"`", 219:"[", 220:"\\", 221:"]", 222:"'" },
            userInput: ''
        }
    },
}
</script>

<style scoped>
    .wrapper {
        width: 100%; height: 100vh;
        background-color: #292736; color: white;
        display: flex; justify-content: right;
        overflow-y: scroll;
    }
    .center {
        width: auto; height: auto;
        margin: auto;
        text-align: center;
        display: flex; flex-direction: column;
        position: relative;
        color: grey;
    }
    .word {
        padding: 0 6px 0 6px;
        font-size: 26px;
        font-weight: 900;
    }
    #sentence {
        width: 70vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .miss {
        color: red;
    }
    .hit {
        color: white;
    }
    .letter {
        padding: 0;
        margin: 0;
        display: inline-block;
    }
    .btns {
        margin: 40px 0 0 0 ;
        display: flex;
        justify-content: center;
        button {
            background-color: transparent;
            color: inherit;
            border: 0;
            width: auto;
            cursor: pointer;
            padding: 4px;
            &:focus {
                outline: 3px solid grey;
            }
        }
    }
    .cursor {
        background-color: gold;
        font-size: 26px;
        font-weight: 900;
        width: 2px;
        height: 20px;
        display: inline-block;
    }
</style>
