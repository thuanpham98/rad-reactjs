import { RdManager, RdModel } from "../rad-cores";

export class RdModelsManager extends RdManager<RdModel<NonNullable<unknown>>> {
  private m!: Map<string, RdModel<NonNullable<unknown>>>;
  protected key!: symbol;
  private static _instance: RdModelsManager;

  constructor() {
    super();
    if (!RdModelsManager._instance) {
      this.key = Symbol("RdModelsManager");
      RdModelsManager._instance = this;
      this.m = new Map<string, RdModel<NonNullable<unknown>>>();
    }
    return RdModelsManager._instance as RdModelsManager;
  }

  /**
   * use
   */
  public use(
    m: RdModel<NonNullable<unknown>>,
  ): RdManager<RdModel<NonNullable<unknown>>> {
    this.m.set(m.getName(), m);
    return RdModelsManager._instance as RdManager<
      RdModel<NonNullable<unknown>>
    >;
  }

  /**
   * remove
   */
  public remove(name: string): RdManager<RdModel<NonNullable<unknown>>> {
    if (this.m.has(name)) {
      this.m.delete(name);
    }
    return RdModelsManager._instance as RdManager<
      RdModel<NonNullable<unknown>>
    >;
  }

  /**
   * getMoels
   */
  public get<T2 extends RdModel<NonNullable<unknown>>>(name: string): T2 {
    const ret = this.m.get(name);
    if (ret === undefined) {
      throw TypeError("Do not exist model");
    }
    return this.m.get(name) as T2;
  }

  /**
   * length
   */
  public get length(): number {
    return this.m.size;
  }

  /**
   * clear
   */
  public clear(): void {
    return this.m.clear();
  }
}
