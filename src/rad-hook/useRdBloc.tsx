import { useEffect, useRef, useState } from "react";
import { RdBloc, RdStream } from "../rad-utils";

export function useRdBloc<T>(data: T): [T, (v?: T) => void, RdStream<T>] {
  const _bloc = useRef<RdBloc<T>>(new RdBloc<T>({ initState: data })).current;
  const [_state, _setState] = useState<T>(_bloc.state);

  function updateState(s?: T) {
    _bloc.upDateState(s);
  }

  useEffect(() => {
    _bloc.stream.subscribe((v) => {
      _setState({ ...v });
    });

    return () => {
      _bloc.stream.complete();
    };
  }, []);

  return [_bloc.state, updateState, _bloc.stream];
}
