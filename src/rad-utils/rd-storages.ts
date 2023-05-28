import { RdStorage } from "../rad-cores";

export class RdLocalStorage extends RdStorage {
  public readonly key: symbol;
  constructor() {
    super();
    this.key = Symbol("RdLocalStorage");
  }
  public get sizeStorage(): number {
    return localStorage.length;
  }

  public getItem({ key }: { key: string }): string {
    return localStorage.getItem(key) ?? "";
  }
  public setItem({ key, value }: { key: string; value: string }): void {
    return localStorage.setItem(key, value);
  }

  public removeItem({ key }: { key: string }) {
    return localStorage.removeItem(key);
  }

  public clearStorage() {
    return localStorage.clear();
  }
}

export class RdSessionStorage extends RdStorage {
  public readonly key: symbol;

  constructor() {
    super();
    this.key = Symbol("RdSessionStorage");
  }
  public get sizeStorage(): number {
    return sessionStorage.length;
  }

  public getItem({ key }: { key: string }): string {
    return sessionStorage.getItem(key) ?? "";
  }
  public setItem({ key, value }: { key: string; value: string }): void {
    return sessionStorage.setItem(key, value);
  }

  public removeItem({ key }: { key: string }) {
    return sessionStorage.removeItem(key);
  }

  public clearStorage() {
    return sessionStorage.clear();
  }
}
