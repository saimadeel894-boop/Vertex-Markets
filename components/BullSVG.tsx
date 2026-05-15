export default function BullSVG() {
  return (
    <svg viewBox="0 0 340 310" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <defs>
        <radialGradient id="bBody" cx="50%" cy="30%" r="55%">
          <stop offset="0%"   stopColor="#8a9098"/>
          <stop offset="45%"  stopColor="#333333"/>
          <stop offset="100%" stopColor="#0a0a0a"/>
        </radialGradient>
        <radialGradient id="bHi" cx="38%" cy="20%" r="45%">
          <stop offset="0%"   stopColor="#d4d8e0" stopOpacity=".85"/>
          <stop offset="55%"  stopColor="#8a9098" stopOpacity=".35"/>
          <stop offset="100%" stopColor="#222222" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="bDark" cx="50%" cy="85%" r="55%">
          <stop offset="0%"   stopColor="#000000"/>
          <stop offset="100%" stopColor="#0a0a0a"/>
        </radialGradient>
        <linearGradient id="legG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#333333"/>
          <stop offset="100%" stopColor="#000000"/>
        </linearGradient>
        <linearGradient id="hornG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#c8cdd6"/>
          <stop offset="100%" stopColor="#333333"/>
        </linearGradient>
        <filter id="bullDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000" floodOpacity=".75"/>
        </filter>
      </defs>

      {/* Legs back */}
      <rect x="208" y="208" width="19" height="70" rx="8" fill="url(#legG)" transform="rotate(-6 208 208)"/>
      <rect x="113" y="208" width="19" height="70" rx="8" fill="url(#legG)" transform="rotate(6 113 208)"/>
      {/* Legs front */}
      <rect x="194" y="202" width="19" height="74" rx="8" fill="url(#legG)" transform="rotate(-10 194 202)"/>
      <rect x="127" y="202" width="19" height="74" rx="8" fill="url(#legG)" transform="rotate(10 127 202)"/>
      <rect x="194" y="202" width="19" height="74" rx="8" fill="url(#bHi)" opacity=".18" transform="rotate(-10 194 202)"/>

      {/* Main body */}
      <ellipse cx="170" cy="178" rx="98" ry="80" fill="url(#bBody)" filter="url(#bullDrop)"/>
      <ellipse cx="170" cy="178" rx="98" ry="80" fill="url(#bHi)" opacity=".42"/>
      <ellipse cx="170" cy="228" rx="72" ry="30" fill="url(#bDark)" opacity=".6"/>
      <path d="M100 150 Q170 118 238 150" stroke="rgba(255,255,255,0.1)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

      {/* Neck */}
      <path d="M122 146 C116 100 134 78 162 73 C176 68 195 78 196 102 L200 150 Z" fill="url(#bBody)"/>
      <path d="M122 146 C116 100 134 78 162 73 C176 68 195 78 196 102 L200 150 Z" fill="url(#bHi)" opacity=".25"/>

      {/* Head */}
      <ellipse cx="162" cy="86" rx="50" ry="44" fill="url(#bBody)" filter="url(#bullDrop)"/>
      <ellipse cx="162" cy="86" rx="50" ry="44" fill="url(#bHi)" opacity=".52"/>

      {/* Snout */}
      <ellipse cx="160" cy="112" rx="28" ry="17" fill="#333333"/>
      <circle cx="152" cy="112" r="5.5" fill="#000000"/>
      <circle cx="168" cy="112" r="5.5" fill="#000000"/>
      <circle cx="150" cy="110" r="1.8" fill="#4a5568" opacity=".7"/>
      <circle cx="166" cy="110" r="1.8" fill="#4a5568" opacity=".7"/>

      {/* Eyes */}
      <ellipse cx="138" cy="77" rx="9" ry="8" fill="#111111"/>
      <circle cx="138" cy="77" r="4.5" fill="#000000"/>
      <circle cx="136" cy="75" r="1.8" fill="rgba(255,255,255,0.55)"/>
      <ellipse cx="186" cy="77" rx="9" ry="8" fill="#111111"/>
      <circle cx="186" cy="77" r="4.5" fill="#000000"/>
      <circle cx="184" cy="75" r="1.8" fill="rgba(255,255,255,0.55)"/>

      {/* Ears */}
      <ellipse cx="116" cy="70" rx="15" ry="11" fill="url(#bBody)" transform="rotate(-30 116 70)"/>
      <ellipse cx="116" cy="70" rx="8"  ry="5"  fill="#222222" transform="rotate(-30 116 70)" opacity=".65"/>
      <ellipse cx="208" cy="70" rx="15" ry="11" fill="url(#bBody)" transform="rotate(30 208 70)"/>
      <ellipse cx="208" cy="70" rx="8"  ry="5"  fill="#222222" transform="rotate(30 208 70)" opacity=".65"/>

      {/* Left horn */}
      <path d="M120 55 C100 26 68 12 56 2 C70 5 86 18 103 36 C113 47 118 52 120 55Z" fill="url(#hornG)"/>
      <path d="M120 55 C100 26 68 12 56 2 C60 3 65 7 70 12 C84 24 100 40 118 54Z" fill="rgba(255,255,255,0.28)" opacity=".4"/>

      {/* Right horn */}
      <path d="M204 55 C224 26 256 12 268 2 C254 5 238 18 221 36 C211 47 206 52 204 55Z" fill="url(#hornG)"/>
      <path d="M204 55 C222 26 252 12 266 3 C260 5 244 18 226 36 C216 47 206 52 204 55Z" fill="rgba(255,255,255,0.28)" opacity=".3"/>

      {/* Hump */}
      <ellipse cx="208" cy="150" rx="38" ry="30" fill="url(#bBody)" opacity=".75"/>
      <ellipse cx="208" cy="150" rx="38" ry="30" fill="url(#bHi)" opacity=".22"/>

      {/* Tail */}
      <path d="M268 175 C284 168 294 156 289 144 C284 132 276 140 270 154 C267 160 267 168 268 175Z" fill="url(#legG)"/>
    </svg>
  )
}
