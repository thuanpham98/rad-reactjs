import { CSSProperties, FC, useRef } from "react";
import errorImg from "./error.svg";

interface RdImageProps {
  src?: string;
  srcError?: string;
  className?: string;
  style?: CSSProperties;
  alt?: string;
}

export const RdImage: FC<RdImageProps> = ({
  src,
  srcError = errorImg,
  alt,
  className,
  style,
}) => {
  const refImg = useRef<HTMLImageElement>(null);
  return (
    <img
      style={style}
      ref={refImg}
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        if (refImg && refImg.current) {
          refImg.current.onerror = null;
          refImg.current.src = srcError;
        }
      }}
    />
  );
};
