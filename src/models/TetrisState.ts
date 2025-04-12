export default class TetrisState {
    constructor(
        public queue: any[],
        public map: any,
        public info: string,
        public level: number,
        public score: number,
        public holdBlack: any,
        public emptyBlockMap: any,
    ) {}

    public asdf(): string {
        return '';
    }
}
