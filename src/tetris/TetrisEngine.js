import TetrisMap from './TetrisMap';
import TetrisControl from './TetrisControl';
import TetrisInputProcessor from './TetrisInputProcessor';

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
        this.inputProcessor = new TetrisInputProcessor(this, this.tetrisControl, this.map);
    }

    start() {
        this.tetrisControl.setNextBlock();
        this.gameInfo.stop = false;
    }

    run() {
        this.map.removeFullLines();
        this.calculateLevel();

        this.inputProcessor.process();

        // calc gametickvalues
        this.gameInfo.blockLifetimeTicks = Math.floor((Date.now() - this.gameInfo.blockAge) / this.gameInfo.gameTick) + this.gameInfo.paddingLifeTimeTicks;

        // render the block on the map;
        try {
            this.map.putControl(0, 0, true, false);
            !this.inputProcessor.input.commit && this.putTileReflection();
        } catch (e) {
            this.map.commitMap();
            this.gameInfo.reset = true;
            if (this.gameInfo.blockLifetimeTicks === 0) {
                this.gameInfo.stop = true;
            }
        }

        // time has come to set a new block in the control.
        if (this.gameInfo.reset) {
            this.reset();
        }
    }

    putTileReflection() {
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

    reset() {
        this.tetrisControl.setNextBlock()
        this.tetrisControl.blockSave = false;
        this.inputProcessor.input.commit = 0;
        this.inputProcessor.input.up = 0;
        this.inputProcessor.input.save = 0;
        this.gameInfo.blockAge = Date.now();
        this.gameInfo.pauseAge = 0;
        this.gameInfo.paddingLifeTimeTicks = 0;
        this.gameInfo.reset = false;
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
}
