import InputProcessor from  './TypenigmaInputProcessor';
import type { TypenigmaEngineInfo } from '@/models/typenigma/TypenigmaEngineInfo';
import { STARTED, STOPPED, RESULTS } from '@/models/typenigma/TypenigmaStateEnum';

export default class TypenigmaEngine {
    public inputProcessor: InputProcessor;
    public gameInfo: TypenigmaEngineInfo;
    constructor() {
        this.inputProcessor = new InputProcessor();
        this.gameInfo = {
            wpmTotal: 0,
            gameState: STOPPED,
            startTime: 0,
            interval: 15,
            input: this.inputProcessor,
            timeDisplay: '',
            wpm: 0,
            wpmIntervals: [],
            timeIntervals: []
        };

        setInterval(() => {
            if (this.gameInfo.gameState === STARTED) {
                const diff = Date.now() - this.gameInfo.startTime;
                const timeleft = this.gameInfo.interval * 1000 - diff ;
                const timepassed = this.gameInfo.interval * 1000 - timeleft;
                if (timeleft > 0) {
                    this.gameInfo.timeDisplay = this._formatMilliseconds(timeleft);
                } else {
                    this.gameInfo.timeDisplay = this._formatMilliseconds(0);
                    this.gameInfo.gameState = RESULTS;
                }
                const nextInterval = this.nextInterval();
                if ((timepassed / 1000) > nextInterval) {
                    this.gameInfo.timeIntervals.push([nextInterval.toString()]);
                    this.gameInfo.wpmIntervals.push(this.calculateWPM(timepassed));
                }
            }
        }, 50);
    }

    nextInterval() {
        return (this.gameInfo.timeIntervals.length + 1) * this.calculateDerivative();
    }

    calculateDerivative() : number {
        return Math.ceil(this.gameInfo.interval / 15);
    }

    calculateFinalWPM() : number {
        return this.calculateWPM(this.gameInfo.interval * 1000);
    }

    calculateCorrectPercentage() : number {
        return parseInt(this.inputProcessor.calculateCorrectPercentage()) * 100;
    }

    calculateWPM(timepassed: number) : number {
        const correctLetters = this.inputProcessor.calculateCorrectLetters();
        const words = correctLetters / 5;
        return this.roundToSingleDecimal((60 / (timepassed / 1000)) * words);
    }

    roundToSingleDecimal(num: number) : number {
        return Math.round(num * 10) / 10;
    }

    start() {
        this.gameInfo.startTime = Date.now();
        this.gameInfo.input.inputData.userInput = '';
        this.gameInfo.gameState = STARTED;
    }

    reset() {
        this.gameInfo.gameState = STOPPED;
        this.gameInfo.timeDisplay = '';
        this.gameInfo.wpmIntervals = [];
        this.gameInfo.timeIntervals = [];
        this.gameInfo.wpm = 0;
        this.gameInfo.input.reset();
        this.gameInfo.startTime = 0;
    }

    _formatMilliseconds(ms: number) {
        const date = new Date(ms);
        return `${String(date.getUTCMinutes()).padStart(2, '0')}:${String(date.getUTCSeconds()).padStart(2, '0')}`;
    }

    onInput(e: InputEvent) {
        if (this.gameInfo.gameState === STOPPED) {
            this.start();
        }
        this.inputProcessor.onInput(e);
    }
}
