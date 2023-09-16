import { ReactNode } from "react";
/**
 * ! @param complete @type Function is dangerous function, because it close stream, if you are share stream between component, be careful.
 */
interface StreamData<T> {
    subscribe: (callback: (value: T) => void) => any;
    complete: () => void;
}
/**
 * * D is Data
 * * E is Error
 */
interface SnapShot<D, E> {
    connectionState: "waiting" | "done";
    data: D | null;
    hasError: boolean;
    hasData: boolean;
    error: E | null;
}
/**
 * * D is Data
 * * E is Error
 * * C is Context
 */
interface StreamBuilderProps<D, E, C> {
    initData?: D;
    stream: StreamData<D>;
    builder: (context?: C, snapshot?: SnapShot<D, E>) => ReactNode;
    validate?: (d: D) => E | null;
    context?: C;
    selector?: () => boolean;
}
export declare const StreamBuilder: <D, E, C>({ builder, initData, stream, validate, context, }: StreamBuilderProps<D, E, C>) => ReactNode;
export {};
