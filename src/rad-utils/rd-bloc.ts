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
