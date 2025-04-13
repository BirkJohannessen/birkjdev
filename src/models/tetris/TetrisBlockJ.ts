import TetrisBlock from './TetrisBlock';
import TetrisTile from './TetrisTile';

export default class TetrisBlockJ extends TetrisBlock {
    constructor() {
        super();
        this.cutLooseColumnsAndRows();
    }
    init() : TetrisTile[][] {
        const controlMap = this.getEmptyControlMap();
        this.setTileState(controlMap, 1, 2, 'blue');
        this.setTileState(controlMap, 2, 2, 'blue');
        this.setTileState(controlMap, 3, 2, 'blue');
        this.setTileState(controlMap, 3, 1, 'blue');
        return controlMap;
    }
}

