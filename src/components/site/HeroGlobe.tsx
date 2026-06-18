/**
 * Animated SVG "globe" with arc flight paths between Nairobi, Dubai, Tel Aviv, Stockholm.
 * Pure SVG + CSS — no Three.js needed. Lightweight, edge-safe, responsive.
 */
export function HeroGlobe() {
  const cities = [
    { name: "Nairobi", x: 270, y: 320, color: "var(--color-accent)" },
    { name: "Dubai", x: 330, y: 230, color: "var(--color-accent)" },
    { name: "Tel Aviv", x: 245, y: 200, color: "var(--color-accent)" },
    { name: "Stockholm", x: 230, y: 110, color: "var(--color-accent)" },
  ];
  // Quadratic Bézier arcs between Nairobi and others
  const arcs = cities.slice(1).map((c) => {
    const nb = cities[0];
    const mx = (nb.x + c.x) / 2;
    const my = Math.min(nb.y, c.y) - 80;
    return `M ${nb.x} ${nb.y} Q ${mx} ${my} ${c.x} ${c.y}`;
  });

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 500 500" className="w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.78 0.15 75)" stopOpacity="0.35" />
            <stop offset="60%" stopColor="oklch(0.22 0.09 265)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="arc" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.15 75)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="oklch(0.78 0.15 75)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.78 0.15 75)" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="sphere" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="oklch(0.32 0.09 265)" />
            <stop offset="100%" stopColor="oklch(0.12 0.06 265)" />
          </radialGradient>
        </defs>

        {/* outer glow */}
        <circle cx="250" cy="250" r="240" fill="url(#glow)" />

        {/* sphere */}
        <circle cx="250" cy="250" r="180" fill="url(#sphere)" />

        {/* meridians/parallels - rotating slowly */}
        <g className="animate-orbit" style={{ transformOrigin: "250px 250px" }}>
          <ellipse cx="250" cy="250" rx="180" ry="180" fill="none" stroke="oklch(1 0 0 / 0.08)" />
          <ellipse cx="250" cy="250" rx="180" ry="60" fill="none" stroke="oklch(1 0 0 / 0.1)" />
          <ellipse cx="250" cy="250" rx="180" ry="110" fill="none" stroke="oklch(1 0 0 / 0.08)" />
          <ellipse cx="250" cy="250" rx="60" ry="180" fill="none" stroke="oklch(1 0 0 / 0.1)" />
          <ellipse cx="250" cy="250" rx="110" ry="180" fill="none" stroke="oklch(1 0 0 / 0.08)" />
          <line x1="70" y1="250" x2="430" y2="250" stroke="oklch(1 0 0 / 0.12)" />
        </g>

        {/* Africa silhouette (stylized) */}
        <path
          d="M255 175 q 30 5 38 35 q 8 30 -5 55 q -8 18 0 35 q 8 18 -8 38 q -12 18 -32 22 q -22 4 -32 -10 q -10 -14 -8 -32 q 2 -22 -8 -34 q -14 -18 -8 -42 q 6 -24 28 -42 q 12 -10 35 -10 z"
          fill="oklch(0.42 0.08 265)"
          opacity="0.35"
        />

        {/* arc flight paths */}
        {arcs.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="url(#arc)" strokeWidth="1.5" fill="none" />
            <path d={d} stroke="oklch(0.78 0.15 75)" strokeWidth="2" fill="none" className="animate-dash-flow" opacity="0.85" />
          </g>
        ))}

        {/* city nodes */}
        {cities.map((c) => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="8" fill="oklch(0.78 0.15 75 / 0.25)" className="animate-pulse-node" />
            <circle cx={c.x} cy={c.y} r="3.5" fill="oklch(0.85 0.16 75)" />
            <text
              x={c.x + 10}
              y={c.y - 8}
              fontSize="10"
              fill="oklch(0.92 0.04 250)"
              fontFamily="JetBrains Mono, monospace"
              letterSpacing="0.08em"
            >
              {c.name.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
