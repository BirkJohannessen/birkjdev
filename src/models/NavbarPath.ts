export default class NavbarPath {
    public name: string;
    public path: string;
    public icon: string;
    public matchOn: string[];
    public selected: boolean

    constructor(
        name: string,
        path: string,
        icon: string,
        matchOn: string[],
        selected: boolean = false
    ) {
        this.name = name;
        this.path = path;
        this.icon = icon;
        this.matchOn = matchOn;
        this.selected = selected;
    }
}
