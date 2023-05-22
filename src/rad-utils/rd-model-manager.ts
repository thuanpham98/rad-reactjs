import { RdManager, RdModel } from "../rad-cores";

export class RdModelsManager extends RdManager<RdModel<any>> {
  private m!: Map<string, RdModel<any>>;
  protected key!: symbol;
  private static _instance: RdModelsManager;

  constructor() {
    super();
    if (!RdModelsManager._instance) {
      this.key = Symbol("RdModelsManager");
      RdModelsManager._instance = this;
      this.m = new Map<string, RdModel<any>>();
    }
    return RdModelsManager._instance as RdModelsManager;
  }

  /**
   * use
   */
  public use(m: RdModel<any>): RdManager<RdModel<any>> {
    this.m.set(m.getName(), m);
    return RdModelsManager._instance as RdManager<RdModel<any>>;
  }

  /**
   * remove
   */
  public remove(name: string): RdManager<RdModel<any>> {
    if (this.m.has(name)) {
      this.m.delete(name);
    }
    return RdModelsManager._instance as RdManager<RdModel<any>>;
  }

  /**
   * getMoels
   */
  public get<T2 extends RdModel<any>>(name: string): T2 | undefined {
    return this.m.get(name) as T2 | undefined;
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
