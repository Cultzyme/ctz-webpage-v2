/**
 * DataLayersVisual — 3 stacked depth layers (Cells → Antibodies → Data)
 * CSS-only animation triggered by IntersectionObserver via data-reveal.
 * Matches the existing Cultzyme website animation pattern.
 */

export default function DataLayersVisual() {
  return (
    <div className="data-layers" data-reveal aria-label="Three data layers: cells, antibodies, and process data">
      <div className="data-layers__stack" aria-hidden="true">
        {/* Back layer: Cells */}
        <div className="data-layers__panel data-layers__panel--cells">
          <svg viewBox="0 0 320 450" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dl-metalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="50%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
              <linearGradient id="dl-metalBlue2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="50%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#bfdbfe" />
              </linearGradient>
              <linearGradient id="dl-metalBlue3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a5b4fc" />
                <stop offset="50%" stopColor="#3730a3" />
                <stop offset="100%" stopColor="#a5b4fc" />
              </linearGradient>
            </defs>
            <rect width="320" height="450" rx="8" fill="#0f172a" />
            <text x="16" y="24" fill="#94a3b8" fontSize="11" fontFamily="'Instrument Sans', sans-serif" fontWeight="500" letterSpacing="1.5" opacity="0.7">CELLS</text>
            {/* Pills / capsules */}
            <g className="data-layers__drift">
              <rect x="12" y="40" width="90" height="34" rx="17" fill="url(#dl-metalBlue2)" opacity="0.8" transform="rotate(-30 57 57)" />
              <rect x="95" y="35" width="80" height="30" rx="15" fill="url(#dl-metalBlue)" opacity="0.8" transform="rotate(20 135 50)" />
              <rect x="200" y="50" width="75" height="28" rx="14" fill="url(#dl-metalBlue3)" opacity="0.8" transform="rotate(-15 237 64)" />
              <rect x="10" y="100" width="88" height="33" rx="16" fill="url(#dl-metalBlue)" opacity="0.8" transform="rotate(40 54 116)" />
              <rect x="120" y="90" width="55" height="50" rx="25" fill="url(#dl-metalBlue2)" opacity="0.8" transform="rotate(5 147 115)" />
              <rect x="210" y="95" width="92" height="34" rx="17" fill="url(#dl-metalBlue3)" opacity="0.8" transform="rotate(-25 256 112)" />
              <rect x="30" y="160" width="78" height="30" rx="15" fill="url(#dl-metalBlue2)" opacity="0.8" transform="rotate(45 69 175)" />
              <rect x="140" y="155" width="85" height="32" rx="16" fill="url(#dl-metalBlue)" opacity="0.8" transform="rotate(-10 182 171)" />
              <rect x="250" y="150" width="60" height="26" rx="13" fill="url(#dl-metalBlue3)" opacity="0.8" transform="rotate(30 280 163)" />
              <rect x="15" y="220" width="92" height="35" rx="17" fill="url(#dl-metalBlue)" opacity="0.8" transform="rotate(-25 61 237)" />
              <rect x="130" y="215" width="70" height="28" rx="14" fill="url(#dl-metalBlue3)" opacity="0.8" transform="rotate(55 165 229)" />
              <rect x="225" y="210" width="80" height="30" rx="15" fill="url(#dl-metalBlue2)" opacity="0.8" transform="rotate(-35 265 225)" />
              <rect x="25" y="280" width="82" height="32" rx="16" fill="url(#dl-metalBlue)" opacity="0.8" transform="rotate(30 66 296)" />
              <rect x="145" y="275" width="58" height="52" rx="26" fill="url(#dl-metalBlue2)" opacity="0.8" />
              <rect x="230" y="270" width="72" height="28" rx="14" fill="url(#dl-metalBlue3)" opacity="0.8" transform="rotate(-50 266 284)" />
              <rect x="10" y="340" width="90" height="34" rx="17" fill="url(#dl-metalBlue2)" opacity="0.8" transform="rotate(-30 55 357)" />
              <rect x="120" y="335" width="70" height="28" rx="14" fill="url(#dl-metalBlue)" opacity="0.8" transform="rotate(-10 155 349)" />
              <rect x="215" y="330" width="80" height="30" rx="15" fill="url(#dl-metalBlue2)" opacity="0.8" transform="rotate(35 255 345)" />
              <rect x="30" y="395" width="85" height="33" rx="16" fill="url(#dl-metalBlue)" opacity="0.8" transform="rotate(15 72 411)" />
              <rect x="140" y="390" width="80" height="30" rx="15" fill="url(#dl-metalBlue3)" opacity="0.8" transform="rotate(-40 180 405)" />
              <rect x="245" y="395" width="65" height="26" rx="13" fill="url(#dl-metalBlue2)" opacity="0.8" transform="rotate(10 277 408)" />
            </g>
            <rect width="320" height="450" rx="8" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
          </svg>
        </div>

        {/* Middle layer: Antibodies */}
        <div className="data-layers__panel data-layers__panel--antibodies">
          <svg viewBox="0 0 320 450" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dl-ab-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="50%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
              <linearGradient id="dl-ab-blue2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="50%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#bfdbfe" />
              </linearGradient>
            </defs>
            <rect width="320" height="450" rx="8" fill="#0f172a" />
            <text x="16" y="24" fill="#94a3b8" fontSize="11" fontFamily="'Instrument Sans', sans-serif" fontWeight="500" letterSpacing="1.5" opacity="0.7">ANTIBODIES</text>
            <g className="data-layers__drift data-layers__drift--alt">
              {/* Y-shaped antibodies */}
              <g transform="translate(45,60) scale(1.6)" opacity="0.7">
                <ellipse cx="0" cy="28" rx="9" ry="18" fill="url(#dl-ab-blue)" />
                <ellipse cx="0" cy="7" rx="7" ry="10" fill="url(#dl-ab-blue)" />
                <ellipse cx="-20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(-25 -20 -12)" />
                <ellipse cx="20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(25 20 -12)" />
                <circle cx="-30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
                <circle cx="30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
              </g>
              <g transform="translate(170,45) rotate(-20) scale(1.5)" opacity="0.7">
                <ellipse cx="0" cy="28" rx="9" ry="18" fill="url(#dl-ab-blue)" />
                <ellipse cx="0" cy="7" rx="7" ry="10" fill="url(#dl-ab-blue)" />
                <ellipse cx="-20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(-25 -20 -12)" />
                <ellipse cx="20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(25 20 -12)" />
                <circle cx="-30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
                <circle cx="30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
              </g>
              <g transform="translate(270,80) rotate(30) scale(1.4)" opacity="0.7">
                <ellipse cx="0" cy="28" rx="9" ry="18" fill="url(#dl-ab-blue)" />
                <ellipse cx="0" cy="7" rx="7" ry="10" fill="url(#dl-ab-blue)" />
                <ellipse cx="-20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(-25 -20 -12)" />
                <ellipse cx="20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(25 20 -12)" />
                <circle cx="-30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
                <circle cx="30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
              </g>
              <g transform="translate(80,175) rotate(40) scale(1.8)" opacity="0.7">
                <ellipse cx="0" cy="28" rx="9" ry="18" fill="url(#dl-ab-blue)" />
                <ellipse cx="0" cy="7" rx="7" ry="10" fill="url(#dl-ab-blue)" />
                <ellipse cx="-20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(-25 -20 -12)" />
                <ellipse cx="20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(25 20 -12)" />
                <circle cx="-30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
                <circle cx="30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
              </g>
              <g transform="translate(220,165) rotate(-10) scale(1.6)" opacity="0.7">
                <ellipse cx="0" cy="28" rx="9" ry="18" fill="url(#dl-ab-blue)" />
                <ellipse cx="0" cy="7" rx="7" ry="10" fill="url(#dl-ab-blue)" />
                <ellipse cx="-20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(-25 -20 -12)" />
                <ellipse cx="20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(25 20 -12)" />
                <circle cx="-30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
                <circle cx="30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
              </g>
              <g transform="translate(55,290) rotate(25) scale(1.5)" opacity="0.7">
                <ellipse cx="0" cy="28" rx="9" ry="18" fill="url(#dl-ab-blue)" />
                <ellipse cx="0" cy="7" rx="7" ry="10" fill="url(#dl-ab-blue)" />
                <ellipse cx="-20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(-25 -20 -12)" />
                <ellipse cx="20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(25 20 -12)" />
                <circle cx="-30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
                <circle cx="30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
              </g>
              <g transform="translate(180,280) rotate(-30) scale(1.7)" opacity="0.7">
                <ellipse cx="0" cy="28" rx="9" ry="18" fill="url(#dl-ab-blue)" />
                <ellipse cx="0" cy="7" rx="7" ry="10" fill="url(#dl-ab-blue)" />
                <ellipse cx="-20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(-25 -20 -12)" />
                <ellipse cx="20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(25 20 -12)" />
                <circle cx="-30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
                <circle cx="30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
              </g>
              <g transform="translate(120,385) rotate(15) scale(1.6)" opacity="0.7">
                <ellipse cx="0" cy="28" rx="9" ry="18" fill="url(#dl-ab-blue)" />
                <ellipse cx="0" cy="7" rx="7" ry="10" fill="url(#dl-ab-blue)" />
                <ellipse cx="-20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(-25 -20 -12)" />
                <ellipse cx="20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(25 20 -12)" />
                <circle cx="-30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
                <circle cx="30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
              </g>
              <g transform="translate(270,370) rotate(-5) scale(1.4)" opacity="0.7">
                <ellipse cx="0" cy="28" rx="9" ry="18" fill="url(#dl-ab-blue)" />
                <ellipse cx="0" cy="7" rx="7" ry="10" fill="url(#dl-ab-blue)" />
                <ellipse cx="-20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(-25 -20 -12)" />
                <ellipse cx="20" cy="-12" rx="14" ry="9" fill="url(#dl-ab-blue)" transform="rotate(25 20 -12)" />
                <circle cx="-30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
                <circle cx="30" cy="-18" r="9" fill="url(#dl-ab-blue)" opacity="0.75" />
              </g>
              {/* Cells (circles) */}
              <circle cx="60" cy="130" r="18" fill="url(#dl-ab-blue2)" opacity="0.75" stroke="#bfdbfe" strokeWidth="1" strokeOpacity="0.5" />
              <circle cx="60" cy="130" r="6" fill="#bfdbfe" opacity="0.5" />
              <circle cx="160" cy="120" r="15" fill="url(#dl-ab-blue2)" opacity="0.75" stroke="#bfdbfe" strokeWidth="1" strokeOpacity="0.5" />
              <circle cx="160" cy="120" r="5" fill="#bfdbfe" opacity="0.5" />
              <circle cx="250" cy="140" r="17" fill="url(#dl-ab-blue2)" opacity="0.75" stroke="#bfdbfe" strokeWidth="1" strokeOpacity="0.5" />
              <circle cx="250" cy="140" r="6" fill="#bfdbfe" opacity="0.5" />
              <circle cx="40" cy="240" r="19" fill="url(#dl-ab-blue2)" opacity="0.75" stroke="#bfdbfe" strokeWidth="1" strokeOpacity="0.5" />
              <circle cx="40" cy="240" r="7" fill="#bfdbfe" opacity="0.5" />
              <circle cx="155" cy="235" r="16" fill="url(#dl-ab-blue2)" opacity="0.75" stroke="#bfdbfe" strokeWidth="1" strokeOpacity="0.5" />
              <circle cx="155" cy="235" r="5" fill="#bfdbfe" opacity="0.5" />
              <circle cx="280" cy="250" r="14" fill="url(#dl-ab-blue2)" opacity="0.75" stroke="#bfdbfe" strokeWidth="1" strokeOpacity="0.5" />
              <circle cx="280" cy="250" r="5" fill="#bfdbfe" opacity="0.5" />
              <circle cx="100" cy="350" r="18" fill="url(#dl-ab-blue2)" opacity="0.75" stroke="#bfdbfe" strokeWidth="1" strokeOpacity="0.5" />
              <circle cx="100" cy="350" r="6" fill="#bfdbfe" opacity="0.5" />
              <circle cx="240" cy="340" r="15" fill="url(#dl-ab-blue2)" opacity="0.75" stroke="#bfdbfe" strokeWidth="1" strokeOpacity="0.5" />
              <circle cx="240" cy="340" r="5" fill="#bfdbfe" opacity="0.5" />
            </g>
            <rect width="320" height="450" rx="8" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
          </svg>
        </div>

        {/* Front layer: Data */}
        <div className="data-layers__panel data-layers__panel--data">
          <svg viewBox="0 0 320 450" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dl-barBlue" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="30%" stopColor="#3b82f6" />
                <stop offset="60%" stopColor="#93c5fd" />
                <stop offset="80%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e3a5f" />
              </linearGradient>
              <linearGradient id="dl-barRed" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="30%" stopColor="#2563eb" />
                <stop offset="60%" stopColor="#93c5fd" />
                <stop offset="80%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#172554" />
              </linearGradient>
            </defs>
            <rect width="320" height="450" rx="8" fill="#0f172a" />
            <text x="16" y="24" fill="#94a3b8" fontSize="11" fontFamily="'Instrument Sans', sans-serif" fontWeight="500" letterSpacing="1.5" opacity="0.7">DATA</text>
            {/* Grid */}
            <g opacity="0.4">
              <line x1="0" y1="75" x2="320" y2="75" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="0" y1="112" x2="320" y2="112" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="0" y1="150" x2="320" y2="150" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="0" y1="187" x2="320" y2="187" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="0" y1="225" x2="320" y2="225" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="0" y1="262" x2="320" y2="262" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="0" y1="300" x2="320" y2="300" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="0" y1="337" x2="320" y2="337" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="0" y1="375" x2="320" y2="375" stroke="#1e293b" strokeWidth="0.5" />
              <line x1="0" y1="412" x2="320" y2="412" stroke="#1e293b" strokeWidth="0.5" />
            </g>
            {/* Bars — grow upward from y=440 */}
            <g className="data-layers__bars">
              <rect x="12" y="420" width="17" height="20" fill="url(#dl-barRed)" opacity="0.85" rx="2" />
              <rect x="35" y="370" width="17" height="70" fill="url(#dl-barBlue)" opacity="0.85" rx="2" />
              <rect x="58" y="290" width="17" height="150" fill="url(#dl-barBlue)" opacity="0.85" rx="2" />
              <rect x="81" y="210" width="17" height="230" fill="url(#dl-barBlue)" opacity="0.85" rx="2" />
              <rect x="104" y="170" width="17" height="270" fill="url(#dl-barRed)" opacity="0.85" rx="2" />
              <rect x="127" y="130" width="17" height="310" fill="url(#dl-barBlue)" opacity="0.85" rx="2" />
              <rect x="150" y="80" width="17" height="360" fill="url(#dl-barBlue)" opacity="0.85" rx="2" />
              <rect x="173" y="110" width="17" height="330" fill="url(#dl-barBlue)" opacity="0.85" rx="2" />
              <rect x="196" y="190" width="17" height="250" fill="url(#dl-barRed)" opacity="0.85" rx="2" />
              <rect x="219" y="100" width="17" height="340" fill="url(#dl-barBlue)" opacity="0.85" rx="2" />
              <rect x="242" y="150" width="17" height="290" fill="url(#dl-barBlue)" opacity="0.85" rx="2" />
              <rect x="265" y="310" width="17" height="130" fill="url(#dl-barRed)" opacity="0.85" rx="2" />
              <rect x="288" y="230" width="17" height="210" fill="url(#dl-barBlue)" opacity="0.85" rx="2" />
            </g>
            <rect width="320" height="450" rx="8" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
