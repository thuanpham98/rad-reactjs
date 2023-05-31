import { RdStream } from "./rd-stream";
export declare class RdBloc<T> {
    stream: RdStream<T>;
    private _state;
    constructor({ initState, callback, }: {
        initState: T;
        callback?: () => void | Promise<void>;
    });
    set state(s: T);
    get state(): T;
    upDateState(s?: T): void;
}
export declare function useRdBloc<T>(data: T): [T, (v?: T) => void];
