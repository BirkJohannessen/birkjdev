import TetrisBlock from './TetrisBlock';

export default class TetrisBlockS extends TetrisBlock {
    constructor() {
        super();
        this.state = this.init();
    }

    init() {
        const controlMap = this.getEmptyControlMap();
        this.setTileState(controlMap, 3, 1, 'green');
        this.setTileState(controlMap, 3, 2, 'green');
        this.setTileState(controlMap, 2, 2, 'green');
        this.setTileState(controlMap, 2, 3, 'green');
        return controlMap;
    }
}

