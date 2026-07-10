import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

type App = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  external: boolean;
  status: "Live" | "Beta" | "Prototype" | "Concept";
  tags: string[];
  accent: string;
  iconPath: string;
};

const inProgress: App[] = [
  {
    name: "ArchAngel IoT",
    tagline: "Sensor-led home monitoring",
    description:
      "A property-level IoT platform monitoring temperature, humidity and air quality across the stock — surfacing damp and mould risk before it becomes a complaint, and giving asset teams a real-time picture of how homes are performing.",
    href: "/apps/archangel-iot",
    external: false,
    status: "Prototype",
    tags: ["IoT", "Damp & mould", "Resident safety"],
    accent: "from-violet-50 to-white",
    iconPath:
      "M5 12a7 7 0 0 1 14 0M8.5 12a3.5 3.5 0 0 1 7 0M12 12v9M9 21h6",
  },
];

const discovery: App[] = [
  {
    name: "Process Mapping Studio",
    tagline: "Social housing process design & documentation",
    description:
      "A lightweight studio for mapping, documenting and iterating on social housing processes — giving teams a shared, visual source of truth for how work actually flows, from repairs and lettings to income and complaints.",
    href: "https://bp-nu-wine.vercel.app/",
    external: true,
    status: "Beta",
    tags: ["Process design", "Operational excellence", "Documentation"],
    accent: "from-sky-50 to-white",
    iconPath:
      "M4 6h6v4H4V6Zm10 8h6v4h-6v-4Zm-4-4v4M7 10v4h7",
  },
  {
    name: "The Reading Room",
    tagline: "Colleague & resident book club",
    description:
      "A lightweight book-club platform — picking reads together, tracking progress, and giving colleagues and residents a regular, low-pressure way to connect across teams, schemes and lived experience.",
    href: "/book-club.html",
    external: true,
    status: "Prototype",
    tags: ["Community", "Wellbeing", "Culture"],
    accent: "from-cyan-50 to-white",
    iconPath:
      "M3 5a2 2 0 0 1 2-2h5v16H5a2 2 0 0 1-2-2V5Zm11-2h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5V3Z",
  },
  {
    name: "Social Value Tool",
    tagline: "HACT-based supplier scoring & tracking",
    description:
      "Score suppliers on the resident outcomes they deliver — then track committed versus delivered through the year with evidence attached. Ranks suppliers by social value, and shows who is actually following through on their promises.",
    href: "/social-value.html",
    external: true,
    status: "Prototype",
    tags: ["Procurement", "HACT", "Supplier accountability"],
    accent: "from-lime-50 to-white",
    iconPath:
      "M3 21h18M5 21V10m4 11V6m4 15v-9m4 9V3m4 18v-7",
  },
  {
    name: "Repairs Portal",
    tagline: "Resident repairs, joined up with the asset system",
    description:
      "A modern repairs reporting portal for residents and colleagues — built to integrate deeply with the asset management system so jobs are diagnosed, routed and prioritised against live property data, not raised in isolation.",
    href: "https://repairs-orcin.vercel.app/",
    external: true,
    status: "Beta",
    tags: ["Repairs", "Asset integration", "Resident experience"],
    accent: "from-indigo-50 to-white",
    iconPath:
      "M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4l-2.8 2.8-2.8-2.8 2.8-2.8Z",
  },
  {
    name: "Pooled",
    tagline: "Collective purchasing for residents",
    description:
      "A service helping residents pool their buying power to access better deals on everyday services — from energy and broadband to insurance and home essentials — turning individual households into a stronger collective customer.",
    href: "https://pooled-mocha.vercel.app/",
    external: true,
    status: "Beta",
    tags: ["Collective buying", "Resident value", "Cost of living"],
    accent: "from-teal-50 to-white",
    iconPath:
      "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M16 21v-1a4 4 0 0 0-2-3.46",
  },
  {
    name: "Skill Exchange",
    tagline: "Community skills exchange platform",
    description:
      "A peer-to-peer platform for residents and colleagues to share practical skills — from DIY and gardening to digital literacy and CV writing — building stronger communities around the homes we look after.",
    href: "https://skillexchange-ochre.vercel.app/",
    external: true,
    status: "Beta",
    tags: ["Community", "Resident voice", "Social value"],
    accent: "from-rose-50 to-white",
    iconPath:
      "M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 21v-1a4 4 0 0 1 4-4h3M20 3v1a4 4 0 0 1-4 4h-3",
  },
  {
    name: "Fuel-Poverty Intelligence",
    tagline: "Linking IoT signals with arrears data",
    description:
      "A concept for an early-warning view of fuel poverty — combining live IoT readings (under-heating, high humidity, cold-spell behaviour) with rent and utility arrears patterns to identify residents at risk before crisis, and target support where it lands hardest.",
    href: "/apps/fuel-poverty",
    external: false,
    status: "Concept",
    tags: ["Data fusion", "Resident wellbeing", "Early intervention"],
    accent: "from-amber-50 to-white",
    iconPath:
      "M12 2s5 5.5 5 10a5 5 0 0 1-10 0c0-1.7.8-3.4 1.8-4.7M12 14a2 2 0 0 0 2-2",
  },
  {
    name: "Charity Days",
    tagline: "Volunteer day coordination platform",
    description:
      "A streamlined portal for colleagues to find, book and track volunteering days with partner charities — turning paid charity time into measurable community impact.",
    href: "https://mhgcharitydays.vercel.app/",
    external: true,
    status: "Live",
    tags: ["Workforce", "ESG", "Internal tools"],
    accent: "from-emerald-50 to-white",
    iconPath:
      "M12 21s-6.7-4.35-9.33-8.06A5.5 5.5 0 0 1 12 6.09a5.5 5.5 0 0 1 9.33 6.85C18.7 16.65 12 21 12 21z",
  },
  {
    name: "Social Housing Digital Twin",
    tagline: "Asset intelligence & scenario modelling",
    description:
      "A geospatial digital twin of the housing portfolio — visualising stock condition, energy performance and investment scenarios to support better strategic decisions.",
    href: "https://shdt.vercel.app/",
    external: true,
    status: "Beta",
    tags: ["Digital twin", "Asset management", "Net zero"],
    accent: "from-blue-50 to-white",
    iconPath:
      "M3 7.5 12 3l9 4.5-9 4.5-9-4.5Zm0 5L12 17l9-4.5M3 17.5 12 22l9-4.5",
  },
];

const pillars = [
  {
    title: "Resident-first",
    body: "Products designed around real resident and frontline colleague needs — measured by adoption and outcomes, not features shipped.",
  },
  {
    title: "Open by default",
    body: "Built on open standards and modern web infrastructure so we can iterate quickly and share what works with the wider sector.",
  },
  {
    title: "Evidence-led",
    body: "Every initiative is paired with a clear hypothesis, measurement plan and a route to scale or sunset.",
  },
];

function statusDot(status: App["status"]) {
  switch (status) {
    case "Live":
      return "bg-accent-500";
    case "Beta":
      return "bg-amber-500";
    case "Prototype":
      return "bg-violet-500";
    case "Concept":
    default:
      return "bg-ink-300";
  }
}

function AppCard({ app }: { app: App }) {
  const host = app.external
    ? app.href.startsWith("http")
      ? new URL(app.href).host
      : "Open tool"
    : "Read the brief";
  const cta = app.external ? "Open app" : "Read more";

  const inner = (
    <>
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-ink-900 shadow-ring">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d={app.iconPath} />
          </svg>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-ink-700 ring-1 ring-ink-900/5">
          <span className={`h-1.5 w-1.5 rounded-full ${statusDot(app.status)}`} />
          {app.status}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink-900">
        {app.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-ink-500">{app.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-700">
        {app.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {app.tags.map((t) => (
          <span key={t} className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-medium text-ink-500 ring-1 ring-ink-900/5">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-between">
        <span className="truncate text-xs text-ink-500">{host}</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-900">
          {cta}
          <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </>
  );

  const className = `group relative flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-gradient-to-br ${app.accent} p-7 shadow-soft transition hover:-translate-y-0.5 hover:border-ink-900/20 hover:shadow-lg`;

  return app.external ? (
    <a href={app.href} target="_blank" rel="noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <Link href={app.href} className={className}>
      {inner}
    </Link>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] grid-bg" />

      <SiteHeader />

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-3 py-1 text-xs font-medium text-ink-500 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Social housing · ICT innovation portfolio
          </div>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-ink-900 md:text-6xl">
            Building modern digital products for social housing.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-ink-500">
            A working portfolio of applications, prototypes and experiments —
            exploring how better tools can improve the experience of residents,
            colleagues and the homes we look after.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#in-progress"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition hover:bg-ink-700"
            >
              View the portfolio
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#approach"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-white px-5 py-2.5 text-sm font-medium text-ink-700 shadow-soft transition hover:border-ink-900/20"
            >
              Our approach
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 shadow-soft sm:grid-cols-4">
            {[
              { k: `${inProgress.length}`, v: "In progress" },
              { k: `${discovery.length}`, v: "In discovery" },
              { k: "Open", v: "Source ethos" },
              { k: "Cloud", v: "First infrastructure" },
            ].map((s) => (
              <div key={s.v} className="bg-white p-5">
                <dt className="text-2xl font-semibold tracking-tight text-ink-900">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-ink-500">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* In Progress */}
      <section id="in-progress" className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                In progress
              </p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
                Applications being built and operated.
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-500">
              Products that are live, in beta or actively in prototype with
              colleagues and residents.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inProgress.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Discovery */}
      <section id="discovery" className="relative z-10 border-t border-ink-900/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                Discovery
              </p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
                Ideas being explored.
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-500">
              Concepts and hypotheses we&apos;re framing before any build —
              testing whether the problem is worth solving and what the right
              shape of solution looks like.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {discovery.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}

            <div className="relative flex flex-col items-start justify-center rounded-2xl border border-dashed border-ink-900/15 bg-white/50 p-7 text-ink-500">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">
                Add your idea
              </span>
              <p className="mt-2 max-w-xl text-sm">
                Got a problem worth exploring? Discovery work starts with a
                short hypothesis and a route to validation.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900"
              >
                Get in touch
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Approach
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            How we work.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-500">
            Three principles guide what gets built, how it ships, and how we
            measure whether it&apos;s working.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-ink-900/10 bg-white p-7 shadow-soft"
              >
                <span className="text-xs font-semibold text-ink-300">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20">
          <div className="overflow-hidden rounded-3xl bg-ink-900 p-10 text-white shadow-soft md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.6fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Got an idea we should explore?
                </h2>
                <p className="mt-4 max-w-xl text-ink-300">
                  The hub exists to give good ideas a route to prototype, test
                  and scale. If you work in the sector and want to collaborate,
                  reach out.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-900 transition hover:bg-slate-100"
                >
                  Get in touch
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <span className="text-xs text-ink-300">
                  Responses typically within a working week.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
