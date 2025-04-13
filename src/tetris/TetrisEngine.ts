import TetrisMap from './TetrisMap';
import TetrisControl from './TetrisControl';
import TetrisInputProcessor from './TetrisInputProcessor';
import TetrisEngineInfo from '@/models/tetris/TetrisEngineInfo';
import TetrisInput from '@/models/tetris/TetrisInput';

export default class TetrisEngine {
    public gameInfo: TetrisEngineInfo;
    public input: TetrisInput;
    public tetrisControl: TetrisControl;
    public inputProcessor: TetrisInputProcessor;
    public map: TetrisMap;

    constructor() {
        this.gameInfo = new TetrisEngineInfo();
        this.input = new TetrisInput();
        this.tetrisControl = new TetrisControl();
        this.map = new TetrisMap(10, 24, this.tetrisControl, this.gameInfo);
        this.inputProcessor = new TetrisInputProcessor(this, this.tetrisControl, this.map);
    }

    start() : void {
        this.tetrisControl.setNextBlock();
        this.gameInfo.stop = false;
    }

    run() : void {
        this.map.removeFullLines();
        this.calculateLevel();

        this.inputProcessor.process();

        // actual blockage for the game is not included pauseage.
        const blockAge = this.gameInfo.blockAge + this.gameInfo.pauseContext.excessPauseTime
        // calc gametickvalues
        this.gameInfo.blockLifetimeTicks = Math.floor((Date.now() - blockAge) / this.gameInfo.gameTick) + this.gameInfo.paddingLifeTimeTicks;

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

    putTileReflection() : void {
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

    reset() : void {
        this.tetrisControl.setNextBlock()
        this.tetrisControl.blockSave = false;
        this.inputProcessor.input.commit = 0;
        this.inputProcessor.input.up = 0;
        this.inputProcessor.input.save = 0;
        this.gameInfo.blockAge = Date.now();
        this.gameInfo.pauseContext.pauseAge = 0;
        this.gameInfo.pauseContext.resumeAge = 0;
        this.gameInfo.pauseContext.excessPauseTime = 0;
        this.gameInfo.paddingLifeTimeTicks = 0;
        this.gameInfo.reset = false;
    }


    calculateLevel() : void {
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


    rotate() : void {
        const block = this.tetrisControl.getCurrentBlock().state;
        const blockWidthHeighDiff = Math.abs(block.length - block[0].length);
        for (let i = 0 ; i <= blockWidthHeighDiff ; i++) {
            if (this._canRotate(-i)) {
                this.tetrisControl.rotate();
                this.tetrisControl.xShift -= i;
                break;
            }
        }
    }

    _canRotate(x: number) : boolean {
        let maybe = true;
        try {
            this.tetrisControl.rotate();
            this.map.putControl(0, x, false, false);
        } catch(e) {
            maybe = false;
        }
        let r = 3;
        for (; r > 0; r--) this.tetrisControl.rotate()
        return maybe;
    }
}
