import { GlyphMatrix } from "@/components/magicui/glyph-matrix";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function BoardScanCaseStudy() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background glyph matrix */}
      <div className="pointer-events-none absolute inset-0">
        <GlyphMatrix
          glyphs="01·•+*/\<>=BS"
          cellSize={16}
          mutationRate={0.04}
          interval={90}
          fadeBottom={0.75}
          color="#52525b"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-widest text-white/60">
          Case Study
        </span>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-white">Board</span>
          <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}>
            Scan
          </AuroraText>
        </h1>

        {/* Work in progress notice */}
        <div className="mt-6 flex w-full max-w-md flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm">
          <p className="text-sm text-white/70">
            This case study is under construction. In the meantime, please refer
            to the GitHub repository for more information.
          </p>
          <a
            href="https://github.com/kumarshaswat/BoardScan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/85"
          >
            View on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.15 8.98 7.52 10.44.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.06.67-3.71-1.3-3.71-1.3-.5-1.28-1.22-1.62-1.22-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.2.92.1-.71.38-1.2.7-1.48-2.44-.28-5.01-1.22-5.01-5.42 0-1.2.43-2.18 1.13-2.94-.11-.28-.49-1.4.11-2.93 0 0 .92-.3 3.02 1.12a10.5 10.5 0 0 1 5.5 0c2.1-1.42 3.02-1.12 3.02-1.12.6 1.53.22 2.65.11 2.93.7.76 1.13 1.74 1.13 2.94 0 4.21-2.58 5.14-5.03 5.41.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.36-1.46 7.51-5.58 7.51-10.44C23.02 5.24 18.27.5 12 .5Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
