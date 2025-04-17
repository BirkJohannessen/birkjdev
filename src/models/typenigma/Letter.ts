import { NOTTYPED } from './LetterStateEnum';
import type { LetterState } from './LetterStateEnum';

export default class Letter {
    private letter: string;
    private state: LetterState;
    private cursorIsLeft: boolean;
    private cursor: boolean;

    constructor(letter: string) {
        if (letter.length !== 1) throw new Error(`'${letter}' is not a single letter`);
        this.letter = letter;
        this.state = NOTTYPED;
        this.cursorIsLeft = false;
        this.cursor = false;
    }

    setState(state: number) { this.state = state; }
    getState() : number { return this.state; }

    getLetter() { return this.letter; }

    setCursor(bool: boolean, isLeft: boolean) {
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

