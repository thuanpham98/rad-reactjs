import { useContext } from "react";
import { RdViewportContext, RdViewportProps } from "./RdViewPort";

export function useRdViewport() {
  return useContext<RdViewportProps>(RdViewportContext);
}
