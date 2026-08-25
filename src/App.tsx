import { useEffect, useRef, useState } from "react";
import { Asterisk, type SlideDef } from "./components/kit";
import { FIRST } from "./slides/first";
import { SECOND } from "./slides/second";

const SLIDES: SlideDef[] = [...FIRST, ...SECOND];
const TOTAL = SLIDES.length;
const pad = (n: number) => String(n).padStart(2, "0");

export default function App() {
  const [index, setIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const h = parseInt(window.location.hash.replace("#/", ""), 10);
    return Number.isFinite(h) && h >= 1 && h <= TOTAL ? h - 1 : 0;
  });
  const [toc, setToc] = useState(false);
  const [fs, setFs] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = (i: number) => setIndex(Math.max(0, Math.min(TOTAL - 1, i)));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "KeyO") {
        e.preventDefault();
        setToc((t) => !t);
        return;
      }
      if (e.key === "Escape") {
        setToc(false);
        return;
      }
      if (toc) return;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          go(index + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          go(index - 1);
          break;
        case "Home":
          e.preventDefault();
          go(0);
          break;
        case "End":
          e.preventDefault();
          go(TOTAL - 1);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, toc]);

  useEffect(() => {
    window.history.replaceState(null, "", `#/${index + 1}`);
  }, [index]);

  useEffect(() => {
    const onChange = () => setFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFs = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void document.documentElement.requestFullscreen().catch(() => undefined);
    }
  };

  const Active = SLIDES[index].Comp;

  return (
    <div className="fixed inset-0 flex flex-col bg-ink font-body text-paper">
      <div className="noise" aria-hidden />

      {/* ---------- верхняя рамка ---------- */}
      <header className="relative z-30 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-paper/15 px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center bg-signal" aria-hidden>
            <Asterisk className="h-4 w-4 text-ink" />
          </span>
          <div className="min-w-0 leading-tight">
            <p className="truncate font-display text-[11px] font-bold uppercase tracking-[0.16em]">
              Этика ИИ в медиа
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-fog">
              вся россия · 2026
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-fog xl:block">
            форум современной журналистики
          </p>
          <p className="hidden border border-paper/20 px-3 py-1.5 font-mono text-xs tracking-[0.2em] sm:block">
            <span className="text-signal">{pad(index + 1)}</span>
            <span className="text-paper/40"> / {pad(TOTAL)}</span>
          </p>
          <button
            onClick={() => setToc(true)}
            className="border border-paper/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-200 hover:border-signal hover:bg-signal hover:text-ink"
          >
            Оглавление
          </button>
          <button
            onClick={toggleFs}
            aria-label={fs ? "Выйти из полноэкранного режима" : "Полноэкранный режим"}
            className="grid h-[31px] w-9 place-items-center border border-paper/25 transition-all duration-200 hover:border-signal hover:bg-signal hover:text-ink"
          >
            {fs ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" stroke="currentColor" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ---------- сцена ---------- */}
      <main
        className="relative min-h-0 flex-1 overflow-hidden"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 48) go(index + (dx < 0 ? 1 : -1));
          touchX.current = null;
        }}
      >
        <div key={index} className="slide-enter absolute inset-0">
          <Active />
        </div>
      </main>

      {/* ---------- нижняя рамка ---------- */}
      <footer className="relative z-30 flex h-16 shrink-0 items-center gap-3 border-t border-paper/15 px-4 md:gap-5 md:px-6">
        <NavBtn dir="prev" onClick={() => go(index - 1)} disabled={index === 0} />
        <div className="flex flex-1 items-center gap-1.5" role="tablist" aria-label="Слайды">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              title={`${pad(i + 1)} · ${s.label}`}
              aria-label={`Слайд ${i + 1}: ${s.label}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-[7px] flex-1 transition-all duration-300 hover:scale-y-[2] ${
                i === index
                  ? "bg-signal"
                  : i < index
                    ? "bg-paper/45 hover:bg-paper/70"
                    : "bg-paper/15 hover:bg-paper/40"
              }`}
            />
          ))}
        </div>
        <NavBtn dir="next" onClick={() => go(index + 1)} disabled={index === TOTAL - 1} />
        <p className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-fog lg:block">
          space — дальше · o — оглавление
        </p>
      </footer>

      {/* ---------- оглавление ---------- */}
      {toc && (
        <div className="absolute inset-0 z-50 flex flex-col bg-[rgba(25,23,19,0.97)] text-paper">
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-paper/15 px-4 md:px-6">
            <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em]">
              <span className="inline-block h-2 w-2 bg-signal" aria-hidden />
              оглавление · {TOTAL} слайдов
            </p>
            <button
              onClick={() => setToc(false)}
              className="grid h-9 w-9 place-items-center border border-paper/25 transition-all hover:border-signal hover:bg-signal hover:text-ink"
              aria-label="Закрыть оглавление"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.2" />
              </svg>
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-10 md:px-14">
            <div className="mx-auto grid max-w-5xl gap-x-12 md:grid-cols-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => {
                    go(i);
                    setToc(false);
                  }}
                  className={`group flex items-baseline gap-4 border-t border-paper/15 py-3.5 text-left transition-all duration-200 hover:bg-signal hover:px-3 ${
                    i === index ? "text-signal hover:text-ink" : "text-paper"
                  }`}
                >
                  <span className="w-8 shrink-0 font-mono text-xs text-paper/50 group-hover:text-ink/70">
                    {pad(i + 1)}
                  </span>
                  <span className="font-display text-sm font-semibold uppercase tracking-wide md:text-base">
                    {s.label}
                  </span>
                  <span className="ml-auto shrink-0 font-mono text-[9px] uppercase tracking-[0.14em] text-paper/30 group-hover:text-ink/60">
                    {s.theme === "ink" ? "тёмный" : "светлый"}
                  </span>
                </button>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-5xl font-mono text-[10px] uppercase tracking-[0.2em] text-paper/35">
              esc — закрыть · клик по строке — переход к слайду
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function NavBtn({
  dir,
  onClick,
  disabled,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Предыдущий слайд" : "Следующий слайд"}
      className="grid h-10 w-10 shrink-0 place-items-center border border-paper/25 transition-all duration-200 hover:border-signal hover:bg-signal hover:text-ink disabled:opacity-25 disabled:hover:border-paper/25 disabled:hover:bg-transparent disabled:hover:text-paper"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`h-4 w-4 ${dir === "prev" ? "rotate-180" : ""}`}
      >
        <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    </button>
  );
}
