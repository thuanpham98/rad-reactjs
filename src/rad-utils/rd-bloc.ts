import { RdStream } from "./rd-stream";

export class RdBloc<T extends NonNullable<unknown>> {
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
    this.stream = new RdStream<T>(this._state);
    callback && callback();
  }

  public get state(): T {
    return this.stream.value;
  }

  public upDateState(s: T) {
    this.stream.next(s);
  }
}
