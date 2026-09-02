import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Housing Journey Manager — Innovation Hub",
  description:
    "A full-stack journey map for a social housing provider — an overview and assurance layer showing how the service is meant to work, who owns it, and whether the measures are being hit.",
};

const journeys = [
  {
    name: "Property",
    body: "The asset's life — from acquisition and letting-ready through repairs, planned works and voids to disposal. Anchored in the property, not the tenancy.",
  },
  {
    name: "Rented customer",
    body: "The rented household's experience — from application and letting, through the tenancy, income management, ASB, complaints and moving on.",
  },
  {
    name: "Shared ownership",
    body: "The shared owner's journey — from reservation and staircasing through repairs responsibilities, lease events and resale, kept distinct where the tenure demands it.",
  },
];

const questions = [
  { n: "01", q: "What does excellent service look like here?", b: "A stage's headline standard — the promise a resident or colleague should be able to expect at this point in the journey." },
  { n: "02", q: "Which processes does it touch?", b: "The workflows that deliver the standard — every process names its owning team, so 'who is involved here' stays true without being a second thing to maintain." },
  { n: "03", q: "Which policies does it relate to?", b: "The policy commitments a stage sits under — and readable in reverse: open a policy and see every stage where it bites." },
  { n: "04", q: "Which Tenant Satisfaction Measures apply?", b: "The measures a stage moves, with current position, target and year-on-year change — shown in context, not in a separate dashboard." },
];

const lenses = [
  { r: "Everyone", f: "The whole map", a: "Detail", o: "Excellent service" },
  { r: "Housing Officer", f: "Rented journey, letting → moving on", a: "Detail", o: "Excellent service" },
  { r: "Neighbourhoods Manager", f: "Estates, ASB, complaints, voids, assets", a: "Team", o: "Processes" },
  { r: "Executive & Board", f: "Everything, collapsed to RAG", a: "Summary", o: "TSMs" },
  { r: "Asset & Property", f: "Property journey + repairs", a: "Team", o: "Processes" },
  { r: "Home Ownership", f: "Shared ownership journey", a: "Detail", o: "Excellent service" },
  { r: "New Starter", f: "The whole map, in order", a: "Detail", o: "Excellent service" },
];

const isnts = [
  { t: "Not a system of record", b: "It holds no case data — no tenants, no repairs jobs, no ASB cases. Those live in the tools already built for them. This describes how the service is meant to work, not what happened to a particular household." },
  { t: "Not a performance dashboard", b: "Figures appear next to the standards they measure, not in a table of their own. The point is the map with numbers on it, not the numbers with a map somewhere else." },
  { t: "Not a locked-down document", b: "Any reader can flag a stage as 'this isn't what actually happens' — no sign-in. The people best placed to spot a wrong map are the least likely to hold an admin password." },
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
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">Service design</span>
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">Assurance</span>
            <span className="rounded-full bg-white px-2.5 py-1 text-ink-500 ring-1 ring-ink-900/10">TSMs</span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl">
            Housing Journey Manager
          </h1>
          <p className="mt-3 text-lg text-ink-500">
            One shared map of every journey — the service made legible,
            answerable and challengeable.
          </p>

          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-ink-700">
            A full-stack journey map for a social housing provider covering
            three journeys — <span className="font-medium text-ink-900">property</span>,{" "}
            <span className="font-medium text-ink-900">rented customer</span> and{" "}
            <span className="font-medium text-ink-900">shared ownership</span> — broken into stages. Each stage answers four questions,
            names one accountable team, sits under the policies and processes it
            touches, and carries the Tenant Satisfaction Measures it moves.
          </p>

          <div className="mt-8 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5 text-sm text-ink-700">
            <p className="font-medium text-ink-900">Concept view — no live deploy.</p>
            <p className="mt-1">
              A working prototype exists locally with 25 stages, 42 policies
              and 77 processes seeded from standard UK social housing practice.
              This page is the narrative version — what it is, how it works and
              why the shape is what it is.
            </p>
          </div>
        </div>
      </section>

      {/* The four questions */}
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            The core mechanic
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Every stage answers four questions.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-ink-500">
            The four questions are the whole shape of the tool. Answer them
            for every stage and you have an assurance layer any team, exec or
            regulator can read.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {questions.map((q) => (
              <div key={q.n} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <span className="text-xs font-semibold text-ink-300">{q.n}</span>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-ink-900">{q.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{q.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three journeys */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Three journeys
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Kept distinct where the tenure demands it.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {journeys.map((j) => (
              <div key={j.name} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <h3 className="text-base font-semibold tracking-tight text-ink-900">{j.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{j.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-300">
              A note on TSMs and tenure
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              Tenant Satisfaction Measures are reported for Low Cost Rental
              Accommodation. Shared ownership households sit outside the TSM
              perception survey — so shared ownership stages carry TSM links as{" "}
              <span className="font-medium text-ink-900">indicative only</span>,
              badged as such, and excluded from the coverage report. The links
              are kept because those stages still influence the measures; just
              not reported against them.
            </p>
          </div>
        </div>
      </section>

      {/* Role lenses */}
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Role lenses
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            One map. Different starting positions.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-ink-500">
            A role changes where you land and at what altitude. It never
            changes what you can reach — every lens keeps the whole map one
            click away. The point is one shared picture, not several different
            tools.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
            <div className="hidden grid-cols-[1.3fr_2fr_0.8fr_1fr] gap-4 border-b border-ink-900/5 bg-slate-50/70 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-ink-300 md:grid">
              <div>Lens</div>
              <div>Foregrounds</div>
              <div>Altitude</div>
              <div>Opens on</div>
            </div>
            {lenses.map((l) => (
              <div key={l.r} className="grid gap-1 border-b border-ink-900/5 px-6 py-4 text-sm last:border-b-0 md:grid-cols-[1.3fr_2fr_0.8fr_1fr] md:gap-4">
                <div className="font-medium text-ink-900">{l.r}</div>
                <div className="text-ink-500">{l.f}</div>
                <div className="text-ink-500">{l.a}</div>
                <div className="text-ink-700">{l.o}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Challenges
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            The map is wrong. Say so.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700">
            Any reader can open a stage and say <em>&quot;this isn&apos;t what
            actually happens&quot;</em> — no sign-in. The people best placed to
            spot a wrong map are the least likely to hold an admin password.
            Open challenges show as a counter on the stage card and route to
            the accountable team, where an admin responds and closes them.
            That&apos;s the mechanism that keeps the map honest.
          </p>
        </div>
      </section>

      {/* What it isn't */}
      <section className="relative z-10 border-t border-ink-900/5 bg-slate-50/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Deliberate boundaries
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            What it isn&apos;t.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-ink-500">
            The shape of the tool comes as much from what it refuses to be as
            from what it does.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {isnts.map((i) => (
              <div key={i.t} className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <h3 className="text-base font-semibold tracking-tight text-ink-900">{i.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{i.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Access model
          </p>
          <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-ink-900">
            Open to read, password to edit.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-700">
            Anyone who can reach the site can view every journey, the library
            and the coverage report. Edit mode takes a single shared password
            and issues a signed, HTTP-only session cookie. Deliberately light —
            if per-person accountability becomes needed, swap the cookie check
            for Entra ID without changing the API surface.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 pb-20">
          <div className="overflow-hidden rounded-3xl bg-ink-900 p-10 text-white shadow-soft md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1.6fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Want a walkthrough?
                </h2>
                <p className="mt-4 max-w-xl text-ink-300">
                  The working prototype isn&apos;t deployed publicly, but a
                  live walkthrough is a much better introduction than
                  screenshots ever would be. Get in touch and we&apos;ll set
                  one up.
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
