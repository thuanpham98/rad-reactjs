import React, { FC } from "react";
export interface RdViewportProps {
    width: number;
    height: number;
}
export declare const RdViewportContext: React.Context<RdViewportProps>;
export declare const RdViewport: FC<{
    children: React.ReactNode;
}>;
