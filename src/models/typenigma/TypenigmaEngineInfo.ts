import type InputProcessor from '@/typenigma/TypenigmaInputProcessor';

export interface TypenigmaEngineInfo {
    wpmTotal: number,
    gameState: number,
    startTime: number,
    interval: number,
    input: InputProcessor,
    timeDisplay: string,
    wpm: number,
    wpmIntervals: number[],
    timeIntervals: string[][]
}
