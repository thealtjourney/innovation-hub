import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Fuel-Poverty Intelligence — Innovation Hub",
  description:
    "A discovery concept: fusing IoT readings with arrears data to identify residents at risk of fuel poverty before crisis.",
};

const signals = [
  {
    name: "IoT signals",
    bullets: [
      "Indoor temperature persistently below comfort thresholds",
      "Heating on / off patterns inconsistent with outdoor weather",
      "Humidity creeping up as heating is rationed",
      "Cold-spell behaviour: how a home responds when temperatures drop",
    ],
  },
  {
    name: "Arrears & financial signals",
    bullets: [
      "Recent or growing rent arrears, especially small repeating shortfalls",
      "Universal Credit deductions, late payments, payment plan slippage",
      "Service charge or utility recharge arrears",
      "Recent change of circumstance flagged by housing officers",
    ],
  },
];

const useCases = [
  {
    title: "Earlier, kinder intervention",
    body: "Reach residents with a tenancy sustainment or money-advice conversation while it&apos;s still a nudge — not after enforcement is on the table.",
  },
  {
    title: "Targeted Household Support Fund use",
    body: "Direct discretionary funds, energy top-ups and warm-home packages to households the data shows are genuinely struggling, not just those who shout loudest.",
  },
  {
    title: "Stock prioritisation",
    body: "Identify property archetypes where fuel poverty signals cluster — and feed that evidence into retrofit and decarbonisation programmes.",
  },
  {
    title: "Health & damp prevention",
    body: "Under-heated, humid homes drive damp, mould and respiratory harm. Catching the affordability root-cause prevents the property problem downstream.",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] grid-bg" />
      <SiteHeader />

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-12 pt-12 md:pt-16">
          <Link
            href="/#discovery"
            className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-900"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Back to portfolio
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-medium text-ink-700 ring-1 ring-ink-900/10">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-300" />
              Concept · Discovery
            </span>
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">Data fusion</span>
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">Resident wellbeing</span>
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">Early intervention</span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl">
            Fuel-Poverty Intelligence
          </h1>
          <p className="mt-3 text-lg text-ink-500">
            Could we see fuel poverty coming — and act before it becomes crisis?
          </p>

          <div className="mt-8 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5 text-sm text-ink-700">
            <p className="font-medium text-ink-900">This is a discovery idea.</p>
            <p className="mt-1">
              Nothing&apos;s built yet. The page below sets out the hypothesis,
              what data we&apos;d need to combine, and the outcomes we&apos;d
              expect — as a starting point for a short discovery sprint.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative z-10 border-t border-ink-900/5">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            The problem
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Fuel poverty hides until it doesn&apos;t.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700">
            Households slipping into fuel poverty rarely tell us. By the time
            it&apos;s visible — sustained arrears, a damp-and-mould complaint,
            a health crisis, a tenancy at risk — the damage is done and the
            cost to recover is high. Two of the strongest leading indicators
            already exist inside the organisation, but they live in different
            systems and never meet: live data about how each home is being
            heated, and financial data about whether the resident can afford
            to.
          </p>
        </div>
      </section>

      {/* The hypothesis */}
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            The hypothesis
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Fuse the two and the picture sharpens.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700">
            If we combine ArchAngel&apos;s IoT readings with housing and income
            data already held by the organisation, we believe a small but
            meaningful population of residents will surface where{" "}
            <em>both</em> signals point in the same direction. That combined
            signal is far more specific than either source alone — fewer false
            positives, fewer missed cases.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {signals.map((s) => (
              <div key={s.name} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <h3 className="text-base font-semibold tracking-tight text-ink-900">{s.name}</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-300">
              The combined signal
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              <span className="font-semibold text-ink-900">Sustained under-heating</span>{" "}
              + <span className="font-semibold text-ink-900">growing or repeating arrears</span>{" "}
              + <span className="font-semibold text-ink-900">a cold spell</span>{" "}
              = a household very likely struggling to afford to heat their
              home, well before it shows up as a complaint or a missed payment
              of consequence. That&apos;s the trigger we&apos;d use to prompt
              outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            What it could unlock
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Practical applications.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <h3 className="text-base font-semibold tracking-tight text-ink-900">{u.title}</h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-ink-500"
                  dangerouslySetInnerHTML={{ __html: u.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we'd need to test it */}
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Discovery plan
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            How we&apos;d test this in 6–8 weeks.
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { t: "Frame", b: "Define the resident outcomes, success metrics and the ethical guardrails up-front, with housing, income and DPO colleagues." },
              { t: "Stitch", b: "Pilot a small, governed data join between ArchAngel sensor feeds and arrears data — on a defined subset of stock." },
              { t: "Score", b: "Develop a transparent, explainable risk score; pressure-test for bias and false-positive impact." },
              { t: "Act", b: "Run a controlled intervention with the income team and a control group, measure what changes for residents." },
            ].map((s, i) => (
              <li key={s.t} className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft">
                <span className="text-xs font-semibold text-ink-300">0{i + 1}</span>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-ink-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Considerations */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Considerations
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Things we&apos;d want to get right.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Consent and transparency", b: "Residents should understand what data is used, what triggers a contact, and how to opt out — without losing access to support." },
              { t: "A support tool, not a surveillance tool", b: "The signal exists to prompt help. Internal use, governance and access controls need to make that boundary explicit." },
              { t: "Fairness in the model", b: "Property archetype, household composition and tenure type can all skew signals. We&apos;d build explainability and bias review into the score from day one." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <h3 className="text-base font-semibold tracking-tight text-ink-900">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-20">
          <div className="overflow-hidden rounded-3xl bg-ink-900 p-10 text-white shadow-soft md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1.6fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Want to shape this discovery?
                </h2>
                <p className="mt-4 max-w-xl text-ink-300">
                  This idea needs income, housing, data and resident voice in
                  the room to be worth building. If you&apos;d sponsor or
                  contribute to a short discovery sprint, let&apos;s talk.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-900 transition hover:bg-slate-100"
                >
                  Get in touch
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
