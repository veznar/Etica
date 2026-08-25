import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LogoLockup, type SlideDef } from "./components/kit";
import { FIRST } from "./slides/first";
import { SECOND } from "./slides/second";

const SLIDES: SlideDef[] = [...FIRST, ...SECOND];
const THEME: Record<SlideDef["theme"], string> = {
  white: "bg-white",
  blue: "bg-brand",
};

export default function App() {
  const [i, setI] = useState(0);
  const [menu, setMenu] = useState(false);
  const [fs, setFs] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback((n: number) => {
    setI((prev) => {
      const next = Math.min(SLIDES.length - 1, Math.max(0, n));
      return next === prev ? prev : next;
    });
  }, []);

  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    const idx = SLIDES.findIndex((s) => s.id === h);
    if (idx >= 0) setI(idx);
  }, []);

  useEffect(() => {
    history.replaceState(null, "", `#${SLIDES[i].id}`);
  }, [i]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(i + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        go(i - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(SLIDES.length - 1);
      } else if (e.key.toLowerCase() === "o") {
        setMenu((m) => !m);
      } else if (e.key === "Escape") {
        setMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go]);

  useEffect(() => {
    const onFs = () => setFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggleFs = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen();
  }, []);

  const slide = SLIDES[i];
  const onBlue = slide.theme === "blue";
  const progress = useMemo(
    () => SLIDES.map((_, idx) => idx <= i),
    [i]
  );

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden bg-white font-body text-inkc">
      {/* -------- header -------- */}
      <header
        className={`relative z-30 flex h-16 shrink-0 items-center justify-between gap-4 border-b px-4 transition-colors md:px-8 ${
          onBlue ? "border-white/20 bg-brand text-white" : "border-mist bg-white text-inkc"
        }`}
      >
        <LogoLockup onBlue={onBlue} />
        <div className="hidden items-center gap-3 md:flex">
          <span
            className={`font-mono text-[10px] uppercase tracking-[0.22em] ${onBlue ? "text-white/70" : "text-steel"}`}
          >
            Форум современной журналистики
          </span>
          <span className="bg-sky px-2.5 py-1 font-display text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand">
            Вся Россия — 2026
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenu(true)}
            className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
              onBlue ? "text-white/70 hover:text-white" : "text-steel hover:text-brand"
            }`}
          >
            [O] слайды
          </button>
          <button
            onClick={toggleFs}
            aria-label="Полноэкранный режим"
            className={`border p-2 transition-colors ${
              onBlue
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-mist text-brand hover:border-brand"
            }`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
              {fs ? (
                <path
                  d="M6 2v4H2M10 2v4h4M6 14v-4H2M10 14v-4h4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              ) : (
                <path
                  d="M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* -------- stage -------- */}
      <main
        className="relative flex-1 overflow-hidden"
        onTouchStart={(e) => {
          touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }}
        onTouchEnd={(e) => {
          if (!touch.current) return;
          const dx = e.changedTouches[0].clientX - touch.current.x;
          const dy = e.changedTouches[0].clientY - touch.current.y;
          if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) go(i + (dx < 0 ? 1 : -1));
          touch.current = null;
        }}
      >
        <div key={slide.id} className={`slide-enter absolute inset-0 ${THEME[slide.theme]}`}>
          <slide.Comp />
        </div>
      </main>

      {/* -------- footer / controls -------- */}
      <footer
        className={`relative z-30 flex shrink-0 items-center gap-4 border-t px-4 py-2.5 transition-colors md:px-8 ${
          onBlue ? "border-white/20 bg-brand text-white" : "border-mist bg-white text-inkc"
        }`}
      >
        <span className={`font-mono text-xs tracking-[0.2em] ${onBlue ? "text-white" : "text-brand"}`}>
          {String(i + 1).padStart(2, "0")}
        </span>
        <div className="flex flex-1 items-center gap-1.5" aria-label="Навигация по слайдам">
          {progress.map((active, idx) => (
            <button
              key={SLIDES[idx].id}
              onClick={() => go(idx)}
              aria-label={`Слайд ${idx + 1}: ${SLIDES[idx].label}`}
              className={`h-[7px] flex-1 transition-all duration-300 ${
                idx === i
                  ? "scale-y-150 bg-sky"
                  : active
                    ? onBlue
                      ? "bg-white/50 hover:bg-white"
                      : "bg-brand/50 hover:bg-brand"
                    : onBlue
                      ? "bg-white/15 hover:bg-white/40"
                      : "bg-mist hover:bg-steel"
              }`}
            />
          ))}
        </div>
        <span
          className={`hidden max-w-[38%] truncate font-mono text-[10px] uppercase tracking-[0.18em] sm:block ${
            onBlue ? "text-white/70" : "text-steel"
          }`}
        >
          {slide.label}
        </span>
        <span className={`font-mono text-xs tracking-[0.2em] ${onBlue ? "text-white/70" : "text-steel"}`}>
          / {String(SLIDES.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => go(i - 1)}
            disabled={i === 0}
            aria-label="Предыдущий слайд"
            className={`border p-2 transition-colors disabled:opacity-30 ${
              onBlue
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-mist text-brand hover:border-brand"
            }`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
              <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            onClick={() => go(i + 1)}
            disabled={i === SLIDES.length - 1}
            aria-label="Следующий слайд"
            className={`border p-2 transition-colors disabled:opacity-30 ${
              onBlue
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-mist text-brand hover:border-brand"
            }`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
              <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </footer>

      {/* -------- slide menu overlay -------- */}
      {menu && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand/97 p-4 backdrop-blur-sm"
          onClick={() => setMenu(false)}
        >
          <div
            className="reveal w-full max-w-3xl border border-white/20 bg-deep p-6 text-white md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sky">оглавление</p>
                <h2 className="mt-2 font-display text-2xl font-black uppercase leading-tight md:text-3xl">
                  Этика ИИ в медиа
                </h2>
              </div>
              <button
                onClick={() => setMenu(false)}
                aria-label="Закрыть оглавление"
                className="border border-white/30 p-2 text-white transition-colors hover:bg-white/10"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
                  <path d="m3 3 10 10M13 3 3 13" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    go(idx);
                    setMenu(false);
                  }}
                  className={`group flex items-baseline gap-3 border-b border-white/10 py-2.5 text-left transition-all duration-200 hover:translate-x-1.5 hover:border-sky ${
                    idx === i ? "text-sky" : "text-white"
                  }`}
                >
                  <span className="font-mono text-xs tracking-widest text-white/45 transition-colors group-hover:text-sky">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-sm font-bold uppercase tracking-wide">
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              ← → — навигация · O — закрыть
            </p>
          </div>
        </div>
      )}

      <div className="noise" aria-hidden />
    </div>
  );
}
