export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#C9963A] relative overflow-hidden flex flex-col justify-end px-6 md:px-13 pb-15 pt-28"
    >
      {/* Contour lines background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1400 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#0D0D0D" strokeWidth="0.7" opacity="0.07">
            <ellipse cx="1050" cy="380" rx="500" ry="220" />
            <ellipse cx="1050" cy="380" rx="430" ry="188" />
            <ellipse cx="1050" cy="380" rx="360" ry="158" />
            <ellipse cx="1050" cy="380" rx="290" ry="128" />
            <ellipse cx="1050" cy="380" rx="220" ry="98" />
            <ellipse cx="1050" cy="380" rx="150" ry="68" />
            <ellipse cx="1050" cy="380" rx="80" ry="38" />
          </g>
          <g stroke="#0D0D0D" strokeWidth="0.6" opacity="0.05">
            <ellipse cx="180" cy="650" rx="280" ry="130" />
            <ellipse cx="180" cy="650" rx="220" ry="100" />
            <ellipse cx="180" cy="650" rx="160" ry="70" />
            <ellipse cx="180" cy="650" rx="100" ry="44" />
          </g>
        </svg>
      </div>

      {/* Big ghost text */}
      <div
        className="absolute top-1/2 -left-2.5 -translate-y-1/2 font-['Bebas_Neue',sans-serif] text-[clamp(220px,28vw,400px)] leading-[0.82] text-transparent text-outline-ghost pointer-events-none select-none tracking-[0.02em] whitespace-nowrap z-0"
      >
        NBO
      </div>

      {/* Floating Live Stamp Badge */}
      <div className="absolute top-28 right-8 md:right-16 z-20 animate-float-slow hidden sm:flex flex-col items-center justify-center w-24 h-24 rounded-full border border-[#0D0D0D]/40 bg-[#EDE6D6]/50 backdrop-blur-xs text-center p-2 shadow-lg">
        <span className="font-mono text-[8px] uppercase tracking-widest text-[#0D0D0D]/80">Nairobi</span>
        <span className="font-['Caveat',cursive] text-lg font-bold text-[#0D0D0D] leading-none">Walks</span>
        <span className="font-mono text-[7px] uppercase tracking-wider text-[#0D0D0D]/60 font-bold">Est 2025</span>
      </div>

      {/* Hero Tag */}
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#0D0D0D] opacity-85 mb-4 relative z-10 animate-fade-up flex items-center">
        <span className="inline-block w-2 h-2 rounded-full bg-[#0D0D0D] animate-pulse-dot mr-2.5" />
        Nairobi · Urban Design · Social Enterprise · Est. 2025
      </div>

      {/* Hero Title */}
      <h1 className="font-['Bebas Neue',sans-serif] text-[clamp(70px,12vw,190px)] leading-[0.85] tracking-[0.02em] text-[#0D0D0D] relative z-10 mb-6 animate-fade-up">
        NAIROBI
        <br />
        <span className="text-outline-ink">BY</span>
        <br />
        DESIGN
      </h1>

      {/* City SVG - KICC Silhouette */}
      <div className="absolute bottom-[290px] left-4/5 -translate-x-1/2 w-[min(900px,90vw)] pointer-events-none opacity-100 z-1 animate-city-rise">
        <svg
          viewBox="0 0 900 340"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_20px_40px_rgba(13,13,13,0.3)] w-full"
        >
          <defs>
            <linearGradient id="hfL" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0D0D0D" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0D0D0D" stopOpacity="0.74" />
            </linearGradient>
            <linearGradient id="hfR" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0D0D0D" stopOpacity="0.46" />
              <stop offset="100%" stopColor="#0D0D0D" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="hfT" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0D0D0D" stopOpacity="0.97" />
              <stop offset="100%" stopColor="#0D0D0D" stopOpacity="0.82" />
            </linearGradient>
            <linearGradient id="hsh" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0D0D0D" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0D0D0D" stopOpacity="0" />
            </linearGradient>
            <pattern
              id="hwA"
              x="0"
              y="0"
              width="7"
              height="9"
              patternUnits="userSpaceOnUse"
            >
              <rect width="4" height="5.5" fill="#C9963A" opacity="0.9" />
            </pattern>
            <pattern
              id="hwB"
              x="0"
              y="0"
              width="6"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <rect width="3.5" height="5" fill="#C9963A" opacity="0.85" />
            </pattern>
            <clipPath id="hcpKL">
              <polygon points="330,322 390,292 390,42 330,72" />
            </clipPath>
            <clipPath id="hcpKR">
              <polygon points="390,292 450,322 450,72 390,42" />
            </clipPath>
            <clipPath id="hcpTL">
              <polygon points="458,310 514,282 514,68 458,96" />
            </clipPath>
            <clipPath id="hcpTR">
              <polygon points="514,282 570,310 570,96 514,68" />
            </clipPath>
            <clipPath id="hcpWL">
              <polygon points="215,318 288,284 288,168 215,202" />
            </clipPath>
            <clipPath id="hcpWR">
              <polygon points="288,284 361,318 361,202 288,168" />
            </clipPath>
            <clipPath id="hcpML">
              <polygon points="598,302 654,276 654,146 598,172" />
            </clipPath>
            <clipPath id="hcpMR">
              <polygon points="654,276 710,302 710,172 654,146" />
            </clipPath>
          </defs>

          {/* Ground shadow */}
          <ellipse cx="450" cy="334" rx="420" ry="12" fill="rgba(13,13,13,0.18)" />

          {/* Far background silhouettes */}
          <polygon points="62,326 98,308 98,258 62,276" fill="#0D0D0D" opacity="0.22" />
          <polygon points="98,308 134,326 134,276 98,258" fill="#0D0D0D" opacity="0.14" />
          <polygon points="62,276 98,258 134,276 98,294" fill="#0D0D0D" opacity="0.30" />
          <polygon points="752,316 788,298 788,248 752,266" fill="#0D0D0D" opacity="0.20" />
          <polygon points="788,298 824,316 824,266 788,248" fill="#0D0D0D" opacity="0.13" />
          <polygon points="752,266 788,248 824,266 788,284" fill="#0D0D0D" opacity="0.28" />

          {/* Wide block left */}
          <polygon points="215,318 288,284 288,168 215,202" fill="url(#hfL)" />
          <polygon points="288,284 361,318 361,202 288,168" fill="url(#hfR)" />
          <polygon points="215,202 288,168 361,202 288,236" fill="url(#hfT)" />
          <rect x="217" y="171" width="71" height="145" fill="url(#hwB)" clipPath="url(#hcpWL)" opacity="0.22" />
          <rect x="288" y="171" width="73" height="145" fill="url(#hwB)" clipPath="url(#hcpWR)" opacity="0.14" />
          <polygon points="222,202 288,168 354,202 288,236" fill="#0D0D0D" opacity="0.52" />
          <polygon points="361,318 476,318 476,272 361,168" fill="url(#hsh)" opacity="0.3" />

          {/* KICC Tower */}
          <polygon points="330,322 390,292 390,42 330,72" fill="url(#hfL)" />
          <polygon points="390,292 450,322 450,72 390,42" fill="url(#hfR)" />
          <polygon points="330,72 390,42 450,72 390,102" fill="url(#hfT)" />
          <rect x="332" y="46" width="58" height="274" fill="url(#hwA)" clipPath="url(#hcpKL)" opacity="0.28" />
          <rect x="390" y="46" width="60" height="246" fill="url(#hwA)" clipPath="url(#hcpKR)" opacity="0.18" />

          {/* KICC Amphitheatre Helipad & Spire */}
          <ellipse cx="390" cy="42" rx="34" ry="11" fill="#0D0D0D" opacity="0.88" />
          <polygon points="356,28 424,28 424,42 356,42" fill="url(#hfL)" opacity="0.85" />
          <polygon points="356,28 390,14 424,28 390,42" fill="url(#hfT)" opacity="0.94" />
          <ellipse cx="390" cy="28" rx="34" ry="11" fill="#0D0D0D" opacity="0.86" />
          <line x1="390" y1="28" x2="390" y2="0" stroke="#0D0D0D" strokeWidth="3.5" strokeLinecap="round" />
          <polygon points="450,322 586,322 586,278 450,42" fill="url(#hsh)" opacity="0.26" />

          {/* Tall slab middle-right */}
          <polygon points="458,310 514,282 514,68 458,96" fill="url(#hfL)" />
          <polygon points="514,282 570,310 570,96 514,68" fill="url(#hfR)" />
          <polygon points="458,96 514,68 570,96 514,124" fill="url(#hfT)" />
          <rect x="460" y="72" width="54" height="238" fill="url(#hwA)" clipPath="url(#hcpTL)" opacity="0.24" />
          <rect x="514" y="72" width="56" height="210" fill="url(#hwA)" clipPath="url(#hcpTR)" opacity="0.16" />
          <polygon points="468,96 514,72 560,96 514,120" fill="#0D0D0D" opacity="0.68" />
          <polygon points="474,88 514,68 554,88 514,108" fill="#0D0D0D" opacity="0.50" />

          {/* Mid block right */}
          <polygon points="598,302 654,276 654,146 598,172" fill="url(#hfL)" />
          <polygon points="654,276 710,302 710,172 654,146" fill="url(#hfR)" />
          <polygon points="598,172 654,146 710,172 654,198" fill="url(#hfT)" />
          <rect x="600" y="149" width="54" height="150" fill="url(#hwB)" clipPath="url(#hcpML)" opacity="0.22" />
          <rect x="654" y="149" width="56" height="150" fill="url(#hwB)" clipPath="url(#hcpMR)" opacity="0.14" />
          <polygon points="604,172 654,148 704,172 654,196" fill="#0D0D0D" opacity="0.50" />

          {/* Podiums */}
          <polygon points="160,334 276,312 276,292 160,314" fill="#0D0D0D" opacity="0.55" />
          <polygon points="276,312 392,334 392,314 276,292" fill="#0D0D0D" opacity="0.36" />
          <polygon points="160,314 276,292 392,314 276,336" fill="#0D0D0D" opacity="0.70" />
          <polygon points="512,330 624,310 624,290 512,310" fill="#0D0D0D" opacity="0.50" />
          <polygon points="624,310 736,330 736,310 624,290" fill="#0D0D0D" opacity="0.33" />
          <polygon points="512,310 624,290 736,310 624,330" fill="#0D0D0D" opacity="0.65" />
          <polygon points="30,340 450,314 870,340 450,366" fill="#0D0D0D" opacity="0.12" />
        </svg>
      </div>

      {/* Hero Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end relative z-10 animate-fade-up gap-6 sm:gap-0">
        <div className="font-['Fraunces',serif] italic text-[clamp(20px,2vw,38px)] leading-[1.2] max-w-[520px] text-[#0D0D0D]">
          Come understand the
          <br />
          <em className="not-italic underline underline-offset-4 decoration-[#0D0D0D]">
            urban language
          </em>{" "}
          of Nairobi.
        </div>
        <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#0D0D0D] opacity-50 flex items-center gap-2.5">
          <span className="block w-[1px] h-[48px] bg-[#0D0D0D] opacity-40" />
          Scroll to explore
        </div>
      </div>

      {/* Bottom Rule */}
      <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-[#0D0D0D]" />
    </section>
  );
}
