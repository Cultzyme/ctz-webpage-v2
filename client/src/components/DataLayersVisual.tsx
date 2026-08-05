/**
 * DataLayersVisual v3 — 3 stacked depth layers (Process → Data → Action)
 * CSS-only animation triggered by IntersectionObserver via data-reveal.
 * Color palette matched to cultzyme.com design system.
 */

export default function DataLayersVisual() {
  return (
    <div className="data-layers" data-reveal aria-label="Three data layers: process, data, and action">
      <div className="data-layers__stack" aria-hidden="true">
        {/* Back layer: Process (cells/capsules) */}
        <div className="data-layers__panel data-layers__panel--cells">
          <svg viewBox="0 0 320 450" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dl-metalA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#75b9e4" />
                <stop offset="50%" stopColor="#477fa8" />
                <stop offset="100%" stopColor="#75b9e4" />
              </linearGradient>
              <linearGradient id="dl-metalB" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9db4c5" />
                <stop offset="50%" stopColor="#27465f" />
                <stop offset="100%" stopColor="#9db4c5" />
              </linearGradient>
              <linearGradient id="dl-metalC" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#53b7ff" />
                <stop offset="50%" stopColor="#27465f" />
                <stop offset="100%" stopColor="#53b7ff" />
              </linearGradient>
            </defs>
            <rect width="320" height="450" rx="8" fill="#09131c" />
            <text x="16" y="24" fill="#9db4c5" fontSize="11" fontFamily="'Instrument Sans', sans-serif" fontWeight="500" letterSpacing="1.5" opacity="0.7">PROCESS</text>
            <g className="data-layers__drift">
              <rect x="12" y="40" width="90" height="34" rx="17" fill="url(#dl-metalB)" opacity="0.8" transform="rotate(-30 57 57)" />
              <rect x="95" y="35" width="80" height="30" rx="15" fill="url(#dl-metalA)" opacity="0.8" transform="rotate(20 135 50)" />
              <rect x="200" y="50" width="75" height="28" rx="14" fill="url(#dl-metalC)" opacity="0.8" transform="rotate(-15 237 64)" />
              <rect x="10" y="100" width="88" height="33" rx="16" fill="url(#dl-metalA)" opacity="0.8" transform="rotate(40 54 116)" />
              <rect x="120" y="90" width="55" height="50" rx="25" fill="url(#dl-metalB)" opacity="0.8" transform="rotate(5 147 115)" />
              <rect x="210" y="95" width="92" height="34" rx="17" fill="url(#dl-metalC)" opacity="0.8" transform="rotate(-25 256 112)" />
              <rect x="30" y="160" width="78" height="30" rx="15" fill="url(#dl-metalB)" opacity="0.8" transform="rotate(45 69 175)" />
              <rect x="140" y="155" width="85" height="32" rx="16" fill="url(#dl-metalA)" opacity="0.8" transform="rotate(-10 182 171)" />
              <rect x="250" y="150" width="60" height="26" rx="13" fill="url(#dl-metalC)" opacity="0.8" transform="rotate(30 280 163)" />
              <rect x="15" y="220" width="92" height="35" rx="17" fill="url(#dl-metalA)" opacity="0.8" transform="rotate(-25 61 237)" />
              <rect x="130" y="215" width="70" height="28" rx="14" fill="url(#dl-metalC)" opacity="0.8" transform="rotate(55 165 229)" />
              <rect x="225" y="210" width="80" height="30" rx="15" fill="url(#dl-metalB)" opacity="0.8" transform="rotate(-35 265 225)" />
              <rect x="25" y="280" width="82" height="32" rx="16" fill="url(#dl-metalA)" opacity="0.8" transform="rotate(30 66 296)" />
              <rect x="145" y="275" width="58" height="52" rx="26" fill="url(#dl-metalB)" opacity="0.8" />
              <rect x="230" y="270" width="72" height="28" rx="14" fill="url(#dl-metalC)" opacity="0.8" transform="rotate(-50 266 284)" />
              <rect x="10" y="340" width="90" height="34" rx="17" fill="url(#dl-metalB)" opacity="0.8" transform="rotate(-30 55 357)" />
              <rect x="120" y="335" width="70" height="28" rx="14" fill="url(#dl-metalA)" opacity="0.8" transform="rotate(-10 155 349)" />
              <rect x="215" y="330" width="80" height="30" rx="15" fill="url(#dl-metalB)" opacity="0.8" transform="rotate(35 255 345)" />
              <rect x="30" y="395" width="85" height="33" rx="16" fill="url(#dl-metalA)" opacity="0.8" transform="rotate(15 72 411)" />
              <rect x="140" y="390" width="80" height="30" rx="15" fill="url(#dl-metalC)" opacity="0.8" transform="rotate(-40 180 405)" />
              <rect x="245" y="395" width="65" height="26" rx="13" fill="url(#dl-metalB)" opacity="0.8" transform="rotate(10 277 408)" />
            </g>
            <rect width="320" height="450" rx="8" fill="none" stroke="#53b7ff" strokeWidth="1.5" opacity="0.3" />
          </svg>
        </div>

        {/* Middle layer: Data (chart) */}
        <div className="data-layers__panel data-layers__panel--antibodies">
          <svg viewBox="0 0 320 450" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dl-barA" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#27465f" />
                <stop offset="30%" stopColor="#477fa8" />
                <stop offset="60%" stopColor="#75b9e4" />
                <stop offset="80%" stopColor="#477fa8" />
                <stop offset="100%" stopColor="#27465f" />
              </linearGradient>
              <linearGradient id="dl-barB" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#27465f" />
                <stop offset="30%" stopColor="#53b7ff" />
                <stop offset="60%" stopColor="#9db4c5" />
                <stop offset="80%" stopColor="#53b7ff" />
                <stop offset="100%" stopColor="#27465f" />
              </linearGradient>
            </defs>
            <rect width="320" height="450" rx="8" fill="#09131c" />
            <text x="16" y="24" fill="#9db4c5" fontSize="11" fontFamily="'Instrument Sans', sans-serif" fontWeight="500" letterSpacing="1.5" opacity="0.7">DATA</text>
            <g opacity="0.3">
              <line x1="0" y1="75" x2="320" y2="75" stroke="#27465f" strokeWidth="0.5" />
              <line x1="0" y1="112" x2="320" y2="112" stroke="#27465f" strokeWidth="0.5" />
              <line x1="0" y1="150" x2="320" y2="150" stroke="#27465f" strokeWidth="0.5" />
              <line x1="0" y1="187" x2="320" y2="187" stroke="#27465f" strokeWidth="0.5" />
              <line x1="0" y1="225" x2="320" y2="225" stroke="#27465f" strokeWidth="0.5" />
              <line x1="0" y1="262" x2="320" y2="262" stroke="#27465f" strokeWidth="0.5" />
              <line x1="0" y1="300" x2="320" y2="300" stroke="#27465f" strokeWidth="0.5" />
              <line x1="0" y1="337" x2="320" y2="337" stroke="#27465f" strokeWidth="0.5" />
              <line x1="0" y1="375" x2="320" y2="375" stroke="#27465f" strokeWidth="0.5" />
              <line x1="0" y1="412" x2="320" y2="412" stroke="#27465f" strokeWidth="0.5" />
            </g>
            <g className="data-layers__bars">
              <rect x="12" y="420" width="17" height="20" fill="url(#dl-barB)" opacity="0.85" rx="2" />
              <rect x="35" y="370" width="17" height="70" fill="url(#dl-barA)" opacity="0.85" rx="2" />
              <rect x="58" y="290" width="17" height="150" fill="url(#dl-barA)" opacity="0.85" rx="2" />
              <rect x="81" y="210" width="17" height="230" fill="url(#dl-barA)" opacity="0.85" rx="2" />
              <rect x="104" y="170" width="17" height="270" fill="url(#dl-barB)" opacity="0.85" rx="2" />
              <rect x="127" y="130" width="17" height="310" fill="url(#dl-barA)" opacity="0.85" rx="2" />
              <rect x="150" y="80" width="17" height="360" fill="url(#dl-barA)" opacity="0.85" rx="2" />
              <rect x="173" y="110" width="17" height="330" fill="url(#dl-barA)" opacity="0.85" rx="2" />
              <rect x="196" y="190" width="17" height="250" fill="url(#dl-barB)" opacity="0.85" rx="2" />
              <rect x="219" y="100" width="17" height="340" fill="url(#dl-barA)" opacity="0.85" rx="2" />
              <rect x="242" y="150" width="17" height="290" fill="url(#dl-barA)" opacity="0.85" rx="2" />
              <rect x="265" y="310" width="17" height="130" fill="url(#dl-barB)" opacity="0.85" rx="2" />
              <rect x="288" y="230" width="17" height="210" fill="url(#dl-barA)" opacity="0.85" rx="2" />
            </g>
            <rect width="320" height="450" rx="8" fill="none" stroke="#53b7ff" strokeWidth="1.5" opacity="0.3" />
          </svg>
        </div>

        {/* Front layer: Action (gauges, sliders, toggles) */}
        <div className="data-layers__panel data-layers__panel--data">
          <svg viewBox="0 0 320 450" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dl-gaugeA" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#27465f" />
                <stop offset="50%" stopColor="#477fa8" />
                <stop offset="100%" stopColor="#75b9e4" />
              </linearGradient>
            </defs>
            <rect width="320" height="450" rx="8" fill="#09131c" />
            <text x="16" y="24" fill="#9db4c5" fontSize="11" fontFamily="'Instrument Sans', sans-serif" fontWeight="500" letterSpacing="1.5" opacity="0.7">ACTION</text>

            {/* Gauge 1 — pH */}
            <g transform="translate(90, 100)">
              <circle r="50" fill="none" stroke="#0c2130" strokeWidth="7" strokeDasharray="200 114" strokeLinecap="round" transform="rotate(135)" />
              <circle r="50" fill="none" stroke="url(#dl-gaugeA)" strokeWidth="7" strokeDasharray="120 194" strokeLinecap="round" transform="rotate(135)" opacity="0.8" />
              <line x1="0" y1="4" x2="0" y2="-36" stroke="#53b7ff" strokeWidth="2" strokeLinecap="round" transform="rotate(-15)" />
              <circle r="4" fill="#0c2130" />
              <circle r="2" fill="#53b7ff" opacity="0.6" />
              <text y="22" fill="#9db4c5" fontSize="8" fontFamily="'Instrument Sans', sans-serif" textAnchor="middle" letterSpacing="1" opacity="0.6">pH</text>
              <text y="34" fill="#53b7ff" fontSize="12" fontFamily="'Instrument Sans', sans-serif" fontWeight="600" textAnchor="middle">7.2</text>
            </g>

            {/* Gauge 2 — DO */}
            <g transform="translate(230, 100)">
              <circle r="50" fill="none" stroke="#0c2130" strokeWidth="7" strokeDasharray="200 114" strokeLinecap="round" transform="rotate(135)" />
              <circle r="50" fill="none" stroke="url(#dl-gaugeA)" strokeWidth="7" strokeDasharray="150 164" strokeLinecap="round" transform="rotate(135)" opacity="0.8" />
              <line x1="0" y1="4" x2="0" y2="-36" stroke="#53b7ff" strokeWidth="2" strokeLinecap="round" transform="rotate(15)" />
              <circle r="4" fill="#0c2130" />
              <circle r="2" fill="#53b7ff" opacity="0.6" />
              <text y="22" fill="#9db4c5" fontSize="8" fontFamily="'Instrument Sans', sans-serif" textAnchor="middle" letterSpacing="1" opacity="0.6">DO</text>
              <text y="34" fill="#53b7ff" fontSize="12" fontFamily="'Instrument Sans', sans-serif" fontWeight="600" textAnchor="middle">42%</text>
            </g>

            {/* Slider 1 — Feed Rate */}
            <g transform="translate(30, 200)">
              <text y="0" fill="#9db4c5" fontSize="8" fontFamily="'Instrument Sans', sans-serif" letterSpacing="1.2" opacity="0.5">FEED RATE</text>
              <rect x="0" y="10" width="200" height="4" rx="2" fill="#0c2130" />
              <rect x="0" y="10" width="130" height="4" rx="2" fill="url(#dl-gaugeA)" opacity="0.7" />
              <circle cx="130" cy="12" r="6" fill="#0c2130" />
              <circle cx="130" cy="12" r="3.5" fill="#53b7ff" opacity="0.7" />
              <text x="220" y="15" fill="#53b7ff" fontSize="10" fontFamily="'Instrument Sans', sans-serif" fontWeight="500">mL/h</text>
            </g>

            {/* Slider 2 — Temperature */}
            <g transform="translate(30, 243)">
              <text y="0" fill="#9db4c5" fontSize="8" fontFamily="'Instrument Sans', sans-serif" letterSpacing="1.2" opacity="0.5">TEMPERATURE</text>
              <rect x="0" y="10" width="200" height="4" rx="2" fill="#0c2130" />
              <rect x="0" y="10" width="90" height="4" rx="2" fill="url(#dl-gaugeA)" opacity="0.7" />
              <circle cx="90" cy="12" r="6" fill="#0c2130" />
              <circle cx="90" cy="12" r="3.5" fill="#53b7ff" opacity="0.7" />
              <text x="220" y="15" fill="#53b7ff" fontSize="10" fontFamily="'Instrument Sans', sans-serif" fontWeight="500">°C</text>
            </g>

            {/* Slider 3 — Agitation */}
            <g transform="translate(30, 286)">
              <text y="0" fill="#9db4c5" fontSize="8" fontFamily="'Instrument Sans', sans-serif" letterSpacing="1.2" opacity="0.5">AGITATION</text>
              <rect x="0" y="10" width="200" height="4" rx="2" fill="#0c2130" />
              <rect x="0" y="10" width="155" height="4" rx="2" fill="url(#dl-gaugeA)" opacity="0.7" />
              <circle cx="155" cy="12" r="6" fill="#0c2130" />
              <circle cx="155" cy="12" r="3.5" fill="#53b7ff" opacity="0.7" />
              <text x="220" y="15" fill="#53b7ff" fontSize="10" fontFamily="'Instrument Sans', sans-serif" fontWeight="500">RPM</text>
            </g>

            {/* Toggles */}
            <g transform="translate(30, 335)">
              <text y="0" fill="#9db4c5" fontSize="8" fontFamily="'Instrument Sans', sans-serif" letterSpacing="1.2" opacity="0.5">AUTOMATIONS</text>
              <g transform="translate(0, 16)">
                <rect x="0" y="0" width="36" height="18" rx="9" fill="#27465f" />
                <circle cx="27" cy="9" r="6" fill="#53b7ff" />
                <text x="44" y="13" fill="#53b7ff" fontSize="9" fontFamily="'Instrument Sans', sans-serif" fontWeight="500">pH CONTROL</text>
                <text x="200" y="13" fill="#53b7ff" fontSize="8" fontFamily="'Instrument Sans', sans-serif" opacity="0.7">ACTIVE</text>
              </g>
              <g transform="translate(0, 42)">
                <rect x="0" y="0" width="36" height="18" rx="9" fill="#27465f" />
                <circle cx="27" cy="9" r="6" fill="#53b7ff" />
                <text x="44" y="13" fill="#53b7ff" fontSize="9" fontFamily="'Instrument Sans', sans-serif" fontWeight="500">DO CASCADE</text>
                <text x="200" y="13" fill="#53b7ff" fontSize="8" fontFamily="'Instrument Sans', sans-serif" opacity="0.7">ACTIVE</text>
              </g>
              <g transform="translate(0, 68)">
                <rect x="0" y="0" width="36" height="18" rx="9" fill="#0c2130" />
                <circle cx="9" cy="9" r="6" fill="#27465f" />
                <text x="44" y="13" fill="#9db4c5" fontSize="9" fontFamily="'Instrument Sans', sans-serif" fontWeight="500" opacity="0.4">FEED SCHEDULE</text>
                <text x="200" y="13" fill="#9db4c5" fontSize="8" fontFamily="'Instrument Sans', sans-serif" opacity="0.3">OFF</text>
              </g>
            </g>

            <rect width="320" height="450" rx="8" fill="none" stroke="#53b7ff" strokeWidth="1.5" opacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
