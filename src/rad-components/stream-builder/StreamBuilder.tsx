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
  children: (context?: C, snapshot?: SnapShot<D, E>) => ReactNode;
  validate?: (d: D) => E | null;
  context?: C;
  selector?: (preState: D | null, nextState: D | null) => boolean;
}

export const StreamBuilder = <D, E, C>({
  children,
  initData,
  stream,
  validate,
  context,
  selector,
}: StreamBuilderProps<D, E, C>) => {
  const [state, setState] = useState<SnapShot<D, E>>({
    connectionState: "waiting",
    data: initData ?? null,
    hasError: false,
    error: null,
    hasData: initData ? true : false,
  });
  useEffect(() => {
    const currentSnap = { ...state };
    stream.subscribe((v) => {
      // stream is close
      if (currentSnap.connectionState === "done") {
        return;
      }
      // selector
      if (selector && !selector(currentSnap.data, v)) {
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
      currentSnap.data = { ...v };
      // new state
      setState({ ...currentSnap });
    });

    return () => {
      currentSnap.connectionState = "done";
    };
  }, []);

  return children(context, state);
};
