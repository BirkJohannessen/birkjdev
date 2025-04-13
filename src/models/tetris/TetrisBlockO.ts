import TetrisBlock from './TetrisBlock';
import TetrisTile from './TetrisTile';

export default class TetrisBlockSquare extends TetrisBlock {
    constructor() {
        super();
        this.cutLooseColumnsAndRows();
    }
    init() : TetrisTile[][] {
        const controlMap = this.getEmptyControlMap();
        this.setTileState(controlMap, 2, 1, 'yellow');
        this.setTileState(controlMap, 2, 2, 'yellow');
        this.setTileState(controlMap, 3, 1, 'yellow');
        this.setTileState(controlMap, 3, 2, 'yellow');
        return controlMap;
    }
}

