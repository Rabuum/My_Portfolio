export function HeroBridgeSketch() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06] sm:opacity-[0.08]">
      <svg
        className="w-full h-full text-[#0F2D5C]"
        viewBox="0 0 1200 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Main Suspension Bridge Cable Curve */}
        <path d="M -100 200 Q 350 430 600 200 Q 850 430 1300 200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M -100 215 Q 350 445 600 215 Q 850 445 1300 215" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" strokeLinecap="round" fill="none" />

        {/* Structural Suspension Hangers */}
        {[100, 150, 200, 250, 300, 400, 450, 500, 550, 650, 700, 750, 800, 900, 950, 1000, 1050, 1100].map((x) => (
          <line key={x} x1={x} y1="280" x2={x} y2="430" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.7" />
        ))}

        {/* Cable Stayed Pylon Towers */}
        <path d="M 350 480 L 350 100 M 358 480 L 358 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M 850 480 L 850 100 M 858 480 L 858 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Pylon Cross Ties */}
        <line x1="345" y1="180" x2="363" y2="180" stroke="currentColor" strokeWidth="1.5" />
        <line x1="345" y1="280" x2="363" y2="280" stroke="currentColor" strokeWidth="1.5" />
        <line x1="845" y1="180" x2="863" y2="180" stroke="currentColor" strokeWidth="1.5" />
        <line x1="845" y1="280" x2="863" y2="280" stroke="currentColor" strokeWidth="1.5" />

        {/* Radiating Cable Stays from Pylons */}
        <line x1="354" y1="120" x2="100" y2="430" stroke="currentColor" strokeWidth="1" />
        <line x1="354" y1="150" x2="180" y2="430" stroke="currentColor" strokeWidth="1" />
        <line x1="354" y1="180" x2="260" y2="430" stroke="currentColor" strokeWidth="1" />
        <line x1="354" y1="120" x2="600" y2="430" stroke="currentColor" strokeWidth="1" />
        <line x1="354" y1="150" x2="520" y2="430" stroke="currentColor" strokeWidth="1" />
        <line x1="354" y1="180" x2="440" y2="430" stroke="currentColor" strokeWidth="1" />

        <line x1="854" y1="120" x2="600" y2="430" stroke="currentColor" strokeWidth="1" />
        <line x1="854" y1="150" x2="680" y2="430" stroke="currentColor" strokeWidth="1" />
        <line x1="854" y1="180" x2="760" y2="430" stroke="currentColor" strokeWidth="1" />
        <line x1="854" y1="120" x2="1100" y2="430" stroke="currentColor" strokeWidth="1" />
        <line x1="854" y1="150" x2="1020" y2="430" stroke="currentColor" strokeWidth="1" />
        <line x1="854" y1="180" x2="940" y2="430" stroke="currentColor" strokeWidth="1" />

        {/* Smooth Structural Bridge Arch Girder Curve */}
        <path d="M -50 440 Q 600 240 1250 440" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M -50 430 Q 600 230 1250 430" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="8 4" />

        {/* Continuous Highway Deck Girder */}
        <line x1="-100" y1="430" x2="1300" y2="430" stroke="currentColor" strokeWidth="2.5" />
        <line x1="-100" y1="442" x2="1300" y2="442" stroke="currentColor" strokeWidth="1.5" />

        {/* Smooth Hydraulic River Water Contour Waves */}
        <path d="M -100 465 C 200 450 400 480 700 465 C 1000 450 1100 475 1300 465" stroke="currentColor" strokeWidth="1.25" opacity="0.6" fill="none" />
        <path d="M -100 482 C 250 470 450 495 750 482 C 1050 470 1150 490 1300 482" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" opacity="0.4" fill="none" />
      </svg>
    </div>
  );
}
