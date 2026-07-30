/**
 * Cultzyme V7 / hand-drawn live process state.
 * The cell is sketched once when it enters the viewport and resets on re-entry.
 * Reduced-motion users receive the complete, static scientific diagram.
 */
import { useEffect, useRef, useState } from "react";

export default function LiveModelVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const [drawCycle, setDrawCycle] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const node = visualRef.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsDrawing(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawCycle((cycle) => cycle + 1);
          setIsDrawing(true);
        } else {
          setIsDrawing(false);
        }
      },
      { threshold: 0.38, rootMargin: "-8% 0px -8%" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`scene-visual memory-visual live-model-visual ${isDrawing ? "is-drawing" : ""}`}
      aria-label="A cell state being drawn by hand into an agentic process model"
      ref={visualRef}
    >
      <div className="cell-draw-stage" key={drawCycle}>
        <svg className="cell-draw" viewBox="0 0 640 640" role="img" aria-label="A cell state progressively hand-drawn from live and historical process data">
          <defs>
            <radialGradient id="cell-fill" cx="38%" cy="32%" r="72%">
              <stop offset="0" stopColor="#dff4ff" stopOpacity="0.34" />
              <stop offset="0.55" stopColor="#53b7ff" stopOpacity="0.12" />
              <stop offset="1" stopColor="#07131d" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="draw-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#9db4c5" />
              <stop offset="0.52" stopColor="#f4f8fb" />
              <stop offset="1" stopColor="#53b7ff" />
            </linearGradient>
            <filter id="sketch-wobble" x="-8%" y="-8%" width="116%" height="116%">
              <feTurbulence baseFrequency="0.012" numOctaves="2" seed="9" type="fractalNoise" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" />
            </filter>
          </defs>

          <path
            className="cell-draw__fill"
            d="M320 92C391 78 470 114 508 176C547 240 535 319 520 380C501 459 444 528 369 546C295 563 205 532 158 470C111 408 95 317 119 244C143 171 246 106 320 92Z"
          />
          <g className="cell-draw__paths" fill="none" stroke="url(#draw-line)" filter="url(#sketch-wobble)">
            <path className="cell-draw__path cell-draw__path--1" pathLength="1" d="M320 92C391 78 470 114 508 176C547 240 535 319 520 380C501 459 444 528 369 546C295 563 205 532 158 470C111 408 95 317 119 244C143 171 246 106 320 92Z" />
            <path className="cell-draw__path cell-draw__path--2" pathLength="1" d="M326 142C381 130 440 160 465 210C491 261 477 322 462 370C443 429 401 481 344 490C283 499 224 466 191 416C159 368 150 302 170 250C192 194 270 154 326 142Z" />
            <path className="cell-draw__path cell-draw__path--3" pathLength="1" d="M322 208C368 196 415 225 425 269C435 315 410 367 374 393C338 419 284 415 252 384C220 352 215 299 237 260C255 229 291 216 322 208Z" />
            <path className="cell-draw__path cell-draw__path--4" pathLength="1" d="M272 181C291 213 293 249 274 276C250 311 206 318 173 339M414 194C389 222 382 258 398 290C414 321 455 337 485 354M232 449C264 424 299 419 330 438C356 454 371 482 376 517" />
            <path className="cell-draw__path cell-draw__path--5" pathLength="1" d="M140 247C85 229 58 199 30 165M493 235C548 209 580 175 612 128M507 391C554 417 584 452 617 493" />
            <path className="cell-draw__path cell-draw__path--6" pathLength="1" strokeDasharray="4 10" d="M118 312H523M320 94V548M153 440L487 190" />
          </g>

          <g className="cell-draw__samples">
            <circle cx="140" cy="247" r="5" />
            <circle cx="493" cy="235" r="5" />
            <circle cx="507" cy="391" r="5" />
            <circle cx="320" cy="208" r="7" />
          </g>

          <g className="drawing-tool" aria-hidden="true">
            <circle cx="0" cy="0" r="11" />
            <path d="M-3 -3L20 20" />
            <path d="M14 14L25 25" />
          </g>
        </svg>
      </div>

      <div className="model-sources" aria-hidden="true">
        <span className="model-source model-source--history"><i />CUSTOMER HISTORY</span>
        <span className="model-source model-source--live"><i />LIVE PROCESS</span>
        <span className="model-source model-source--knowledge"><i />CURATED KNOWLEDGE</span>
      </div>
      <div className="agentic-prompt" aria-hidden="true">
        <i>›</i><span>COMPARE RUNS + TEST SCALE-UP</span><b />
      </div>
      <span className="scene-readout scene-readout--top">{isDrawing ? "DRAWING BIOLOGICAL STATE" : "PROMPT → ORCHESTRATE"}</span>
      <span className="scene-readout scene-readout--bottom"><i /> MODEL STATE / LIVE</span>
    </div>
  );
}
