import TetrisBlock from './TetrisBlock';

export default class TetrisBlockZ extends TetrisBlock {
    constructor() {
        super();
        this.state = this.init();
    }

    init() {
        const controlMap = this.getEmptyControlMap();
        controlMap[2][1].tileState = 1;
        controlMap[2][2].tileState = 1;
        controlMap[3][2].tileState = 1;
        controlMap[3][3].tileState = 1;
        return controlMap;
    }
}

