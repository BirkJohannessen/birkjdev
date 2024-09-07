import TetrisBlock from './TetrisBlock';

export default class TetrisBlockI extends TetrisBlock {
    constructor() {
        super();
        this.state = this.init();
        this.cutLooseColumnsAndRows();
    }

    init() {
        const controlMap = this.getEmptyControlMap();
        this.setTileState(controlMap, 0, 2, 'cyan');
        this.setTileState(controlMap, 1, 2, 'cyan');
        this.setTileState(controlMap, 2, 2, 'cyan');
        this.setTileState(controlMap, 3, 2, 'cyan');
        return controlMap;
    }
}

