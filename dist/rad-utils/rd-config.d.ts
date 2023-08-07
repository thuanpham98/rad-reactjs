import { ReactNode } from "react";
export interface RdConfig {
    loading?: ReactNode;
    closeModalOnTapOutside?: boolean;
    classBackgroundModel?: string;
    classChildModel?: string;
    classOverlayMessage?: string;
    classWrapMessage?: string;
    classMessage?: string;
    classAnimationMessageEnter?: string;
    classAnimationMessageLeave?: string;
    durationMessageLeave?: number;
    durationMessageEnter?: number;
    maxAmountMessage?: number;
}
