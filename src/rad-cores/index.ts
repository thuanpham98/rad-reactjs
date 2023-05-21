export abstract class RdCore {
  protected abstract key: symbol;
}

export abstract class RdModule extends RdCore {
  protected abstract key: symbol;
  abstract getName(): string;
}

export abstract class RdStorage extends RdCore {
  protected abstract key: symbol;
  abstract get sizeStorage(): number;
  abstract getItem({ key }: { key: string }): string;
  abstract removeItem({ key }: { key: string }): void;
  abstract clearStorage(): void;
}

export abstract class RdModel<T> extends RdCore {
  protected abstract key: symbol;
  abstract getName(): string;
  abstract value: T;
}

export abstract class RdManager<T> extends RdCore {
  protected abstract key: symbol;
  abstract use(m: T): RdManager<T>;
  abstract remove(name: string): RdManager<T>;
  abstract get<T2 extends T>(name: string): T2 | undefined;
  abstract get length(): number;
  abstract clear(): void;
}
