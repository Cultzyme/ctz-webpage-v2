/**
 * ScaleUpVisual — 3 bioreactors in diagonal (Lab → Pilot → Plant)
 * CSS-only animation triggered by IntersectionObserver via data-reveal.
 * Color palette matched to cultzyme.com design system.
 */

export default function ScaleUpVisual() {
  return (
    <div className="scale-visual" data-reveal aria-label="Scale-up progression: lab to pilot to plant">
      <div className="scale-visual__canvas" aria-hidden="true">
        <svg viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Cylinder gradient for 3D volume */}
            <linearGradient id="sv-cylinder" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1c2d3e" />
              <stop offset="15%" stopColor="#2a3f54" />
              <stop offset="35%" stopColor="#3d5a75" />
              <stop offset="50%" stopColor="#4a6d8a" />
              <stop offset="65%" stopColor="#3d5a75" />
              <stop offset="85%" stopColor="#2a3f54" />
              <stop offset="100%" stopColor="#1c2d3e" />
            </linearGradient>
            {/* Glass cylinder */}
            <linearGradient id="sv-glass" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(80,130,180,0.1)" />
              <stop offset="40%" stopColor="rgba(120,170,210,0.06)" />
              <stop offset="100%" stopColor="rgba(70,110,160,0.08)" />
            </linearGradient>
            {/* Dome for head plates */}
            <radialGradient id="sv-dome" cx="45%" cy="40%">
              <stop offset="0%" stopColor="#3d5a75" />
              <stop offset="60%" stopColor="#2a3f54" />
              <stop offset="100%" stopColor="#1c2d3e" />
            </radialGradient>
            {/* Cone gradient */}
            <linearGradient id="sv-cone" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1c2d3e" />
              <stop offset="30%" stopColor="#345570" />
              <stop offset="70%" stopColor="#345570" />
              <stop offset="100%" stopColor="#1c2d3e" />
            </linearGradient>
            {/* Housing gradient */}
            <linearGradient id="sv-housing" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0c1a28" />
              <stop offset="20%" stopColor="#132636" />
              <stop offset="50%" stopColor="#162d40" />
              <stop offset="80%" stopColor="#132636" />
              <stop offset="100%" stopColor="#0c1a28" />
            </linearGradient>
            {/* Specular highlight */}
            <linearGradient id="sv-spec" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(160,200,240,0.1)" />
              <stop offset="50%" stopColor="rgba(160,200,240,0.02)" />
              <stop offset="100%" stopColor="rgba(160,200,240,0)" />
            </linearGradient>
          </defs>

          {/* ========== LAB VESSEL (ambr) — scale 0.7 ========== */}
          <g className="scale-visual__vessel scale-visual__vessel--lab" transform="translate(20, 10) scale(0.7)">
            <ellipse cx="50" cy="132" rx="26" ry="4" fill="#53b7ff" opacity="0.04" />
            <rect x="26" y="28" width="48" height="98" rx="3" fill="url(#sv-cylinder)" opacity="0.25" />
            <rect x="34" y="30" width="8" height="94" rx="3" fill="url(#sv-spec)" opacity="0.4" />
            <rect x="25.5" y="28" width="1" height="98" rx="0.5" fill="#53b7ff" opacity="0.1" />
            <rect x="26" y="122" width="48" height="5" rx="2.5" fill="#162d40" />
            <rect x="28" y="62" width="44" height="58" rx="2" fill="#d4a017" opacity="0.15" />
            <line x1="28" y1="62" x2="72" y2="62" stroke="#eab308" strokeWidth="1" opacity="0.25" />
            <line x1="50" y1="24" x2="50" y2="116" stroke="#345570" strokeWidth="1" opacity="0.2" />
            <line x1="40" y1="108" x2="60" y2="108" stroke="#345570" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
            <ellipse cx="50" cy="26" rx="28" ry="5.5" fill="#162d40" />
            <ellipse cx="50" cy="24.5" rx="26" ry="4.5" fill="url(#sv-dome)" opacity="0.5" />
            <rect x="33" y="12" width="10" height="12" rx="4" fill="#162d40" />
            <rect x="55" y="6" width="10" height="18" rx="4" fill="#162d40" />
            <ellipse cx="38" cy="12" rx="5.5" ry="2" fill="#0c1a28" />
            <ellipse cx="60" cy="6" rx="5.5" ry="2" fill="#0c1a28" />
            {/* Tubing */}
            <path d="M60,8 C78,0 86,10 84,30 C83,38 78,40 76,38" fill="none" stroke="#4a6d8a" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M60,6 C82,-4 90,8 88,28 C87,36 80,40 76,36" fill="none" stroke="#4a6d8a" strokeWidth="2" strokeLinecap="round" />
            <path d="M60,4 C84,-6 94,6 92,26 C91,34 82,40 76,34" fill="none" stroke="#3d5a75" strokeWidth="2" strokeLinecap="round" />
            <path d="M60,10 C74,2 84,14 82,32 C81,40 76,42 76,40" fill="none" stroke="#3d5a75" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="50" cy="134" rx="20" ry="2.5" fill="#53b7ff" opacity="0.03" />
          </g>

          {/* ========== PILOT VESSEL — scale 1.15 ========== */}
          <g className="scale-visual__vessel scale-visual__vessel--pilot" transform="translate(155, 225) scale(1.15)">
            <ellipse cx="50" cy="150" rx="55" ry="10" fill="#53b7ff" opacity="0.04" />
            <rect x="5" y="148" width="90" height="5" rx="2" fill="#162d40" />
            <rect x="5" y="147" width="90" height="2" rx="1" fill="#1c2d3e" />
            <circle cx="15" cy="155" r="3.5" fill="#0c1a28" />
            <circle cx="85" cy="155" r="3.5" fill="#0c1a28" />
            <polygon points="20,120 80,120 65,145 35,145" fill="url(#sv-cone)" />
            <polygon points="40,120 60,120 55,140 45,140" fill="rgba(160,200,240,0.04)" />
            <rect x="44" y="143" width="12" height="7" rx="2" fill="#1c2d3e" />
            <rect x="15" y="30" width="70" height="92" rx="4" fill="url(#sv-cylinder)" />
            <rect x="32" y="32" width="12" height="88" rx="3" fill="url(#sv-spec)" opacity="0.5" />
            <rect x="14.5" y="30" width="1.2" height="92" rx="0.5" fill="#53b7ff" opacity="0.12" />
            <ellipse cx="50" cy="75" rx="12" ry="30" fill="#071420" />
            <clipPath id="sv-sight"><ellipse cx="50" cy="75" rx="11" ry="28" /></clipPath>
            <rect x="39" y="72" width="22" height="32" fill="#d4a017" opacity="0.15" clipPath="url(#sv-sight)" />
            <rect x="39" y="72" width="22" height="1.5" rx="0.75" fill="#eab308" opacity="0.12" clipPath="url(#sv-sight)" />
            <ellipse cx="44" cy="62" rx="3" ry="12" fill="rgba(160,200,240,0.05)" />
            <rect x="85" y="50" width="13" height="4.5" rx="2" fill="#1c2d3e" />
            <rect x="85" y="70" width="13" height="4.5" rx="2" fill="#1c2d3e" />
            <rect x="85" y="90" width="13" height="4.5" rx="2" fill="#1c2d3e" />
            <rect x="2" y="60" width="13" height="4.5" rx="2" fill="#1c2d3e" />
            <rect x="2" y="100" width="13" height="4.5" rx="2" fill="#1c2d3e" />
            <ellipse cx="50" cy="30" rx="35" ry="10" fill="#2a3f54" />
            <ellipse cx="50" cy="28" rx="35" ry="8" fill="url(#sv-dome)" />
            <ellipse cx="44" cy="26" rx="15" ry="3.5" fill="rgba(160,200,240,0.05)" />
            <line x1="25" y1="22" x2="25" y2="8" stroke="#345570" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="75" y1="22" x2="75" y2="8" stroke="#345570" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="25" y1="8" x2="75" y2="8" stroke="#345570" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="40" y1="22" x2="38" y2="6" stroke="#345570" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="20" x2="50" y2="0" stroke="#345570" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="60" y1="22" x2="62" y2="6" stroke="#345570" strokeWidth="2" strokeLinecap="round" />
            <rect x="43" y="-4" width="14" height="8" rx="3" fill="#162d40" />
            <rect x="102" y="65" width="20" height="60" rx="3" fill="#071420" />
            <rect x="105" y="70" width="14" height="9" rx="1" fill="#050e18" />
            <rect x="106" y="71" width="12" height="7" rx="1" fill="#27465f" opacity="0.08" />
            <circle cx="112" cy="86" r="1.8" fill="#53b7ff" opacity="0.35" />
            <circle cx="112" cy="92" r="1.8" fill="#dc2626" opacity="0.15" />
            <path d="M15 40 Q9 55 15 70 Q9 85 15 100" fill="none" stroke="#1c2d3e" strokeWidth="1.5" />
            <path d="M85 40 Q91 55 85 70 Q91 85 85 100" fill="none" stroke="#1c2d3e" strokeWidth="1.5" />
            <ellipse cx="50" cy="158" rx="35" ry="3" fill="#53b7ff" opacity="0.025" />
          </g>

          {/* ========== PRODUCTION VESSEL — scale 1.5 ========== */}
          <g className="scale-visual__vessel scale-visual__vessel--plant" transform="translate(330, 500) scale(1.5)">
            <ellipse cx="50" cy="160" rx="70" ry="12" fill="#53b7ff" opacity="0.05" />
            <rect x="-5" y="155" width="110" height="9" rx="2" fill="#0c1a28" />
            <rect x="-5" y="154" width="110" height="2.5" rx="1" fill="#132636" />
            <rect x="5" y="164" width="12" height="9" rx="3" fill="#071420" />
            <circle cx="11" cy="176" r="4.5" fill="#050e18" />
            <circle cx="11" cy="176" r="1.8" fill="#132636" />
            <rect x="83" y="164" width="12" height="9" rx="3" fill="#071420" />
            <circle cx="89" cy="176" r="4.5" fill="#050e18" />
            <circle cx="89" cy="176" r="1.8" fill="#132636" />
            <rect x="0" y="15" width="100" height="140" rx="4" fill="url(#sv-housing)" />
            <rect x="-0.5" y="15" width="1.5" height="140" rx="0.5" fill="#53b7ff" opacity="0.08" />
            <line x1="0" y1="45" x2="100" y2="45" stroke="#132636" strokeWidth="0.5" />
            <line x1="0" y1="130" x2="100" y2="130" stroke="#132636" strokeWidth="0.5" />
            <rect x="12" y="20" width="76" height="108" rx="6" fill="url(#sv-cylinder)" />
            <rect x="28" y="22" width="14" height="104" rx="4" fill="url(#sv-spec)" opacity="0.4" />
            <rect x="12" y="48" width="76" height="2" rx="1" fill="#345570" opacity="0.35" />
            <rect x="12" y="85" width="76" height="2" rx="1" fill="#345570" opacity="0.35" />
            <rect x="28" y="52" width="44" height="60" rx="4" fill="#050e18" />
            <rect x="30" y="72" width="40" height="38" rx="3" fill="#d4a017" opacity="0.1" />
            <rect x="30" y="72" width="40" height="1.5" rx="0.75" fill="#eab308" opacity="0.15" />
            <rect x="32" y="56" width="2.5" height="48" rx="1" fill="rgba(148,180,220,0.04)" />
            <ellipse cx="50" cy="135" rx="10" ry="5.5" fill="#050e18" />
            <polygon points="12,128 88,128 72,152 28,152" fill="url(#sv-cone)" />
            <rect x="42" y="150" width="16" height="6" rx="2" fill="#162d40" />
            <rect x="100" y="55" width="18" height="7" rx="2" fill="#162d40" />
            <circle cx="120" cy="58.5" r="3.5" fill="#132636" />
            <rect x="100" y="72" width="18" height="7" rx="2" fill="#162d40" />
            <circle cx="120" cy="75.5" r="3.5" fill="#132636" />
            <rect x="100" y="89" width="18" height="7" rx="2" fill="#162d40" />
            <circle cx="120" cy="92.5" r="3.5" fill="#132636" />
            <rect x="100" y="106" width="18" height="7" rx="2" fill="#162d40" />
            <circle cx="120" cy="109.5" r="3.5" fill="#132636" />
            <rect x="-18" y="60" width="18" height="7" rx="2" fill="#162d40" />
            <rect x="-18" y="85" width="18" height="7" rx="2" fill="#162d40" />
            <rect x="-18" y="110" width="18" height="7" rx="2" fill="#162d40" />
            <rect x="-2" y="10" width="104" height="9" rx="3" fill="#132636" />
            <rect x="-2" y="9" width="104" height="2.5" rx="1" fill="#162d40" />
            <line x1="5" y1="9" x2="5" y2="-7" stroke="#2a3f54" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="95" y1="9" x2="95" y2="-7" stroke="#2a3f54" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="5" y1="-7" x2="95" y2="-7" stroke="#2a3f54" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="5" y1="0" x2="95" y2="0" stroke="#1c2d3e" strokeWidth="1" />
            <rect x="36" y="-20" width="28" height="15" rx="4" fill="#071420" />
            <rect x="43" y="-28" width="14" height="10" rx="3" fill="#050e18" />
            <rect x="44" y="-26" width="12" height="1" rx="0.5" fill="#53b7ff" opacity="0.15" />
            <line x1="20" y1="7" x2="16" y2="-10" stroke="#2a3f54" strokeWidth="2" strokeLinecap="round" />
            <line x1="80" y1="7" x2="84" y2="-10" stroke="#2a3f54" strokeWidth="2" strokeLinecap="round" />
            <circle cx="5" cy="140" r="4.5" fill="#991b1b" opacity="0.5" />
            <circle cx="5" cy="140" r="2.5" fill="#dc2626" opacity="0.3" />
            <rect x="128" y="30" width="28" height="105" rx="4" fill="#050e18" />
            <rect x="128" y="29" width="28" height="2" rx="1" fill="#0c1a28" />
            <rect x="131" y="36" width="22" height="16" rx="2" fill="#040a12" />
            <rect x="132" y="37" width="20" height="14" rx="1" fill="#27465f" opacity="0.06" />
            <rect x="139" y="58" width="10" height="22" rx="3" fill="#071420" />
            <circle cx="144" cy="63" r="2.5" fill="#53b7ff" opacity="0.4" />
            <circle cx="144" cy="70" r="2.5" fill="#ca8a04" opacity="0.2" />
            <circle cx="144" cy="77" r="2.5" fill="#dc2626" opacity="0.12" />
            <rect x="132" y="86" width="9" height="9" rx="2" fill="#0c1a28" />
            <rect x="144" y="86" width="9" height="9" rx="2" fill="#0c1a28" />
            <rect x="132" y="99" width="9" height="9" rx="2" fill="#0c1a28" />
            <rect x="144" y="99" width="9" height="9" rx="2" fill="#0c1a28" />
            <path d="M100 44 Q108 41 116 43 Q122 45 128 39" fill="none" stroke="#132636" strokeWidth="1.8" />
            <path d="M100 118 Q108 116 116 118 Q122 120 128 116" fill="none" stroke="#132636" strokeWidth="1.8" />
            <ellipse cx="50" cy="168" rx="45" ry="4" fill="#53b7ff" opacity="0.03" />
          </g>

          {/* ========== DIAGONAL LINE ========== */}
          <line className="scale-visual__line" x1="90" y1="45" x2="500" y2="490" stroke="#132636" strokeWidth="1.5" strokeLinecap="round" />
          <line className="scale-visual__line scale-visual__line--glow" x1="90" y1="45" x2="500" y2="490" stroke="#53b7ff" strokeWidth="3" strokeLinecap="round" opacity="0.04" />

          {/* ========== DOTS ========== */}
          <g className="scale-visual__dot scale-visual__dot--lab">
            <circle cx="90" cy="45" r="12" fill="#53b7ff" opacity="0.06" />
            <circle cx="90" cy="45" r="6" fill="#071420" />
            <circle cx="90" cy="45" r="3" fill="#53b7ff" opacity="0.7" />
          </g>
          <g className="scale-visual__dot scale-visual__dot--pilot">
            <circle cx="279" cy="250" r="12" fill="#53b7ff" opacity="0.06" />
            <circle cx="279" cy="250" r="6" fill="#071420" />
            <circle cx="279" cy="250" r="3" fill="#53b7ff" opacity="0.7" />
          </g>
          <g className="scale-visual__dot scale-visual__dot--plant">
            <circle cx="500" cy="490" r="12" fill="#53b7ff" opacity="0.06" />
            <circle cx="500" cy="490" r="6" fill="#071420" />
            <circle cx="500" cy="490" r="3" fill="#53b7ff" opacity="0.7" />
          </g>

          {/* ========== LABELS ========== */}
          <g className="scale-visual__labels">
            {/* LAB */}
            <text x="140" y="37" fill="#071017" fontSize="11" fontFamily="'Instrument Sans', sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="2">LAB</text>
            <text x="140" y="49" fill="#405768" fontSize="8" fontFamily="'Instrument Sans', sans-serif" fontWeight="500" textAnchor="middle" letterSpacing="1" opacity="0.7">DISCOVER</text>
            <text x="140" y="60" fill="#405768" fontSize="9" fontFamily="'Instrument Sans', sans-serif" fontWeight="400" textAnchor="middle" opacity="0.6">1–5 L</text>
            {/* PILOT */}
            <text x="329" y="242" fill="#071017" fontSize="11" fontFamily="'Instrument Sans', sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="2">PILOT</text>
            <text x="329" y="254" fill="#405768" fontSize="8" fontFamily="'Instrument Sans', sans-serif" fontWeight="500" textAnchor="middle" letterSpacing="1" opacity="0.7">TRANSFER</text>
            <text x="329" y="265" fill="#405768" fontSize="9" fontFamily="'Instrument Sans', sans-serif" fontWeight="400" textAnchor="middle" opacity="0.6">50–200 L</text>
            {/* PLANT */}
            <text x="550" y="482" fill="#071017" fontSize="11" fontFamily="'Instrument Sans', sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="2">PLANT</text>
            <text x="550" y="494" fill="#405768" fontSize="8" fontFamily="'Instrument Sans', sans-serif" fontWeight="500" textAnchor="middle" letterSpacing="1" opacity="0.7">CONTROL</text>
            <text x="550" y="505" fill="#405768" fontSize="9" fontFamily="'Instrument Sans', sans-serif" fontWeight="400" textAnchor="middle" opacity="0.6">2,000 L</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
