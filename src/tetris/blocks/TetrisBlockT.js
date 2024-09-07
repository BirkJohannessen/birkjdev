import TetrisBlock from './TetrisBlock';

export default class TetrisBlockT extends TetrisBlock {
    constructor() {
        super();
        this.state = this.init();
        this.cutLooseColumnsAndRows();
    }

    init() {
        const controlMap = this.getEmptyControlMap();
        this.setTileState(controlMap, 3, 1, 'purple');
        this.setTileState(controlMap, 3, 2, 'purple');
        this.setTileState(controlMap, 3, 3, 'purple');
        this.setTileState(controlMap, 2, 2, 'purple');
        return controlMap;
    }
}

