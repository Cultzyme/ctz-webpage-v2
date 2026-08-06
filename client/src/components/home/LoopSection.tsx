import { type RefObject, useEffect, useRef, useState } from "react";
import LiveModelVisual from "@/components/LiveModelVisual";
import ObservationLabel from "./ObservationLabel";

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
  svgRef: RefObject<SVGSVGElement | null>;
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

export default function LoopSection() {
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

  return (
    <div className="loop-arc">
      <LivingTrace svgRef={livingTraceRef} origin={traceOrigin} mobile={isMobileTrace} />

      <section className="loop-bridge" aria-labelledby="loop-bridge-title">
        <div className="loop-bridge__atmosphere" aria-hidden="true" />
        <div className="v2-shell loop-bridge__layout" data-reveal>
          <h2 id="loop-bridge-title">
            One loop.<br /><em style={{ fontFamily: "'Playfair Display', serif" }}>Real intelligence<span className="loop-bridge__dot" ref={intelligenceDotRef}>.</span></em>
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
  );
}
