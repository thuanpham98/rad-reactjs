import { ReactNode, useEffect, useState } from "react";

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
    selector?:()=>boolean;
}

export const StreamBuilder = <D, E, C>({
    builder,
    initData,
    stream,
    validate,
    context,
}: StreamBuilderProps<D, E, C>) => {
    const [state, setState] = useState<SnapShot<D, E>>({
        connectionState: 'waiting',
        data: initData ?? null,
        hasError: false,
        error: null,
        hasData: initData ? true : false,
    });
    useEffect(() => {
        const currentSnap = { ...state };
        stream.subscribe((v) => {
            // stream is close
            if (currentSnap.connectionState === 'done') {
                return;
            }
            // check error
            if (validate !== undefined) {
                currentSnap.error = validate(v);
            } else {
                currentSnap.error = null;
            }
            if (currentSnap.error !== undefined && currentSnap.error !== null) {
                currentSnap.hasError = true;
            } else {
                currentSnap.hasError = false;
            }

            // check data
            if (v !== null && v !== undefined) {
                currentSnap.hasData = true;
            } else {
                currentSnap.hasData = false;
            }

            // setNew State
            setState({
                data: v,
                connectionState: currentSnap.connectionState,
                error: currentSnap.error,
                hasError: currentSnap.hasError,
                hasData: currentSnap.hasData,
            });
        });

        return () => {
            currentSnap.connectionState='done';
        }
    }, []);

    return builder(context, state);
}