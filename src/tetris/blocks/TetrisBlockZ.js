import TetrisBlock from './TetrisBlock';

export default class TetrisBlockZ extends TetrisBlock {
    constructor() {
        super();
        this.state = this.init();
        this.cutLooseColumnsAndRows();
    }

    init() {
        const controlMap = this.getEmptyControlMap();
        this.setTileState(controlMap, 2, 1, 'red');
        this.setTileState(controlMap, 2, 2, 'red');
        this.setTileState(controlMap, 3, 2, 'red');
        this.setTileState(controlMap, 3, 3, 'red');
        return controlMap;
    }
}

