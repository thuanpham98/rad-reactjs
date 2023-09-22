import { useEffect, useRef, useState } from "react";
import { RdStream } from "./rd-stream";

export class RdBloc<T> {
  public stream: RdStream<T>;
  private _state: T;

  constructor({
    initState,
    callback,
  }: {
    initState: T;
    callback?: () => void | Promise<void>;
  }) {
    this._state = initState;
    this.stream = new RdStream<T>(initState);
    callback && callback();
  }

  public set state(s: T) {
    this._state = s;
  }

  public get state(): T {
    return this._state;
  }

  public upDateState(s?: T) {
    if (s !== undefined) {
      this._state = s;
    }
    this._state && this.stream.next(this._state);
  }
}

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
  }, [_bloc.stream]);

  return [_bloc.state, updateState, _bloc.stream];
}
