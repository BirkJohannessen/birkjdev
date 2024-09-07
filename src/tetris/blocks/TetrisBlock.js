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

    cutLooseColumnsAndRows() {
        let matrix = this.deepModelCopy(this.state);
        const isEmptyRow = row => !row.map(o => o.tileState).includes(1);
        const isEmptyCol = colIndex => !matrix.map(row => row[colIndex].tileState).includes(1);

        // Remove empty rows
        matrix = matrix.filter(row => !isEmptyRow(row));

        // Find columns to keep
        const colIndicesToKeep = [];
        matrix[0].forEach((_, colIndex) => {
            if (!isEmptyCol(colIndex)) colIndicesToKeep.push(colIndex);
        });

        // Remove empty columns
        this.state = matrix.map(row => colIndicesToKeep.map(colIndex => row[colIndex]));
    }

    setTileState(matrix, x, y, color) {
        matrix[x][y].tileState = 1;
        if (color) {
            matrix[x][y].color = color;
        }
    }

    resetToDefault() {
        this.state = this.init();
        this.cutLooseColumnsAndRows();
    }

    rotate() {
        this.state = this._rotateMatrix(this.state);
    }

    _rotateMatrix(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        const result = Array.from({ length: cols }, () => Array(rows).fill(0));

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                result[cols - 1 - j][i] = matrix[i][j];
            }
        }

        return result;
    }

    deepModelCopy(matrix) {
        return JSON.parse(JSON.stringify(matrix));
    }
}

