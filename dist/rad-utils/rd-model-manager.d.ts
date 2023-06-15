import { RdManager, RdModel } from "../rad-cores";
export declare class RdModelsManager extends RdManager<RdModel<NonNullable<unknown>>> {
    private m;
    key: symbol;
    private static _instance;
    constructor();
    /**
     * use
     */
    use(m: RdModel<NonNullable<unknown>>): RdManager<RdModel<NonNullable<unknown>>>;
    /**
     * remove
     */
    remove(name: string): RdManager<RdModel<NonNullable<unknown>>>;
    /**
     * getMoels
     */
    get<T2 extends RdModel<NonNullable<unknown>>>(name: string): T2;
    /**
     * length
     */
    get length(): number;
    /**
     * clear
     */
    clear(): void;
}
