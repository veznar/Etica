import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export interface SlideDef {
  id: string;
  label: string;
  theme: "white" | "blue";
  Comp: () => ReactNode;
}

/* ---------- scroll reveal ---------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} ${show ? "reveal" : "opacity-0"}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ---------- typography ---------- */

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] font-semibold uppercase tracking-[0.32em] ${className}`}>
      {children}
    </p>
  );
}

export function SlideTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-[clamp(1.5rem,3.6vw,2.9rem)] font-extrabold uppercase leading-[1.08] tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}

/* ---------- brand lockup ---------- */

export function MarkL({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden>
      <rect width="44" height="44" fill="currentColor" />
      <path
        d="M12 33V14l10 12 10-12v19"
        fill="none"
        stroke="#fff"
        strokeWidth="3.6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <rect x="19" y="7" width="6" height="3" fill="#fff" opacity="0.9" />
    </svg>
  );
}

export function LogoLockup({ onBlue = false }: { onBlue?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <MarkL className={`h-9 w-9 shrink-0 ${onBlue ? "text-white" : "text-brand"}`} />
      <div className="leading-none">
        <p
          className={`font-display text-[13px] font-extrabold uppercase tracking-[0.08em] ${
            onBlue ? "text-white" : "text-inkc"
          }`}
        >
          Университет Лобачевского
        </p>
        <p className={`mt-1 font-mono text-[9px] uppercase tracking-[0.22em] ${onBlue ? "text-white/60" : "text-steel"}`}>
          ННГУ им. Н.И. Лобачевского · Центр ИИ
        </p>
      </div>
    </div>
  );
}

/* ---------- geometric motifs ---------- */

/** Веер лучей из угла — отсылка к геометрии Лобачевского. */
export function RaysMotif({ className = "" }: { className?: string }) {
  const lines = useMemo(() => {
    const n = 15;
    return Array.from({ length: n }, (_, i) => {
      const a = (i / (n - 1)) * (Math.PI / 2);
      return { x: Math.cos(a) * 980, y: 620 - Math.sin(a) * 980 };
    });
  }, []);
  return (
    <svg viewBox="0 0 620 620" fill="none" className={className} aria-hidden preserveAspectRatio="xMinYMax slice">
      {lines.map((l, i) => (
        <line
          key={i}
          x1="0"
          y1="620"
          x2={l.x}
          y2={l.y}
          stroke="currentColor"
          strokeWidth={i % 3 === 0 ? 1.6 : 0.8}
        />
      ))}
      <circle cx="0" cy="620" r="7" fill="currentColor" />
    </svg>
  );
}

/** Параллельные диагональные полосы фирменного стиля. */
export function Stripes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" fill="none" className={className} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M${-60 + i * 46} 300 L${240 - 60 + i * 46} 0`}
          stroke="currentColor"
          strokeWidth={i === 2 ? 16 : 6}
        />
      ))}
    </svg>
  );
}

/** Параллели, сходящиеся к горизонту. */
export function Converge({ className = "" }: { className?: string }) {
  const rows = [8, 24, 40, 56, 72, 88];
  return (
    <svg viewBox="0 0 900 96" fill="none" className={className} aria-hidden preserveAspectRatio="none">
      {rows.map((y) => (
        <line key={y} x1="0" y1={y} x2="900" y2={48} stroke="currentColor" strokeWidth="1.4" />
      ))}
      <circle cx="900" cy="48" r="5" fill="currentColor" />
    </svg>
  );
}

/* ---------- marquee ---------- */

export function Marquee({
  items,
  className = "",
  speed = 30,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-sm font-bold uppercase tracking-[0.22em]">
            {it}
          </span>
          <span className="inline-block h-2 w-2 shrink-0 bg-current opacity-60" />
        </span>
      ))}
    </div>
  );
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track" style={{ "--speed": `${speed}s` } as CSSProperties}>
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ---------- icons / glyphs ---------- */

export function ArrowGlyph({ className = "h-3 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 12" fill="none" className={className} aria-hidden>
      <path d="M0 6h44M38 1l7 5-7 5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CheckSq({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <rect x="1" y="1" width="14" height="14" stroke="currentColor" strokeWidth="2" />
      <path d="M4.5 8.5l2.5 2.5 4.5-6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/** Детерминированный псевдо-QR (визуальный плейсхолдер заявки). */
export function PseudoQR({ seed, className = "h-36 w-36" }: { seed: string; className?: string }) {
  const n = 21;
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rnd = () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return (h >>> 0) / 4294967295;
  };
  const cells: { x: number; y: number }[] = [];
  const inFinder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x >= n - 7 && y < 7) || (x < 7 && y >= n - 7);
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      if (inFinder(x, y)) continue;
      if (rnd() > 0.52) cells.push({ x, y });
    }
  const finder = (fx: number, fy: number) => (
    <g key={`${fx}-${fy}`}>
      <rect x={fx} y={fy} width="7" height="7" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x={fx + 2} y={fy + 2} width="3" height="3" fill="currentColor" />
    </g>
  );
  return (
    <svg viewBox={`-1 -1 ${n + 2} ${n + 2}`} className={className} aria-hidden>
      {cells.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width="1" height="1" fill="currentColor" />
      ))}
      {finder(0, 0)}
      {finder(n - 7, 0)}
      {finder(0, n - 7)}
    </svg>
  );
}
