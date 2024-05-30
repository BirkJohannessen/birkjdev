import TetrisBlock from './TetrisBlock';

export default class TetrisBlockS extends TetrisBlock {
    constructor() {
        super();
        this.state = this.init();
    }

    init() {
        const controlMap = this.getEmptyControlMap();
        controlMap[3][1].tileState = 1;
        controlMap[3][2].tileState = 1;
        controlMap[2][2].tileState = 1;
        controlMap[2][3].tileState = 1;
        return controlMap;
    }
}

