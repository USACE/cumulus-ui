// reference the typescript implementation at
// https://usehooks-ts.com/react-hook/use-element-size
// eww

import { useCallback, useState } from 'react';
import useEventListener from './useEventListener';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

function useElementSize() {
  const [ref, setRef] = useState(null);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useEventListener('resize', handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  return [setRef, size];
}

export default useElementSize;
