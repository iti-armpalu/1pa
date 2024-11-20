'use client'

import { useState, useEffect } from "react";

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches); // Initialize state
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener); // Listen for changes
    return () => media.removeEventListener("change", listener); // Cleanup
  }, [query]);

  return matches;
}
