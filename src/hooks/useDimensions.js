import { useEffect, useState } from 'react';

import { breakpoints } from '../ui';

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return {
    ...dimensions,
    isMobile: dimensions.width < breakpoints.mobile,
    isTablet:
      dimensions.width < breakpoints.tablet &&
      dimensions.width >= breakpoints.mobile
  };
};
