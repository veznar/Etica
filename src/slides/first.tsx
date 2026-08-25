import {
  ArrowGlyph,
  CheckSq,
  Converge,
  Kicker,
  Marquee,
  RaysMotif,
  Reveal,
  SlideTitle,
  Stripes,
  type SlideDef,
} from "../components/kit";

/* ================= 01 · ТИТУЛ ================= */

function S01() {
  const badges = ["Альянс в сфере ИИ", "Кодекс этики в сфере ИИ", "РГ «Этика ИИ в медиа»"];
  return (
    <div className="grid-white relative h-full overflow-hidden bg-brand text-white">
      <RaysMotif className="pointer-events-none absolute -bottom-2 -left-2 h-[135%] w-auto text-white/12" />
      <Stripes className="drift-a pointer-events-none absolute -right-10 -top-16 h-64 w-64 rotate-12 text-sky/35" />

      <div className="relative flex h-full flex-col px-6 py-8 md:px-14 lg:px-20">
        <Reveal>
          <Kicker className="text-white/70">Форум современной журналистики · вся россия — 2026</Kicker>
        </Reveal>

        <div className="flex min-h-0 flex-1 flex-col justify-center gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-4xl">
            <Reveal delay={150}>
              <h1 className="font-display text-[clamp(2.1rem,6.6vw,5.2rem)] font-black uppercase leading-[1.02] tracking-tight">
                Этика ИИ
                <br />в медиа
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 flex items-center gap-4">
                <span className="h-[3px] w-12 shrink-0 bg-sky" aria-hidden />
                <span className="font-display text-[clamp(1rem,2.6vw,1.9rem)] font-bold uppercase leading-tight text-tint2">
                  грань между риском и прогрессом
                </span>
              </p>
            </Reveal>
            <Reveal delay={430}>
              <Converge className="mt-8 h-12 w-full max-w-xl text-white/25" />
            </Reveal>
          </div>

          <Reveal delay={560} className="shrink-0">
            <div className="border-l-4 border-sky bg-deep/60 px-6 py-5 lg:px-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-sky">докладчик</p>
              <p className="mt-2 font-display text-lg font-extrabold uppercase leading-tight lg:text-xl">
                Руководитель проектов Центра ИИ ННГУ
              </p>
              <p className="mt-1 text-sm leading-snug text-white/75">
                член Комиссии по реализации Кодекса этики в сфере ИИ, руководитель рабочей группы
                «Этика ИИ в медиа»
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 lg:justify-end">
              {badges.map((b) => (
                <span
                  key={b}
                  className="border border-white/35 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85 transition-colors duration-300 hover:border-sky hover:text-white"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={700}>
          <div className="border-t border-white/20 pt-3">
            <Marquee
              items={[
                "кодекс этики в сфере ИИ",
                "рабочая группа «этика ИИ в медиа»",
                "приглашаем редакции и платформы",
                "вся россия — 2026",
              ]}
              className="text-white/55"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ================= 02 · ПОЧЕМУ СЕЙЧАС ================= */

function S02() {
  const stats = [
    {
      big: "70%",
      small: "аудитории",
      text: "уже встречали ИИ-контент в ленте — и далеко не всегда распознавали его",
    },
    {
      big: "×10",
      small: "за три года",
      text: "выросло число публикаций, созданных или отредактированных нейросетями",
    },
    {
      big: "0",
      small: "отраслевых правил",
      text: "единого кодекса практики для медиа в России пока не существует",
    },
  ];
  return (
    <div className="grid-paper relative h-full overflow-hidden bg-white text-inkc">
      <Stripes className="drift-b pointer-events-none absolute -right-16 bottom-0 h-56 w-56 -rotate-12 text-tint2" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <Kicker className="text-brand">02 · контекст</Kicker>
          <SlideTitle className="mt-3">
            Почему <span className="text-brand">сейчас</span>, а не потом
          </SlideTitle>
        </Reveal>

        <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal delay={150} className="min-h-0">
            <div className="flex h-full flex-col justify-center border-b-2 border-mist">
              {stats.map((s, i) => (
                <div
                  key={s.big}
                  className="group flex flex-1 items-center gap-5 border-t-2 border-mist py-3 transition-all duration-300 hover:border-brand md:gap-8"
                >
                  <div className="w-36 shrink-0 md:w-48">
                    <p className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-black leading-none text-brand transition-transform duration-300 group-hover:-translate-y-0.5">
                      {s.big}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-steel">
                      {s.small}
                    </p>
                  </div>
                  <p className="max-w-md text-sm leading-snug text-inkc/75 md:text-base">{s.text}</p>
                  <span
                    className="ml-auto hidden h-1 w-10 shrink-0 bg-sky transition-all duration-300 group-hover:w-20 md:block"
                    aria-hidden
                  />
                  <span className="sr-only">{i}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex h-full flex-col">
              <div className="flex-1 border-l-4 border-brand bg-tint p-5 md:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-steel">ключевой тезис</p>
                <p className="mt-3 font-display text-[clamp(1rem,1.9vw,1.35rem)] font-extrabold uppercase leading-snug text-inkc">
                  Вопрос уже не «применять ИИ или нет» — вопрос, <span className="text-brand">по каким правилам</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-inkc/70">
                  Технологии обгоняют нормы. Если правила не напишет отрасль — их напишут инциденты,
                  суды и недоверие аудитории.
                </p>
              </div>
              <div className="mt-4 bg-brand px-5 py-4 text-white">
                <p className="font-display text-sm font-extrabold uppercase leading-snug md:text-base">
                  Медиа — самая заметная точка контакта человека с ИИ
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={420}>
          <p className="border-t-2 border-mist pt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-steel">
            оценки носят иллюстративный характер — порядок величин подтверждается отраслевыми
            исследованиями 2024–2025
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ================= 03 · КОМАНДА ЗАДАЧИ ================= */

function S03() {
  const chain = [
    { t: "Центр ИИ ННГУ", d: "инициатор и научная база" },
    { t: "Альянс в сфере ИИ", d: "экосистема 300+ организаций" },
    { t: "Комиссия по этике", d: "реализация Кодекса" },
    { t: "РГ «Этика ИИ в медиа»", d: "вы сейчас здесь" },
  ];
  const seats = [
    "Главные редакторы и журналисты",
    "Медиахолдинги и независимые издания",
    "ИИ-платформы и разработчики",
    "Юристы и эксперты по авторскому праву",
    "Университеты и исследователи",
    "Представители аудитории — читатель тоже сторона",
  ];
  return (
    <div className="grid-paper relative h-full overflow-hidden bg-white text-inkc">
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <Kicker className="text-brand">03 · команда задачи</Kicker>
          <SlideTitle className="mt-3">
            Кто уже в работе — и <span className="text-brand">кого мы зовём</span>
          </SlideTitle>
        </Reveal>

        <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <Reveal delay={150}>
            <div className="flex flex-col gap-2.5">
              {chain.map((c, i) => {
                const last = i === chain.length - 1;
                return (
                  <div key={c.t} className="flex items-center gap-3">
                    <div
                      className={`flex-1 border px-5 py-3 transition-all duration-300 ${
                        last
                          ? "border-brand bg-brand text-white shadow-[6px_6px_0_0_#2196F3] hover:translate-x-1"
                          : "border-mist bg-white hover:-translate-y-0.5 hover:border-brand"
                      }`}
                    >
                      <p className={`font-display text-sm font-extrabold uppercase md:text-base ${last ? "text-white" : "text-inkc"}`}>
                        {c.t}
                      </p>
                      <p className={`mt-0.5 text-xs ${last ? "text-white/80" : "text-steel"}`}>{c.d}</p>
                    </div>
                    {i < chain.length - 1 && (
                      <ArrowGlyph className="hidden h-3 w-8 shrink-0 rotate-90 text-brand lg:block" />
                    )}
                  </div>
                );
              })}
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                контур: университет → отрасль → кодекс → рабочая группа
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="border-l-4 border-sky bg-tint p-5 md:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-steel">места в рабочей группе</p>
              <ul className="mt-3 grid gap-2.5">
                {seats.map((s) => (
                  <li
                    key={s}
                    className="group flex items-center gap-3 border-b border-mist/80 pb-2.5 text-sm font-medium leading-snug transition-all duration-300 last:border-0 hover:translate-x-1 hover:text-brand"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 bg-brand transition-colors group-hover:bg-sky" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={420}>
          <p className="border-t-2 border-mist pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
            Рабочая группа открыта: решения принимаются консенсусом участников, а не сверху
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ================= 04 · СТОРОНА РИСКА ================= */

function S04() {
  const risks = [
    { n: "01", t: "Дипфейки и синтетические «свидетели»", d: "подделанные видео, голоса и фото ньюсмейкеров разрушают саму основу доверия к новости" },
    { n: "02", t: "Галлюцинации моделей", d: "правдоподобно сгенерированные факты, цитаты и цифры попадают в публикации без проверки" },
    { n: "03", t: "Скрытая реклама и манипуляции", d: "агентные ИИ-системы пишут «естественные» отзывы и комментарии, искажая общественное мнение" },
    { n: "04", t: "Непрозрачный контент", d: "читатель не понимает, где человек, а где машина — и перестаёт верить обоим" },
    { n: "05", t: "Авторское право и данные", d: "модели обучаются на трудах редакций и авторов — без согласия и компенсации" },
    { n: "06", t: "Эрозия профессии", d: "сокращение редакций, деградация школы журналистики, утрата редакционного контроля" },
  ];
  return (
    <div className="grid-white relative h-full overflow-hidden bg-brand text-white">
      <RaysMotif className="pointer-events-none absolute -right-2 -top-2 h-[110%] w-auto rotate-180 text-white/10" />
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker className="text-sky">04 · сторона риска</Kicker>
              <SlideTitle className="mt-3">
                Шесть точек, где <span className="text-tint2">ломается доверие</span>
              </SlideTitle>
            </div>
            <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-white/60">
              то, что комиссия видит в обращениях редакций и аудитории
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="min-h-0 flex-1">
          <div className="grid content-center gap-x-10 sm:grid-cols-2">
            {risks.map((r) => (
              <div
                key={r.n}
                className="group flex items-start gap-4 border-t border-white/20 py-3.5 transition-all duration-300 hover:translate-x-1.5 hover:bg-white/5"
              >
                <span className="font-display text-2xl font-black leading-none text-white/25 transition-colors duration-300 group-hover:text-sky md:text-3xl">
                  {r.n}
                </span>
                <div>
                  <h3 className="font-display text-sm font-extrabold uppercase leading-tight md:text-[15px]">
                    {r.t}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-white/65 transition-colors group-hover:text-white/90 md:text-[13px]">
                    {r.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={330}>
          <p className="border-t border-white/20 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-sky">
            Ни один пункт — не повод останавливать прогресс. Каждый — повод договориться о правилах
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ================= 05 · СТОРОНА ПРОГРЕССА ================= */

function S05() {
  const wins = [
    { t: "Скорость и масштаб", d: "расшифровки, переводы, первичная обработка массивов данных за минуты" },
    { t: "Фактчекинг нового уровня", d: "ИИ сверяет цитаты, даты и числа быстрее человека — и находит дипфейки" },
    { t: "Доступность", d: "субтитры, адаптация текстов, персональные форматы для разных аудиторий" },
    { t: "Журналистика данных", d: "анализ бюджетов, госзакупок и реестров, который раньше занимал месяцы" },
    { t: "Освобождение от рутины", d: "редактор возвращается к сути профессии — смыслам, проверке, ответственности" },
  ];
  return (
    <div className="grid-paper relative h-full overflow-hidden bg-white text-inkc">
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <Kicker className="text-brand">05 · сторона прогресса</Kicker>
          <SlideTitle className="mt-3">
            Что ИИ уже <span className="text-brand">даёт редакциям</span>
          </SlideTitle>
        </Reveal>

        <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal delay={150} className="min-h-0">
            <div className="flex h-full flex-col justify-center border-b-2 border-mist">
              {wins.map((w, i) => (
                <div
                  key={w.t}
                  className="group flex items-start gap-5 border-t-2 border-mist py-3.5 transition-all duration-300 hover:border-l-4 hover:border-l-sky hover:bg-tint hover:pl-4"
                >
                  <span className="pt-1 font-mono text-xs font-semibold tracking-widest text-sky">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-extrabold uppercase leading-tight md:text-base">
                      {w.t}
                    </h3>
                    <p className="mt-1 text-[13px] leading-snug text-inkc/65 md:text-sm">{w.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex h-full flex-col bg-brand p-6 text-white md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-sky">позиция комиссии</p>
              <p className="mt-4 font-display text-[clamp(1.1rem,2vw,1.5rem)] font-extrabold uppercase leading-snug">
                Задача — не запретить, а направить
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Мы не за «ИИ вместо журналиста». Мы за ИИ как инструмент сильного журналиста — с
                понятными правилами, маркировкой и ответственностью человека за публикацию.
              </p>
              <Converge className="mt-auto h-10 w-full pt-4 text-white/25" />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

/* ================= 06 · КОДЕКС ЭТИКИ ================= */

function S06() {
  const principles = [
    "Человек в центре",
    "Равные возможности",
    "Прозрачность и объяснимость",
    "Управляемость",
    "Ответственность",
    "Конфиденциальность данных",
  ];
  return (
    <div className="grid-paper relative h-full overflow-hidden bg-white text-inkc">
      <div className="relative flex h-full flex-col gap-6 px-6 py-8 md:gap-8 md:px-14 lg:px-20">
        <Reveal>
          <Kicker className="text-brand">06 · фундамент</Kicker>
          <SlideTitle className="mt-3">
            От национального кодекса — <span className="text-brand">к отраслевому</span>
          </SlideTitle>
        </Reveal>

        <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <Reveal delay={150}>
            <div className="flex h-full flex-col border border-mist bg-tint p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-steel">документ-основа</p>
              <h3 className="mt-3 font-display text-[clamp(1.2rem,2.2vw,1.7rem)] font-black uppercase leading-tight text-brand">
                Кодекс этики в сфере искусственного интеллекта
              </h3>
              <div className="mt-4 space-y-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
                <p>принят в 2021 году</p>
                <p>Альянс в сфере ИИ</p>
                <p>300+ организаций-подписантов</p>
                <p>университеты · бизнес · государство</p>
              </div>
              <div className="mt-auto pt-6">
                <CheckSq className="h-5 w-5 text-brand" />
                <p className="mt-2 text-sm font-semibold leading-snug text-inkc">
                  Университет Лобачевского — подписант и участник Комиссии по реализации Кодекса
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} className="min-h-0">
            <div className="flex h-full flex-col justify-center border-b-2 border-mist">
              {principles.map((p, i) => (
                <div
                  key={p}
                  className="group flex items-center gap-5 border-t-2 border-mist py-3 transition-all duration-300 hover:translate-x-2 hover:border-brand"
                >
                  <span className="font-display text-xl font-black text-brand/30 transition-colors group-hover:text-brand md:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[15px] font-extrabold uppercase tracking-tight md:text-lg">
                    {p}
                  </span>
                  <span className="ml-auto h-[3px] w-8 bg-sky opacity-0 transition-all duration-300 group-hover:w-16 group-hover:opacity-100" aria-hidden />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={420}>
          <p className="border-t-2 border-mist pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
            Шесть принципов — общий каркас. Медиа нужна их отраслевая детализация — этим и занимается
            рабочая группа
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export const FIRST: SlideDef[] = [
  { id: "s01", label: "Титул", theme: "blue", Comp: S01 },
  { id: "s02", label: "Почему сейчас", theme: "white", Comp: S02 },
  { id: "s03", label: "Команда задачи", theme: "white", Comp: S03 },
  { id: "s04", label: "Сторона риска", theme: "blue", Comp: S04 },
  { id: "s05", label: "Сторона прогресса", theme: "white", Comp: S05 },
  { id: "s06", label: "Кодекс этики", theme: "white", Comp: S06 },
];
