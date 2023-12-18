import { useCallback, useEffect, useRef, useState } from "react";
import { RdBloc, RdStream } from "../rad-utils";
import { fromJS } from "immutable";

export function useRdBloc<T extends NonNullable<unknown> | null>(
  data?: T,
): [T | null, (v?: T | null) => void, RdStream<T | null>] {
  const _bloc = useRef<RdBloc<T | null>>(
    new RdBloc<T | null>({ initState: data }),
  ).current;

  const [_state, _setState] = useState<T | null>(
    (() => {
      if (
        _bloc.state === null ||
        typeof _bloc.state === "string" ||
        typeof _bloc.state === "number" ||
        typeof _bloc.state === "boolean" ||
        typeof _bloc.state === "bigint" ||
        typeof _bloc.state === "symbol" ||
        typeof _bloc.state === "function"
      ) {
        return _bloc.state;
      } else {
        try {
          return fromJS<NonNullable<T>>(_bloc.state).toJS();
        } catch (error) {
          console.error(error);
          return _bloc.state;
        }
      }
    })(),
  );

  const updateState = useCallback((s?: T | null) => {
    if (s === undefined) {
      if (
        _state !== null &&
        typeof _state !== "string" &&
        typeof _state !== "number" &&
        typeof _state !== "boolean" &&
        typeof _state !== "bigint" &&
        typeof _state !== "symbol" &&
        typeof _state !== "function" &&
        _bloc.state !== null &&
        typeof _bloc.state !== "string" &&
        typeof _bloc.state !== "number" &&
        typeof _bloc.state !== "boolean" &&
        typeof _bloc.state !== "bigint" &&
        typeof _bloc.state !== "symbol" &&
        typeof _bloc.state !== "function"
      ) {
        try {
          const _newImmerState = fromJS<NonNullable<T>>(_state);
          if (!fromJS<NonNullable<T>>(_bloc.state).equals(_newImmerState)) {
            _bloc.upDateState(_newImmerState.toJS());
          }
        } catch (error) {
          _bloc.upDateState(_state);
          console.error(error);
        }
      } else if (_bloc.state !== _state) {
        _bloc.upDateState(_state);
      }
    } else {
      if (
        s !== null &&
        typeof s !== "string" &&
        typeof s !== "number" &&
        typeof s !== "boolean" &&
        typeof s !== "bigint" &&
        typeof s !== "symbol" &&
        typeof s !== "function" &&
        _bloc.state !== null &&
        typeof _bloc.state !== "string" &&
        typeof _bloc.state !== "number" &&
        typeof _bloc.state !== "boolean" &&
        typeof _bloc.state !== "bigint" &&
        typeof _bloc.state !== "symbol" &&
        typeof _bloc.state !== "function"
      ) {
        try {
          const _newImmerState = fromJS<NonNullable<T>>(s);
          if (!fromJS<NonNullable<T>>(_bloc.state).equals(_newImmerState)) {
            _bloc.upDateState(_newImmerState.toJS());
          }
        } catch (error) {
          _bloc.upDateState(s);
          console.error(error);
        }
      } else if (s !== _bloc.state) {
        _bloc.upDateState(s);
      }
    }
  }, []);

  useEffect(() => {
    _bloc.stream.subscribe((v) => {
      _setState(v);
    });

    return () => {
      _bloc.stream.complete();
    };
  }, []);

  return [_state, updateState, _bloc.stream];
}
