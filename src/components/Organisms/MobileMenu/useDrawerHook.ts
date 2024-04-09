import { useEffect, useRef, useState } from 'react';

// Helper to remember something from the last render
const usePrevious = <T>(value: T) => {
  const prevRef = useRef(undefined as unknown as T);
  useEffect(() => {
    prevRef.current = value;
  });
  return prevRef.current;
};

// Trick the browser to reflow instead of bundling actions together
const flushLayout = (element: HTMLDivElement | null) => {
  return element && element.offsetWidth;
};

/**
 * This is a bit crazy but it works. We solve the problem of switching sides (left, right) from where the drawer opens and applying the right transitions while doing so.
 *
 * Especially, we have to apply a 'close' class to the content div first when we switch sides *before* we apply the 'open' class.
 */

export const useDrawerHook = ({
  fromRight,
  isOpen,
}: {
  fromRight: boolean;
  isOpen: boolean;
}) => {
  const contentElement = useRef<HTMLDivElement>(null);

  // Used to track if we are switching sides.
  const wasLeft = usePrevious<boolean>(!fromRight);
  const [internalFromRight, setInternalFromRight] = useState(false);

  useEffect(() => {
    if ((wasLeft && fromRight) || (wasLeft === false && !fromRight)) {
      // Let the browser settle the layout (i.e. apply the styles from the next 'close' class) before triggering another render with new internalFromRight.
      flushLayout(contentElement.current);
      setInternalFromRight(old => !old);
    }
  }, [wasLeft, fromRight]);

  const prevBodyOverflowStyle = useRef<string | null>(null);
  useEffect(() => {
    if (isOpen) {
      prevBodyOverflowStyle.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = prevBodyOverflowStyle.current || '';
    };
  }, [isOpen]);

  return {
    contentElement,
    wasLeft,
    internalFromRight,
  };
};
