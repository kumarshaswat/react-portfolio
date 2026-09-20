"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Matches a typical phone-screenshot ratio (width / height).
const PHONE_ASPECT = "9 / 19.5";

interface ColumnConfig {
  images: string[]; // in order top-to-bottom; duplicated for a seamless loop
  direction: "up" | "down";
  duration: number; // base loop duration in seconds (lower = faster)
}

const COLUMNS: ColumnConfig[] = [
  {
    images: [
      "/assets/earnify/earnify-ui-1.png",
      "/assets/earnify/earnify-ui-2.png",
      "/assets/earnify/earnify-ui-3.png",
    ],
    direction: "down",
    duration: 30,
  },
  {
    images: [
      "/assets/earnify/earnify-ui-4.png",
      "/assets/earnify/earnify-ui-5.png",
      "/assets/earnify/earnify-ui-6.png",
    ],
    direction: "up",
    duration: 35,
  },
  {
    images: [
      "/assets/earnify/earnify-ui-7.png",
      "/assets/earnify/earnify-ui-8.png",
      "/assets/earnify/earnify-ui-9.png",
    ],
    direction: "down",
    duration: 40,
  },
];

function PhoneImageBox({ src }: { src: string }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: PHONE_ASPECT,
        borderRadius: 22,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: "0 24px 48px -24px rgba(0,0,0,0.65)",
        flexShrink: 0,
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="20vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

function Column({ config }: { config: ColumnConfig }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const anim = el.getAnimations()[0];
    if (!anim) return;

    let target = 1;
    let current = 1;
    let raf = 0;
    let lastScrollY = window.scrollY;

    const tick = () => {
      current += (target - current) * 0.08;
      anim.playbackRate = current;

      // Ease back to the regular down-scroll animation when the user stops moving.
      target += (1 - target) * 0.035;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      if (delta === 0) return;

      // Lower sensitivity so scroll boosts feel gentle and controlled.
      const impulse = Math.min(Math.abs(delta) * 0.04, 1.7);
      target = delta > 0 ? 1 + impulse : 1 - impulse;
      target = Math.max(-2.5, Math.min(4, target));
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Duplicate the list so translateY(-50%) loops seamlessly.
  const items = [...config.images, ...config.images];

  return (
    <div style={{ overflow: "hidden", height: "100%", position: "relative" }}>
      <div
        ref={trackRef}
        className={
          config.direction === "up" ? "earnify-col-up" : "earnify-col-down"
        }
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
          animationDuration: `${config.duration}s`,
        }}
      >
        {items.map((src, i) => (
          <PhoneImageBox key={`${src}-${i}`} src={src} />
        ))}
      </div>
    </div>
  );
}

// Extra room around the rotated grid so the unrotated wrapper's mask
// doesn't clip the corners that swing outside the box.
const BLEED = 200;

// Single fade: fully transparent at the bottom edge, solid by 40% up.
const FADE_MASK = "linear-gradient(to top, transparent, black 30%)";

export function EarnifyPhoneColumns() {
  return (
    <div
      aria-hidden
      className="hidden lg:block"
      style={{
        // Mask + blur live on this UNrotated wrapper so the fade ends in a
        // straight horizontal line instead of following the -15deg tilt.
        position: "absolute",
        top: -BLEED,
        left: -BLEED,
        right: -BLEED,
        bottom: 0,
        padding: `${BLEED}px ${BLEED}px 0`,
        pointerEvents: "none",
        maskImage: FADE_MASK,
        WebkitMaskImage: FADE_MASK,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          width: "100%",
          // Taller than the wrapper: rotating lifts the grid's bottom-right
          // corner, which otherwise shows as a hard edge above the fade.
          height: "150%",
          transform: "rotate(-15deg) scale(1.05)",
          transformOrigin: "top center",
        }}
      >
        {COLUMNS.map((c, i) => (
          <Column key={i} config={c} />
        ))}
      </div>

      <style jsx global>{`
        @keyframes earnify-col-up-kf {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
        @keyframes earnify-col-down-kf {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0);
          }
        }
        .earnify-col-up {
          animation-name: earnify-col-up-kf;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .earnify-col-down {
          animation-name: earnify-col-down-kf;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
