import InputProcessor from  './TypenigmaInputProcessor.js';
export default class TypenigmaEngine {
    constructor() {
        this.inputProcessor = new InputProcessor();
        this.gameInfo = {
            wpmTotal: 0,
            wpmHistory: [],
            gameState: 0,
            startTime: 0,
            interval: 30,
            input: this.inputProcessor,
            timeDisplay: ''
        }
        setInterval(() => {
            if (this.gameInfo.gameState === 1) {
                const diff = Date.now() - this.startTime;
                const passed = this.interval * 1000 - diff ;
                if (passed > 0) {
                    this.timeDisplay = this._formatMilliseconds(passed);
                } else {
                    this.timeDisplay = this._formatMilliseconds(0);
                    this.hasStarted = false;
                    this.wpm = this.calculateWPM();
                }
            }
        }, 50);
    }

    calculateWPM() {
        return 'wow atleast 3 wpm';
    }

    start() {
        this.gameInfo.startTime = Date.now();
        this.gameInfo.userInput = '';
        this.gameInfo.gameState = 1;
    }

    restart() {
        this.start();
    }

    _formatMilliseconds(ms) {
        const date = new Date(ms);
        return `${String(date.getUTCMinutes()).padStart(2, '0')}:${String(date.getUTCSeconds()).padStart(2, '0')}`;
    }

    onKeyDownPress(e) {
        this.inputProcessor.onKeyDownPress(e);
        if (this.gameState == 0) {
            this.start();
        }
    }
}
