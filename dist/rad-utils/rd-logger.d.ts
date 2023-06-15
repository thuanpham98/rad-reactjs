import { RdDecorator, RdOperation } from "../rad-cores";
export declare class RdLogger extends RdOperation<unknown, void> {
    readonly key: symbol;
    constructor();
    execute(arg: unknown): void;
}
export declare class RdLoggerDecorator extends RdDecorator<unknown, void> {
    readonly key: symbol;
    operation: RdLogger;
    constructor(o: RdLogger);
    log(arg: unknown): void;
}
