export declare abstract class RdCore {
    protected abstract readonly key: symbol;
}
export declare abstract class RdModule extends RdCore {
    protected abstract readonly key: symbol;
    abstract getName(): string;
}
export declare abstract class RdStorage extends RdCore {
    protected abstract readonly key: symbol;
    abstract get sizeStorage(): number;
    abstract getItem({ key }: {
        key: string;
    }): string;
    abstract setItem({ key, value }: {
        key: string;
        value: string;
    }): void;
    abstract removeItem({ key }: {
        key: string;
    }): void;
    abstract clearStorage(): void;
}
export declare abstract class RdModel<T> extends RdCore {
    protected abstract readonly key: symbol;
    abstract getName(): string;
    abstract value: T;
}
export declare abstract class RdManager<T> extends RdCore {
    protected abstract readonly key: symbol;
    abstract use(m: T): RdManager<T>;
    abstract remove(name: string): RdManager<T>;
    abstract get<T2 extends T>(name: string): T2;
    abstract get length(): number;
    abstract clear(): void;
}
export declare abstract class RdSubject<T> extends RdCore {
    protected abstract readonly key: symbol;
    abstract notify(): void;
    abstract subscribe(o: RdObserver<T>): void;
    abstract unsubcrise(o: RdObserver<T>): void;
}
export declare abstract class RdObserver<T> extends RdCore {
    protected abstract readonly key: symbol;
    abstract getName(): string;
    abstract update(s: RdSubject<T>): void;
}
export declare abstract class RdOperation<Req, Resp> {
    protected abstract readonly key: symbol;
    abstract execute(arg: Req): Resp;
}
export declare abstract class RdDecorator<T1, T2> extends RdCore {
    protected abstract readonly key: symbol;
    abstract operation: RdOperation<T1, T2>;
}
