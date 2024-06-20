import TetrisEngine from "./TetrisEngine";
import TetrisBlock from "./blocks/TetrisBlock";

export default class TetrisClient {
    constructor(parent) {
        this.parent = parent;

        this.engine = new TetrisEngine();
        this.inputProcessor = this.engine.inputProcessor;
        this.map = this.engine.map.map;

        this.runInterval = 15;
    }

    setVariables() {
        this.parent.queue = this.engine.tetrisControl.blockStack;
        this.parent.map = this.engine.map.map;
        this.parent.info = this.info;
        this.parent.level = this.engine.gameInfo.level;
        this.parent.score = this.engine.gameInfo.score;
        this.parent.holdBlock = this.engine.gameInfo.storedBlock;
        this.parent.emptyBlockMap = new TetrisBlock().getEmptyControlMap();
    }

    start() {
        this.engine.start();
        this.run();
    }

    run() {
        setTimeout(() => {
            this.setVariables()
            if (!this.engine.gameInfo.stop) {
                this.engine.run();
                this.run();
            } else {
                this.info = 'Game over'
                this.engine.run();
                this.setVariables()
            }
        },  this.runInterval);
    }

    onKeyUpPress(e) {
        e.stopPropagation();
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
    }

    getInput() {
        return this.engine.inputProcessor.input;
    }
}
