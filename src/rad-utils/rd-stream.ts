import { RdBehaviorSubject, RdBehaviourObserver } from "./rd-behaviour-subject";

export class RdStream<T> {
  public key: symbol;
  private subject: RdBehaviorSubject<T>;
  private closed = false;

  constructor(init: T) {
    this.key = Symbol(Date.now());
    this.subject = new RdBehaviorSubject<T>(init);
  }

  public next(t: T) {
    if (!this.closed) {
      this.subject.value = t;
      this.subject.notify();
    }
  }

  public subscribe(handler: (v: T) => void): void {
    if (!this.closed) {
      this.subject.subscribe(new RdBehaviourObserver<T>(handler));
    }
  }

  public complete() {
    if (!this.closed) {
      this.subject.close();
      this.closed = true;
    }
  }
}
