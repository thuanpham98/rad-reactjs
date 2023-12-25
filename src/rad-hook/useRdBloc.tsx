import { useCallback, useEffect, useMemo, useState } from "react";
import { RdBloc, RdStream } from "../rad-utils";
import { fromJS } from "immutable";

export function useRdBloc<T extends NonNullable<object>>(
  data: T,
): [T, (v?: T) => void, RdStream<T>] {
  const _bloc = useMemo<RdBloc<T>>(() => {
    return new RdBloc<T>({ initState: data });
  }, []);

  const [_state, _setState] = useState<T>(
    (() => {
      return fromJS<T>(_bloc.state).toJS();
    })(),
  );

  const updateState = useCallback(
    (s?: T) => {
      if (s === undefined) {
        const _newImmerState = fromJS<T>(_state);
        if (!fromJS<T>(_bloc.state).equals(_newImmerState)) {
          _bloc.upDateState(_newImmerState.toJS());
        }
      } else {
        const _newImmerState = fromJS<T>(s);
        if (!fromJS<T>(_bloc.state).equals(_newImmerState)) {
          _bloc.upDateState(_newImmerState.toJS());
        }
      }
    },
    [_state],
  );

  useEffect(() => {
    _bloc.stream.subscribe((v) => {
      _setState(fromJS<T>(v).toJS());
    });

    return () => {
      _bloc.stream.complete();
    };
  }, []);

  return [_state, updateState, _bloc.stream];
}
