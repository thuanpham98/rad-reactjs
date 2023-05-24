import { RdAbstractEvent } from "../rad-cores";
declare class RdStreamEvent<T> extends CustomEvent<T> {
}
export declare class RdStream<T> extends RdAbstractEvent<T> {
    key: symbol;
    value: RdStreamEvent<T>;
    private stream;
    constructor(init: T);
    next(t: T): void;
    subscribe(handler: (v: T) => void): void;
    complete(): void;
}
export {};
