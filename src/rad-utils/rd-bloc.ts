import { RdStream } from "./rd-stream";

export class RdBloc<T extends NonNullable<unknown> | null> {
  public stream: RdStream<T | null>;
  private _state: T | null;

  constructor({
    initState,
    callback,
  }: {
    initState?: T | null;
    callback?: () => void | Promise<void>;
  }) {
    this._state = initState === undefined ? null : initState;
    this.stream = new RdStream<T | null>(this._state);
    callback && callback();
  }

  public set state(s: T | null) {
    this._state = s;
  }

  public get state(): T | null {
    return this._state;
  }

  public upDateState(s: T | null) {
    this._state = s;
    this.stream.next(this._state);
  }
}
