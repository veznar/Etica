import {
  ArrowGlyph,
  Asterisk,
  CheckSq,
  Crosshair,
  Kicker,
  Marquee,
  PlusGlyph,
  Reveal,
  Ring,
  SlideTitle,
  type SlideDef,
} from "../components/kit";

/* ================= 01 · ТИТУЛ ================= */

function S01() {
  return (
    <div className="grid-ink relative h-full overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute -right-28 top-[-20%] h-[150%] w-32 rotate-[14deg] bg-signal md:w-40" />
      <div className="pointer-events-none absolute -right-10 top-[-20%] h-[150%] w-1.5 rotate-[14deg] bg-paper/40" />
      <Asterisk className="spin-slow pointer-events-none absolute right-[11%] top-[13%] h-24 w-24 text-signal md:h-36 md:w-36" />
      <Ring className="drift-a pointer-events-none absolute -left-10 bottom-24 h-40 w-40 text-paper/20" />
      <div className="pointer-events-none absolute bottom-28 left-[46%] hidden h-14 w-14 border border-paper/25 lg:block" aria-hidden>
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-signal" />
      </div>

      <div className="relative flex h-full flex-col px-6 py-6 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/15 pb-4">
            <Kicker>Форум современной журналистики «Вся Россия»</Kicker>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-fog">
              2026 · сессия «технологии и общество»
            </p>
          </div>
        </Reveal>

        <div className="flex min-h-0 flex-1 flex-col justify-center gap-8 py-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <Reveal delay={120}>
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.32em] text-signal md:text-xs">
                {"//"} рабочая группа «Этика ИИ в медиа»
              </p>
            </Reveal>
            <Reveal delay={220}>
              <h1 className="font-display text-[clamp(1.7rem,4.6vw,3.9rem)] font-extrabold uppercase leading-[1.05] tracking-tight">
                Этика ИИ в медиа:
                <span className="mt-2 block">
                  грань между{" "}
                  <span className="relative inline-block">
                    риском
                    <span className="absolute -bottom-1 left-0 h-[0.13em] w-full bg-signal" />
                  </span>{" "}
                  и прогрессом
                </span>
              </h1>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-8 max-w-xl border-l-4 border-signal pl-5">
                <p className="text-[15px] font-semibold leading-snug">
                  Центр искусственного интеллекта ННГУ им.&nbsp;Н.И.&nbsp;Лобачевского
                </p>
                <p className="mt-1.5 font-mono text-[11px] leading-relaxed tracking-wide text-fog">
                  Комиссия по реализации Кодекса этики в сфере ИИ
                  <br />
                  руководитель рабочей группы «Этика ИИ в медиа»
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={520} className="hidden shrink-0 lg:block">
            <p className="writing-vertical font-mono text-[11px] uppercase tracking-[0.5em] text-fog">
              вся россия — 2026 · презентация
            </p>
          </Reveal>
        </div>

        <Reveal delay={620}>
          <Marquee
            items={[
              "верификация",
              "маркировка",
              "ответственность",
              "доверие",
              "прозрачность",
              "фактчекинг",
              "авторское право",
              "аудитория",
            ]}
            className="border-t border-paper/15 pt-4 text-fog"
          />
        </Reveal>
      </div>
    </div>
  );
}

/* ================= 02 · ПОЧЕМУ СЕЙЧАС ================= */

function S02() {
  const stats = [
    {
      n: "≈80%",
      t: "крупных редакций уже используют ИИ в рутине: транскрибация, саммари, заголовки, дистрибуция",
      s: "оценки отраслевых исследований, 2025–2026",
    },
    {
      n: "×5",
      t: "рост объёма синтетического контента в новостных лентах за три года — текст, изображения, видео, голос",
      s: "генеративные модели стали массовым инструментом",
    },
    {
      n: "<50%",
      t: "читателей уверенно отличают текст нейросети от авторского в слепых тестах",
      s: "эксперименты с распознаванием ИИ-контента",
    },
  ];
  return (
    <div className="grid-light relative h-full overflow-hidden bg-paper text-ink">
      <Crosshair className="drift-b pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 text-ink/15" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker className="text-fog">02 · контекст</Kicker>
              <SlideTitle className="mt-3">
                Почему этот разговор — <span className="text-signal">сейчас</span>
              </SlideTitle>
            </div>
            <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
              ИИ в редакциях — уже не прогноз, а производственный процесс
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid divide-y-2 divide-ink border-y-2 border-ink md:grid-cols-3 md:divide-x-2 md:divide-y-0">
            {stats.map((st) => (
              <div key={st.n} className="group px-1 py-5 transition-colors md:px-6 md:py-7">
                <p className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-extrabold leading-none text-signal transition-transform duration-300 group-hover:-translate-y-1">
                  {st.n}
                </p>
                <p className="mt-4 text-sm font-medium leading-snug">{st.t}</p>
                <p className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-fog">
                  <span className="h-1.5 w-1.5 bg-signal" aria-hidden />
                  {st.s}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-auto">
          <Reveal delay={320}>
            <div className="group flex items-center gap-6 bg-ink px-6 py-6 text-paper transition-colors duration-300 hover:bg-signal2 md:px-10">
              <Asterisk className="h-8 w-8 shrink-0 text-signal transition-colors group-hover:text-paper" />
              <p className="font-display text-[clamp(1rem,2.1vw,1.55rem)] font-bold uppercase leading-snug">
                Вопрос уже не «придёт ли ИИ в редакции».
                <span className="block text-signal transition-colors group-hover:text-paper">
                  Вопрос — «по каким правилам».
                </span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-fog">
              * цифры — ориентиры по открытым отраслевым отчётам; точные источники — в заметках спикера
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

/* ================= 03 · КТО МЫ И КОГО ЗОВЁМ ================= */

function S03() {
  const orgs = [
    {
      tag: "ННГУ",
      name: "Центр искусственного интеллекта",
      desc: "проектный офис университета: модели, данные, прикладные ИИ-решения для медиа и образования",
    },
    {
      tag: "АЛЬЯНС",
      name: "Альянс в сфере искусственного интеллекта",
      desc: "инициатор национального Кодекса этики ИИ; объединяет бизнес, университеты и институты развития",
    },
    {
      tag: "КОМИССИЯ",
      name: "Комиссия по реализации Кодекса этики",
      desc: "разбор спорных кейсов, рабочие группы, мониторинг практик и доверия аудитории",
    },
    {
      tag: "РГ",
      name: "Рабочая группа «Этика ИИ в медиа»",
      desc: "это мы: стандарты применения, маркировка, отраслевой кодекс практики для редакций",
    },
  ];
  const needed = [
    "Редакторы и журналисты — те, кто ежедневно принимает решения в ньюзруме",
    "Медиахолдинги и независимые издания — от региональных до федеральных",
    "Технологические платформы и разработчики ИИ-инструментов",
    "Юристы: авторское право, персональные данные, распределение ответственности",
    "Университеты и исследователи — данные, измерения, экспертиза",
    "Общественные организации и представители аудитории",
  ];
  return (
    <div className="grid-light relative h-full overflow-hidden bg-paper text-ink">
      <Ring className="drift-a pointer-events-none absolute -right-14 -top-14 h-52 w-52 text-signal/30" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div>
            <Kicker className="text-fog">03 · команда и состав</Kicker>
            <SlideTitle className="mt-3">
              Кто мы — и кого <span className="text-signal">зовём</span> в рабочую группу
            </SlideTitle>
          </div>
        </Reveal>

        <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <Reveal delay={140}>
            <div>
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.24em] text-fog">
                контур проекта
              </p>
              {orgs.map((o) => (
                <div
                  key={o.tag}
                  className="group flex items-start gap-4 border-t-2 border-ink py-3.5 transition-all duration-300 hover:translate-x-2 hover:border-signal md:gap-6"
                >
                  <span className="mt-0.5 inline-block w-24 shrink-0 bg-ink px-2 py-1 text-center font-mono text-[10px] font-semibold tracking-[0.14em] text-paper transition-colors group-hover:bg-signal">
                    {o.tag}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold uppercase leading-tight md:text-[15px]">
                      {o.name}
                    </p>
                    <p className="mt-1 text-[13px] leading-snug text-ink/70">{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="flex h-full flex-col border-l-0 border-ink lg:border-l-2 lg:pl-10">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-fog">
                кого не хватает за столом
              </p>
              <ul className="space-y-2.5">
                {needed.map((n, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] font-medium leading-snug md:text-sm">
                    <CheckSq className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto hidden pt-4 lg:block">
                <p className="border-l-4 border-signal bg-paper2 px-4 py-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em]">
                  Кодекс работает, только когда его пишут все стороны процесса — а не одна
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

/* ================= 04 · СТОРОНА РИСКА ================= */

function S04() {
  const risks = [
    {
      n: "01",
      t: "Дипфейки и синтез",
      d: "Лица и голоса, которые никогда ничего не говорили. Синтетическое видео дешевле опровержения.",
    },
    {
      n: "02",
      t: "Галлюцинации моделей",
      d: "Выдуманные факты с интонацией информагентства — и со скоростью ленты, а не проверки.",
    },
    {
      n: "03",
      t: "Алгоритмические искажения",
      d: "Редакционная политика, обученная на чужой картине мира: смещения в выборках и выдаче.",
    },
    {
      n: "04",
      t: "Непрозрачность",
      d: "Аудитория не знает, кто с ней говорит — человек или модель. Незнание разрушает доверие.",
    },
    {
      n: "05",
      t: "Авторское право",
      d: "Модели обучаются на журналистских текстах без согласия и компенсации редакций и авторов.",
    },
    {
      n: "06",
      t: "Эрозия профессии",
      d: "Генератор дешевле репортёра — пока не выясняется, что проверять его дороже всех вместе.",
    },
  ];
  return (
    <div className="grid-ink relative h-full overflow-hidden bg-ink text-paper">
      <Asterisk className="drift-a pointer-events-none absolute -right-10 top-8 h-36 w-36 text-signal/50" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker className="text-fog">04 · сторона риска</Kicker>
              <SlideTitle className="mt-3">
                Шесть проблем, которые <span className="text-signal">нельзя пересидеть</span>
              </SlideTitle>
            </div>
            <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
              каждая уже встречалась в российских и мировых редакциях
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="min-h-0 flex-1">
          <div className="grid gap-x-12 md:grid-cols-2">
            {risks.map((r, i) => (
              <div
                key={r.n}
                className="group -mx-3 flex gap-4 border-t-2 border-paper/15 px-3 py-4 transition-all duration-300 hover:translate-x-2 hover:border-signal hover:bg-paper/5 md:gap-6"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                <span className="pt-1 font-mono text-sm font-semibold text-signal">{r.n}</span>
                <div>
                  <h3 className="font-display text-[15px] font-bold uppercase leading-tight md:text-base">
                    {r.t}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-fog transition-colors group-hover:text-paper/85 md:text-sm">
                    {r.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="border-t-2 border-paper/15 pt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
            Вывод комиссии: <span className="text-signal">риски системные</span> — значит, и ответ
            должен быть системным, а не набором запретов
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ================= 05 · СТОРОНА ПРОГРЕССА ================= */

function S05() {
  const gains = [
    {
      t: "Верификация и фактчекинг",
      d: "проверка источников, дат и цитат со скоростью ленты, а не за сутки",
    },
    {
      t: "Доступность",
      d: "переводы, субтитры, адаптация материалов для людей с ограниченными возможностями",
    },
    {
      t: "Журналистика данных",
      d: "сигналы в больших массивах: закупки, реестры, статистика — основа расследований",
    },
    {
      t: "Рутина возвращается репортёру",
      d: "транскрибация, саммари, оцифровка архивов — время уходит в репортаж, а не в расшифровку",
    },
    {
      t: "Новые форматы",
      d: "персонализация без манипуляции: читатель получает контекст, а не замкнутый пузырь",
    },
  ];
  return (
    <div className="grid-light relative h-full overflow-hidden bg-paper text-ink">
      <svg
        viewBox="0 0 80 120"
        fill="none"
        className="drift-b pointer-events-none absolute right-[4%] top-10 h-32 w-20 text-signal/25 md:h-44 md:w-28"
        aria-hidden
      >
        <path d="M40 112V16M12 44l28-30 28 30" stroke="currentColor" strokeWidth="9" />
      </svg>
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div>
            <Kicker className="text-fog">05 · сторона прогресса</Kicker>
            <SlideTitle className="mt-3">
              Что ИИ <span className="text-signal">даёт</span> медиа — и это нельзя потерять
            </SlideTitle>
          </div>
        </Reveal>

        <Reveal delay={150} className="min-h-0 flex-1">
          <div className="max-w-3xl">
            {gains.map((g, i) => (
              <div
                key={g.t}
                className="group -mx-3 flex items-start gap-4 border-t-2 border-ink px-3 py-3.5 transition-all duration-300 hover:translate-x-2 md:gap-6"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                <PlusGlyph className="mt-1 h-4 w-4 shrink-0 text-signal transition-transform duration-300 group-hover:rotate-90" />
                <p className="text-sm leading-snug md:text-[15px]">
                  <span className="font-display font-bold uppercase">{g.t}.</span>{" "}
                  <span className="text-ink/70">{g.d}</span>
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={330}>
          <blockquote className="max-w-4xl border-l-4 border-signal pl-5 md:pl-6">
            <p className="font-display text-[clamp(1rem,2vw,1.45rem)] font-bold uppercase leading-snug">
              Прогресс — не повод закрывать глаза на риски. Риски — не повод останавливать прогресс.
              <span className="text-signal"> Грань проводит этика.</span>
            </p>
          </blockquote>
        </Reveal>
      </div>
    </div>
  );
}

/* ================= 06 · КОДЕКС ЭТИКИ ================= */

function S06() {
  const principles = [
    { n: "I", t: "Человечность", d: "в центре — человек: его права, безопасность и достоинство" },
    { n: "II", t: "Безопасность", d: "предотвращение вреда людям и обществу на всех этапах жизненного цикла" },
    { n: "III", t: "Прозрачность", d: "аудитория вправе знать, когда с ней говорит машина" },
    { n: "IV", t: "Объяснимость", d: "уметь ответить на вопрос «почему модель решила именно так»" },
    { n: "V", t: "Ответственность", d: "за результат всегда отвечает человек или организация, а не алгоритм" },
    { n: "VI", t: "Недискриминация", d: "алгоритмы не наследуют и не усиливают предвзятость данных" },
  ];
  return (
    <div className="grid-ink relative h-full overflow-hidden bg-ink text-paper">
      <Crosshair className="drift-a pointer-events-none absolute -left-10 top-10 h-36 w-36 text-paper/15" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker className="text-fog">06 · фундамент</Kicker>
              <SlideTitle className="mt-3">
                Кодекс этики <span className="text-signal">в сфере ИИ</span>
              </SlideTitle>
            </div>
            <div className="flex flex-wrap gap-2">
              {["принят в 2021", "инициатива Альянса в сфере ИИ", "подписанты — сотни организаций"].map((c) => (
                <span
                  key={c}
                  className="border border-paper/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/80 transition-colors hover:border-signal hover:text-paper"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="min-h-0 flex-1">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.n}
                className="group border border-paper/15 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-signal hover:bg-paper/5 md:p-5"
              >
                <p className="font-display text-xl font-extrabold text-signal md:text-2xl">{p.n}</p>
                <h3 className="mt-2 font-display text-sm font-bold uppercase tracking-wide md:text-[15px]">
                  {p.t}
                </h3>
                <p className="mt-1.5 text-[13px] leading-snug text-fog transition-colors group-hover:text-paper/85">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={330}>
          <div className="group flex items-center justify-between gap-6 bg-signal px-6 py-4 text-ink transition-colors hover:bg-paper md:px-8">
            <p className="font-display text-[clamp(0.85rem,1.8vw,1.25rem)] font-bold uppercase leading-snug">
              Кодекс — это рамка. Отрасли нужен прикладной кодекс практики. О нём — дальше.
            </p>
            <ArrowGlyph className="h-4 w-14 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export const FIRST: SlideDef[] = [
  { id: "s01", label: "Титул", theme: "ink", Comp: S01 },
  { id: "s02", label: "Почему сейчас", theme: "paper", Comp: S02 },
  { id: "s03", label: "Кто мы и кого зовём", theme: "paper", Comp: S03 },
  { id: "s04", label: "Сторона риска", theme: "ink", Comp: S04 },
  { id: "s05", label: "Сторона прогресса", theme: "paper", Comp: S05 },
  { id: "s06", label: "Кодекс этики ИИ", theme: "ink", Comp: S06 },
];
