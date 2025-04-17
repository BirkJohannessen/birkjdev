// we ignore these errors, since they are referenced in this file as a static import, but eslint wont detect it.
export enum LetterState {
    NOTTYPED, // eslint-disable-line
    MISS,     // eslint-disable-line
    HIT,      // eslint-disable-line
    OVERFLOW  // eslint-disable-line
}
export const NOTTYPED: LetterState = LetterState.NOTTYPED;
export const MISS: LetterState = LetterState.MISS;
export const HIT: LetterState = LetterState.HIT;
export const OVERFLOW: LetterState = LetterState.OVERFLOW;
