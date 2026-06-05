import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "ArchAngel IoT — Innovation Hub",
  description:
    "Sensor-led home monitoring for social housing: surfacing damp, mould and under-heating risk before they become complaints.",
};

const capabilities = [
  {
    title: "Damp & mould risk",
    body: "Continuous temperature and relative humidity readings feed a dew-point and mould-risk model, flagging properties trending towards Awaab-style risk weeks before visible mould appears.",
  },
  {
    title: "Heating performance",
    body: "Detects homes that are under-heated, slow to warm, or cooling rapidly — surfacing both fabric problems and affordability signals for follow-up.",
  },
  {
    title: "Indoor air quality",
    body: "CO₂ and VOC sensing where appropriate, giving an objective view of ventilation alongside resident-reported comfort.",
  },
  {
    title: "Stock-level intelligence",
    body: "Per-property data rolls up to scheme, archetype and asset cohort, so investment teams can prioritise interventions by evidence rather than by complaint volume.",
  },
];

const architecture = [
  { layer: "Devices", body: "Low-power LoRaWAN / cellular sensors, battery-life measured in years." },
  { layer: "Network", body: "Vendor-agnostic ingest — works across multiple sensor suppliers." },
  { layer: "Platform", body: "Cloud-native, event-driven backbone with PII separation by design." },
  { layer: "Insight", body: "Risk scoring, alerting, and feeds into the Digital Twin and CRM." },
];

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] grid-bg" />
      <SiteHeader />

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-12 pt-12 md:pt-16">
          <Link
            href="/#in-progress"
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
              Prototype
            </span>
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">IoT</span>
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">Damp & mould</span>
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">Resident safety</span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl">
            ArchAngel IoT
          </h1>
          <p className="mt-3 text-lg text-ink-500">
            Sensor-led home monitoring for the social housing stock.
          </p>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-ink-700">
            ArchAngel turns each home into a quiet, continuous data feed —
            temperature, humidity, and where appropriate air quality — so the
            organisation sees risk emerging in real time, not after a complaint
            or an inspection. The goal is simple: catch the conditions behind
            damp, mould and unsafe homes before they escalate, and give asset
            and housing teams an objective view of how every property is
            performing.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Why it matters
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            From reactive complaints to proactive care.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                k: "Regulatory",
                v: "Awaab's Law and the Decent Homes Standard set hard expectations on damp and mould response times. Sensor data shortens the gap between problem and action.",
              },
              {
                k: "Operational",
                v: "Surveyor time is finite. Targeted, evidence-led visits beat blanket inspection programmes — and stop disrepair claims at source.",
              },
              {
                k: "Resident",
                v: "A quieter, faster path to a safe home — without the resident having to be the one to escalate.",
              },
            ].map((c) => (
              <div key={c.k} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-300">{c.k}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Capabilities
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            What ArchAngel does today.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <h3 className="text-base font-semibold tracking-tight text-ink-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Architecture
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Vendor-agnostic, joined-up.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-ink-500">
            Designed so we&apos;re not locked to a single sensor manufacturer,
            and so insight flows into the tools teams already use.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {architecture.map((a, i) => (
              <li key={a.layer} className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft">
                <span className="text-xs font-semibold text-ink-300">0{i + 1}</span>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-ink-900">{a.layer}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Outcomes we&apos;re measuring
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            What good looks like.
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "↓", v: "Damp & mould cases caught pre-complaint" },
              { k: "↓", v: "Time from risk signal to intervention" },
              { k: "↑", v: "Properties with continuous condition data" },
              { k: "↑", v: "Resident-reported home comfort" },
            ].map((s) => (
              <div key={s.v} className="bg-white p-5">
                <dt className="text-2xl font-semibold tracking-tight text-ink-900">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-ink-500">{s.v}</dd>
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
                  Want to dig into the prototype?
                </h2>
                <p className="mt-4 max-w-xl text-ink-300">
                  We&apos;re actively shaping ArchAngel with asset, repairs and
                  housing colleagues. If you&apos;d like a walkthrough of the
                  current build, get in touch.
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
