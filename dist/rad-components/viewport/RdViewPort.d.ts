import React, { FC } from "react";
interface RdViewportProps {
    width: number;
    height: number;
}
export declare const RdViewportContext: React.Context<RdViewportProps>;
export declare const RdViewport: FC<{
    children: React.ReactNode;
}>;
export declare function useRdViewport(): RdViewportProps;
export {};
