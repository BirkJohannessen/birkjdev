export default class NavbarPath {
    public name: string;
    public path: string;
    public icon: string;
    public matchOn: string[];

    constructor(
        name: string,
        path: string,
        icon: string,
        matchOn: string[]
    ) {
        this.name = name;
        this.path = path;
        this.icon = icon;
        this.matchOn = matchOn;
    }
}
