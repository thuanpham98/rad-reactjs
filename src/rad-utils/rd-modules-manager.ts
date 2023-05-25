import { RdManager, RdModule } from "../rad-cores";

export class RdModulesManager<T extends RdModule> extends RdManager<T> {
  private m!: Map<string, T>;
  protected key!: symbol;
  private static _instance: RdModulesManager<RdModule>;

  constructor() {
    if (!RdModulesManager._instance) {
      super();
      this.key = Symbol("RdModulesManager");
      RdModulesManager._instance = this;
      this.m = new Map<string, T>();
    }
    return RdModulesManager._instance as RdModulesManager<T>;
  }

  /**
   * use
   */
  public use(m: T): RdModulesManager<T> {
    this.m.set(m.getName(), m);
    return RdModulesManager._instance as RdModulesManager<T>;
  }

  /**
   * remove
   */
  public remove(name: string): RdModulesManager<T> {
    if (this.m.has(name)) {
      this.m.delete(name);
    }
    return RdModulesManager._instance as RdModulesManager<T>;
  }

  /**
   * getModule
   */
  public get<T2 extends T>(name: string): T2 {
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
