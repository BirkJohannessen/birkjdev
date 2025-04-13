import type TetrisEngineInfo from '@/models/tetris/TetrisEngineInfo';
import type TetrisEngine from './TetrisEngine';
import TetrisInput from '@/models/tetris/TetrisInput';
import type TetrisMap from './TetrisMap';
import type TetrisControl from './TetrisControl';

export default class TetrisInputProcessor {
    public engine: TetrisEngine;
    public gameInfo: TetrisEngineInfo;
    public input: TetrisInput;
    public map: TetrisMap;
    public tetrisControl: TetrisControl;

    private lastInputTime: number;
    private lastKeyDownTime: number;
    private inputDelay: number;
    private firstInputDelay: number;

    constructor(tetrisEngine: TetrisEngine, tetrisControl: TetrisControl, map: TetrisMap) {
        this.engine = tetrisEngine;
        this.gameInfo = this.engine.gameInfo;
        this.tetrisControl = tetrisControl;
        this.map = map; 

        this.lastInputTime = Date.now(),
        this.lastKeyDownTime = Date.now(),
        this.inputDelay = 20,
        this.firstInputDelay = 250

        this.input = new TetrisInput();
    }

    processSmoothInput() : void {
        if (this.input.left) {
            if (this.map.canLeftShiftX()) {
                this.tetrisControl.xShift -= 1;
            }
            this.lastInputTime = Date.now();
        }

        if (this.input.right) {
            if (this.map.canRightShiftX()) {
                this.tetrisControl.xShift += 1;
            }
            this.lastInputTime = Date.now();
        }

        if (this.input.down) {
            this.gameInfo.paddingLifeTimeTicks += 1;
            this.lastInputTime = Date.now();
        }
    }

    setKeyDownInputDelay() : void {
        this.lastKeyDownTime = Date.now();
        this.processSmoothInput();
    }

    process() : void {
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
            this.input.commit = false;
            this.input.up = false;
            this.input.save = false;
            this.gameInfo.blockAge = Date.now();
            this.gameInfo.pauseContext.pauseAge = 0;
            this.gameInfo.paddingLifeTimeTicks = 0;
            return;
        }
        
        if (this.input.up) {
            this.engine.rotate();
            this.input.up = false;
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
            this.gameInfo.pauseContext.pauseAge = 0;
            this.gameInfo.pauseContext.resumeAge = 0;
            this.gameInfo.pauseContext.excessPauseTime = 0;
            this.input.save = false;
            this.tetrisControl.blockSave = true;
        }
    }
}
