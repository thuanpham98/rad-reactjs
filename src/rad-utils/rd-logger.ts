import { RdDecorator, RdOperation } from "../rad-cores";

export class RdLogger extends RdOperation<unknown, void> {
  public readonly key: symbol;
  constructor() {
    super();
    this.key = Symbol("RdLogger");
  }
  execute(arg: unknown): void {
    return console.log(arg);
  }
}

export class RdLoggerDecorator extends RdDecorator<unknown, void> {
  public readonly key: symbol;
  public operation: RdLogger;

  constructor(o: RdLogger) {
    super();
    this.key = Symbol(`RdDecorator-${Date.now()}`);
    this.operation = o;
  }
  public log(arg: unknown): void {
    this.operation.execute(arg);
  }
}
