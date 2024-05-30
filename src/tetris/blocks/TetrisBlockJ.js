import TetrisBlock from './TetrisBlock';

export default class TetrisBlockL2 extends TetrisBlock {
    constructor() {
        super();
        this.state = this.init();
    }

    init() {
        const controlMap = this.getEmptyControlMap();
        controlMap[1][1].tileState = 1;
        controlMap[2][1].tileState = 1;
        controlMap[3][1].tileState = 1;
        controlMap[3][0].tileState = 1;
        return controlMap;
    }
}

