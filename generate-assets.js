// generate-assets.js
// Script to generate SVG assets for NSS CELL UEM JAIPUR website
const fs = require('fs');
const path = require('path');

// 1. NSS LOGO SVG
const nssLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <defs>
    <radialGradient id="nssBlueGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1a365d" />
      <stop offset="100%" stop-color="#0b1d3a" />
    </radialGradient>
    <radialGradient id="nssRedGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e63946" />
      <stop offset="100%" stop-color="#b7094c" />
    </radialGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Outer Blue Ring -->
  <circle cx="150" cy="150" r="142" fill="url(#nssBlueGrad)" stroke="#f1c40f" stroke-width="4" filter="url(#shadow)"/>
  
  <!-- Outer Ring Text Path -->
  <path id="textCircleUpper" d="M 30,150 A 120,120 0 1,1 270,150" fill="none"/>
  <path id="textCircleLower" d="M 270,150 A 120,120 0 0,1 30,150" fill="none"/>
  
  <text font-family="'Montserrat', 'Arial Black', sans-serif" font-size="16.5" font-weight="900" fill="#ffffff" letter-spacing="2.5">
    <textPath href="#textCircleUpper" startOffset="50%" text-anchor="middle">
      NATIONAL SERVICE SCHEME
    </textPath>
  </text>
  <text font-family="'Montserrat', 'Arial Black', sans-serif" font-size="14" font-weight="800" fill="#f1c40f" letter-spacing="3">
    <textPath href="#textCircleLower" startOffset="50%" text-anchor="middle">
      ★ NOT ME BUT YOU ★
    </textPath>
  </text>

  <!-- Inner Gold Ring -->
  <circle cx="150" cy="150" r="102" fill="none" stroke="#f1c40f" stroke-width="4"/>
  
  <!-- Red Center Wheel Circle -->
  <circle cx="150" cy="150" r="98" fill="url(#nssRedGrad)"/>

  <!-- Konark Wheel Spokes & Rim -->
  <!-- 8 Main Spokes (represented as Konark chariot wheel bars) -->
  <g stroke="#ffffff" stroke-width="5" stroke-linecap="round">
    <!-- 8 Primary Spokes -->
    <line x1="150" y1="52" x2="150" y2="248" />
    <line x1="52" y1="150" x2="248" y2="150" />
    <line x1="80.7" y1="80.7" x2="219.3" y2="219.3" />
    <line x1="80.7" y1="219.3" x2="219.3" y2="80.7" />
  </g>
  <g stroke="#f1c40f" stroke-width="3" stroke-linecap="round" opacity="0.9">
    <!-- 8 Secondary Spokes -->
    <line x1="112.5" y1="59.3" x2="187.5" y2="240.7" />
    <line x1="187.5" y1="59.3" x2="112.5" y2="240.7" />
    <line x1="59.3" y1="112.5" x2="240.7" y2="187.5" />
    <line x1="59.3" y1="187.5" x2="240.7" y2="112.5" />
  </g>

  <!-- Chariot Wheel Decorative Circles / 24 Bars -->
  <!-- Concentric decorative central hub -->
  <circle cx="150" cy="150" r="42" fill="#0b1d3a" stroke="#f1c40f" stroke-width="4"/>
  <circle cx="150" cy="150" r="22" fill="#e63946" stroke="#ffffff" stroke-width="3"/>
  <circle cx="150" cy="150" r="8" fill="#f1c40f"/>

  <!-- 8 Wheel Jewels / Studs -->
  <circle cx="150" cy="72" r="5" fill="#f1c40f" stroke="#0b1d3a" stroke-width="1.5"/>
  <circle cx="150" cy="228" r="5" fill="#f1c40f" stroke="#0b1d3a" stroke-width="1.5"/>
  <circle cx="72" cy="150" r="5" fill="#f1c40f" stroke="#0b1d3a" stroke-width="1.5"/>
  <circle cx="228" cy="150" r="5" fill="#f1c40f" stroke="#0b1d3a" stroke-width="1.5"/>
  <circle cx="95" cy="95" r="5" fill="#f1c40f" stroke="#0b1d3a" stroke-width="1.5"/>
  <circle cx="205" cy="205" r="5" fill="#f1c40f" stroke="#0b1d3a" stroke-width="1.5"/>
  <circle cx="95" cy="205" r="5" fill="#f1c40f" stroke="#0b1d3a" stroke-width="1.5"/>
  <circle cx="205" cy="95" r="5" fill="#f1c40f" stroke="#0b1d3a" stroke-width="1.5"/>
</svg>`;

// 2. UEM LOGO SVG
const uemLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" width="100%" height="100%">
  <defs>
    <linearGradient id="uemGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffd166" />
      <stop offset="100%" stop-color="#e09f3e" />
    </linearGradient>
    <linearGradient id="uemBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#073b4c" />
      <stop offset="100%" stop-color="#118ab2" />
    </linearGradient>
    <filter id="uemShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Outer circular frame -->
  <circle cx="160" cy="160" r="150" fill="#ffffff" stroke="#073b4c" stroke-width="6" filter="url(#uemShadow)"/>
  <circle cx="160" cy="160" r="142" fill="none" stroke="#e09f3e" stroke-width="3"/>

  <!-- University Herald Shield -->
  <path d="M 100,85 L 220,85 C 220,165 195,210 160,235 C 125,210 100,165 100,85 Z" 
        fill="url(#uemBlue)" stroke="#e09f3e" stroke-width="4"/>

  <!-- Shield Inner Compartments -->
  <path d="M 160,85 L 160,233" stroke="#e09f3e" stroke-width="2.5" />
  <path d="M 102,150 L 218,150" stroke="#e09f3e" stroke-width="2.5" />

  <!-- Shield Emblems: Book (Learning), Torch (Wisdom/Light), Atom (Science), Tower (Management) -->
  <!-- Open Book (top left) -->
  <path d="M 120,122 C 128,118 135,118 145,123 C 152,118 158,118 158,123 L 158,140 C 150,136 145,136 138,140 C 130,136 125,136 120,140 Z" fill="#ffd166"/>
  <!-- Flaming Torch (top right) -->
  <path d="M 188,115 L 192,138 L 184,138 Z" fill="#ffd166"/>
  <ellipse cx="188" cy="110" rx="5" ry="8" fill="#ef476f"/>

  <!-- Atom / Engineering Orbit (bottom left) -->
  <ellipse cx="130" cy="180" rx="14" ry="6" fill="none" stroke="#ffd166" stroke-width="2" transform="rotate(-30 130 180)"/>
  <ellipse cx="130" cy="180" rx="14" ry="6" fill="none" stroke="#ffd166" stroke-width="2" transform="rotate(30 130 180)"/>
  <circle cx="130" cy="180" r="3" fill="#ffffff"/>

  <!-- Gear / Factory / Rising Sun (bottom right) -->
  <circle cx="190" cy="180" r="9" fill="none" stroke="#ffd166" stroke-width="3"/>
  <circle cx="190" cy="180" r="4" fill="#ffffff"/>

  <!-- Text Arc: UNIVERSITY OF ENGINEERING & MANAGEMENT -->
  <path id="uemTextUpper" d="M 28,160 A 132,132 0 1,1 292,160" fill="none"/>
  <path id="uemTextLower" d="M 292,160 A 132,132 0 0,1 28,160" fill="none"/>

  <text font-family="'Montserrat', sans-serif" font-size="12.5" font-weight="900" fill="#073b4c" letter-spacing="1.5">
    <textPath href="#uemTextUpper" startOffset="50%" text-anchor="middle">
      UNIVERSITY OF ENGINEERING &amp; MANAGEMENT
    </textPath>
  </text>
  <text font-family="'Montserrat', sans-serif" font-size="14" font-weight="800" fill="#d90429" letter-spacing="3.5">
    <textPath href="#uemTextLower" startOffset="50%" text-anchor="middle">
      ★ JAIPUR CAMPUS ★
    </textPath>
  </text>

  <!-- Large UEM letters banner below shield -->
  <rect x="85" y="240" width="150" height="30" rx="6" fill="#073b4c" stroke="#e09f3e" stroke-width="2"/>
  <text x="160" y="261" font-family="'Poppins', sans-serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="4">UEM</text>
</svg>`;

// 3. UNNAT BHARAT ABHIYAN (UBA) LOGO SVG
const ubaLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" width="100%" height="100%">
  <defs>
    <linearGradient id="ubaGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a9d8f" />
      <stop offset="100%" stop-color="#1b4332" />
    </linearGradient>
    <linearGradient id="ubaOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f77f00" />
      <stop offset="100%" stop-color="#d62828" />
    </linearGradient>
  </defs>
  
  <!-- Outer Circular Base -->
  <circle cx="160" cy="160" r="148" fill="#ffffff" stroke="#2a9d8f" stroke-width="6"/>
  <circle cx="160" cy="160" r="140" fill="none" stroke="#f77f00" stroke-width="3"/>

  <!-- Upper Text Arc: UNNAT BHARAT ABHIYAN -->
  <path id="ubaTextTop" d="M 30,160 A 130,130 0 1,1 290,160" fill="none"/>
  <path id="ubaTextBot" d="M 290,160 A 130,130 0 0,1 30,160" fill="none"/>

  <text font-family="'Montserrat', sans-serif" font-size="15" font-weight="900" fill="#1b4332" letter-spacing="2">
    <textPath href="#ubaTextTop" startOffset="50%" text-anchor="middle">
      UNNAT BHARAT ABHIYAN
    </textPath>
  </text>
  <text font-family="'Montserrat', sans-serif" font-size="12" font-weight="700" fill="#f77f00" letter-spacing="2">
    <textPath href="#ubaTextBot" startOffset="50%" text-anchor="middle">
      GOVERNMENT OF INDIA
    </textPath>
  </text>

  <!-- Center Symbol: Rural Transformation, Sun, Sprouts, Village Cottage -->
  <!-- Radiant Sun -->
  <circle cx="160" cy="120" r="26" fill="url(#ubaOrange)"/>
  
  <!-- Sprouting Twin Leaves (Agriculture & Rural Growth) -->
  <path d="M 160,195 C 130,185 110,150 115,125 C 135,130 155,160 160,195 Z" fill="#2d6a4f"/>
  <path d="M 160,195 C 190,185 210,150 205,125 C 185,130 165,160 160,195 Z" fill="#52b788"/>
  <path d="M 160,130 L 160,205" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>

  <!-- Rural Village Hut silhouette -->
  <polygon points="135,218 160,198 185,218" fill="#d62828"/>
  <rect x="140" y="218" width="40" height="22" fill="#e9c46a"/>
  <rect x="153" y="226" width="14" height="14" fill="#6b705c"/>

  <!-- Hands Holding the Community (Supporting Ark) -->
  <path d="M 90,215 C 130,255 190,255 230,215 C 210,240 150,245 90,215 Z" fill="#2a9d8f"/>
</svg>`;

// 4. MYGOV LOGO SVG
const myGovSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="100%" height="100%">
  <rect width="240" height="80" rx="10" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
  <!-- Ashoka Chakra hint & MyGov letters -->
  <circle cx="45" cy="40" r="24" fill="#f8f9fa" stroke="#ff9933" stroke-width="4"/>
  <circle cx="45" cy="40" r="14" fill="#000088"/>
  <circle cx="45" cy="40" r="4" fill="#ffffff"/>
  <text x="85" y="47" font-family="'Poppins', sans-serif" font-size="28" font-weight="900" fill="#138808">My</text>
  <text x="135" y="47" font-family="'Poppins', sans-serif" font-size="28" font-weight="900" fill="#ff9933">Gov</text>
  <text x="86" y="65" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#555555" letter-spacing="1">MERI SARKAR</text>
</svg>`;

// 5. MY BHARAT LOGO SVG
const myBharatSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="100%" height="100%">
  <rect width="240" height="80" rx="10" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
  <g transform="translate(15, 12)">
    <circle cx="28" cy="28" r="24" fill="#ff7700"/>
    <path d="M 18,34 L 28,16 L 38,34 Z" fill="#ffffff"/>
    <circle cx="28" cy="26" r="3" fill="#138808"/>
    <text x="65" y="27" font-family="'Poppins', sans-serif" font-size="20" font-weight="900" fill="#0b2545">MY Bharat</text>
    <text x="65" y="46" font-family="sans-serif" font-size="10" font-weight="700" fill="#e63946" letter-spacing="0.5">Mera Yuva Bharat</text>
  </g>
</svg>`;

// 6. UEMJ ACADEMIC BUILDING HERO BACKDROP (Rich Vector Graphic + Scenic Campus)
const heroBuildingSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f2027" />
      <stop offset="40%" stop-color="#203a43" />
      <stop offset="100%" stop-color="#2c5364" />
    </linearGradient>
    <linearGradient id="domeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d4af37" />
      <stop offset="50%" stop-color="#f3e5ab" />
      <stop offset="100%" stop-color="#aa7c11" />
    </linearGradient>
    <linearGradient id="buildingRedStone" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#c94b4b" />
      <stop offset="50%" stop-color="#a83232" />
      <stop offset="100%" stop-color="#721c24" />
    </linearGradient>
    <linearGradient id="lawnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1b4332" />
      <stop offset="100%" stop-color="#081c15" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Sky & Atmospheric Lighting -->
  <rect width="1920" height="1080" fill="url(#skyGrad)"/>
  
  <!-- Subtle Moon & Stars / Atmospheric Aura -->
  <circle cx="1650" cy="220" r="70" fill="#fffbe6" opacity="0.8" filter="url(#glow)"/>
  
  <!-- Distant Aravalli Hills Horizon (Jaipur landscape) -->
  <path d="M 0,650 Q 250,550 500,630 T 1000,580 T 1500,620 T 1920,590 L 1920,800 L 0,800 Z" fill="#14213d" opacity="0.7"/>
  <path d="M 0,680 Q 300,620 650,670 T 1300,640 T 1920,660 L 1920,820 L 0,820 Z" fill="#1b263b" opacity="0.9"/>

  <!-- Academic Building (UEM Jaipur Iconic Gurukul Block) -->
  <!-- Base Foundation Platform -->
  <rect x="260" y="520" width="1400" height="260" rx="4" fill="url(#buildingRedStone)"/>
  <!-- Decorative Parapet / Cornice -->
  <rect x="230" y="500" width="1460" height="28" fill="#e9c46a"/>
  
  <!-- Central Grand Rotunda / Tower Base -->
  <rect x="760" y="320" width="400" height="200" fill="#b03a2e"/>
  
  <!-- Iconic Grand Central Dome of UEM Jaipur -->
  <!-- Dome base drum -->
  <rect x="790" y="270" width="340" height="60" fill="#e9c46a"/>
  <!-- Windows on dome drum -->
  <g fill="#203a43">
    <rect x="815" y="282" width="22" height="36" rx="10"/>
    <rect x="855" y="282" width="22" height="36" rx="10"/>
    <rect x="895" y="282" width="22" height="36" rx="10"/>
    <rect x="935" y="282" width="22" height="36" rx="10"/>
    <rect x="975" y="282" width="22" height="36" rx="10"/>
    <rect x="1015" y="282" width="22" height="36" rx="10"/>
    <rect x="1055" y="282" width="22" height="36" rx="10"/>
  </g>
  <!-- Main Hemisphere Dome -->
  <path d="M 800,270 C 800,120 1120,120 1120,270 Z" fill="url(#domeGrad)"/>
  <!-- Dome Finial / Kalash -->
  <rect x="955" y="90" width="10" height="32" fill="#aa7c11"/>
  <circle cx="960" cy="85" r="12" fill="#ffd166"/>
  <!-- Flag atop dome -->
  <line x1="960" y1="85" x2="960" y2="40" stroke="#ffd166" stroke-width="4"/>
  <polygon points="960,40 1005,52 960,64" fill="#ff9933"/>

  <!-- Left & Right Wing Chhatris (Traditional Rajasthani Architecture) -->
  <!-- Left Chhatri -->
  <rect x="320" y="440" width="120" height="70" fill="#e9c46a"/>
  <path d="M 310,440 C 310,380 450,380 450,440 Z" fill="url(#domeGrad)"/>
  <!-- Right Chhatri -->
  <rect x="1480" y="440" width="120" height="70" fill="#e9c46a"/>
  <path d="M 1470,440 C 1470,380 1610,380 1610,440 Z" fill="url(#domeGrad)"/>

  <!-- Grand Pillars / Colonnade -->
  <g fill="#f8edeb" stroke="#d4af37" stroke-width="2">
    <rect x="800" y="525" width="22" height="240"/>
    <rect x="850" y="525" width="22" height="240"/>
    <rect x="900" y="525" width="22" height="240"/>
    <rect x="950" y="525" width="22" height="240"/>
    <rect x="1000" y="525" width="22" height="240"/>
    <rect x="1050" y="525" width="22" height="240"/>
    <rect x="1100" y="525" width="22" height="240"/>
  </g>

  <!-- Wing Windows (Classical arched academic windows) -->
  <g fill="#ffd166" opacity="0.85">
    <!-- Left Wing Windows -->
    <rect x="340" y="560" width="40" height="65" rx="16"/>
    <rect x="420" y="560" width="40" height="65" rx="16"/>
    <rect x="500" y="560" width="40" height="65" rx="16"/>
    <rect x="580" y="560" width="40" height="65" rx="16"/>
    <rect x="660" y="560" width="40" height="65" rx="16"/>
    
    <rect x="340" y="670" width="40" height="65" rx="8"/>
    <rect x="420" y="670" width="40" height="65" rx="8"/>
    <rect x="500" y="670" width="40" height="65" rx="8"/>
    <rect x="580" y="670" width="40" height="65" rx="8"/>
    <rect x="660" y="670" width="40" height="65" rx="8"/>

    <!-- Right Wing Windows -->
    <rect x="1220" y="560" width="40" height="65" rx="16"/>
    <rect x="1300" y="560" width="40" height="65" rx="16"/>
    <rect x="1380" y="560" width="40" height="65" rx="16"/>
    <rect x="1460" y="560" width="40" height="65" rx="16"/>
    <rect x="1540" y="560" width="40" height="65" rx="16"/>

    <rect x="1220" y="670" width="40" height="65" rx="8"/>
    <rect x="1300" y="670" width="40" height="65" rx="8"/>
    <rect x="1380" y="670" width="40" height="65" rx="8"/>
    <rect x="1460" y="670" width="40" height="65" rx="8"/>
    <rect x="1540" y="670" width="40" height="65" rx="8"/>
  </g>

  <!-- University Inscription on Grand Portico -->
  <rect x="780" y="485" width="360" height="35" rx="4" fill="#0b2545" stroke="#f1c40f" stroke-width="2"/>
  <text x="960" y="508" font-family="'Montserrat', sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="3">UNIVERSITY OF ENGINEERING &amp; MANAGEMENT</text>

  <!-- Forecourt Steps & Campus Plaza -->
  <polygon points="150,860 1770,860 1920,1080 0,1080" fill="url(#lawnGrad)"/>
  
  <!-- Central Grand Walkway with Pathway Lights -->
  <polygon points="850,780 1070,780 1200,1080 720,1080" fill="#adb5bd" opacity="0.35"/>
  <polygon points="890,780 1030,780 1120,1080 800,1080" fill="#dee2e6" opacity="0.25"/>

  <!-- Manicured Campus Palm Trees / Greenery -->
  <g fill="#2d6a4f">
    <!-- Left trees -->
    <ellipse cx="200" cy="760" rx="45" ry="80"/>
    <ellipse cx="280" cy="770" rx="35" ry="60"/>
    <ellipse cx="140" cy="790" rx="40" ry="70"/>
    <!-- Right trees -->
    <ellipse cx="1720" cy="760" rx="45" ry="80"/>
    <ellipse cx="1640" cy="770" rx="35" ry="60"/>
    <ellipse cx="1780" cy="790" rx="40" ry="70"/>
  </g>

  <!-- Vignette & Warm Academic Lighting Overlay -->
  <rect width="1920" height="1080" fill="#050e1d" opacity="0.45"/>
</svg>`;

// Write all main assets
fs.writeFileSync(path.join(__dirname, 'assets', 'images', 'logos', 'nss-logo.svg'), nssLogoSvg);
fs.writeFileSync(path.join(__dirname, 'assets', 'images', 'logos', 'uem-logo.svg'), uemLogoSvg);
fs.writeFileSync(path.join(__dirname, 'assets', 'images', 'logos', 'unnat-bharat-abhiyan-logo.svg'), ubaLogoSvg);
fs.writeFileSync(path.join(__dirname, 'assets', 'images', 'logos', 'mygov-logo.svg'), myGovSvg);
fs.writeFileSync(path.join(__dirname, 'assets', 'images', 'logos', 'mybharat-logo.svg'), myBharatSvg);
fs.writeFileSync(path.join(__dirname, 'assets', 'images', 'hero', 'uemj-building.svg'), heroBuildingSvg);

console.log('Main logos and hero backdrop created successfully!');
