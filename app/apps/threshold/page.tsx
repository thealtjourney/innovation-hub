import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Threshold — Innovation Hub",
  description:
    "A tenancy sustainment early-warning model — interpretable by construction, built for the DPIA as well as the housing officer.",
};

const signals = [
  {
    tier: "Tier 1 — Operational",
    subtitle: "Data already held for tenancy management",
    items: [
      "Arrears balance and 8-week velocity",
      "Payment pattern breaks (missed DD, standing order stops)",
      "Payment plan in place & adherence",
      "Unresolved and repeat repairs",
      "ASB — as complainant and as subject",
      "Contact attempts unanswered / inbound resident contact",
      "Tenancy age under 12 months",
    ],
  },
  {
    tier: "Tier 2 — Wider determinants",
    subtitle: "Derived / administrative; area-level where possible",
    items: [
      "UC migration in last 90 days",
      "Housing element suspension or change",
      "Benefit cap or deduction applied",
      "Fuel-poverty proxy (EPC + property type + tenure)",
      "Area deprivation decile — context only, never an individual signal",
    ],
  },
  {
    tier: "Tier 3 — Sensitive (off by default)",
    subtitle: "Special category / Article 9 — requires named justification + DPO approval",
    items: [
      "Vulnerability register entry",
      "Safeguarding flag",
      "Hospital discharge notification",
    ],
  },
];

const principles = [
  {
    t: "No score without a story",
    b: "The top three drivers appear on every list row. The full contribution breakdown is one click away — and the contributions sum to the score, on screen, always.",
  },
  {
    t: "Change, not level",
    b: "Early warning is a derivative problem. Every flag carries a 'Why now' line: what moved since the last run, and by how much.",
  },
  {
    t: "Model the decision, not the risk",
    b: "Each flag terminates in a suggested action drawn from a defined intervention library, matched to the dominant signal cluster — with the observed effect of that action in similar past cases.",
  },
  {
    t: "Honest uncertainty",
    b: "A fourth RAG state — Grey — for households the model should not judge. Confidence intervals are shown, not hidden.",
  },
  {
    t: "Right to be forgotten by design",
    b: "Signals expire. Arrears from 2021 do not haunt a 2026 score. Every signal has a stated decay window.",
  },
  {
    t: "Contestable and auditable",
    b: "Every flag has a plain-English, resident-facing version generated at the same moment as the officer version. Every action — raised, viewed, actioned, overridden, expired — is immutable and queryable.",
  },
];

const bands = [
  { c: "bg-red-500", n: "Red", d: "≥ 60% — act this week" },
  { c: "bg-orange-500", n: "Amber", d: "30–59% — act this month" },
  { c: "bg-yellow-400", n: "Watch", d: "15–29% and rising — direction matters" },
  { c: "bg-emerald-500", n: "Green", d: "< 15% or falling" },
  { c: "bg-slate-300", n: "Grey", d: "Insufficient signal — the model abstains and says so" },
];

const interventions = [
  { c: "Arrears velocity + benefit change", a: "Income maximisation referral before any recovery contact" },
  { c: "Arrears + no engagement", a: "Doorstep welfare visit, not a letter" },
  { c: "Repairs + damp + complaint", a: "Property inspection + officer callback (Awaab clock shown)" },
  { c: "ASB as complainant + disengagement", a: "Welfare check + ASB case review" },
  { c: "New tenancy + payment break", a: "Tenancy-support call in first 6 weeks" },
  { c: "Block cluster", a: "Escalate to asset/estate action — one survey, not N visits" },
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
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              Prototype · Discovery
            </span>
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">Early warning</span>
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">Explainable model</span>
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">Tenancy sustainment</span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl">
            Threshold
          </h1>
          <p className="mt-3 text-lg text-ink-500">
            Predicting tenancy failure early — with an explanation an officer
            can argue with and a DPO can sign off.
          </p>

          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-ink-700">
            Threshold is an early-warning view of households at risk of losing
            their tenancy, built from data social housing organisations already
            hold. It flags cases early enough to do something about them — and
            shows exactly why they were flagged, so the score is never the
            product. The <em>explanation</em> is.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/threshold.html"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition hover:bg-ink-700"
            >
              Open the prototype
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
            <a
              href="#signals"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-white px-5 py-2.5 text-sm font-medium text-ink-700 shadow-soft transition hover:border-ink-900/20"
            >
              See the signal model
            </a>
          </div>
        </div>
      </section>

      {/* Why interpretability */}
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Why interpretability is the architecture
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            The blocker isn&apos;t accuracy. It&apos;s explanation.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700">
            A Data Protection Officer cannot sign a DPIA for a system that
            flags a household and can&apos;t say why. A housing officer will
            not act on a number they can&apos;t argue with. Threshold uses an{" "}
            <span className="font-semibold text-ink-900">
              additive risk model
            </span>{" "}
            — logistic / GAM-style, with monotonic constraints — so every
            signal&apos;s contribution is exact arithmetic, not a post-hoc
            approximation. In a DPIA, &quot;we can approximate why&quot; and
            &quot;this is why, and the numbers add up in front of you&quot; are
            different conversations.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {principles.slice(0, 3).map((p) => (
              <div key={p.t} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <h3 className="text-base font-semibold tracking-tight text-ink-900">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {principles.slice(3).map((p) => (
              <div key={p.t} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <h3 className="text-base font-semibold tracking-tight text-ink-900">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bands */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            RAG bands
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Direction is part of the band.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-ink-500">
            A household at 25% risk and <em>falling</em> is a different case
            from one at 25% and <em>rising</em>. The band reflects that.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
            {bands.map((b) => (
              <div key={b.n} className="flex items-start gap-4 border-b border-ink-900/5 p-5 last:border-b-0">
                <span className={`mt-1 h-3 w-3 flex-none rounded-full ${b.c}`} />
                <div>
                  <p className="text-sm font-semibold text-ink-900">{b.n}</p>
                  <p className="text-sm text-ink-500">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-ink-500">
            Where four or more signals are active, <span className="font-medium text-ink-700">no single signal may contribute more than 35% of total positive risk</span>.
            The cap prevents &quot;this is just an arrears report with extra steps.&quot; Raw and capped contributions are both shown.
          </p>
        </div>
      </section>

      {/* Signal model */}
      <section id="signals" className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Signal model
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Signals tiered by intrusiveness.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-ink-500">
            The tier is visible in the UI — the proportionality argument made
            legible. Tier 3 signals are off by default and gated behind a
            named justification.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {signals.map((s) => (
              <div key={s.tier} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <h3 className="text-base font-semibold tracking-tight text-ink-900">{s.tier}</h3>
                <p className="mt-1 text-xs text-ink-500">{s.subtitle}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-700">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-300">
              The sleeper feature
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              <span className="font-semibold text-ink-900">Block-level clustering.</span>{" "}
              When five flags appear in one block, the correct intervention is
              a survey or a heating system — not five officer visits. A model
              that only sees individuals will recommend five visits. Threshold
              escalates the pattern.
            </p>
          </div>
        </div>
      </section>

      {/* Interventions */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Intervention library
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Same score, different cause, different action.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-ink-500">
            Actions are matched to the dominant signal cluster, not the score
            — with the observed effect of that action in similar past cases.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
            {interventions.map((i) => (
              <div key={i.c} className="grid gap-2 border-b border-ink-900/5 p-5 last:border-b-0 md:grid-cols-[1fr_1.4fr] md:gap-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-300">Cluster</p>
                  <p className="mt-1 text-sm font-medium text-ink-900">{i.c}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-300">Suggested action</p>
                  <p className="mt-1 text-sm text-ink-700">{i.a}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-ink-500">
            Each action card offers <span className="font-medium text-ink-700">Accept</span>,{" "}
            <span className="font-medium text-ink-700">Modify</span>, or{" "}
            <span className="font-medium text-ink-700">Reject with reason</span>.
            Rejections are a fixed taxonomy plus free text — they feed both model
            review and the DPIA&apos;s &quot;human oversight is meaningful&quot; evidence.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-4">
          <div className="overflow-hidden rounded-3xl bg-ink-900 p-10 text-white shadow-soft md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1.6fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  See it running.
                </h2>
                <p className="mt-4 max-w-xl text-ink-300">
                  The prototype is a self-contained page showing the dashboard,
                  a household deep-dive with contribution breakdown, and the
                  intervention flow. Built on ~85 synthetic tenancies, but the
                  arithmetic and screens are the real thing.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <a
                  href="/threshold.html"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-900 transition hover:bg-slate-100"
                >
                  Open the prototype
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
                <Link
                  href="/#contact"
                  className="text-xs text-ink-300 underline-offset-2 hover:text-white hover:underline"
                >
                  Or get in touch to walk through it
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
