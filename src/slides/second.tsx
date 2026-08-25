import { useState } from "react";
import {
  ArrowGlyph,
  Asterisk,
  CheckSq,
  Kicker,
  Marquee,
  PseudoQR,
  Reveal,
  Ring,
  SlideTitle,
  type SlideDef,
} from "../components/kit";

/* ================= 07 · ПОДХОДЫ КОМИССИИ ================= */

function S07() {
  const approaches = [
    {
      n: "1",
      t: "Риск-ориентированный подход",
      d: "регулируем не технологию, а сценарии применения: где выше риск — там строже правила",
    },
    {
      n: "2",
      t: "Саморегулирование",
      d: "рекомендации и лучшие практики вместо запретов: кодекс живёт и обновляется вместе с индустрией",
    },
    {
      n: "3",
      t: "Единая маркировка",
      d: "читатель всегда понимает, где синтетический контент: текст, изображение, видео, голос",
    },
    {
      n: "4",
      t: "Человек в контуре",
      d: "финальное редакционное решение — за человеком: ИИ предлагает, редактор отвечает",
    },
    {
      n: "5",
      t: "Мониторинг и метрики",
      d: "доверие аудитории и нарушения — измеряем; ежегодный публичный отчёт комиссии",
    },
  ];
  return (
    <div className="grid-light relative h-full overflow-hidden bg-paper text-ink">
      <Ring className="drift-b pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 text-ink/15" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker className="text-fog">07 · метод</Kicker>
              <SlideTitle className="mt-3">
                Пять подходов <span className="text-signal">комиссии по этике</span>
              </SlideTitle>
            </div>
            <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
              наведите на строку — так выглядит смена регистра с «запретить» на «договориться»
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="min-h-0 flex-1">
          <div className="border-b-2 border-ink">
            {approaches.map((a, i) => (
              <div
                key={a.n}
                className="group -mx-3 grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t-2 border-ink px-3 py-3.5 transition-colors duration-300 hover:bg-signal hover:text-paper md:-mx-4 md:gap-8 md:px-4 md:py-4"
                style={{ transitionDelay: `${i * 15}ms` }}
              >
                <span className="font-display text-2xl font-extrabold leading-none opacity-30 transition-opacity group-hover:opacity-100 md:text-4xl">
                  {a.n}
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase leading-tight md:text-lg">
                    {a.t}
                  </h3>
                  <p className="mt-1 text-[13px] leading-snug text-ink/65 transition-colors group-hover:text-paper/90 md:text-sm">
                    {a.d}
                  </p>
                </div>
                <ArrowGlyph className="hidden h-3 w-10 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:block" />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={330}>
          <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
            Принцип один: <span className="font-semibold text-ink">этика — не тормоз прогресса, а его рулевое управление</span>
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ================= 08 · ГДЕ ПРОХОДИТ ГРАНЬ (интерактив) ================= */

function S08() {
  const [v, setV] = useState(50);
  const zones = [
    {
      word: "Запретить",
      title: "Инерция: «запретить по умолчанию»",
      text: "Редакции теряют скорость и инструменты, а риски не исчезают — они уходят в тень, где их никто не контролирует.",
    },
    {
      word: "Регулировать",
      title: "Рабочая зона кодекса",
      text: "Прозрачные правила игры: маркировка, верификация, ответственность человека. Риск управляем, прогресс не остановлен.",
    },
    {
      word: "Отпустить",
      title: "Хаос: «отпустить всё»",
      text: "Доверие аудитории сгорает быстрее, чем растут технологии. Без правил выигрывает тот, кто громче, а не тот, кто прав.",
    },
  ];
  const zone = v <= 33 ? 0 : v <= 66 ? 1 : 2;
  const z = zones[zone];

  return (
    <div className="grid-ink relative h-full overflow-hidden bg-ink text-paper">
      <Asterisk className="spin-slow pointer-events-none absolute -left-12 -top-12 h-44 w-44 text-paper/10" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker className="text-fog">08 · интерактив</Kicker>
              <SlideTitle className="mt-3">
                Где проходит <span className="text-signal">грань?</span>
              </SlideTitle>
            </div>
            <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
              перетащите маркер — это и есть выбор, который делает отрасль
            </p>
          </div>
        </Reveal>

        <div className="flex min-h-0 flex-1 flex-col justify-center gap-6">
          <Reveal delay={140}>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.26em] text-fog md:text-[11px]">
              <span className={zone === 0 ? "text-signal" : ""}>← риск: запретить всё</span>
              <span className={zone === 1 ? "text-signal" : ""}>баланс</span>
              <span className={zone === 2 ? "text-signal" : ""}>риск: отпустить всё →</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={v}
              onChange={(e) => setV(Number(e.target.value))}
              className="boundary"
              aria-label="Положение грани между риском и прогрессом"
            />
            <div className="flex justify-between px-1 font-mono text-[10px] text-paper/40">
              <span>|</span>
              <span>|</span>
              <span className="text-signal">◆ кодекс</span>
              <span>|</span>
              <span>|</span>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div key={zone} className="reveal border-l-4 border-signal bg-ink2 p-5 md:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
                зона {zone + 1} / 3 · «{z.word}»
              </p>
              <h3 className="mt-2 font-display text-[clamp(1.05rem,2.2vw,1.6rem)] font-bold uppercase leading-tight">
                {z.title}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fog md:text-[15px]">
                {z.text}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={360}>
          <p className="border-t-2 border-paper/15 pt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
            Грань — <span className="text-signal">не стена, а правила движения</span>. Кодекс и есть
            эти правила
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ================= 09 · ОТРАСЛЕВОЙ КОДЕКС ================= */

function S09() {
  const blocks = [
    { t: "Стандарты применения ИИ в ньюзруме", d: "какие задачи можно делегировать модели, какие — только человеку" },
    { t: "Маркировка синтетического контента", d: "единый заметный знак для текста, фото, видео и голоса" },
    { t: "Верификация и фактчекинг", d: "обязательная проверка сгенерированных фактов до публикации" },
    { t: "Данные и авторское право", d: "легальные источники обучения, права авторов и изданий" },
    { t: "Обратная связь с аудиторией", d: "понятный механизм жалоб и исправлений ИИ-ошибок" },
    { t: "Ответственность и кадры", d: "кто отвечает за публикацию и как меняются роли в редакции" },
  ];
  const benefits = [
    "Влияние на правила игры — кодекс пишут участники, а не наблюдатели",
    "Доверие аудитории — публичный знак «редакция работает по кодексу»",
    "Снижение юридических и репутационных рисков до инцидентов",
    "Сообщество: разборы кейсов, шаблоны документов, обучение команд",
  ];
  return (
    <div className="grid-light relative h-full overflow-hidden bg-paper text-ink">
      <CrosshairDeco />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div>
            <Kicker className="text-fog">09 · предложение</Kicker>
            <SlideTitle className="mt-3">
              Отраслевой кодекс практики — <span className="text-signal">что предлагаем</span>
            </SlideTitle>
          </div>
        </Reveal>

        <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <Reveal delay={140}>
            <div>
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.24em] text-fog">
                из чего состоит документ
              </p>
              <div className="grid gap-x-8 sm:grid-cols-2">
                {blocks.map((b, i) => (
                  <div
                    key={b.t}
                    className="group flex gap-3 border-t-2 border-ink py-3 transition-all duration-300 hover:translate-x-1.5 hover:border-signal"
                  >
                    <span className="pt-0.5 font-mono text-xs font-semibold text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[13px] font-bold leading-tight md:text-sm">{b.t}</p>
                      <p className="mt-1 text-xs leading-snug text-ink/60">{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="flex h-full flex-col border-ink lg:border-l-2 lg:pl-10">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-fog">
                что даёт присоединение
              </p>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckSq className="mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-[13px] font-medium leading-snug md:text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="group mt-auto flex items-center justify-between gap-4 bg-ink px-5 py-4 text-paper transition-colors hover:bg-signal2">
                <p className="font-display text-xs font-bold uppercase leading-snug md:text-sm">
                  Кодекс пишут те, кто пришёл. Не пришёл — живёшь по чужим правилам.
                </p>
                <ArrowGlyph className="h-3 w-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function CrosshairDeco() {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      className="drift-a pointer-events-none absolute -right-8 bottom-8 h-32 w-32 text-ink/10"
      aria-hidden
    >
      <path d="M30 4v52M4 30h52" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="3" fill="currentColor" />
    </svg>
  );
}

/* ================= 10 · ДОРОЖНАЯ КАРТА ================= */

function S10() {
  const phases = [
    {
      q: "Q4 2026",
      t: "Сборка рабочей группы",
      d: "приём заявок, аудит практик редакций, карта проблем отрасли",
      now: true,
    },
    {
      q: "Q1 2027",
      t: "Проект кодекса",
      d: "черновик вместе с индустрией: обсуждения, правки, юридическая экспертиза",
      now: false,
    },
    {
      q: "Q2 2027",
      t: "Пилот в редакциях",
      d: "10+ изданий внедряют стандарты; обратная связь и доработка документа",
      now: false,
    },
    {
      q: "Q3 2027",
      t: "Принятие и мониторинг",
      d: "публичная версия кодекса, знак соответствия, ежегодный отчёт комиссии",
      now: false,
    },
  ];
  return (
    <div className="grid-ink relative h-full overflow-hidden bg-ink text-paper">
      <Ring className="drift-b pointer-events-none absolute -right-16 -top-16 h-56 w-56 text-signal/25" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker className="text-fog">10 · план</Kicker>
              <SlideTitle className="mt-3">
                Дорожная карта <span className="text-signal">2026 → 2027</span>
              </SlideTitle>
            </div>
            <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
              вы видите этот слайд в начале первого этапа
            </p>
          </div>
        </Reveal>

        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute left-[5px] top-0 hidden h-0.5 w-full bg-paper/20 lg:block" aria-hidden />
              <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
                {phases.map((p, i) => (
                  <div key={p.q} className="group relative lg:pt-8">
                    <span
                      className={`absolute left-0 top-0 hidden h-[13px] w-[13px] lg:block ${
                        p.now
                          ? "pulse-dot bg-signal"
                          : "border-2 border-paper/50 bg-ink transition-colors group-hover:border-signal"
                      }`}
                      style={{ top: "-5px" }}
                      aria-hidden
                    />
                    {p.now && (
                      <span className="mb-2 inline-block bg-signal px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-ink lg:mb-3">
                        мы здесь ●
                      </span>
                    )}
                    <p className="font-mono text-sm font-semibold tracking-[0.18em] text-signal">
                      {p.q}
                    </p>
                    <h3 className="mt-2 font-display text-[15px] font-bold uppercase leading-tight md:text-base">
                      <span className="mr-2 inline-block font-mono text-xs text-paper/40 lg:hidden">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {p.t}
                    </h3>
                    <p className="mt-1.5 border-l-2 border-paper/15 pl-3 text-[13px] leading-snug text-fog transition-colors group-hover:text-paper/85 lg:border-0 lg:pl-0">
                      {p.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={330}>
          <p className="border-t-2 border-paper/15 pt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
            Каждый этап открыт для новых участников — <span className="text-signal">присоединиться можно на любом</span>,
            но чем раньше — тем больше влияния
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ================= 11 · КАК ПРИСОЕДИНИТЬСЯ ================= */

function S11() {
  const steps = [
    {
      n: "01",
      t: "Подписать",
      d: "присоединиться к подписантам Кодекса этики в сфере ИИ — заявка занимает четверть часа",
    },
    {
      n: "02",
      t: "Войти в рабочую группу",
      d: "РГ «Этика ИИ в медиа»: открытые слоты для редакций, платформ, юристов и вузов",
    },
    {
      n: "03",
      t: "Внедрить",
      d: "две-три практики — маркировка и верификация — в своей редакции уже к пилоту",
    },
  ];
  return (
    <div className="grid-light relative h-full overflow-hidden bg-paper text-ink">
      <Asterisk className="drift-a pointer-events-none absolute -left-10 -top-10 h-36 w-36 text-signal/20" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div>
            <Kicker className="text-fog">11 · действие</Kicker>
            <SlideTitle className="mt-3">
              Как <span className="text-signal">присоединиться</span> — три шага
            </SlideTitle>
          </div>
        </Reveal>

        <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal delay={140}>
            <div className="border-b-2 border-ink">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="group flex items-center gap-5 border-t-2 border-ink py-4 transition-all duration-300 hover:translate-x-2 md:gap-8 md:py-5"
                >
                  <span className="outline-num font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold leading-none transition-colors group-hover:text-signal">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase leading-tight md:text-xl">
                      {s.t}
                    </h3>
                    <p className="mt-1 max-w-lg text-[13px] leading-snug text-ink/65 md:text-sm">
                      {s.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-5 bg-signal px-5 py-4 text-ink">
              <p className="font-display text-[clamp(0.8rem,1.6vw,1.1rem)] font-bold uppercase leading-snug">
                Подписать → войти в РГ → внедрить практики
              </p>
              <p className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.18em] sm:block">
                решения принимаются на форуме
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col gap-4">
              <div className="bg-ink p-5 text-paper">
                <p className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-fog">
                  заявка в рабочую группу
                  <span className="blink h-2 w-2 bg-signal" aria-hidden />
                </p>
                <div className="flex items-center gap-5">
                  <PseudoQR seed="rg-media-ethics-2026" className="h-32 w-32 shrink-0 text-paper md:h-36 md:w-36" />
                  <div className="space-y-2.5 font-mono text-[11px] leading-relaxed tracking-wide">
                    <p className="text-paper">media-ethics@unn.ru</p>
                    <p className="text-paper/80">t.me/ai_ethics_media</p>
                    <p className="text-paper/80">ai.unn.ru/ethics</p>
                  </div>
                </div>
              </div>
              <p className="border-l-4 border-signal bg-paper2 px-4 py-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em]">
                Контакты — в раздатке сессии и на стенде Центра ИИ ННГУ
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

/* ================= 12 · ФИНАЛ ================= */

function S12() {
  return (
    <div className="grid-ink relative h-full overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute -left-24 top-[-15%] h-[130%] w-24 rotate-[-12deg] bg-signal" />
      <Asterisk className="spin-slow pointer-events-none absolute bottom-16 right-[8%] h-28 w-28 text-signal/60 md:h-40 md:w-40" />
      <Ring className="drift-a pointer-events-none absolute right-[24%] top-10 h-32 w-32 text-paper/15" />

      <div className="relative flex h-full flex-col px-6 py-8 md:px-14 lg:px-20">
        <Reveal>
          <Kicker className="text-fog">12 · финал</Kicker>
        </Reveal>

        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <Reveal delay={150}>
            <blockquote className="max-w-4xl">
              <p className="font-display text-[clamp(1.25rem,3.2vw,2.5rem)] font-bold uppercase leading-[1.18]">
                «Прогресс без этики — эксперимент над аудиторией. Этика без прогресса — музей.
                <span className="mt-3 block text-signal">
                  Нам нужна живая редакция, где будущее проверяют, как факт».
                </span>
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-fog md:grid-cols-4">
              <span>Центр ИИ ННГУ им. Н.И. Лобачевского</span>
              <span>Альянс в сфере ИИ</span>
              <span>Комиссия по реализации Кодекса этики</span>
              <span>РГ «Этика ИИ в медиа»</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={480}>
          <div className="border-t border-paper/15 pt-4">
            <Marquee
              items={[
                "спасибо за внимание",
                "ждём вас в рабочей группе",
                "вся россия — 2026",
                "кодекс пишут те, кто пришёл",
              ]}
              className="text-fog"
              speed={26}
            />
            <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-paper/35">
              O — оглавление · ← → — навигация
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export const SECOND: SlideDef[] = [
  { id: "s07", label: "Подходы комиссии", theme: "paper", Comp: S07 },
  { id: "s08", label: "Где проходит грань", theme: "ink", Comp: S08 },
  { id: "s09", label: "Отраслевой кодекс", theme: "paper", Comp: S09 },
  { id: "s10", label: "Дорожная карта", theme: "ink", Comp: S10 },
  { id: "s11", label: "Как присоединиться", theme: "paper", Comp: S11 },
  { id: "s12", label: "Финал", theme: "ink", Comp: S12 },
];
