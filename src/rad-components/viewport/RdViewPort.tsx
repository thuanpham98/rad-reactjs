import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";

export interface RdViewportProps {
  width: number;
  height: number;
}

export const RdViewportContext = createContext<RdViewportProps>({
  height: window.innerHeight,
  width: window.innerWidth,
});

export const RdViewport: FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dimension, setDimension] = useState<RdViewportProps>({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const handleResize = useCallback(
    () =>
      setDimension({
        height: window.innerHeight,
        width: window.innerWidth,
      }),
    [dimension],
  );

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    document.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      },
      {
        passive: false,
      },
    );
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchstart", () => {
        console.log("done touch start");
      });
    };
  }, []);

  return (
    <RdViewportContext.Provider value={dimension}>
      {children}
    </RdViewportContext.Provider>
  );
};
