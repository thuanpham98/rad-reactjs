import { RdManager, RdModel } from "../rad-cores";
export declare class RdModelsManager extends RdManager<RdModel<any>> {
    private m;
    protected key: symbol;
    private static _instance;
    constructor();
    /**
     * use
     */
    use(m: RdModel<any>): RdManager<RdModel<any>>;
    /**
     * remove
     */
    remove(name: string): RdManager<RdModel<any>>;
    /**
     * getMoels
     */
    get<T2 extends RdModel<any>>(name: string): T2 | undefined;
    /**
     * length
     */
    get length(): number;
    /**
     * clear
     */
    clear(): void;
}
