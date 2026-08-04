import { ASSETS } from "./assets";

export default function SiteFooter() {
  return (
    <footer className="v2-footer">
      <div className="v2-shell v2-footer__top">
        <a href="#top" className="v2-footer__brand" aria-label="Back to top">
          <img src={ASSETS.wordmark} alt="Cultzyme" />
        </a>
        <p>SPEEDING BIOMANUFACTURING WITH REAL INTELLIGENCE.</p>
        <nav aria-label="Footer navigation">
          <a href="#loop">THE LOOP</a>
          <a href="#system">SYSTEM</a>
          <a href="#vision">VISION</a>
          <a href="/team">TEAM</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
      <div className="v2-shell v2-footer__meta">
        <span>© {new Date().getFullYear()} CULTZYME S.L.</span>
        <span>DONOSTIA / SAN SEBASTIÁN</span>
        <span>PROCESS STATE / LEARNING</span>
      </div>
    </footer>
  );
}
