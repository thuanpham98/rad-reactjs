import { RdModel } from "../rad-cores";
export declare class RdModelObject<T> extends RdModel<T> {
    protected key: symbol;
    value: T;
    constructor(v: T, name: string);
    getName(): string;
}
