import { RdStorage } from "../rad-cores";

export class RdLocalStorage extends RdStorage {
  public readonly key: symbol;
  constructor() {
    super();
    this.key = Symbol("RdLocalStorage");
  }
  public get sizeStorage(): number {
    return window && localStorage.length;
  }

  public getItem({ key }: { key: string }): string {
    return (window && localStorage.getItem(key)) ?? "";
  }
  public setItem({ key, value }: { key: string; value: string }): void {
    return window && localStorage.setItem(key, value);
  }

  public removeItem({ key }: { key: string }) {
    return window && localStorage.removeItem(key);
  }

  public clearStorage() {
    return window && localStorage.clear();
  }
}

export class RdSessionStorage extends RdStorage {
  public readonly key: symbol;

  constructor() {
    super();
    this.key = Symbol("RdSessionStorage");
  }
  public get sizeStorage(): number {
    return window && sessionStorage.length;
  }

  public getItem({ key }: { key: string }): string {
    return (window && sessionStorage.getItem(key)) ?? "";
  }
  public setItem({ key, value }: { key: string; value: string }): void {
    return window && sessionStorage.setItem(key, value);
  }

  public removeItem({ key }: { key: string }) {
    return window && sessionStorage.removeItem(key);
  }

  public clearStorage() {
    return window && sessionStorage.clear();
  }
}
