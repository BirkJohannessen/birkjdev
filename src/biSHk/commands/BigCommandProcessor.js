import CommandProcessor from './CommandProcessor.js';
export default class BigCommandProcessor extends CommandProcessor {
    get name() {
        return 'big';
    }
    process() {
        return super.getArgument(1).toUpperCase();
    }
}
