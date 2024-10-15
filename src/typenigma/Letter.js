import { NOTTYPED } from './LetterStateEnum.js';
export default class Letter {
    constructor(letter) {
        this.letter = letter;
        this.state = NOTTYPED;
        this.cursorIsLeft = true;
        this.cursor = false;
    }
    setState(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    getLetter() {
        return this.letter;
    }
    setCursor(bool, isLeft) {
        this.cursor = bool;
        this.cursorIsLeft = isLeft;
    }
    isCursor() {
        return this.cursor;
    }
    isCursorLeft() {
        return this.cursorIsLeft;
    }
}

