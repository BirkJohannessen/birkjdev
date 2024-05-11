export default class CommandProcessor {
    constructor(command) {
        this.command = command;
    }
    process() {
        return "";
    }
    applicable() {
    }
    applicable() {
         return this.command && typeof this.command === 'string'
         && this.getFirstArgument() === this.name;
    }
    getFirstArgument() {
        return this.command.split(' ')[0];
    }
    sanitize() {
        let command = this.command;
        command = command.trim();
        this.command = command;
    }
    getArgument(idx) {
        return this.command.split(' ')[idx];
    }
}
