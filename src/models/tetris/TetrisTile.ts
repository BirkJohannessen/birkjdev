export default class TetrisTile {
    public tileState: number;
    public tileReflect: number;
    public color: string;
    private debug: boolean;
    public outOfBounds: boolean;

    constructor( tileState: any );
    constructor(
        tileState: number,
        tileReflect?: number,
        color?: string,
        debug?: boolean,
        outOfBounds?: boolean 
    ) {
        this.tileState = tileState;
        this.tileReflect = tileReflect ?? 0;
        this.color = color ?? '#ffbbaa';
        this.debug = debug ?? false;
        this.outOfBounds = outOfBounds ?? false;
    }
}
