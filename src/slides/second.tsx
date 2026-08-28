import { useState } from "react";
import {
  ArrowGlyph,
  CheckSq,
  Converge,
  Kicker,
  Marquee,
  PseudoQR,
  RaysMotif,
  Reveal,
  SlideTitle,
  Stripes,
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
    <div className="grid-paper relative h-full overflow-hidden bg-white text-inkc">
      <Stripes className="drift-b pointer-events-none absolute -left-16 -top-16 h-56 w-56 rotate-45 text-tint2" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker className="text-brand">07 · метод</Kicker>
              <SlideTitle className="mt-3">
                Пять подходов <span className="text-brand">комиссии по этике</span>
              </SlideTitle>
            </div>
            <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-steel">
              наведите на строку — так выглядит смена регистра с «запретить» на «договориться»
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="min-h-0 flex-1">
          <div className="flex h-full flex-col justify-center border-b-2 border-inkc">
            {approaches.map((a) => (
              <div
                key={a.n}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t-2 border-inkc px-2 py-3.5 transition-colors duration-300 hover:bg-brand hover:text-white md:-mx-3 md:gap-8 md:px-3 md:py-4"
              >
                <span className="font-display text-2xl font-black leading-none text-brand/30 transition-colors group-hover:text-white md:text-4xl">
                  {a.n}
                </span>
                <div>
                  <h3 className="font-display text-sm font-extrabold uppercase leading-tight md:text-lg">
                    {a.t}
                  </h3>
                  <p className="mt-1 text-[13px] leading-snug text-inkc/60 transition-colors group-hover:text-white/90 md:text-sm">
                    {a.d}
                  </p>
                </div>
                <ArrowGlyph className="hidden h-3 w-10 shrink-0 text-sky opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:block" />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={330}>
          <p className="border-t-2 border-mist pt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-steel">
            Принцип один: <span className="font-semibold text-inkc">этика — не тормоз прогресса, а его рулевое управление</span>
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
    <div className="grid-white relative h-full overflow-hidden bg-brand text-white">
      <RaysMotif className="pointer-events-none absolute -bottom-2 -right-2 h-[120%] w-auto -rotate-90 text-white/10" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker className="text-sky">08 · интерактив</Kicker>
              <SlideTitle className="mt-3">
                Где проходит <span className="text-tint2">грань?</span>
              </SlideTitle>
            </div>
            <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-white/60">
              перетащите маркер — это и есть выбор, который делает отрасль
            </p>
          </div>
        </Reveal>

        <div className="flex min-h-0 flex-1 flex-col justify-center gap-6">
          <Reveal delay={140}>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.26em] text-white/60 md:text-[11px]">
              <span className={zone === 0 ? "text-white" : ""}>← риск: запретить всё</span>
              <span className={zone === 1 ? "text-white" : ""}>баланс</span>
              <span className={zone === 2 ? "text-white" : ""}>риск: отпустить всё →</span>
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
            <div className="flex justify-between px-1 font-mono text-[10px] text-white/40">
              <span>|</span>
              <span>|</span>
              <span className="text-sky">◆ кодекс</span>
              <span>|</span>
              <span>|</span>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div key={zone} className="reveal border-l-4 border-sky bg-deep/70 p-5 md:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-sky">
                зона {zone + 1} / 3 · «{z.word}»
              </p>
              <h3 className="mt-2 font-display text-[clamp(1.05rem,2.2vw,1.6rem)] font-extrabold uppercase leading-tight">
                {z.title}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/80 md:text-[15px]">
                {z.text}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={360}>
          <p className="border-t border-white/20 pt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-white/70">
            Грань — <span className="text-sky">не стена, а правила движения</span>. Кодекс и есть эти правила
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
    <div className="grid-paper relative h-full overflow-hidden bg-white text-inkc">
      <Converge className="pointer-events-none absolute bottom-6 left-0 h-16 w-1/3 text-tint2" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div>
            <Kicker className="text-brand">09 · предложение</Kicker>
            <SlideTitle className="mt-3">
              Отраслевой кодекс практики — <span className="text-brand">что предлагаем</span>
            </SlideTitle>
          </div>
        </Reveal>

        <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <Reveal delay={140}>
            <div>
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.24em] text-steel">
                из чего состоит документ
              </p>
              <div className="grid gap-x-8 sm:grid-cols-2">
                {blocks.map((b, i) => (
                  <div
                    key={b.t}
                    className="group flex gap-3 border-t-2 border-mist py-3 transition-all duration-300 hover:translate-x-1.5 hover:border-brand"
                  >
                    <span className="pt-0.5 font-mono text-xs font-semibold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[13px] font-bold leading-tight md:text-sm">{b.t}</p>
                      <p className="mt-1 text-xs leading-snug text-steel">{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="flex h-full flex-col lg:border-l-2 lg:border-mist lg:pl-10">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-steel">
                что даёт присоединение
              </p>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                    <CheckSq className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-[13px] font-medium leading-snug md:text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="group mt-auto flex items-center justify-between gap-4 bg-brand px-5 py-4 text-white transition-colors hover:bg-deep">
                <p className="font-display text-xs font-extrabold uppercase leading-snug md:text-sm">
                  Кодекс пишут те, кто пришёл. Не пришёл — живёшь по чужим правилам.
                </p>
                <ArrowGlyph className="h-3 w-10 shrink-0 text-sky transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
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
    <div className="grid-white relative h-full overflow-hidden bg-brand text-white">
      <Stripes className="drift-a pointer-events-none absolute -right-14 -top-14 h-56 w-56 -rotate-12 text-white/10" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker className="text-sky">10 · план</Kicker>
              <SlideTitle className="mt-3">
                Дорожная карта <span className="text-tint2">2026 → 2027</span>
              </SlideTitle>
            </div>
            <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-white/60">
              вы видите этот слайд в начале первого этапа
            </p>
          </div>
        </Reveal>

        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute left-0 top-[-5px] hidden h-0.5 w-full bg-white/25 lg:block" aria-hidden />
              <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
                {phases.map((p, i) => (
                  <div key={p.q} className="group relative lg:pt-8">
                    <span
                      className={`absolute left-0 top-[-5px] hidden h-[13px] w-[13px] lg:block ${
                        p.now
                          ? "pulse-dot bg-sky"
                          : "border-2 border-white/60 bg-brand transition-colors group-hover:border-sky"
                      }`}
                      aria-hidden
                    />
                    {p.now && (
                      <span className="mb-2 inline-block bg-sky px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-brand lg:mb-3">
                        мы здесь ●
                      </span>
                    )}
                    <p className="font-mono text-sm font-semibold tracking-[0.18em] text-sky">{p.q}</p>
                    <h3 className="mt-2 font-display text-[15px] font-extrabold uppercase leading-tight md:text-base">
                      <span className="mr-2 inline-block font-mono text-xs text-white/40 lg:hidden">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {p.t}
                    </h3>
                    <p className="mt-1.5 border-l-2 border-white/20 pl-3 text-[13px] leading-snug text-white/70 transition-colors group-hover:text-white lg:border-0 lg:pl-0">
                      {p.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={330}>
          <p className="border-t border-white/20 pt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-white/70">
            Каждый этап открыт для новых участников — <span className="text-sky">присоединиться можно на любом</span>,
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
    <div className="grid-paper relative h-full overflow-hidden bg-white text-inkc">
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div>
            <Kicker className="text-brand">11 · действие</Kicker>
            <SlideTitle className="mt-3">
              Как <span className="text-brand">присоединиться</span> — три шага
            </SlideTitle>
          </div>
        </Reveal>

        <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal delay={140}>
            <div className="flex h-full flex-col">
              <div className="border-b-2 border-inkc">
                {steps.map((s) => (
                  <div
                    key={s.n}
                    className="group flex items-center gap-5 border-t-2 border-inkc py-4 transition-all duration-300 hover:translate-x-2 md:gap-8 md:py-5"
                  >
                    <span className="outline-num font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-black leading-none transition-colors group-hover:text-brand">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-extrabold uppercase leading-tight md:text-xl">
                        {s.t}
                      </h3>
                      <p className="mt-1 max-w-lg text-[13px] leading-snug text-inkc/65 md:text-sm">
                        {s.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-5 bg-brand px-5 py-4 text-white">
                <p className="font-display text-[clamp(0.8rem,1.6vw,1.1rem)] font-extrabold uppercase leading-snug">
                  Подписать → войти в РГ → внедрить практики
                </p>
                <p className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.18em] text-sky sm:block">
                  решения принимаются на форуме
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex h-full flex-col gap-4">
              <div className="bg-brand p-5 text-white">
                <p className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-sky">
                  заявка в рабочую группу
                  <span className="blink h-2 w-2 bg-sky" aria-hidden />
                </p>
                <div className="flex items-center gap-5">
                  <PseudoQR seed="rg-media-ethics-unn-2026" className="h-32 w-32 shrink-0 text-white md:h-36 md:w-36" />
                  <div className="space-y-2.5 font-mono text-[11px] leading-relaxed tracking-wide">
                    <p className="text-white">media-ethics@unn.ru</p>
                    <p className="text-white/85">t.me/ai_ethics_media</p>
                    <p className="text-white/85">ai.unn.ru/ethics</p>
                  </div>
                </div>
              </div>
              <p className="border-l-4 border-sky bg-tint px-4 py-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-inkc/80">
                Контакты — в раздатке сессии и на стенде Центра ИИ Университета Лобачевского
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
    <div className="grid-white relative h-full overflow-hidden bg-brand text-white">
      <RaysMotif className="pointer-events-none absolute -bottom-2 -left-2 h-[125%] w-auto text-white/12" />
      <Stripes className="drift-a pointer-events-none absolute -right-12 top-1/4 h-48 w-48 rotate-12 text-sky/30" />

      <div className="relative flex h-full flex-col px-6 py-8 md:px-14 lg:px-20">
        <Reveal>
          <Kicker className="text-sky">12 · финал</Kicker>
        </Reveal>

        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <Reveal delay={150}>
            <blockquote className="max-w-4xl">
              <p className="font-display text-[clamp(1.25rem,3.2vw,2.5rem)] font-black uppercase leading-[1.18]">
                «Прогресс без этики — эксперимент над аудиторией. Этика без прогресса — музей.
                <span className="mt-3 block text-sky">
                  Нам нужна живая редакция, где будущее проверяют, как факт».
                </span>
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-white/60 md:grid-cols-4">
              <span>Университет Лобачевского</span>
              <span>Центр ИИ ННГУ</span>
              <span>Комиссия по реализации Кодекса этики</span>
              <span>РГ «Этика ИИ в медиа»</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={480}>
          <div className="border-t border-white/20 pt-4">
            <Marquee
              items={[
                "спасибо за внимание",
                "ждём вас в рабочей группе",
                "вся россия — 2026",
                "кодекс пишут те, кто пришёл",
              ]}
              className="text-white/55"
              speed={26}
            />
            <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              O — оглавление · ← → — навигация
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export const SECOND: SlideDef[] = [
  { id: "s07", label: "Подходы комиссии", theme: "white", Comp: S07 },
  { id: "s08", label: "Где проходит грань", theme: "blue", Comp: S08 },
  { id: "s09", label: "Отраслевой кодекс", theme: "white", Comp: S09 },
  { id: "s10", label: "Дорожная карта", theme: "blue", Comp: S10 },
  { id: "s11", label: "Как присоединиться", theme: "white", Comp: S11 },
  { id: "s12", label: "Финал", theme: "blue", Comp: S12 },
];
