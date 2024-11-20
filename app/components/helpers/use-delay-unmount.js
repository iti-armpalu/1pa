'use client';

import { useEffect, useState } from "react";

export function useDelayUnmount(isOpen, delay) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isOpen && !shouldRender) {
      setShouldRender(true);
    } else if (!isOpen && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delay);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen, delay, shouldRender]); // Add dependencies here

  return shouldRender;
}
