import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Construction } from "lucide-react";
import { GlyphMatrix } from "@/components/magicui/glyph-matrix";
import { AuroraText } from "@/components/magicui/aurora-text";

const REPO = "https://github.com/kumarshaswat/BoardScan";

const STACK = [
  "React Native · Expo",
  "Flask",
  "YOLO",
  "OpenCV",
  "VTracer",
  "Excalidraw",
];

// one strip of caution tape. The text is repeated twice so the scroll loops,
// and the yellow fill and edge stripes live on the moving track so they move
// with the text. Each label is a fixed 300px wide, a multiple of the 20px
// stripe period, so the stripes line up at the loop point too.
const Tape = ({
  className,
  reverse,
}: {
  className: string;
  reverse?: boolean;
}) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute left-[-10%] z-20 w-[120%] overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] ${className}`}
  >
    <div className={`bs-tape-track ${reverse ? "bs-tape-reverse" : ""}`}>
      {[0, 1].map((copy) => (
        <span key={copy} className="flex shrink-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="flex w-[300px] shrink-0 items-center justify-center gap-4 text-sm font-black uppercase tracking-[0.25em] text-black"
            >
              Under construction
              <span className="inline-block h-2 w-2 rotate-45 bg-black" />
            </span>
          ))}
        </span>
      ))}
    </div>
  </div>
);

export default function BoardScanCaseStudy() {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-black text-white md:h-dvh md:min-h-[640px]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* caution tape: yellow band with black hazard stripes along both edges */
        /* stripe width 7.071px at 45deg = a 20px horizontal period */
        .bs-tape-track {
          display: flex;
          width: max-content;
          padding: 8px 0;
          background:
            repeating-linear-gradient(-45deg, #0a0a0a 0 7.071px, #facc15 7.071px 14.142px) top / 100% 6px no-repeat,
            repeating-linear-gradient(-45deg, #0a0a0a 0 7.071px, #facc15 7.071px 14.142px) bottom / 100% 6px no-repeat,
            #facc15;
          animation: bs-tape 40s linear infinite;
        }
        .bs-tape-reverse { animation-direction: reverse; }
        @keyframes bs-tape {
          to { transform: translateX(-50%); }
        }
        /* the sign hangs from its top corner and sways gently */
        .bs-sign {
          transform-origin: 50% -20px;
          animation: bs-sway 4s ease-in-out infinite alternate;
        }
        @keyframes bs-sway {
          from { transform: rotate(-4deg); }
          to { transform: rotate(4deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bs-tape-track, .bs-sign { animation: none; }
        }
      `,
        }}
      />

      {/* Background glyph matrix */}
      <div className="pointer-events-none absolute inset-0">
        <GlyphMatrix
          glyphs="01·•+*/\<>=BS"
          cellSize={16}
          mutationRate={0.04}
          interval={90}
          fadeBottom={0.75}
          color="#334155"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_45%,rgba(37,99,235,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black" />
      </div>

      {/* Caution tape across the top and bottom corners */}
      <Tape className="top-[4%] rotate-[3deg]" />
      <Tape className="bottom-[3%] -rotate-[2deg]" reverse />

      <Link
        href="/#projects"
        className="absolute left-6 top-20 z-[25] inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white sm:top-24"
      >
        <ArrowLeft size={15} /> Back to projects
      </Link>

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-3xl md:h-full md:min-h-0 flex-col items-center justify-center px-6 pb-20 pt-28 text-center [@media(max-height:800px)]:pb-16 [@media(max-height:800px)]:pt-24">
        {/* Construction sign: a yellow diamond hung on a short post */}
        <div className="bs-sign mb-6 flex flex-col items-center [@media(max-height:800px)]:mb-4">
          <div className="h-4 w-px bg-white/30 [@media(max-height:800px)]:h-2" />
          <div className="flex h-16 w-16 [@media(max-height:800px)]:h-12 [@media(max-height:800px)]:w-12 rotate-45 items-center justify-center rounded-xl border-4 border-black bg-yellow-400 shadow-[0_0_0_3px_#facc15,0_20px_50px_-10px_rgba(250,204,21,0.45)]">
            <Construction
              className="-rotate-45 text-black"
              size={26}
              strokeWidth={2.2}
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl [@media(max-height:800px)]:sm:text-5xl">
          <span className="text-white">Board</span>
          <AuroraText colors={["#1D5FE9", "#2AAAF6", "#2384EF", "#2AAAF6"]}>
            Scan
          </AuroraText>
        </h1>

        <p className="mt-3 text-sm text-white/50">
          This case study is still being built. Here&apos;s the short version.
        </p>

        {/* Summary card */}
        <div className="mt-6 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-md [@media(max-height:800px)]:mt-4 [@media(max-height:800px)]:p-5">
          <p className="text-sm leading-relaxed text-white/75">
            Ideas get left behind on whiteboards every day, and a phone photo is
            usually blurry, full of glare, and impossible to edit. BoardScan
            turns that photo into a fully editable digital board where every
            stroke can be moved, scaled, and rewritten.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            The phone app sends the photo through an ngrok tunnel to a Flask
            server. A YOLO model trained on a custom whiteboard dataset finds
            the handwriting and shapes, OpenCV separates the ink from the glare,
            and VTracer turns each stroke into smooth vector paths that come
            back to the phone as an Excalidraw canvas.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {STACK.map((s) => (
              <span
                key={s}
                className="rounded-full border border-sky-400/20 bg-sky-400/[0.07] px-3 py-1 text-xs text-sky-200/80"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
            <p className="text-sm font-medium text-white/80">
              Want to learn more? The full write-up and demo are on GitHub.
            </p>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-sky-100"
            >
              View on GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
