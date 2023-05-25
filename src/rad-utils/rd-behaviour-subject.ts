import { RdObserver, RdSubject } from "../rad-cores";

export class RdBehaviourObserver<T> extends RdObserver<T> {
  public key: symbol;
  public handler?: (v: T) => void;
  constructor(h?: (v: T) => void) {
    super();
    this.key = Symbol(Date.now());
    this.handler = h?.bind(this);
  }
  getName(): string {
    return this.key.description ?? "";
  }

  update(s: RdSubject<T>): void {
    if (s instanceof RdBehaviorSubject<T>) {
      this.handler && this.handler(s.value);
    }
  }
}

export class RdBehaviorSubject<T> extends RdSubject<T> {
  public key: symbol;
  public value: T;
  private observer: Map<string, RdObserver<T>>;

  constructor(init: T) {
    super();
    this.key = Symbol(Date.now());
    this.value = init;
    this.observer = new Map<string, RdObserver<T>>();
  }

  public subscribe(o: RdObserver<T>): void {
    if (!this.observer.has(o.getName())) {
      this.observer.set(o.getName(), o);
    }
  }

  public unsubcrise(o: RdObserver<T>): void {
    if (this.observer.has(o.getName())) {
      this.observer.delete(o.getName());
    }
  }

  public close(): void {
    this.observer.clear();
  }

  public notify(): void {
    this.observer.forEach((o: RdObserver<T>) => {
      o.update(this);
    });
  }
}
