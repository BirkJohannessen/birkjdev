import TetrisMap from './TetrisMap'
import TetrisControl from './TetrisControl'

export default class TetrisEngine {
    constructor() {
        this.gameInfo = {
            blockAge: Date.now(),
            gameTick: 600,
            blockLifetimeTicks: 0,
            paddingLifeTimeTicks: 0,
            pauseAge: 0,
            level: 1,
            score: 0,
            reset: false,
            storedBlock: null,
            stop: true,
            lastInputTime: Date.now()
        }
        this.input = {
            right: 0,
            left: 0,
            up: 0,
            down: 0,
            commit: 0,
            save: 0,
            pause: 0
        }
        this.tetrisControl = new TetrisControl();
        this.map = new TetrisMap(10, 20, this.tetrisControl, this.gameInfo);
    }

    start() {
        this.tetrisControl.setNextBlock();
        this.gameInfo.stop = false;
    }

    run() {
        this.map.removeFullLines();
        this.calculateLevel();

        // game over
        if (this.gameInfo.stop) {
            return this.map.map;
        }

        // game pause
        if (this.input.pause && !this.gameInfo.pauseAge) {
            this.gameInfo.pauseAge = Date.now();
            return; 
        }

        // calc gametickvalues
        this.gameInfo.blockLifetimeTicks = Math.floor((Date.now() - this.gameInfo.blockAge) / this.gameInfo.gameTick) + this.gameInfo.paddingLifeTimeTicks;

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
            if (this.canRotate(3)) {
                this.tetrisControl.rotate();
            }
            this.input.up = 0;
        }

        if (Date.now() - this.gameInfo.lastInputTime > 100) {
            this.processSmoothInput();
        }

        if (this.input.save && !this.tetrisControl.blockSave) {
            if (!this.gameInfo.storedBlock) {
                this.gameInfo.storedBlock = this.tetrisControl.getCurrentBlock();
                this.tetrisControl.setNextBlock()
            } else {
                this.gameInfo.storedBlock.init();
                const storedBlock = this.gameInfo.storedBlock;
                this.gameInfo.storedBlock = this.tetrisControl.getCurrentBlock();
                this.tetrisControl.setStoredBlock(storedBlock);
            }
            this.gameInfo.paddingLifeTimeTicks = 0;
            this.gameInfo.blockLifetimeTicks = 0;
            this.gameInfo.blockAge = Date.now();
            this.input.save = 0;
            this.tetrisControl.blockSave = true;
            return;
        }

        // render the block on the map;
        try {
            this.map.putControl(0, 0, true, false);
            !this.input.commit && this.renderTileReflection();
        } catch (e) {
            this.map.commitMap();
            this.gameInfo.reset = true;
            if (this.gameInfo.blockLifetimeTicks === 0) {
                this.gameInfo.stop = true;
            }
        }

        // time has come to set a new block in the control.
        if (this.gameInfo.reset) {
            this.tetrisControl.setNextBlock()
            this.tetrisControl.blockSave = false;
            this.input.commit = 0;
            this.input.up = 0;
            this.input.save = 0;
            this.gameInfo.blockAge = Date.now();
            this.gameInfo.pauseAge = 0;
            this.gameInfo.paddingLifeTimeTicks = 0;
            this.gameInfo.reset = false;
        }
    }

    renderTileReflection() {
        for (let i = 0; i < this.map.height; i++) {
            try {
                this.map.putControl(i, 0, false, false);
            } catch(e) {
                try {
                    this.map.putControl(i - 1, 0, true, true);
                    break;
                } catch (e) {
                    break;
                }
            }
        }
    }

    calculateLevel() {
        const levelMap = [
            {
                level: 1,
                score: 0,
                gameTick: 1000
            },
            {
                level: 2,
                score: 150,
                gameTick: 700
            },
            {
                level: 3,
                score: 250,
                gameTick: 500
            },
            {
                level: 4,
                score: 500,
                gameTick: 300
            },
            {
                level: 6,
                score: 700,
                gameTick: 100
            }
        ]

        levelMap.forEach(map => {
            if (this.gameInfo.score >= map.score) {
                this.gameInfo.level = map.level;
                this.gameInfo.gameTick = map.gameTick;
            }
        });
    }

    canRotate(r) {
        if (r === 0) {
            this.tetrisControl.rotate();
            return false;
        }
        try {
            this.tetrisControl.rotate();
            this.map.putControl(0, 0, false, false);
        } catch(e) {
            return this.canRotate(r - 1);
        }
        for (; r > 0; r--) this.tetrisControl.rotate()
        return true;
    }

    shiftLeftIfYouCan() {
        try {
            this.tetrisControl.shiftLeft();
            this.map.putControl(0, 0, false, false);
        } catch(e) {
            this.tetrisControl.shiftRight();
            return false;
        }
        return true;
    }

    shiftRightIfYouCan() {
        try {
            this.tetrisControl.shiftRight();
            this.map.putControl(0, 0, false, false);
        } catch(e) {
            this.tetrisControl.shiftLeft();
            return false;
        }
        return true;
    }

    processSmoothInput() {
        if (this.input.left) {
            if (this.tetrisControl.canLeftShiftX()) {
                this.shiftLeftIfYouCan();
            } else if (this.map.canLeftShiftX()) {
                this.tetrisControl.xShift -= 1;
            }
            this.gameInfo.lastInputTime = Date.now();
        }

        if (this.input.right) {
            if (this.tetrisControl.canRightShiftX()) {
                this.shiftRightIfYouCan();
            } else if (this.map.canRightShiftX()) {
                this.tetrisControl.xShift += 1;
            }
            this.gameInfo.lastInputTime = Date.now();
        }

        if (this.input.down) {
            this.gameInfo.paddingLifeTimeTicks += 1;
            this.gameInfo.lastInputTime = Date.now();
        }
    }
}
