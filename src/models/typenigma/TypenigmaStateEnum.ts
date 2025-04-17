// we ignore these errors, since they are referenced in this file as a static import, but eslint wont detect it.
export enum GameState {
    STOPPED, // eslint-disable-line
    STARTED, // eslint-disable-line
    RESULTS  // eslint-disable-line
}
export const STOPPED: GameState = GameState.STOPPED;
export const STARTED: GameState = GameState.STARTED;
export const RESULTS: GameState = GameState.RESULTS;
