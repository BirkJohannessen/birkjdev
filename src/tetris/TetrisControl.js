import TetrisBlockL from './blocks/TetrisBlockL';
import TetrisBlockJ from './blocks/TetrisBlockJ';
import TetrisBlockZ from './blocks/TetrisBlockZ';
import TetrisBlockS from './blocks/TetrisBlockS';
import TetrisBlockI from './blocks/TetrisBlockI';
import TetrisBlockO from './blocks/TetrisBlockO';
import TetrisBlockT from './blocks/TetrisBlockT';

export default class TetrisControl {
    constructor() {
        this.xShift = 0;
        this.blockSave = false;

        this.blockStack = [];
        for (let i = 0; i < 5; i++) {
            this.blockStack.push(this.getRandomBlock());
        }
    }

    getRandomBlock() {
        const blocks = [new TetrisBlockI(), new TetrisBlockL(), new TetrisBlockJ(), new TetrisBlockZ(), new TetrisBlockS(), new TetrisBlockO(), new TetrisBlockT()]
        return blocks[Math.floor(Math.random() * blocks.length)];
    }

    getCurrentBlock() {
        return this.currentBlock;
    }

    setNextBlock() {
        this.currentBlock = this.blockStack[0];
        this.blockStack.splice(0, 1);
        const queue = [...this.blockStack];
        queue.push(this.getRandomBlock());
        this.blockStack = queue;
        this.xShift = 0;
        return this.currentBlock;
    }

    setStoredBlock(storedBlock) {
        this.currentBlock = storedBlock;
        this.xShift = 0;
        return storedBlock;
    }

    rotate() {
        this.currentBlock.rotate();
    }

    canLeftShiftX() {
        try {
            this.currentBlock.adjustLeft();
        } catch (e) {
            return false;
        }
        return true;
    }

    canRightShiftX() {
        try {
            this.currentBlock.adjustRight();
        } catch (e) {
            return false;
        }
        return true;
    }

    shiftLeft() {
        this.currentBlock.state = this.currentBlock.adjustLeft();
    }

    shiftRight() {
        this.currentBlock.state = this.currentBlock.adjustRight();
    }
}

