import TetrisBlock from './TetrisBlock';
import TetrisTile from './TetrisTile';

export default class TetrisBlockL extends TetrisBlock {
    constructor() {
        super();
        this.cutLooseColumnsAndRows();
    }
    init() : TetrisTile[][] {
        const controlMap = this.getEmptyControlMap();
        this.setTileState(controlMap, 1, 1, 'orange');
        this.setTileState(controlMap, 2, 1, 'orange');
        this.setTileState(controlMap, 3, 1, 'orange');
        this.setTileState(controlMap, 3, 2, 'orange');
        return controlMap;
    }
}

