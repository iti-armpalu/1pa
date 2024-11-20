"use client";

import Accordion from "./accordion";
import useMediaQuery from "./helpers/useMediaQuery";

export default function ResponsiveAccordion({ children }) {
  // Detect medium and larger screens
  const isMediumOrLarger = useMediaQuery("(min-width: 768px)");

  return isMediumOrLarger ? <Accordion>{children}</Accordion> : <div>{children}</div>;
}
