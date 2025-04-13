import TetrisTile from '@/models/tetris/TetrisTile';
import TetrisControl from './TetrisControl';
import TetrisEngineInfo from '@/models/tetris/TetrisEngineInfo';

export default class TetrisMap {
    public height: number;
    private width: number;
    private heightPadding: number;
    private _map: TetrisTile[][];
    private _shadowMap: TetrisTile[][];
    private _renderMap: TetrisTile[][];
    private tetrisControl: TetrisControl;
    private gameInfo: TetrisEngineInfo;

    constructor(width: number, height: number, tetrisControl: TetrisControl, gameInfo: TetrisEngineInfo) {
        this.height = height;
        this.heightPadding = 4;
        this.width = width;
        this._map = this.initMap();
        this._shadowMap = this.initMap();
        this._renderMap = this.initMap();
        this.gameInfo = gameInfo;
        this.tetrisControl = tetrisControl;
    }

    putControl(paddingTicks: number, xShiftPadding: number, autoCommit: boolean, reflection?: boolean) : void {
        const block = this.tetrisControl.getCurrentBlock().state;
        const lifetimeTick = this.gameInfo.blockLifetimeTicks + paddingTicks + this.heightPadding;
        const xShift = this.tetrisControl.xShift + xShiftPadding;
        // restart shadow map
        if (!reflection) {
            this._shadowMap = this.deepModelCopy(this._map);
        } else {
            this._shadowMap = this.deepModelCopy(this._renderMap);
        }

        // calc X value for TetrisControl Box (4x4)
        let startIdxX;
        if (this.width % 2 == 1) {
            startIdxX = Math.floor((this.width / 2) - 1);
        } else {
            startIdxX = Math.floor((this.width / 2) - 1);
        }
        startIdxX += xShift;

        // put
        for (let i = 0; i < block.length ; i++) {
            for (let j = 0; j < block[i].length; j++) {
                if (reflection) {
                    if (block[i][j].tileState && !this._map[lifetimeTick - i][j + startIdxX].tileState) {
                        this._shadowMap[lifetimeTick - i][j + startIdxX].tileReflect = 1;
                    } else if (block[i][j].tileState && this._shadowMap[lifetimeTick - i][j + startIdxX].tileState) {
                        throw new Error(); // illegal state.
                    } else {
                    }
                } else {
                    if (block[i][j].tileState && !this._shadowMap[lifetimeTick - i][j + startIdxX].tileState) {
                        this._shadowMap[lifetimeTick - i][j + startIdxX] = block[i][j]
                    } else if (block[i][j].tileState && this._shadowMap[lifetimeTick - i][j + startIdxX].tileState) {
                        throw new Error(); // illegal state.
                    } else {
                    }
                }
            }
        }

        //save as good render.
        if (autoCommit) {
            this._renderMap = this.deepModelCopy(this._shadowMap);
        }
    }


    initMap() : TetrisTile[][] {
        const map = [];
        for (let j = 0; j < this.height; j++) {
            const row = [];
            for (let i = 0; i < this.width; i++) {
                row.push(new TetrisTile(0));
            }
            map.push(row);
        }
        return map;
    }

    get map() : TetrisTile[][] {
        const map: TetrisTile[][] = this.deepModelCopy(this._renderMap);
        for (let i = 0; i < 4; i++) {
            map[i].forEach((tile: TetrisTile) => {
                tile.outOfBounds = true;
            });
        }
        return map;
    }
    
    // save as hard blocks
    commitMap() : void {
        this._map = this.deepModelCopy(this._renderMap);
        // todo remove all tilereflects before saving -- nvm these are good for debugging / noticing a bug
    }

    removeFullLines() : void {
        let noFullLines = 0;
        for (let i = 0; i < this.height; i++) {
            let isFull = true;
            for (let j = 0; j < this.width; j++) {
                if (!this._map[i][j].tileState) {
                    isFull = false
                    break;
                }
            }
            //remove and move down one
            if (isFull) {
                noFullLines += 1;
                for (let j = 0; j < this.width; j++) {
                    this._map[i][j].tileState = 0;
                }
                for (let ii = i - 1; ii > 0; ii--) {
                    for (let j = 0; j < this.width; j++) {
                        this._map[ii + 1][j] = this._map[ii][j]
                    }
                }
            }
        }
        // tetris score
        if (noFullLines > 0) {
            if (noFullLines === 4) {
                // tetris!
                this.gameInfo.score += 70;
            } else {
                this.gameInfo.score += (10 * noFullLines);
            }
        }
    }

    canLeftShiftX() : boolean {
        try {
            this.putControl(0, -1, false);
        } catch (e) {
            return false;
        }
        return true;
    }

    canRightShiftX() : boolean {
        try {
            this.putControl(0, 1, false);
        } catch (e) {
            return false;
        }
        return true;
    }

    deepModelCopy(matrix: TetrisTile[][]) : TetrisTile[][] {
        return JSON.parse(JSON.stringify(matrix));
    }
}

