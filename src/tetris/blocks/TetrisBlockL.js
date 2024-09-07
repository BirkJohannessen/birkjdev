import TetrisBlock from './TetrisBlock';

export default class TetrisBlockL extends TetrisBlock {
    constructor() {
        super();
        this.state = this.init();
        this.cutLooseColumnsAndRows();
    }

    init() {
        const controlMap = this.getEmptyControlMap();
        this.setTileState(controlMap, 1, 1, 'orange');
        this.setTileState(controlMap, 2, 1, 'orange');
        this.setTileState(controlMap, 3, 1, 'orange');
        this.setTileState(controlMap, 3, 2, 'orange');
        return controlMap;
    }
}

