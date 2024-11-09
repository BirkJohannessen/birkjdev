import InputProcessor from  './TypenigmaInputProcessor.js';
export default class TypenigmaEngine {
    constructor(timeDisplay) {
        this.inputProcessor = new InputProcessor();
        this.gameInfo = {
            wpmTotal: 0,
            wpmHistory: [],
            gameState: 0,
            startTime: 0,
            interval: 30,
            input: this.inputProcessor,
            timeDisplay: '',
            wpm: 0
        }
        setInterval(() => {
            timeDisplay = this.timeDisplay;
            if (this.gameInfo.gameState === 1) {
                const diff = Date.now() - this.gameInfo.startTime;
                const passed = this.gameInfo.interval * 1000 - diff ;
                if (passed > 0) {
                    this.gameInfo.timeDisplay = this._formatMilliseconds(passed);
                } else {
                    this.gameInfo.timeDisplay = this._formatMilliseconds(0);
                    this.gameInfo.gameState = 2;
                    this.wpm = this.calculateWPM();
                }
            }
            timeDisplay = this.timeDisplay;
        }, 50);
    }

    calculateWPM() {
        return 'wow atleast 3 wpm';
    }

    start() {
        this.gameInfo.startTime = Date.now();
        this.gameInfo.input.inputData.userInput = '';
        this.gameInfo.gameState = 1;
    }

    reset() {
        this.gameInfo.gameState = 0;
        this.gameInfo.timeDisplay = '';
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
