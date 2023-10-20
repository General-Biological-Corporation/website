import { useEffect, useState } from "react";

export const MOBILE_BREAKPOINT = 768;

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return {
    ...dimensions,
    isMobile: dimensions.width < MOBILE_BREAKPOINT,
  };
};
