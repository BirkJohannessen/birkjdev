import TetrisEngine from "./TetrisEngine";
import TetrisBlock from "./blocks/TetrisBlock";

export default class TetrisClient {
    constructor(parent) {
        this.parent = parent;

        this._initEngine();

        this.runInterval = 15;
        this.hasStarted = false; 
        this.globalX = 0;
        this._run();
    }

    _initEngine() {
        this.engine = new TetrisEngine();
        this.inputProcessor = this.engine.inputProcessor;
        this.map = this.engine.map.map;
    }

    start() {
        this.hasStarted = true; 
        this.engine.start();
    }

    restart() {
        this._initEngine();
        this.start();
    }

    pause() {
        if (!this.engine.gameInfo.stop) {
            this.engine.gameInfo.pauseContext.pauseAge = Date.now();
            this.engine.gameInfo.paused = 1;
        }
    }

    isPaused() {
        return this.engine.gameInfo.paused === 1;
    }

    resume() {
        if (!this.engine.gameInfo.stop) {
            this.engine.gameInfo.pauseContext.resumeAge = Date.now();
            this.engine.gameInfo.pauseContext.excessPauseTime += this.engine.gameInfo.pauseContext.resumeAge - this.engine.gameInfo.pauseContext.pauseAge;
            this.engine.gameInfo.paused = 0;
        }
    }

    _run() {
         setInterval(() => {
             if (!this.hasStarted) {
                this._setVariables()
                this.info = 'Ready?'
             } else if (this.engine.gameInfo.paused) {
                this._setVariables()
                this.info = 'Paused'
            } else if (!this.engine.gameInfo.stop) {
                this.info = ''
                this._setVariables()
                this.engine.run();
            } else {
                this.info = 'Game over'
                this._setVariables()
            }
        },  this.runInterval);
    }
    
    _setVariables() {
        this.parent.queue = this.engine.tetrisControl.blockStack;
        this.parent.map = this.engine.map.map;
        this.parent.info = this.info;
        this.parent.level = this.engine.gameInfo.level;
        this.parent.score = this.engine.gameInfo.score;
        this.parent.holdBlock = this.engine.gameInfo.storedBlock;
        this.parent.emptyBlockMap = new TetrisBlock().getEmptyControlMap();
    }


    onKeyUpPress(e) {
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

    onKeyDownPress(e) {
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

    gestureTap(_e) {
        this.getInput().up = 1;
    }

    gestureSwipeUp(_e) {
        this.getInput().save = 1;
    }

    gesturePress(_e) {
        this.getInput().down = 1;
    }

    gesturePressUp(_e) {
        this.getInput().down = 0;
    }

    gesturePanend(_e) {
        this.globalX = 0;
    }

    gesturePanmove(e) {
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
