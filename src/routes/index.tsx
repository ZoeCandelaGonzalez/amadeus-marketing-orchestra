import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const TITLE = "Amadeus | Agencia de marketing digital: marca, comunidad, pauta y CRM";
const DESC =
  "Amadeus junta marca, comunidad, pauta y CRM con agentes de IA para WhatsApp en un solo equipo, con un solo plan y un solo reporte. Todo el marketing, a una sola voz.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_AR" },
      { property: "og:site_name", content: "Amadeus" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Index,
});

const WA_NUMBER = "https://api.whatsapp.com/send?phone=543764210094&text=Hola!%20Quiero%20automatizar%20mi%20negocio";
const LINKEDIN = "https://www.linkedin.com/company/amadeus-marketing";
const IG = "https://instagram.com/amadeus.ti";
const WA = "https://api.whatsapp.com/send?phone=543764210094&text=Hola!%20Quiero%20automatizar%20mi%20negocio";
const display = "font-[family-name:var(--font-display)]";

function Dots({ className = "", accent = 2 }: { className?: string; accent?: number }) {
  return (
    <span className={`typing inline-flex items-end gap-[0.18em] ${className}`} aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-[0.22em] w-[0.22em] rounded-full ${i === accent ? "bg-verdigris" : "bg-current"}`}
        />
      ))}
    </span>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${display} text-xl font-extrabold ${light ? "text-tiza" : "text-borgona"}`} aria-label="Amadeus, inicio">
      <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden>
        <rect width="64" height="64" rx="14" fill="var(--borgona)" />
        <circle cx="18" cy="40" r="6" fill="var(--tiza)" />
        <circle cx="32" cy="32" r="6" fill="var(--tiza)" />
        <circle cx="46" cy="24" r="6" fill="var(--verdigris)" />
      </svg>
      amadeus
    </a>
  );
}



function Btn({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" | "light" }) {
  const v = {
    primary: "bg-borgona text-tiza hover:bg-grafito",
    ghost: "border-2 border-grafito text-grafito hover:bg-grafito hover:text-tiza",
    light: "bg-tiza text-grafito hover:bg-peonia",
  }[variant];
  const ext = href.startsWith("http");
  return (
    <a href={href} {...(ext ? { target: "_blank", rel: "noopener" } : {})} className={`bubble inline-flex items-center justify-center px-6 py-3.5 ${display} font-bold transition-colors ${v}`}>
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Servicios", "#servicios"], ["Agentes de IA", "#agentes"], ["Método", "#metodo"], ["Preguntas", "#preguntas"], ["Contacto", "#contacto"]];
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-grafito/10 bg-tiza/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Logo />
        <nav className={`${display} hidden items-center gap-6 text-sm font-semibold lg:flex`}>
          {links.map(([l, h]) => <a key={h} href={h} className="hover:text-borgona">{l}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={WA} target="_blank" rel="noopener" className={`bubble hidden bg-borgona px-4 py-2 text-sm ${display} font-bold text-tiza sm:inline-flex`}>Pedí tu diagnóstico</a>
          <button onClick={() => setOpen(!open)} className={`${display} px-2 py-1 font-bold lg:hidden`} aria-expanded={open} aria-label="Menú">{open ? "cerrar" : "menú"}</button>
        </div>
      </div>
      {open && (
        <nav className={`${display} flex flex-col gap-1 border-t border-grafito/10 px-5 pb-5 pt-2 text-lg font-bold lg:hidden`}>
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-2">{l}</a>)}
          <a href={WA} target="_blank" rel="noopener" className="bubble mt-2 bg-borgona px-5 py-3 text-center text-tiza">Pedí tu diagnóstico</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-32 sm:pt-40">
  
      <div className="mx-auto max-w-6xl">
        <p className={`${display} mb-6 text-sm font-semibold text-borgona`}>@amadeus.ti · agencia de marketing digital</p>
        <h1 className={`${display} max-w-5xl text-[3.2rem] font-extrabold leading-[0.95] tracking-tight text-grafito sm:text-7xl lg:text-[7rem]`}>
          Todo el marketing, a una sola voz<span className="text-borgona">.</span> <Dots className="ml-1 text-borgona" />
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div className="hidden md:block" />
          <div>
            <p className="text-xl leading-relaxed sm:text-2xl">
              Somos Amadeus, una agencia de marketing digital que reúne estrategia, contenido, publicidad y CRM en un mismo equipo, para que tengas todo centralizado y puedas ver los resultados en un solo lugar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Btn href={WA}>Pedí tu diagnóstico</Btn>
              <Btn href="#servicios" variant="ghost">Ver qué hacemos</Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const AREAS = [
  { name: "Marca", tag: "la partitura", cls: "bg-borgona text-tiza", dot: "bg-borgona", items: ["Naming", "Identidad visual", "Manual de marca", "Papelería", "Packaging", "Sitio web"], start: 0 },
  { name: "Comunidad", tag: "la voz", cls: "bg-peonia text-grafito", dot: "bg-peonia", items: ["Estrategia y calendario de contenido", "Diseño de piezas", "Reels y carruseles", "Gestión de comentarios y mensajes"], start: 2 },
  { name: "Pauta", tag: "el volumen", cls: "bg-verdigris text-grafito", dot: "bg-verdigris", items: ["Campañas en Meta, Google y TikTok", "Creatividades", "Seguimiento de conversiones", "Optimización semanal del gasto"], start: 4 },
  { name: "CRM e Ia", tag: "la memoria", cls: "border-2 border-tiza/20 bg-tiza/5 text-tiza", dot: "bg-tiza", items: ["Embudos y etiquetas", "Integración con WhatsApp Business", "Formularios y landing pages", "Automatizaciones y reportes"], start: 1 },
];

function Voices() {
  const cols = 10, sync = 7;
  return (
    <section id="servicios" className="bg-grafito px-5 py-24 text-tiza">
      <div className="mx-auto max-w-6xl">
        <p className={`${display} text-sm font-semibold text-peonia`}>servicios</p>
        <h2 className={`${display} mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl`}>Las cuatro voces.</h2>
        <p className="mt-4 max-w-xl text-lg text-tiza/80">Cada área entra en su momento. Todas coinciden en el mismo compás.</p>

        <div className="relative mt-12 space-y-5 rounded-3xl border border-tiza/15 p-5 sm:p-8" role="img" aria-label="Cuatro filas de puntos que empiezan en distintos momentos y coinciden en una misma línea">
          <div className="absolute bottom-4 top-4 w-0 border-l-2 border-dashed border-verdigris" style={{ left: `calc(6.5rem + (100% - 8.5rem) * ${(sync + 0.5) / cols})` }} />
          {AREAS.map((a, r) => (
            <div key={a.name} className="grid grid-cols-[5.5rem_1fr] items-center gap-4">
              <span className={`${display} text-sm font-bold`}>{a.name}</span>
              <div className="grid" style={{ gridTemplateColumns: `repeat(${cols},1fr)` }}>
                {Array.from({ length: cols }).map((_, c) => (
                  <span key={c} className="flex justify-center">
                    {c >= a.start && (
                      <span
                        className={`voice-dot block h-3 w-3 rounded-full sm:h-4 sm:w-4 ${c === sync ? "bg-verdigris" : "bg-tiza/70"}`}
                        style={{ animationDelay: `${c * 120 + r * 60}ms` }}
                      />
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {AREAS.map((a, i) => (
            <article key={a.name} className={`${a.cls} ${i % 2 ? "bubble-r md:mt-12" : "bubble"} p-7 sm:p-9`}>
              <p className={`${display} text-sm font-semibold opacity-80`}>{a.tag}</p>
              <h3 className={`${display} mt-1 text-4xl font-extrabold`}>{a.name}</h3>
              <ul className="mt-5 space-y-2 text-lg">
                {a.items.map((it) => (
                  <li key={it} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type Msg = { from: "c" | "a"; text: string };
const DEMOS: Record<string, Msg[]> = {
  Inmobiliaria: [
    { from: "c", text: "hola, tienen deptos de 2 dormitorios?" },
    { from: "a", text: "Hola. Sí, tenemos varios." },
    { from: "a", text: "¿Lo buscás para vivir o para invertir?" },
    { from: "c", text: "para vivir" },
    { from: "a", text: "Genial. ¿En qué zona te gustaría?" },
    { from: "c", text: "palermo o colegiales" },
    { from: "a", text: "Perfecto. Te paso con Laura del equipo, que ya tiene tu consulta resumida." },
  ],
  Verdulería: [
    { from: "c", text: "buenas! hacen envíos?" },
    { from: "a", text: "Hola. Sí, hacemos envíos." },
    { from: "a", text: "¿A qué barrio sería?" },
    { from: "c", text: "villa crespo" },
    { from: "a", text: "Llegamos. ¿Querés armar el pedido por acá o preferís la lista de precios?" },
    { from: "c", text: "la lista porfa" },
    { from: "a", text: "Listo, te la mando. Si querés cambiar algo, te atiende alguien del local." },
  ],
  Consultorio: [
    { from: "c", text: "hola quería sacar turno" },
    { from: "a", text: "Hola. Te ayudo con eso." },
    { from: "a", text: "¿Es tu primera consulta con nosotros?" },
    { from: "c", text: "sí" },
    { from: "a", text: "Bien. ¿Tenés obra social o es particular?" },
    { from: "c", text: "obra social" },
    { from: "a", text: "Gracias. Le paso tus datos a la secretaria para confirmarte el día y horario." },
  ],
};

function Demo() {
  const tabs = Object.keys(DEMOS);
  const [tab, setTab] = useState<string>(tabs[0] ?? "Inmobiliaria");
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [run, setRun] = useState(0);
  const msgs: Msg[] = DEMOS[tab] ?? [];

  useEffect(() => {
    setShown(0);
    let cancelled = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown(msgs.length); return; }
    const timers: number[] = [];
    let t = 400;
    msgs.forEach((m, i) => {
      if (m.from === "a") {
        timers.push(window.setTimeout(() => !cancelled && setTyping(true), t));
        t += 1100;
      }
      timers.push(window.setTimeout(() => { if (!cancelled) { setTyping(false); setShown(i + 1); } }, t));
      t += m.from === "c" ? 900 : 500;
    });
    return () => { cancelled = true; timers.forEach(clearTimeout); setTyping(false); };
  }, [tab, run, msgs]);

  return (
    <div className="bubble overflow-hidden bg-tiza text-grafito">
      <div role="tablist" className={`${display} flex border-b border-grafito/15 text-sm font-bold`}>
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={t === tab} onClick={() => setTab(t)} className={`flex-1 px-2 py-3 ${t === tab ? "bg-grafito text-tiza" : "hover:bg-peonia/50"}`}>{t}</button>
        ))}
      </div>
      <div className="flex min-h-[26rem] flex-col gap-2 bg-peonia/30 p-4" aria-live="polite">
        {msgs.slice(0, shown).map((m, i) => (
          <p key={i} className={`max-w-[80%] px-4 py-2.5 text-base ${m.from === "c" ? "bubble-r self-end bg-grafito text-tiza" : "bubble self-start bg-tiza"}`}>{m.text}</p>
        ))}
        {typing && <span className="bubble self-start bg-tiza px-4 py-3 text-2xl text-grafito"><Dots /></span>}
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <span className="text-sm">Conversación de ejemplo</span>
        <button onClick={() => setRun((r) => r + 1)} className={`${display} bubble bg-borgona px-4 py-2 text-sm font-bold text-tiza`}>Repetir</button>
      </div>
    </div>
  );
}

function Agents() {
  const points = [
    "Responden las 24 horas.",
    "Califican con preguntas de a una: por ejemplo zona, presupuesto y plazo, según el negocio.",
    "Derivan a una persona del equipo con el chat resumido.",
    "Se pausan cuando una persona toma la conversación.",
    "Etiquetan cada contacto en un embudo.",
  ];
  return (
    <section id="agentes" className="bg-borgona px-5 py-24 text-tiza">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div>
          <p className={`${display} text-sm font-semibold text-peonia`}>agentes de IA para WhatsApp</p>
          <h2 className={`${display} mt-3 text-4xl font-extrabold leading-tight sm:text-6xl`}>Agentes de IA que atienden, califican y derivan.</h2>
          <ol className="mt-10 space-y-5">
            {points.map((p, i) => (
              <li key={p} className="grid grid-cols-[2.5rem_1fr] gap-3 text-lg">
                <span className={`${display} font-extrabold text-peonia`}>0{i + 1}</span>{p}
              </li>
            ))}
          </ol>
          <p className="bubble mt-10 inline-block bg-peonia px-5 py-3 text-grafito">Si alguien pregunta, el agente dice que es un asistente.</p>
        </div>
        <Demo />
      </div>
    </section>
  );
}

function OneTeam() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className={`${display} max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl`}>Por qué un solo equipo.</h2>
        <p className="mt-4 max-w-xl text-lg">Una orquesta suena bien cuando todos leen la misma partitura.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="bubble border-2 border-grafito/20 p-8">
            <h3 className={`${display} text-2xl font-bold`}>Con proveedores sueltos</h3>
            <ul className="mt-6 space-y-4 text-lg">
              {["Cuatro mensajes distintos.", "Reportes que no se hablan.", "Pauta sin CRM que mida ventas."].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full border-2 border-borgona" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="bubble-r bg-grafito p-8 text-tiza md:-mt-6">
            <h3 className={`${display} text-2xl font-bold`}>Con Amadeus</h3>
            <ul className="mt-6 space-y-4 text-lg">
              {["Un plan.", "Un mensaje en todos los canales.", "Un solo reporte mensual."].map((t, i) => (
                <li key={t} className="flex gap-3"><span className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${i === 2 ? "bg-verdigris" : "bg-tiza"}`} />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [["Escuchar", "Brief y auditoría."], ["Componer", "Estrategia y plan."], ["Ensayar", "Producción y pruebas."], ["Tocar", "Lanzamiento coordinado."], ["Afinar", "Revisión y ajustes mensuales."]];
  return (
    <section id="metodo" className="bg-grafito px-5 py-24 text-tiza">
      <div className="mx-auto max-w-6xl">
        <p className={`${display} text-sm font-semibold text-peonia`}>método</p>
        <h2 className={`${display} mt-3 text-4xl font-extrabold sm:text-6xl`}>Cinco pasos, un compás.</h2>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([t, d], i) => (
            <li key={t} className={`border-t-2 pt-5 ${i === 4 ? "border-verdigris" : "border-tiza/30"} ${i % 2 ? "lg:mt-10" : ""}`}>
              <span className={`${display} text-5xl font-extrabold text-peonia`}>{i + 1}</span>
              <h3 className={`${display} mt-3 text-2xl font-bold`}>{t}</h3>
              <p className="mt-1 text-lg text-tiza/80">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Report() {
  const cards = [
    { k: "Inversión en pauta", v: "$ 850.000", d: "+4%", good: null },
    { k: "Consultas recibidas", v: "312", d: "+18%", good: true },
    { k: "Costo por consulta", v: "$ 2.724", d: "−12%", good: true },
    { k: "Ventas cerradas", v: "27", d: "−3%", good: false },
  ];
  const bars = [42, 55, 48, 63, 70, 58, 76, 84];
  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <h2 className={`${display} text-4xl font-extrabold leading-tight sm:text-6xl`}>Un solo reporte.</h2>
          <p className="mt-4 text-lg">Marca, comunidad, pauta y CRM en la misma página, todos los meses. Lo que mejora y lo que no, sin vueltas.</p>
        </div>
        <div className="bubble-r relative bg-tiza p-5 shadow-[0_0_0_2px_var(--grafito)] sm:p-7">
          <span className={`${display} absolute -top-4 right-6 rotate-3 rounded-lg border-4 border-tiza bg-peonia px-3 py-1 text-sm font-bold text-grafito`}>Datos de ejemplo</span>
          <div className="grid grid-cols-2 gap-3">
            {cards.map((c) => (
              <div key={c.k} className="rounded-2xl bg-grafito/5 p-4">
                <p className="text-sm">{c.k}</p>
                <p className={`${display} mt-1 text-2xl font-extrabold`}>{c.v}</p>
                <p className={`${display} text-sm font-bold ${c.good === null ? "text-grafito/70" : c.good ? "text-[color-mix(in_oklab,var(--verdigris)_70%,var(--grafito))]" : "text-borgona"}`}>{c.d} vs. mes anterior</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex h-40 items-end gap-2" role="img" aria-label="Gráfico de barras de consultas por semana, datos de ejemplo">
            {bars.map((b, i) => (
              <div key={i} className={`flex-1 rounded-t-md ${i > 0 && b < (bars[i - 1] ?? 0) ? "bg-borgona" : "bg-verdigris"}`} style={{ height: `${b}%` }} />
            ))}
          </div>
          <p className="mt-2 text-sm">Consultas por semana</p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    ["¿Tengo que contratar las cuatro áreas?", "No, se pueden contratar por separado, pero rinden más juntas."],
    ["¿La inversión publicitaria está incluida?", "No, se paga directo a la plataforma desde tu cuenta, aparte de los honorarios."],
    ["¿Los agentes de IA suenan a robots?", "Se diseñan con el tono de tu negocio, en mensajes cortos y con pausas, y siempre aclaran que son un asistente si se les pregunta."],
    ["¿Cuánto tarda en estar listo?", "Depende del área. Te lo confirmamos en el diagnóstico."],
  ];
  return (
    <section id="preguntas" className="bg-peonia px-5 py-24 text-grafito">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.6fr]">
        <h2 className={`${display} text-4xl font-extrabold leading-tight sm:text-6xl`}>Preguntas frecuentes.</h2>
        <div className="space-y-3">
          {qs.map(([q, a]) => (
            <details key={q} className="bubble group bg-tiza p-5 open:bg-tiza">
              <summary className={`${display} flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold`}>
                {q}<span className="shrink-0 text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-lg">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-borgona px-5 py-24 text-tiza">
    
      <div className="mx-auto max-w-6xl">
        <h2 className={`${display} max-w-4xl text-5xl font-extrabold leading-[0.95] sm:text-7xl`}>Contanos de tu negocio<span className="text-peonia">.</span></h2>
        <p className="mt-5 max-w-xl text-xl">Arrancamos con un diagnóstico: vemos dónde estás y qué voz te falta.</p>
        <a href={WA} target="_blank" rel="noopener" className={`bubble mt-10 inline-flex bg-tiza px-8 py-5 ${display} text-xl font-extrabold text-grafito hover:bg-peonia sm:text-2xl`}>Escribinos por WhatsApp</a>
        <ul className={`${display} mt-12 grid gap-4 font-semibold sm:grid-cols-3`}>
          <li><a href={IG} target="_blank" rel="noopener" className="underline underline-offset-4">Instagram · @amadeus.ti</a></li>
          <li><a href={LINKEDIN} target="_blank" rel="noopener" className="underline underline-offset-4">LinkedIn</a></li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-grafito px-5 py-12 text-tiza">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo light />
          <p className="mt-3 text-lg">Todo el marketing, a una sola voz.</p>
        </div>
        <div className={`${display} flex flex-wrap gap-5 text-sm font-semibold`}>
          <a href={IG} target="_blank" rel="noopener">Instagram</a>
          <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a>
          <span className="text-tiza/70">© Amadeus</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWA() {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=543764210094&text=Hola!%20Quiero%20automatizar%20mi%20negocio";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="bubble-r fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center bg-verdigris text-grafito shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2z" />
      </svg>
    </a>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Voices />
        <Agents />
        <OneTeam />
        <Method />
        {/* <Report /> */}
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
