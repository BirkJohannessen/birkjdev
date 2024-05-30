import TetrisBlock from './TetrisBlock';

export default class TetrisBlockI extends TetrisBlock {
    constructor() {
        super();
        this.state = this.init();
    }

    init() {
        const controlMap = this.getEmptyControlMap();
        controlMap[0][2].tileState = 1;
        controlMap[1][2].tileState = 1;
        controlMap[2][2].tileState = 1;
        controlMap[3][2].tileState = 1;
        return controlMap;
    }
}

