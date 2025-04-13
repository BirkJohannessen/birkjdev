import TetrisEngine from './TetrisEngine';
import TetrisBlock from '@/models/tetris/TetrisBlock';
import TetrisTile from '@/models/tetris/TetrisTile';
import Hammer from 'hammerjs';
import type { Ref } from 'vue';
import  { ref } from 'vue';

// import type TetrisInputProcessor from './TetrisInputProcessor';

export default class TetrisClient {
    private queue: Ref<TetrisBlock[]>;
    private map: Ref<TetrisTile[][]>;
    private info: Ref<string>;
    private level: Ref<number>;
    private score: Ref<number>;
    private holdBlock: Ref<TetrisBlock | undefined>;
    private emptyBlockMap: Ref<TetrisTile[][]>;

    private engine: TetrisEngine;
    // private inputProcessor: TetrisInputProcessor;

    private runInterval: number;
    private hasStarted: boolean;
    private globalX: number;

    constructor(
        queue: Ref<TetrisBlock[]>,
        map: Ref<TetrisTile[][]>,
        info: Ref<string>,
        level: Ref<number>,
        score: Ref<number>,
        holdBlock: Ref<TetrisBlock | undefined>,
        emptyBlockMap: Ref<TetrisTile[][]>
    ) {
        this.queue = queue;
        this.map = map;
        this.info = info;
        this.level = level;
        this.score = score;
        this.holdBlock = holdBlock;
        this.emptyBlockMap = emptyBlockMap;

        this.engine = new TetrisEngine();
        // this.inputProcessor = this.engine.inputProcessor;
        this.map.value = this.engine.map.map;

        this.runInterval = 15;
        this.hasStarted = false; 
        this.globalX = 0;
        this._setVariables();
        this._run();
    }

    start() : void {
        this.hasStarted = true; 
        this.engine.start();
    }

    restart() {
        this.engine = new TetrisEngine();
        // this.inputProcessor = this.engine.inputProcessor;
        this.map.value = this.engine.map.map;
        this.start();
    }

    pause() {
        if (!this.engine.gameInfo.stop) {
            this.engine.gameInfo.pauseContext.pauseAge = Date.now();
            this.engine.gameInfo.paused = true;
        }
    }

    isPaused() : boolean {
        return this.engine.gameInfo.paused;
    }

    resume() : void {
        if (!this.engine.gameInfo.stop) {
            this.engine.gameInfo.pauseContext.resumeAge = Date.now();
            this.engine.gameInfo.pauseContext.excessPauseTime += this.engine.gameInfo.pauseContext.resumeAge - this.engine.gameInfo.pauseContext.pauseAge;
            this.engine.gameInfo.paused = false;
        }
    }

    _run() {
         setInterval(() => {
             if (!this.hasStarted) {
                this._setVariables()
                this.info.value = 'Ready?';
             } else if (this.engine.gameInfo.paused) {
                this._setVariables()
                this.info.value = 'Paused';
            } else if (!this.engine.gameInfo.stop) {
                this.info.value = ''
                this._setVariables()
                this.engine.run();
            } else {
                this.info.value = 'Game over'
                this._setVariables()
            }
        },  this.runInterval);
    }

    _setVariables() {
        this.queue.value = this.engine.tetrisControl.blockStack;
        this.map.value = this.engine.map.map;
        this.level.value = this.engine.gameInfo.level;
        this.score.value = this.engine.gameInfo.score;
        this.holdBlock.value = this.engine.gameInfo.storedBlock;
        this.emptyBlockMap.value = new TetrisBlock().getEmptyControlMap();
    }

    onKeyUpPress(e: KeyboardEvent) : void {
        e.stopPropagation();

        if (this.isPaused() || !this.hasStarted) {
            return;
        }

        if (e.key === 'ArrowRight') {
            this.getInput().right = 0;
        }
        if (e.key === 'ArrowLeft') {
            this.getInput().left = 0;
        }
        if (e.key === 'ArrowDown') {
            this.getInput().down = 0;
        }
    }

    onKeyDownPress(e: KeyboardEvent) {
        e.stopPropagation();
        if (e.key === 'Enter') {
            if (!this.hasStarted) {
                this.start();
            } else if (this.isPaused()) {
                this.resume();
            } else {
                this.pause();
            }
        }
        if (this.isPaused() || !this.hasStarted) {
            return;
        }

        if (e.key === 'ArrowLeft') {
            if (this.getInput().left === 0) {
                this.getInput().right = 0;
                this.getInput().left = 1;
                this.engine.inputProcessor.setKeyDownInputDelay();
            } else {
                this.getInput().right = 0;
                this.getInput().left = 1;
            }
        }
        if (e.key === 'ArrowDown') {
            this.getInput().down = 1;
        }
        if (e.key === 'ArrowRight') {
            if (this.getInput().right === 0) {
                this.getInput().left = 0;
                this.getInput().right = 1;
                this.engine.inputProcessor.setKeyDownInputDelay();
            } else {
                this.getInput().left = 0;
                this.getInput().right = 1;
            }
        }
        if (e.key === 'ArrowUp') {
            this.getInput().up = 1;
        }
        if (e.code === 'Space') {
            this.getInput().commit = 1;
        }
        if (e.key === 'Shift') {
            this.getInput().save = 1;
        }
        if (e.key === 'Backspace') {
            this.restart();
        }
    }

    subscribeToGestures(wrapper: Ref<HTMLElement | undefined>, isMobile: Ref<boolean>) {
        const hammertime: any = new Hammer(wrapper.value, {});

        hammertime.on('tap', (e: any) => {
            if (!isMobile.value) return;
            this.gestureTap(e);
        });

        hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

        hammertime.on('swipeup', (e: any) => {
            if (!isMobile.value) return;
            this.gestureSwipeUp(e);
        });

        hammertime.on('swipedown', (e: any) => {
            if (!isMobile.value) return;
            this.gestureSwipeDown(e);
        });

        hammertime.on('swipeup', (e: any) => {
            if (!isMobile.value) return;
            this.gestureSwipeUp(e);
        });

        hammertime.on('press', (e: any) => {
            if (!isMobile.value) return;
            this.gesturePress(e);
        });

        hammertime.on('pressup', (e: any) => {
            if (!isMobile.value) return;
            this.gesturePressUp(e);
        });

        hammertime.on('panend', (e: any) => {
            if (!isMobile.value) return;
            this.gesturePanend(e);
        });

        hammertime.on('panleft panright', (e: any) => {
            if (!isMobile.value) return;
            this.gesturePanmove(e);
        });
    }

    gestureTap(_e: any) {
        this.getInput().up = 1;
    }

    gestureSwipeDown(_e: any) {
        this.getInput().commit = 1;
    }

    gestureSwipeUp(_e: any) {
        this.getInput().save = 1;
    }

    gesturePress(_e: any) {
        this.getInput().down = 1;
    }

    gesturePressUp(_e: any) {
        this.getInput().down = 0;
    }

    gesturePanend(_e: any) {
        this.globalX = 0;
    }

    gesturePanmove(e: any) {
        const delta = this.globalX + e.deltaX;
        this.getInput().down = 0;
        if (delta < -20) {
            if (this.getInput().left === 0) {
                this.getInput().right = 0;
                this.getInput().left = 1;
                this.engine.inputProcessor.setKeyDownInputDelay();
                this.getInput().left = 0;
                this.globalX += 20;
            } 
        } else if (delta > 20) {
            if (this.getInput().right === 0) {
                this.getInput().left = 0;
                this.getInput().right = 1;
                this.engine.inputProcessor.setKeyDownInputDelay();
                this.getInput().right = 0;
                this.globalX -= 20;
            }
        }
    }

    getInput() {
        return this.engine.inputProcessor.input;
    }
}
