"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

// Scroll-linked effect in the spirit of lenis.dev. It is driven by the
// page's scroll position (which Lenis smooths), not by timers, so it tracks
// the scroll exactly in both directions. Reduced-motion users get static
// content.

// The hero drifts up slower than the page, shrinks slightly and fades as it
// leaves the viewport.
export function ScrollAway({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={
        reduceMotion
          ? undefined
          : { y, scale, opacity, transformOrigin: "left top" }
      }
    >
      {children}
    </motion.div>
  );
}
