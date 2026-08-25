import type { CSSProperties, ReactElement, ReactNode } from "react";

export type SlideTheme = "ink" | "paper";

export interface SlideDef {
  id: string;
  label: string;
  theme: SlideTheme;
  Comp: () => ReactElement;
}

/* ---------- motion wrapper ---------- */

export function Reveal({
  delay = 0,
  className = "",
  children,
}: {
  delay?: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`reveal ${className}`} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

/* ---------- typography ---------- */

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] ${className}`}
    >
      <span className="inline-block h-2 w-2 shrink-0 bg-signal" aria-hidden />
      <span>{children}</span>
    </p>
  );
}

export function SlideTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-[clamp(1.45rem,3.4vw,2.7rem)] font-bold uppercase leading-[1.06] tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}

/* ---------- glyphs ---------- */

export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <path d="M50 5v90M5 50h90M18 18l64 64M82 18L18 82" stroke="currentColor" strokeWidth="8" />
    </svg>
  );
}

export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden>
      <path d="M30 4v52M4 30h52" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="3" fill="currentColor" />
    </svg>
  );
}

export function Ring({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 7" />
    </svg>
  );
}

export function PlusGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="3.2" />
    </svg>
  );
}

export function ArrowGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 42 12" fill="none" className={className} aria-hidden>
      <path d="M1 6h36M31 1l7 5-7 5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CheckSq({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden>
      <rect width="20" height="20" fill="#e23d28" />
      <path d="M4.5 10.5l3.5 3.5L15.5 6" stroke="#f2efe7" strokeWidth="2.6" fill="none" />
    </svg>
  );
}

/* ---------- marquee ticker ---------- */

export function Marquee({
  items,
  className = "",
  speed = 30,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track" style={{ "--speed": `${speed}s` } as CSSProperties}>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center" aria-hidden={half === 1}>
            {items.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-6 whitespace-nowrap pr-6 font-mono text-[11px] uppercase tracking-[0.32em]"
              >
                {item}
                <Asterisk className="h-3 w-3 shrink-0 text-signal" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- deterministic pseudo-QR ---------- */

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function PseudoQR({ seed = "code", className = "" }: { seed?: string; className?: string }) {
  const N = 21;
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  const rnd = mulberry32(h);
  const grid: boolean[][] = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => rnd() > 0.52)
  );
  const stampFinder = (r0: number, c0: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const ring = Math.max(Math.abs(r - 3), Math.abs(c - 3));
        grid[r0 + r][c0 + c] = ring === 3 || ring <= 1;
      }
    }
    for (let k = 0; k < 8; k++) {
      if (r0 + 7 < N && c0 + k < N) grid[r0 + 7]?.splice(c0 + k, 1, false);
      if (c0 + 7 < N && r0 + k < N) grid[r0 + k]?.splice(c0 + 7, 1, false);
    }
  };
  stampFinder(0, 0);
  stampFinder(0, N - 7);
  stampFinder(N - 7, 0);

  return (
    <svg viewBox={`0 0 ${N} ${N}`} className={className} shapeRendering="crispEdges" aria-hidden>
      {grid.flatMap((row, r) =>
        row.map((on, c) =>
          on ? <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill="currentColor" /> : null
        )
      )}
    </svg>
  );
}
