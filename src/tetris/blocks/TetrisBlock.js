import TetrisTile from '../TetrisTile.js';

export default class TetrisBlock {
    constructor() {
    }

    getEmptyControlMap() {
        const controlMap = [];
        for (let i = 0; i < 4; i++) {
            const row = [];
            for (let j = 0; j < 4; j++) {
                const tile = new TetrisTile(0);
                row.push(tile);
            }
            controlMap.push(row);
        }
        return controlMap;
    }

    rotate() {
        this.state = this._rotateMatrix(this.state);
    }

    adjustLeft() {
        if (!this.isColEmpty(this.state, 0)) {
            throw new Error();
        }

        let result = this.deepModelCopy(this.state);

        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].length - 1; j++) {
                if (j == result[i].length - 2) {
                    const tile = new TetrisTile(0);
                    result[i][j] = result[i][j + 1]
                    result[i][j + 1] = tile;
                } else {
                    result[i][j] = result[i][j + 1]
                }
            }
        }
        return result;
    }

    adjustRight() {
        if (!this.isColEmpty(this.state, this.state.length - 1)) {
            throw new Error();
        }

        let result = this.deepModelCopy(this.state);

        for (let i = 0; i < result.length; i++) {
            for (let j = result[i].length; j > 0; j--) {
                if (j == 1) {
                    const tile = new TetrisTile(0);
                    result[i][j] = result[i][j - 1]
                    result[i][j - 1] = tile;
                } else {
                    result[i][j] = result[i][j - 1]
                }
            }
        }
        return result;
    }

    adjustDown() {
        if (!isRowEmpty(this.state[this.state.length - 1])) {
            throw new Error();
        }

        let result = this.deepModelCopy(this.state);

        for (let i = result.length - 2; i > 0; i--) {
            for (let j = 0; j < result[i].length - 1; j++) {
                result[i][j] = result[i - 1][j]
            }
        }
        return result;
    }

    adjustUp() {
        if (!isRowEmpty(this.state[0])) {
            throw new Error();
        }

        let result = this.deepModelCopy(this.state);

        for (let i = 0; i > result.length - 2; i++) {
            for (let j = 0; j < result[i].length - 1; j++) {
                result[i][j] = result[i + 1][j]
            }
        }
        return result;
    }

    isRowEmpty(row) {
        let res = true;
        row.forEach(tile => {
            if (tile.tileState === 1) {
                res = false;
            }
        });
        return res;
    }

    isColEmpty(matrix, colIdx) {
        let res = true;
        matrix.forEach(row => {
            if (row[colIdx].tileState === 1) {
                res = false;
            }
        });
        return res;
    }

    _rotateMatrix(matrix) {
        const n = matrix.length;
        const result = Array.from({ length: n }, () => Array(n).fill(0));
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                result[j][n - 1 - i] = matrix[i][j];
            }
        }
        
        return result;
    }

    deepModelCopy(matrix) {
        return JSON.parse(JSON.stringify(matrix));
    }
}

