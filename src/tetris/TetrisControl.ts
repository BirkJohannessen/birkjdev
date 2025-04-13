import TetrisBlock from '@/models/tetris/TetrisBlock';
import TetrisBlockL from '@/models/tetris/TetrisBlockL';
import TetrisBlockJ from '@/models/tetris/TetrisBlockJ';
import TetrisBlockZ from '@/models/tetris/TetrisBlockZ';
import TetrisBlockS from '@/models/tetris/TetrisBlockS';
import TetrisBlockI from '@/models/tetris/TetrisBlockI';
import TetrisBlockO from '@/models/tetris/TetrisBlockO';
import TetrisBlockT from '@/models/tetris/TetrisBlockT';

export default class TetrisControl {
    public xShift: number;
    public blockSave: boolean;
    public blockStack: TetrisBlock[];
    private currentBlock: TetrisBlock;

    constructor() {
        this.xShift = 0;
        this.blockSave = false;

        // default
        this.currentBlock = new TetrisBlockI();

        this.blockStack = [];
        for (let i = 0; i < 5; i++) {
            this.blockStack.push(this.getRandomBlock());
        }
    }

    getRandomBlock() : TetrisBlock {
        const blocks = [new TetrisBlockI(), new TetrisBlockL(), new TetrisBlockJ(), new TetrisBlockZ(), new TetrisBlockS(), new TetrisBlockO(), new TetrisBlockT()]
        return blocks[Math.floor(Math.random() * blocks.length)];
    }

    getCurrentBlock() : TetrisBlock {
        return this.currentBlock;
    }

    setNextBlock() : TetrisBlock {
        this.currentBlock = this.blockStack[0];
        this.blockStack.splice(0, 1);
        const queue = [...this.blockStack];
        queue.push(this.getRandomBlock());
        this.blockStack = queue;
        this.xShift = 0;
        return this.currentBlock;
    }

    setStoredBlock(storedBlock: TetrisBlock) : TetrisBlock {
        this.currentBlock = storedBlock;
        this.xShift = 0;
        return storedBlock;
    }

    rotate() : void {
        this.currentBlock.rotate();
    }
}

