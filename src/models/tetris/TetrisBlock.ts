import TetrisTile from './TetrisTile';

export default class TetrisBlock {
    public state: TetrisTile[][];
    constructor() {
        this.state = this.init(); 
    }

    // Overrideable
    init() : TetrisTile[][] {
        return this.getEmptyControlMap();
    }

    getEmptyControlMap() : TetrisTile[][] {
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
        const isEmptyRow = (row: TetrisTile[]) => !row.map(o => o.tileState).includes(1);
        const isEmptyCol = (colIndex: number) => !matrix.map((row: TetrisTile[]) => row[colIndex].tileState).includes(1);

        // Remove empty rows
        matrix = matrix.filter((row: TetrisTile[]) => !isEmptyRow(row));

        // Find columns to keep
        const colIndicesToKeep: number[] = [];
        matrix[0].forEach((_: TetrisTile[], colIndex: number) => {
            if (!isEmptyCol(colIndex)) colIndicesToKeep.push(colIndex);
        });

        // Remove empty columns
        this.state = matrix.map((row: TetrisTile[]) => colIndicesToKeep.map(colIndex => row[colIndex]));
    }

    setTileState(matrix: TetrisTile[][], x: number, y: number, color?: string) {
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

    _rotateMatrix(matrix: TetrisTile[][]) : TetrisTile[][] {
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

    deepModelCopy(matrix: TetrisTile[][]) {
        return JSON.parse(JSON.stringify(matrix));
    }
}

