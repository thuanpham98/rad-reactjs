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
  height: 0,
  width: 0,
});

export const RdViewport: FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dimension, setDimension] = useState<RdViewportProps>({
    height: 0,
    width: 0,
  });
  const handleResize = useCallback(
    () =>
      setDimension({
        height: window  && window.innerHeight,
        width: window && window.innerWidth,
      }),
    [],
  );

  useEffect(() => {
    handleResize();
    window && window.addEventListener("resize", handleResize);
    window &&
      window.addEventListener(
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
      window && window.removeEventListener("resize", handleResize);
      window &&
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
