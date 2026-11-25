"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useReducedMotion } from "framer-motion";

// eased, momentum-style page scrolling with the same timing lenis.dev uses
// (1.2s, exponential ease-out); skipped for anyone who asked the OS for less
// motion, so they keep the browser's native scroll
export default function SmoothScroll() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        anchors: true,
      }}
    />
  );
}
