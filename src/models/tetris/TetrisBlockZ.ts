import TetrisBlock from './TetrisBlock';
import TetrisTile from './TetrisTile';

export default class TetrisBlockZ extends TetrisBlock {
    constructor() {
        super();
        this.cutLooseColumnsAndRows();
    }
    init() : TetrisTile[][] {
        const controlMap = this.getEmptyControlMap();
        this.setTileState(controlMap, 2, 1, 'red');
        this.setTileState(controlMap, 2, 2, 'red');
        this.setTileState(controlMap, 3, 2, 'red');
        this.setTileState(controlMap, 3, 3, 'red');
        return controlMap;
    }
}

