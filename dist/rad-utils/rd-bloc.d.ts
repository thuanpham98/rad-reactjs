import { BehaviorSubject } from "rxjs";
export declare class RdBloc<T> {
    stream: BehaviorSubject<T>;
    private _state;
    constructor({ initState, callback, }: {
        initState: T;
        callback?: () => void | Promise<void>;
    });
    set state(s: T);
    get state(): T;
    upDateState(s?: T): void;
}
