import Link from "next/link";

const apps = [
  {
    name: "Charity Days",
    tagline: "Volunteer day coordination platform",
    description:
      "A streamlined portal for colleagues to find, book and track volunteering days with partner charities — turning paid charity time into measurable community impact.",
    href: "https://mhgcharitydays.vercel.app/",
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

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] grid-bg" />

      {/* Header */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink-900 text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12 12 3l9 9" />
                <path d="M5 10v10h14V10" />
              </svg>
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              Innovation Hub
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-ink-500 md:flex">
            <a href="#portfolio" className="hover:text-ink-900">Portfolio</a>
            <a href="#approach" className="hover:text-ink-900">Approach</a>
            <a href="#contact" className="hover:text-ink-900">Contact</a>
          </nav>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-ink-700"
          >
            Explore portfolio
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </header>

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
              href="#portfolio"
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

          {/* Stats strip */}
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 shadow-soft sm:grid-cols-4">
            {[
              { k: "2", v: "Live products" },
              { k: "100%", v: "Web-native" },
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

      {/* Portfolio */}
      <section id="portfolio" className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                Portfolio
              </p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
                Applications in production
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-500">
              Each product is built and operated in the open. Click through to
              the live application.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {apps.map((app) => (
              <a
                key={app.name}
                href={app.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-gradient-to-br ${app.accent} p-7 shadow-soft transition hover:-translate-y-0.5 hover:border-ink-900/20 hover:shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-ink-900 shadow-ring">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={app.iconPath} />
                    </svg>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-ink-700 ring-1 ring-ink-900/5">
                    <span className={`h-1.5 w-1.5 rounded-full ${app.status === "Live" ? "bg-accent-500" : "bg-amber-500"}`} />
                    {app.status}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink-900">
                  {app.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-500">
                  {app.tagline}
                </p>
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
                  <span className="truncate text-xs text-ink-500">
                    {new URL(app.href).host}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-900">
                    Open app
                    <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}

            {/* Coming soon placeholder */}
            <div className="relative flex flex-col items-start justify-center rounded-2xl border border-dashed border-ink-900/15 bg-white/50 p-7 text-ink-500 md:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-300">
                In the pipeline
              </span>
              <p className="mt-2 max-w-xl text-sm">
                New experiments are added as they reach prototype stage. If you
                have an idea worth exploring, get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="relative z-10">
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
        <div className="mx-auto max-w-6xl px-6 pb-24">
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

      {/* Footer */}
      <footer className="relative z-10 border-t border-ink-900/5">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-ink-500 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-ink-900 text-white">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12 12 3l9 9" />
                <path d="M5 10v10h14V10" />
              </svg>
            </span>
            <span>Innovation Hub · {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#portfolio" className="hover:text-ink-900">Portfolio</a>
            <a href="#approach" className="hover:text-ink-900">Approach</a>
            <a href="#contact" className="hover:text-ink-900">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
