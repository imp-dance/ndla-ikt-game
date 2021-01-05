import React, { useState, useEffect, useLayoutEffect } from "react";

interface Options {
  watchChildChanges?: boolean;
  watchResize?: boolean;
  mutationObserverOptions?: MutationObserverInit;
  /** Array of dependencies that will trigger size-check */
  deps?: Array<any>;
}

let mounted: boolean;
const useWatchElementSize = (ref: React.RefObject<any>, options?: Options) => {
  const [mutationObserver, setMutationObserver] = useState<MutationObserver>();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const watchResize = options?.watchResize ?? true;
  const watchChildChanges = options?.watchChildChanges ?? true;
  const deps = options?.deps ?? [];
  const mutationObserverOptions = options?.mutationObserverOptions ?? {
    attributes: true,
    attributeOldValue: true,
    childList: true,
    characterData: true,
    characterDataOldValue: true,
    subtree: true,
  };

  const setSize = (stop?: boolean) => {
    if (ref && ref.current) {
      const el = ref.current;
      const elementHeight = el.offsetHeight;
      const elementWidth = el.offsetWidth;
      setHeight(elementHeight);
      setWidth(elementWidth);
    }
    // loop once for content that is animating in
    if (!stop) {
      setTimeout(() => {
        if (mounted) {
          setSize(true);
        }
      }, 150);
    }
  };
  const setSizeLoop = () => setSize(false);
  const setupMutationObserver = () => {
    if (!mutationObserver && ref.current && watchChildChanges) {
      const observer = new MutationObserver(setSizeLoop);
      observer.observe(ref.current, mutationObserverOptions);
      setMutationObserver(observer);
    }
  };
  useLayoutEffect(() => {
    if (watchResize) {
      setSize(false);
      window.addEventListener("resize", setSizeLoop);
    }
    return () => window.removeEventListener("resize", setSizeLoop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchResize]);
  useEffect(() => {
    mounted = true;
    if (!mutationObserver && watchChildChanges) {
      setupMutationObserver();
    }
    return () => {
      mounted = false;
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, watchChildChanges, ...deps]);

  return [height, width];
};

export default useWatchElementSize;
