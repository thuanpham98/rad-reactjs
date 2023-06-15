import { CSSProperties, FC } from "react";
interface RdImageProps {
    src?: string;
    srcError?: string;
    className?: string;
    style?: CSSProperties;
    alt?: string;
}
export declare const RdImage: FC<RdImageProps>;
export {};
