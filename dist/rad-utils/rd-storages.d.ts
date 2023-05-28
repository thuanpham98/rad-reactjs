import { RdStorage } from "../rad-cores";
export declare class RdLocalStorage extends RdStorage {
    readonly key: symbol;
    constructor();
    get sizeStorage(): number;
    getItem({ key }: {
        key: string;
    }): string;
    setItem({ key, value }: {
        key: string;
        value: string;
    }): void;
    removeItem({ key }: {
        key: string;
    }): void;
    clearStorage(): void;
}
export declare class RdSessionStorage extends RdStorage {
    readonly key: symbol;
    constructor();
    get sizeStorage(): number;
    getItem({ key }: {
        key: string;
    }): string;
    setItem({ key, value }: {
        key: string;
        value: string;
    }): void;
    removeItem({ key }: {
        key: string;
    }): void;
    clearStorage(): void;
}
