import { RdStream } from "../rad-utils";
export declare function useRdBloc<T>(data: T): [T, (v?: T) => void, RdStream<T>];
