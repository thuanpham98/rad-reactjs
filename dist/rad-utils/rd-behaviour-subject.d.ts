import { RdObserver, RdSubject } from "../rad-cores";
export declare class RdBehaviourObserver<T> extends RdObserver<T> {
    readonly key: symbol;
    handler?: (v: T) => void;
    constructor(h?: (v: T) => void);
    getName(): string;
    update(s: RdSubject<T>): void;
}
export declare class RdBehaviorSubject<T> extends RdSubject<T> {
    key: symbol;
    value: T;
    private observer;
    constructor(init: T);
    subscribe(o: RdObserver<T>): void;
    unsubcrise(o: RdObserver<T>): void;
    close(): void;
    notify(): void;
}
