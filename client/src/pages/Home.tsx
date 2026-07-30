/**
 * Cultzyme V28 / Cinematic Process Hero / Accessible Sound.
 * Metallic blue-black editorial framing keeps the process film atmospheric while an explicit sound control preserves reliable autoplay.
 * Multiparameter sensing, agentic models and Physical AI remain one continuous bioprocess control narrative.
 */
import { ArrowRight, Menu, Volume2, VolumeX, X } from "lucide-react";
import { type RefObject, useEffect, useRef, useState } from "react";
import ContactStation from "@/components/ContactStation";
import LiveModelVisual from "@/components/LiveModelVisual";

const ASSETS = {
  wordmark: "/manus-storage/cultzyme-wordmark-clean_7ed67d66.png",
  heroPoster: "/manus-storage/cultzyme-hero-process-poster_8931dca9.jpg",
  heroVideo: "/manus-storage/cultzyme-hero-process-audio_7dfb37a2.mp4",
};

function ObservationLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="observation-label">
      <i aria-hidden="true" />
      {children}
    </span>
  );
}

function TextLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a className={`text-link ${className}`} href={href} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} />
    </a>
  );
}

// Single continuous hand-drawn trace spanning the loop-bridge intro AND the three journey
// phases below it — no separate head curve and no junction to smoothly hand off into: the
// path starts exactly at the "intelligence." dot (computed live) and immediately continues
// into the same hand-tuned wave all the way down, expressed as RELATIVE commands (lowercase
// s) so it always starts whatever the dot's live position is instead of a fixed (500, 400).
//
// Two variants exist because `.living-trace` uses preserveAspectRatio="none": on desktop its
// box is close to the viewBox's own aspect ratio (near-uniform x/y scale), but the narrow CSS
// override below 1200px (width: 280px) against a much taller stacked-content height squashes x
// far more than y — the desktop wobble amplitude reads as sharp zigzags there, so mobile/tablet
// gets a much gentler horizontal swing over the same vertical progression.
const LIVING_TRACE_WAVE_DESKTOP =
  "s -200 330, 10 520 s 240 350, -40 540 s -220 370, 50 570 s 190 400, -20 770";
const LIVING_TRACE_WAVE_MOBILE =
  "s -60 330, 0 520 s 80 350, -40 540 s -40 370, 80 570 s 40 400, -40 770";
const LIVING_TRACE_ORIGIN_FALLBACK = { x: 560, y: 60 };

function LivingTrace({
  svgRef,
  origin,
  mobile,
}: {
  svgRef: RefObject<SVGSVGElement>;
  origin: { x: number; y: number };
  mobile: boolean;
}) {
  const d = `M${origin.x.toFixed(1)} ${origin.y.toFixed(1)} ${mobile ? LIVING_TRACE_WAVE_MOBILE : LIVING_TRACE_WAVE_DESKTOP}`;
  return (
    <svg ref={svgRef} className="living-trace" viewBox="0 0 1000 2800" preserveAspectRatio="none" aria-hidden="true">
      <path className="living-trace__ghost" d={d} />
      <path className="living-trace__signal" d={d} />
    </svg>
  );
}

function SenseVisual() {
  return (
    <div className="scene-visual sense-visual" aria-label="Conceptual live process signal">
      <div className="sense-orb" aria-hidden="true">
        <span className="sense-orb__core" />
        <span className="sense-orb__ring sense-orb__ring--one" />
        <span className="sense-orb__ring sense-orb__ring--two" />
        <span className="sense-orb__ring sense-orb__ring--three" />
      </div>
      <svg className="waveform" viewBox="0 0 760 260" role="img" aria-label="Continuous sensing waveform">
        <defs>
          <linearGradient id="wave-gradient" x1="0" x2="1">
            <stop offset="0" stopColor="#8fa5ae" stopOpacity="0.18" />
            <stop offset="0.54" stopColor="#477fa8" stopOpacity="0.9" />
            <stop offset="1" stopColor="#53b7ff" />
          </linearGradient>
        </defs>
        <path className="waveform__line waveform__line--soft" d="M0 157 C44 157 42 130 82 130 S124 184 165 184 S198 82 241 82 S289 165 328 165 S360 116 405 116 S445 157 486 157 S520 43 566 43 S606 158 650 158 S691 108 760 108" />
        <path className="waveform__line" d="M0 157 C44 157 42 130 82 130 S124 184 165 184 S198 82 241 82 S289 165 328 165 S360 116 405 116 S445 157 486 157 S520 43 566 43 S606 158 650 158 S691 108 760 108" />
        <circle cx="566" cy="43" r="7" fill="#53b7ff" stroke="#dff4ff" strokeWidth="1" />
      </svg>
      <span className="scene-readout scene-readout--top">MULTIPARAMETER / LIVE</span>
      <span className="scene-readout scene-readout--bottom"><i /> ONE PROBE / ONE STREAM</span>
    </div>
  );
}

function ControlVisual() {
  return (
    <div className="scene-visual control-visual" aria-label="Conceptual closed-loop control system">
      <div className="control-system" aria-hidden="true">
        <span className="control-loop control-loop--outer" />
        <span className="control-loop control-loop--middle" />
        <span className="control-center"><i />PHYSICAL AI<small>CONNECTED EXECUTION</small></span>
        <span className="control-node control-node--sense"><i />REASON</span>
        <span className="control-node control-node--reason"><i />APPROVE</span>
        <span className="control-node control-node--act"><i />EXECUTE</span>
        <span className="control-boundary control-boundary--one">MODEL / REASONING</span>
        <span className="control-boundary control-boundary--two">EQUIPMENT / CONNECTED</span>
        <span className="control-boundary control-boundary--three">ACTION / TRACEABLE</span>
      </div>
      <span className="scene-readout scene-readout--bottom"><i /> ACTION EXECUTED</span>
    </div>
  );
}

const phases = [
  {
    id: "perceive",
    number: "01",
    state: "SENSE",
    label: "MULTIPARAMETER SENSING / LIVE PROCESS STATE",
    title: <>One probe.<br />More process truth.</>,
    body: "A multiparametric sensing layer adds live process visibility to existing bioreactor formats. A single probe captures multiple critical parameters, turning fragmented measurements into one continuous process stream.",
    Visual: SenseVisual,
  },
  {
    id: "remember",
    number: "02",
    state: "MODEL",
    label: "HISTORICAL + LIVE + PROPRIETARY DATA",
    title: <>Find the golden batch.<br />Faster.</>,
    body: "Our models combine historical data, live process data and proprietary bioprocess knowledge. From one prompt, agentic workflows compare runs, generate reports, identify golden-batch conditions, reduce unnecessary experiments, test scale-up scenarios and propose advanced control strategies.",
    Visual: LiveModelVisual,
  },
  {
    id: "direct",
    number: "03",
    state: "AUTOMATE",
    label: "PHYSICAL AI / UPSTREAM → DOWNSTREAM",
    title: <>From model output<br />to physical action.</>,
    body: "Our platform connects model outputs directly to equipment automation, translating decisions into bounded, traceable Physical AI actions across any connected upstream or downstream system.",
    Visual: ControlVisual,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const intelligenceDotRef = useRef<HTMLSpanElement>(null);
  const livingTraceRef = useRef<SVGSVGElement>(null);
  const [traceOrigin, setTraceOrigin] = useState(LIVING_TRACE_ORIGIN_FALLBACK);
  const [isMobileTrace, setIsMobileTrace] = useState(false);

  useEffect(() => {
    const mobileTraceQuery = window.matchMedia("(max-width: 1200px)");
    const syncMobileTrace = () => setIsMobileTrace(mobileTraceQuery.matches);
    syncMobileTrace();
    mobileTraceQuery.addEventListener("change", syncMobileTrace);
    return () => mobileTraceQuery.removeEventListener("change", syncMobileTrace);
  }, []);

  useEffect(() => {
    const dot = intelligenceDotRef.current;
    const trace = livingTraceRef.current;
    if (!dot || !trace) return;

    const updateTraceOrigin = () => {
      const dotRect = dot.getBoundingClientRect();
      const traceRect = trace.getBoundingClientRect();
      if (!traceRect.width || !traceRect.height) return;

      // Convert the dot's real screen position into the trace's own viewBox units (0-1000 / 0-2800),
      // since preserveAspectRatio="none" scales x/y independently.
      const scaleX = traceRect.width / 1000;
      const scaleY = traceRect.height / 2800;
      const dotScreenX = dotRect.left + dotRect.width * 0.52;
      const dotScreenY = dotRect.top + dotRect.height * 0.78;
      const x = (dotScreenX - traceRect.left) / scaleX;
      const y = (dotScreenY - traceRect.top) / scaleY;

      setTraceOrigin({ x, y });
    };

    const resizeObserver = new ResizeObserver(updateTraceOrigin);
    resizeObserver.observe(trace);
    window.addEventListener("resize", updateTraceOrigin);
    const frame = window.requestAnimationFrame(updateTraceOrigin);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateTraceOrigin);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      const prefersReducedMotion = motionPreference.matches;
      const video = heroVideoRef.current;

      setReducedMotion(prefersReducedMotion);
      setSoundEnabled(false);

      if (!video) return;
      video.muted = true;

      if (prefersReducedMotion) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    };

    syncMotionPreference();
    motionPreference.addEventListener("change", syncMotionPreference);
    return () => motionPreference.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    const revealNodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );
    revealNodes.forEach((node) => revealObserver.observe(node));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

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

  const closeMenu = () => setMenuOpen(false);

  const toggleHeroSound = async () => {
    const video = heroVideoRef.current;
    if (!video || reducedMotion) return;

    if (soundEnabled) {
      video.muted = true;
      setSoundEnabled(false);
      return;
    }

    video.muted = false;
    try {
      await video.play();
      setSoundEnabled(true);
    } catch {
      video.muted = true;
      setSoundEnabled(false);
    }
  };

  return (
    <div className="observatory">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="floating-header">
        <a className="v2-wordmark" href="#top" aria-label="Cultzyme home">
          <img src={ASSETS.wordmark} alt="Cultzyme" />
        </a>

        <nav className="v2-nav" aria-label="Primary navigation">
          <a href="#loop">THE LOOP</a>
          <a href="#system">SYSTEM</a>
          <a href="#vision">VISION</a>
          <a href="/team">TEAM</a>
        </nav>

        <a className="header-cta" href="#contact">
          MAP YOUR LOOP <span aria-hidden="true"><ArrowRight size={16} strokeWidth={1.5} /></span>
        </a>

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

      <main id="main-content">
        <section className="v2-hero v2-hero--glass" id="top">
          <div className="hero-video-media" aria-hidden="true">
            <img
              className="hero-video-poster"
              src={ASSETS.heroPoster}
              alt=""
            />
            <video
              ref={heroVideoRef}
              className="hero-video"
              autoPlay
              muted={!soundEnabled}
              loop
              playsInline
              preload="metadata"
              poster={ASSETS.heroPoster}
            >
              <source src={ASSETS.heroVideo} type="video/mp4" />
            </video>
            <span className="hero-video-scrim" />
          </div>
          <div className="v2-hero__veil" aria-hidden="true" />

          <div className="v2-shell v2-hero__content" data-reveal>
            <h1>Self-driving biomanufacturing.<br /><em>From live signal</em><br />to physical action.</h1>
            <div className="v2-hero__lower">
              <p>
                Cultzyme turns live multiparameter process data into model-driven, automated action. One intelligence
                layer connects sensing, AI models and equipment across development and manufacturing, helping teams
                reduce trial-and-error, find robust operating conditions faster and scale with control.
              </p>
              <div className="v2-hero__actions">
                <TextLink href="#contact">MAP YOUR FIRST CLOSED LOOP</TextLink>
                <span className="live-status"><i />LAB → PILOT → PLANT / ALWAYS UNDER YOUR CONTROL</span>
              </div>
            </div>
          </div>

          <button
            className={`hero-sound-toggle ${soundEnabled ? "hero-sound-toggle--active" : ""}`}
            type="button"
            onClick={toggleHeroSound}
            aria-label={soundEnabled ? "Mute hero soundtrack" : "Play hero soundtrack"}
            aria-pressed={soundEnabled}
            disabled={reducedMotion}
          >
            <span className="hero-sound-toggle__icon" aria-hidden="true">
              {soundEnabled ? <Volume2 size={15} strokeWidth={1.6} /> : <VolumeX size={15} strokeWidth={1.6} />}
            </span>
            <span>{soundEnabled ? "SOUND ON" : "SOUND OFF"}</span>
            <i className="hero-sound-toggle__signal" aria-hidden="true" />
          </button>

        </section>

        <section className="thesis-section" id="loop">
          <div className="thesis-signal" aria-hidden="true"><i /><span /></div>
          <div className="v2-shell thesis-layout" data-reveal>
            <ObservationLabel>FROM SPARSE DATA TO SELF-DRIVING BIOPROCESSING</ObservationLabel>
            <h2>More process truth.<br /><em>Less trial-and-error.</em></h2>
            <div className="thesis-copy">
              <span>01 / FEWER BLIND ITERATIONS</span>
              <p>
                Most bioprocess decisions still rely on delayed samples, disconnected models and manual execution.
                Cultzyme converts live process state and model outputs into automated, traceable actions across
                connected upstream and downstream equipment.
              </p>
            </div>
          </div>
        </section>

        <div className="loop-arc">
          <LivingTrace svgRef={livingTraceRef} origin={traceOrigin} mobile={isMobileTrace} />

          <section className="loop-bridge" aria-labelledby="loop-bridge-title">
            <div className="loop-bridge__atmosphere" aria-hidden="true" />
            <div className="v2-shell loop-bridge__layout" data-reveal>
              <h2 id="loop-bridge-title">
                One loop.<br /><em>Real intelligence<span className="loop-bridge__dot" ref={intelligenceDotRef}>.</span></em>
              </h2>
              <div className="loop-bridge__copy">
                <ObservationLabel>SENSE → MODEL → AUTOMATE</ObservationLabel>
                <p>
                  Cultzyme puts intelligence inside the process, sensing, deciding and acting in one continuous loop
                  that sharpens every batch.
                </p>
                <div className="loop-bridge__sequence" aria-label="Sense, model and automate">
                  <span>01 / SENSE</span><i aria-hidden="true" />
                  <span>02 / MODEL</span><i aria-hidden="true" />
                  <span>03 / AUTOMATE</span>
                </div>
              </div>
            </div>
          </section>

          <section className="journey-section" id="system">
            <div className="v2-shell journey-layout">
              <div className="journey-scenes">
                {phases.map(({ id, number, state, label, title, body, Visual }) => (
                  <article className={`journey-scene journey-scene--${id}`} id={id} data-phase={id} key={id}>
                    <div className="scene-copy" data-reveal>
                      <span className="scene-number">{number} / {state}</span>
                      <ObservationLabel>{label}</ObservationLabel>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                    <Visual />
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="operational-case-section">
          <div className="operational-case-axis" aria-hidden="true"><i /><span /></div>
          <div className="v2-shell operational-case-layout" data-reveal>
            <header>
              <ObservationLabel>ONE DEVIATION / ONE CLOSED LOOP</ObservationLabel>
              <h2>See it before it becomes<br /><em>a failed run.</em></h2>
              <p>A single process event shows how Cultzyme moves from observation to physical action.</p>
            </header>
            <div className="operational-case-flow">
              <article><span>00 / DRIFT</span><h3>Trajectory changes.</h3><p>A critical process parameter begins moving outside its expected range.</p></article>
              <article><span>01 / SENSE</span><h3>Live sensing detects.</h3><p>The change becomes visible at process cadence.</p></article>
              <article><span>02 / MODEL</span><h3>Models predict.</h3><p>Impact is modeled and a control strategy is proposed.</p></article>
              <article><span>03 / ACT</span><h3>Automation executes.</h3><p>An approved adjustment reaches connected equipment.</p></article>
            </div>
            <section className="loop-outcomes" aria-labelledby="loop-outcomes-title">
              <header className="loop-outcomes__header">
                <ObservationLabel>RESULTS / CLOSED LOOP</ObservationLabel>
                <h3 id="loop-outcomes-title">What you get<br /><em>out of the loop.</em></h3>
              </header>
              <div className="loop-outcomes__grid">
                <article>
                  <span>CONSISTENCY</span>
                  <h4>Right-first-time, batch after batch</h4>
                  <p>Tighter batch-to-batch variability and higher RFT, whoever is on shift and wherever it runs.</p>
                </article>
                <article>
                  <span>QUALITY</span>
                  <h4>Specs held, not chased</h4>
                  <p>Critical quality attributes stay inside range because the process corrects while the cells are still responding.</p>
                </article>
                <article>
                  <span>YIELD</span>
                  <h4>More out of the same inputs</h4>
                  <p>More product from the same run, the same media, the same suite.</p>
                </article>
                <article>
                  <span>FAILED BATCHES</span>
                  <h4>Fewer, and cheaper when they happen</h4>
                  <p>Fewer deviations, and fewer investigations, CAPAs and QA hours behind each one.</p>
                </article>
                <article>
                  <span>TRANSFERABILITY</span>
                  <h4>Portable across scales, sites and partners</h4>
                  <p>Setpoints don&apos;t transfer between vessels; cell state does. CDMO to in-house or one CDMO to the next, the model is yours and travels with you. Comparability starts from evidence you already own, not from re-running development at the receiving site.</p>
                </article>
                <article>
                  <span>CONTAMINATION RISK</span>
                  <h4>Closed by default</h4>
                  <p>Continuous in-line readings mean fewer offline samples, fewer open manipulations and less operator time at the vessel. These are the routes most contamination actually takes.</p>
                </article>
              </div>
            </section>
          </div>
        </section>

        <section className="autonomous-vision-section" id="vision" aria-labelledby="autonomous-vision-title">
          <div className="autonomous-vision__orbits" aria-hidden="true"><i /><span /></div>
          <div className="v2-shell autonomous-vision__layout" data-reveal>
            <ObservationLabel>VISION / AUTONOMOUS BIOLOGICS</ObservationLabel>
            <h2 id="autonomous-vision-title">
              The world taught AI to<br />discover biologics.<br />
              <em>We&apos;re teaching it to<br />manufacture them.</em>
            </h2>
            <p>
              Manufacturing is where biologics succeed or fail and much of it still depends on sparse data and
              manual intervention. Cultzyme is building the intelligence layer that makes cell-based processes
              observable, predictable and self-directed.
            </p>
          </div>
        </section>

        <section className="horizon-section" id="scale">
          <div className="horizon-orbit" aria-hidden="true">
            <span className="horizon-orbit__outer" />
            <span className="horizon-orbit__middle" />
            <span className="horizon-orbit__inner" />
            <span className="horizon-orbit__signal" />
          </div>
          <div className="v2-shell horizon-layout" data-reveal>
            <ObservationLabel>BUILT FOR CELLS / READY FOR SCALE</ObservationLabel>
            <h2>Built for cells.<br /><em>Ready for scale.</em></h2>
            <p>
              Across biologics, biosimilars and ATMPs, Cultzyme carries process understanding from development
              into manufacturing, reducing physical iteration while protecting quality, yield and robustness.
            </p>
            <p className="horizon-audiences">PROCESS DEVELOPMENT / MSAT / MANUFACTURING</p>
            <div className="scale-track" aria-label="Lab to plant continuity">
              <span><i />LAB<small>DISCOVER</small></span>
              <span><i />PILOT<small>TRANSFER</small></span>
              <span><i />PLANT<small>CONTROL</small></span>
            </div>
          </div>
        </section>

        <ContactStation />
      </main>

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
    </div>
  );
}
