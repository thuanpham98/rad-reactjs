import { RdModel } from "../rad-cores";

export class RdModelObject<T> extends RdModel<T> {
  public readonly key: symbol;
  public value: T;
  constructor(v: T, name: string) {
    super();
    this.key = Symbol(`${name}`);
    this.value = v;
  }

  public getName(): string {
    return this.key.description ?? "";
  }
}
