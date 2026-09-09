import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Threshold — Innovation Hub",
  description:
    "Housing foresight — early warning for social housing. One view of what could go wrong, two workspaces to do something about it.",
};

const workspaces = [
  {
    label: "01 · People",
    heading: "Tenancy sustainment",
    strap: "A stable home starts with support.",
    body:
      "Spot the changes that put a tenancy at risk. Understand the evidence, prioritise contact, and track whether support made a difference.",
    features: ["Early warning", "Officer caseload", "Outcomes & assurance"],
    tint: "bg-ink-900",
    fg: "text-white",
    sub: "text-white/70",
    chip: "border-white/30 text-white",
    tag: "bg-white/10 text-white/80",
  },
  {
    label: "02 · Property",
    heading: "Repairs intelligence",
    strap: "Look ahead. Get there before failure.",
    body:
      "Find ageing components, unseen condition gaps and emerging hazards. Turn limited survey capacity into a programme of useful visits.",
    features: ["Component outlook", "Survey programme", "Hazards & demand"],
    tint: "bg-lime-200",
    fg: "text-emerald-900",
    sub: "text-emerald-900/80",
    chip: "border-emerald-900/40 text-emerald-900",
    tag: "bg-emerald-900/10 text-emerald-900/80",
  },
];

const journey = [
  { t: "Notice", b: "Signals move — arrears velocity, missed contacts, ageing components, evidence gaps. Threshold picks them up as they change, not months later." },
  { t: "Understand", b: "Every flag arrives pre-assembled as signals → contribution → what changed. The score is the least interesting thing on the screen." },
  { t: "Act", b: "Each flag terminates in a suggested action drawn from a defined intervention library, matched to the dominant signal cluster." },
  { t: "Learn", b: "Rejections are training data and audit evidence simultaneously. The library gets better as officers use it." },
];

const principles = [
  { t: "No score without a story", b: "The top three drivers appear on every list row. The full contribution breakdown is one click away — and the contributions sum to the score, on screen, always." },
  { t: "Change, not level", b: "Early warning is a derivative problem. Every flag carries a 'Why now' line: what moved since the last run, and by how much." },
  { t: "Model the decision, not the risk", b: "Each flag ends in a suggested action with the observed effect of that action in similar past cases — not a number with no next step." },
  { t: "Honest uncertainty", b: "A fourth RAG state — Grey — for households the model should not judge. Confidence intervals are shown, not hidden." },
  { t: "Right to be forgotten by design", b: "Signals expire. Arrears from 2021 do not haunt a 2026 score. Every signal has a stated decay window." },
  { t: "Contestable and auditable", b: "Every flag has a plain-English, resident-facing version. Every action — raised, viewed, actioned, overridden, expired — is immutable and queryable." },
];

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

const repairsAngles = [
  { t: "Component outlook", b: "Age and condition evidence rolled up per home and per component — with a clear signal when estimates are ≥30% and it's time to inspect." },
  { t: "Survey programme", b: "Turn limited survey capacity into a programme of useful visits — homes with evidence gaps, high hazard priorities, or no recent repairs surface first." },
  { t: "Hazards & actions", b: "HHSRS-shaped hazard priorities kept separate from component failure and cost. Review priorities aren't confirmed hazards until an officer says so." },
  { t: "Demand forecast", b: "A 12-month planning estimate — expected responsive spend, homes with silent condition, components trending towards failure." },
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
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">Tenancy + repairs</span>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Housing foresight
          </p>
          <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl">
            Threshold
          </h1>
          <p className="mt-3 text-lg text-ink-500">
            See failure early. Keep homes and lives on track.
          </p>

          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-ink-700">
            One view of what could go wrong. Two workspaces to do something
            about it. Threshold turns tenancy and repairs signals — data
            housing providers already hold — into earlier, better decisions,
            with explanations an officer can argue with and a DPO can sign
            off.
          </p>

          {/* Landing hero screenshot */}
          <figure className="mt-10 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
            <div className="flex items-center justify-between border-b border-ink-900/5 px-5 py-3 text-xs">
              <span className="font-semibold uppercase tracking-wide text-ink-500">Landing · Housing foresight</span>
              <span className="text-ink-500">Notice → Understand → Act → Learn</span>
            </div>
            <img
              src="/threshold-landing.png"
              alt="Threshold landing page: 'See failure early. Keep homes and lives on track.' with a four-step journey — Notice, Understand, Act, Learn — running along the bottom."
              className="w-full"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Two workspaces */}
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Two lenses. One purpose.
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Protect the tenancy. Look after the home.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-ink-500">
            The people who live in a home and the fabric of the home itself
            fail differently — but the signals are held in the same
            organisation. Threshold gives each its own workspace, and one
            shared foresight approach behind them.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {workspaces.map((w) => (
              <div key={w.heading} className={`rounded-2xl p-7 shadow-soft ${w.tint} ${w.fg}`}>
                <div className="flex items-start justify-between">
                  <p className={`text-xs font-semibold uppercase tracking-wide ${w.sub}`}>{w.label}</p>
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${w.chip}`}>
                    {w.heading}
                  </span>
                </div>
                <p className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
                  {w.strap}
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${w.sub}`}>{w.body}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {w.features.map((f) => (
                    <span key={f} className={`rounded-full px-2.5 py-1 text-xs font-medium ${w.tag}`}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <figure className="mt-10 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
            <div className="flex items-center justify-between border-b border-ink-900/5 px-5 py-3 text-xs">
              <span className="font-semibold uppercase tracking-wide text-ink-500">Choose your workspace</span>
              <span className="text-ink-500">People · Property</span>
            </div>
            <img
              src="/threshold-workspaces.png"
              alt="Threshold's 'Where would you like to start?' screen — two cards side by side: People (Tenancy sustainment) in dark navy, and Property (Repairs intelligence) in lime green."
              className="w-full"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Foresight, with follow-through */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Foresight, with follow-through
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Notice. Understand. Act. Learn.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-ink-500">
            The four steps show up across both workspaces — the same shape of
            work, whether the signal is a household or a component.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {journey.map((s, i) => (
              <li key={s.t} className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft">
                <span className="text-xs font-semibold text-ink-300">0{i + 1}</span>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-ink-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Repairs intelligence */}
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Repairs intelligence workspace
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            A clearer picture. An earlier response.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-ink-500">
            A useful starting point for a conversation, not a diagnosis — and
            the principle behind every screen:{" "}
            <span className="font-medium text-ink-900">silence is not evidence of good condition</span>.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {repairsAngles.map((a) => (
              <div key={a.t} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <h3 className="text-base font-semibold tracking-tight text-ink-900">{a.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{a.b}</p>
              </div>
            ))}
          </div>

          <figure className="mt-10 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
            <div className="flex items-center justify-between border-b border-ink-900/5 px-5 py-3 text-xs">
              <span className="font-semibold uppercase tracking-wide text-ink-500">Repairs intelligence · Overview</span>
              <span className="text-ink-500">Synthetic demonstration</span>
            </div>
            <img
              src="/threshold-repairs-dashboard.png"
              alt="Threshold repairs intelligence workspace: overview dashboard showing 240 homes, 66 condition evidence gaps, 43 high hazard priorities, 49 open review actions, a stacked bar showing 43 prioritise / 94 review condition / 103 routine monitoring, and a 12-month forecast panel."
              className="w-full"
              loading="lazy"
            />
            <figcaption className="border-t border-ink-900/5 px-5 py-3 text-xs text-ink-500">
              Figures shown are synthetic demonstration data on a 240-home
              estate. Real deployments use provider data, on provider
              infrastructure.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Why interpretability */}
      <section className="relative z-10">
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
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
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
      <section id="signals" className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Tenancy signal model
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
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
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
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-16">
          <div className="overflow-hidden rounded-3xl bg-ink-900 p-10 text-white shadow-soft md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1.6fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Want to see it running?
                </h2>
                <p className="mt-4 max-w-xl text-ink-300">
                  Threshold runs locally on synthetic estate data — 240 homes
                  and ~85 tenancies — so the screens show the real arithmetic,
                  the real explanations and the real interventions. Get in
                  touch for a walkthrough of either workspace, or both.
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
                <a
                  href="/threshold.html"
                  className="text-xs text-ink-300 underline-offset-2 hover:text-white hover:underline"
                >
                  Or open the interactive prototype (earlier design)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
