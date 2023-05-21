import { FC } from "react";
import { RdModule, RdManager } from "../rad-cores";
import ReactDOM from "react-dom/client";
import { RdConfig } from "../rad-utils/rd-config";
import { BehaviorSubject } from "rxjs";
import { ErrorModel } from "../rad-models/ErrorModel";
interface RdAppProps<M extends RdModule, P, RdConfig> {
    [n: string]: any;
    modules?: RdManager<M>;
    plugins?: P;
    configs?: RdConfig;
}
export declare const RdApp: FC<{
    children: React.ReactNode;
    appProps: RdAppProps<RdModule, any, any>;
}>;
export declare const rdIsLoading: BehaviorSubject<boolean>;
export declare const rdShowMessage: BehaviorSubject<boolean>;
export declare const rdMessageCompo: BehaviorSubject<JSX.Element | null>;
export declare const rdQueueModal: BehaviorSubject<JSX.Element | null>;
export declare const rdBottomSheetCompo: BehaviorSubject<JSX.Element | null>;
export declare const rdError: BehaviorSubject<ErrorModel | unknown>;
export declare function rdLoading(open: boolean): void;
export declare function rdModal(m: JSX.Element | null): void;
export declare function rdMessage(m: JSX.Element | null): void;
export declare function rdBottomSheet(m: JSX.Element | null): void;
export declare const RdAppExtends: FC<{
    children: React.ReactNode;
    appProps: RdAppProps<RdModule, any, RdConfig>;
}>;
export declare const useRdApp: () => RdAppProps<RdModule, any, RdConfig>;
export declare function buildRdRootElement(prefixComponent: string, mainId: string, constrant?: {
    minHeight?: string;
    minWidth?: string;
    maxHeight?: string;
    maxWidth?: string;
}): ReactDOM.Root;
export {};
