import TetrisBlock from './TetrisBlock';

interface TetrisPauseContext {
    pauseAge: number;
    resumeAge: number;
    excessPauseTime: number;
}

export default class TetrisEngineInfo {
    public blockAge: number;
    public gameTick: number;
    public blockLifetimeTicks: number;
    public paddingLifeTimeTicks: number;
    public level: number;
    public score: number;
    public reset: boolean;
    public storedBlock?: TetrisBlock;
    public stop: boolean;
    public paused: boolean;
    public pauseContext: TetrisPauseContext;

    constructor(
    ) {
            this.blockAge = Date.now();
            this.gameTick = 600;
            this.blockLifetimeTicks = 0;
            this.paddingLifeTimeTicks = 0;
            this.level = 1;
            this.score = 0;
            this.reset = false;
            this.stop = true;
            this.paused = false;
            this.pauseContext = {
                pauseAge: 0,
                resumeAge: 0,
                excessPauseTime: 0 // accumalated (pauseAge-resumeAge) from previous pauses from the same blocklifesycle.
            }
    }
}

