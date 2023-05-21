import { RdModel } from "../rad-cores";

export class RdModelObject<T> extends RdModel<T> {
  protected key: symbol;
  value: T;
  constructor(v: T, name: string) {
    super();
    this.key = Symbol(`${name}`);
    this.value = v;
  }

  getName(): string {
    return this.key.description ?? "";
  }
}
