export default class TetrisInput {
    public right: boolean;
    public left: boolean;
    public up: boolean;
    public down: boolean;
    public commit: boolean;
    public save: boolean;

    constructor() {
        this.right = false;
        this.left = false;
        this.up = false;
        this.down = false;
        this.commit = false;
        this.save = false;
    }
}
