import InputProcessor from  './TypenigmaInputProcessor.js';
export default class TypenigmaEngine {
    constructor(timeDisplay) {
        this.inputProcessor = new InputProcessor();
        this.gameInfo = {
            wpmTotal: 0,
            gameState: 0,
            startTime: 0,
            interval: 15,
            input: this.inputProcessor,
            timeDisplay: '',
            wpm: 0,
            wpmIntervals: [],
            timeIntervals: []
        }
        setInterval(() => {
            timeDisplay = this.timeDisplay;
            if (this.gameInfo.gameState === 1) {
                const diff = Date.now() - this.gameInfo.startTime;
                const timeleft = this.gameInfo.interval * 1000 - diff ;
                const timepassed = this.gameInfo.interval * 1000 - timeleft;
                if (timeleft > 0) {
                    this.gameInfo.timeDisplay = this._formatMilliseconds(timeleft);
                } else {
                    this.gameInfo.timeDisplay = this._formatMilliseconds(0);
                    this.gameInfo.gameState = 2;
                    this.wpm = this.calculateWPM();
                }
                const nextInterval = this.nextInterval();
                if ((timepassed / 1000) > nextInterval) {
                    this.gameInfo.timeIntervals.push(`${nextInterval}`);
                    this.gameInfo.wpmIntervals.push(`${this.calculateWPM(timepassed)}`);
                }
            }
            timeDisplay = this.timeDisplay;
        }, 50);
    }

    nextInterval() {
        return (this.gameInfo.timeIntervals.length + 1) * this.calculateDerivative();
    }

    calculateDerivative() {
        return Math.ceil(this.gameInfo.interval / 15);
    }

    calculateFinalWPM() {
        return this.calculateWPM(this.gameInfo.interval * 1000);
    }

    calculateCorrectPercentage() {
        return this.inputProcessor.calculateCorrectPercentage() * 100;
    }

    calculateWrongLetters() {
        return this.inputProcessor.calculateWrongLetters();
    }

    calculateWPM(timepassed) {
        const correctLetters = this.inputProcessor.calculateCorrectLetters();
        const words = correctLetters / 5;
        return (60 / (timepassed / 1000)) * words;
    }

    start() {
        this.gameInfo.startTime = Date.now();
        this.gameInfo.input.inputData.userInput = '';
        this.gameInfo.gameState = 1;
    }

    reset() {
        this.gameInfo.gameState = 0;
        this.gameInfo.timeDisplay = '';
        this.gameInfo.wpmIntervals = [];
        this.gameInfo.timeIntervals = [];
        this.gameInfo.wpm = '';
        this.gameInfo.input.reset();
        this.gameInfo.startTime = 0;
    }

    _formatMilliseconds(ms) {
        const date = new Date(ms);
        return `${String(date.getUTCMinutes()).padStart(2, '0')}:${String(date.getUTCSeconds()).padStart(2, '0')}`;
    }

    onInput(e) {
        if (this.gameInfo.gameState === 0) {
            this.start();
        }
        this.inputProcessor.onInput(e);
    }
}
