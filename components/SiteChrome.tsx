import Link from "next/link";

export function SiteHeader() {
  return (
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
          <Link href="/#in-progress" className="hover:text-ink-900">In progress</Link>
          <Link href="/#discovery" className="hover:text-ink-900">Discovery</Link>
          <Link href="/#approach" className="hover:text-ink-900">Approach</Link>
          <Link href="/#contact" className="hover:text-ink-900">Contact</Link>
        </nav>
        <Link
          href="/#in-progress"
          className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-ink-700"
        >
          Portfolio
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
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
          <Link href="/#in-progress" className="hover:text-ink-900">In progress</Link>
          <Link href="/#discovery" className="hover:text-ink-900">Discovery</Link>
          <Link href="/#approach" className="hover:text-ink-900">Approach</Link>
          <Link href="/#contact" className="hover:text-ink-900">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
