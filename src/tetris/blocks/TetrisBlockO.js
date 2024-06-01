import TetrisBlock from './TetrisBlock';

export default class TetrisBlockSquare extends TetrisBlock {
    constructor() {
        super();
        this.state = this.init();
    }

    init() {
        const controlMap = this.getEmptyControlMap();
        this.setTileState(controlMap, 2, 1, 'yellow');
        this.setTileState(controlMap, 2, 2, 'yellow');
        this.setTileState(controlMap, 3, 1, 'yellow');
        this.setTileState(controlMap, 3, 2, 'yellow');
        return controlMap;
    }
}

