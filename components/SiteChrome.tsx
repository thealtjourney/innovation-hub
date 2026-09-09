import Link from "next/link";
import { Icon } from "./Icon";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-width header-inner">
        <Link href="/" className="site-brand">
          <span className="brand-symbol">
            <Icon name="house" />
          </span>
          <span>
            Innovation Hub
            <span className="brand-subtitle">A home for better ideas</span>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/#house">The house</Link>
          <Link href="/#approach">My approach</Link>
          <Link href="/#contact">Let’s talk</Link>
        </nav>
        <Link href="/#projects" className="button button-small button-primary">
          All ideas
          <Icon name="diagonal" />
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-inner">
        <Link href="/" className="site-brand">
          <span className="brand-symbol">
            <Icon name="house" />
          </span>
          <span>Innovation Hub</span>
        </Link>
        <p>Built around people. Shared with the sector.</p>
        <nav aria-label="Footer navigation">
          <Link href="/#projects">The ideas</Link>
          <Link href="/#approach">My approach</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
