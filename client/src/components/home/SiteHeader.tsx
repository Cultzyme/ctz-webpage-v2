import { ArrowRight, Menu, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ASSETS } from "./assets";

interface SiteHeaderProps {
  soundEnabled: boolean;
  reducedMotion: boolean;
  onToggleSound: () => void;
}

export default function SiteHeader({ soundEnabled, reducedMotion, onToggleSound }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`floating-header ${isScrolled ? "floating-header--scrolled" : ""}`}>
        <div className="v2-shell floating-header__inner">
          <a className="v2-wordmark" href="#top" aria-label="Cultzyme home">
            <img src={ASSETS.wordmark} alt="Cultzyme" />
          </a>

          <nav className="v2-nav" aria-label="Primary navigation">
            <a href="#loop">THE LOOP</a>
            <a href="#system">SYSTEM</a>
            <a href="#vision">VISION</a>
            <a href="/team">TEAM</a>
          </nav>

          <div className="header-actions">
            <button
              className={`header-sound-toggle ${soundEnabled ? "header-sound-toggle--active" : ""}`}
              type="button"
              onClick={onToggleSound}
              aria-label={soundEnabled ? "Mute hero soundtrack" : "Play hero soundtrack"}
              aria-pressed={soundEnabled}
              disabled={reducedMotion}
            >
              <span className="header-sound-toggle__icon" aria-hidden="true">
                {soundEnabled ? <Volume2 size={15} strokeWidth={1.6} /> : <VolumeX size={15} strokeWidth={1.6} />}
              </span>
              <span>{soundEnabled ? "SOUND ON" : "SOUND OFF"}</span>
              <i className="header-sound-toggle__signal" aria-hidden="true" />
            </button>

            <a className="header-cta" href="#contact">
              MAP YOUR LOOP <span aria-hidden="true"><ArrowRight size={16} strokeWidth={1.5} /></span>
            </a>
          </div>

          <button
            className="v2-menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="v2-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <div className={`v2-mobile-menu ${menuOpen ? "v2-mobile-menu--open" : ""}`} id="v2-mobile-menu">
        <nav aria-label="Mobile navigation">
          <a href="#loop" onClick={closeMenu}><span>01</span>THE LOOP</a>
          <a href="#system" onClick={closeMenu}><span>02</span>SYSTEM</a>
          <a href="#vision" onClick={closeMenu}><span>03</span>VISION</a>
          <a href="/team" onClick={closeMenu}><span>04</span>TEAM</a>
          <a href="#contact" onClick={closeMenu}><span>05</span>TALK TO CULTZYME</a>
        </nav>
        <p>SELF-DRIVING BIOPROCESSES<br />FROM LAB TO PLANT.</p>
      </div>
    </>
  );
}
