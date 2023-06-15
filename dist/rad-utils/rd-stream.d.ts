export declare class RdStream<T> {
    key: symbol;
    private subject;
    private closed;
    constructor(init: T);
    next(t: T): void;
    subscribe(handler: (v: T) => void): void;
    complete(): void;
}
