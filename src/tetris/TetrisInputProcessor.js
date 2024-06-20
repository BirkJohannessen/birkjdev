export default class TetrisInputProcessor {
    constructor(tetrisEngine, tetrisControl, map) {
        this.engine = tetrisEngine;
        this.gameInfo = this.engine.gameInfo;
        this.tetrisControl = tetrisControl;
        this.map = map; 

        this.lastInputTime = Date.now(),
        this.lastKeyDownTime = Date.now(),
        this.inputDelay = 20,
        this.firstInputDelay = 250

        this.input = {
            right: 0,
            left: 0,
            up: 0,
            down: 0,
            commit: 0,
            save: 0,
            pause: 0
        }
    }

    processSmoothInput() {
        if (this.input.left) {
            if (this.tetrisControl.canLeftShiftX()) {
                this.engine.shiftLeftIfYouCan();
            } else if (this.map.canLeftShiftX()) {
                this.tetrisControl.xShift -= 1;
            }
            this.lastInputTime = Date.now();
        }

        if (this.input.right) {
            if (this.tetrisControl.canRightShiftX()) {
                this.engine.shiftRightIfYouCan();
            } else if (this.map.canRightShiftX()) {
                this.tetrisControl.xShift += 1;
            }
            this.lastInputTime = Date.now();
        }

        if (this.input.down) {
            this.gameInfo.paddingLifeTimeTicks += 1;
            this.lastInputTime = Date.now();
        }
    }
    setKeyDownInputDelay() {
        this.lastKeyDownTime = Date.now();
        this.processSmoothInput();
    }
    process() {
        if (this.input.commit) {
            for (let i = 0; i < this.map.height; i++) {
                try {
                    this.map.putControl(i, 0, false, false);
                } catch(e) {
                    try {
                        this.map.putControl(i - 1, 0, true, false);
                        this.map.commitMap();
                        break;
                    } catch (e) {
                        this.gameInfo.stop = true;
                        break;
                    }
                }
            }
            this.tetrisControl.setNextBlock()
            this.tetrisControl.blockSave = false;
            this.input.commit = 0;
            this.input.up = 0;
            this.input.save = 0;
            this.gameInfo.blockAge = Date.now();
            this.gameInfo.pauseAge = 0;
            this.gameInfo.paddingLifeTimeTicks = 0;
            return;
        }
        
        if (this.input.up) {
            if (this.engine.canRotate(3)) {
                this.tetrisControl.rotate();
            }
            this.input.up = 0;
        }

        const timeSinceLastInput = Date.now() - this.lastInputTime;
        const timeSinceLastKeyDown = Date.now() - this.lastKeyDownTime;
        if (timeSinceLastInput > this.inputDelay && timeSinceLastKeyDown > this.firstInputDelay) {
            this.processSmoothInput();
        }

        if (this.input.save && !this.tetrisControl.blockSave) {
            this.tetrisControl.getCurrentBlock().resetToDefault();
            if (!this.gameInfo.storedBlock) {
                this.gameInfo.storedBlock = this.tetrisControl.getCurrentBlock();
                this.tetrisControl.setNextBlock()
            } else {
                const storedBlock = this.gameInfo.storedBlock;
                this.gameInfo.storedBlock = this.tetrisControl.getCurrentBlock();
                this.tetrisControl.setStoredBlock(storedBlock);
            }
            this.gameInfo.paddingLifeTimeTicks = 0;
            this.gameInfo.blockLifetimeTicks = 0;
            this.gameInfo.blockAge = Date.now();
            this.input.save = 0;
            this.tetrisControl.blockSave = true;
        }
    }
}
