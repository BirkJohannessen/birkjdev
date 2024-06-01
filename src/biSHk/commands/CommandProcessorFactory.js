import BigCommandProcessor from './BigCommandProcessor'

export default class CommandProcessorFactory {
    produce(command) {
        if (new BigCommandProcessor(command).applicable()) {
            return new BigCommandProcessor(command).process();
        } else {
            return `Command: ${command} not found.`;
        }
    }
}
