import TetrisBlock from './TetrisBlock';

export default class TetrisBlockL2 extends TetrisBlock {
    constructor() {
        super();
        this.state = this.init();
    }

    init() {
        const controlMap = this.getEmptyControlMap();
        this.setTileState(controlMap, 1, 2, 'blue');
        this.setTileState(controlMap, 2, 2, 'blue');
        this.setTileState(controlMap, 3, 2, 'blue');
        this.setTileState(controlMap, 3, 1, 'blue');
        return controlMap;
    }
}

