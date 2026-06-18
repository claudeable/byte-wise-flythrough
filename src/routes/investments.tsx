import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/investments")({
  head: () => ({
    meta: [
      { title: "International Investments — Byte Wise" },
      { name: "description", content: "Byte Wise's cross-border partnerships span Israel, the UAE, Sweden, and East Africa — focused on digital infrastructure, aviation, and food security." },
    ],
  }),
  component: InvestmentsPage,
});

const pins = [
  { name: "Stockholm", x: 470, y: 80, country: "Sweden" },
  { name: "Tel Aviv", x: 530, y: 200, country: "Israel" },
  { name: "Dubai", x: 600, y: 220, country: "UAE" },
  { name: "Nairobi", x: 555, y: 360, country: "Kenya" },
  { name: "Kampala", x: 530, y: 350, country: "Uganda" },
  { name: "Dar es Salaam", x: 575, y: 380, country: "Tanzania" },
];

const focus = [
  { title: "Digital Infrastructure", body: "Identity platforms, smart card hardware, secure data systems." },
  { title: "Aviation", body: "Safety, compliance, and operational advisory across operators and capital." },
  { title: "Food Security", body: "Cross-border staple commodity supply for institutional buyers." },
];

function InvestmentsPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 surface-dark">
        <div className="container-bw">
          <Reveal>
            <Eyebrow>International Investments</Eyebrow>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.02] max-w-4xl">
              East Africa, <span className="text-gradient-gold">globally networked.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75 leading-relaxed">
              Byte Wise builds and maintains cross-border partnerships that bring global expertise into East African markets — and East African opportunity to international capital.
            </p>
          </Reveal>
        </div>
      </section>

      {/* World map */}
      <section className="py-20 bg-surface">
        <div className="container-bw">
          <Reveal>
            <div className="rounded-3xl bg-primary text-primary-foreground p-6 md:p-10 overflow-hidden card-lift">
              <WorldMap pins={pins} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-24">
        <div className="container-bw">
          <Reveal><SectionHeading eyebrow="Investment focus" title="Where we put our weight." /></Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-5">
            {focus.map((f, i) => (
              <StaggerItem key={f.title}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-7 card-lift overflow-hidden">
                  <div className="absolute -top-4 -right-3 text-[100px] font-display font-bold leading-none text-muted/40">0{i + 1}</div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold">{f.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:scale-[1.03] transition-transform shadow-lift">
              Explore Partnership Opportunities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function WorldMap({ pins }: { pins: { name: string; x: number; y: number; country: string }[] }) {
  return (
    <svg viewBox="0 0 900 500" className="w-full h-auto">
      <defs>
        <radialGradient id="map-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.78 0.15 75 / 0.18)" />
          <stop offset="100%" stopColor="oklch(0.78 0.15 75 / 0)" />
        </radialGradient>
      </defs>
      {/* dotted world */}
      <g fill="oklch(1 0 0 / 0.18)">
        {Array.from({ length: 35 }).map((_, r) =>
          Array.from({ length: 60 }).map((_, c) => {
            const x = 30 + c * 14;
            const y = 30 + r * 13;
            // crude continent mask: keep dots inside elliptical bands
            const cx = 450, cy = 250;
            const inside =
              Math.hypot((x - cx) / 1, (y - cy) / 0.55) < 280 &&
              !(Math.hypot(x - 200, y - 130) < 90) && // gap
              !(Math.hypot(x - 750, y - 380) < 100); // gap
            if (!inside) return null;
            return <circle key={`${r}-${c}`} cx={x} cy={y} r="1.4" />;
          }),
        )}
      </g>
      {/* arcs from Nairobi */}
      {pins.slice(0, -2).map((p) => {
        const nb = pins[3];
        const mx = (nb.x + p.x) / 2;
        const my = Math.min(nb.y, p.y) - 70;
        const d = `M ${nb.x} ${nb.y} Q ${mx} ${my} ${p.x} ${p.y}`;
        return (
          <g key={p.name}>
            <path d={d} stroke="oklch(0.78 0.15 75 / 0.3)" strokeWidth="1.2" fill="none" />
            <path d={d} stroke="oklch(0.85 0.16 75)" strokeWidth="1.5" fill="none" className="animate-dash-flow" />
          </g>
        );
      })}
      {/* pins */}
      {pins.map((p, i) => (
        <g key={p.name} style={{ animation: `pulse-node 2.4s ease-in-out ${i * 0.2}s infinite`, transformOrigin: `${p.x}px ${p.y}px`, transformBox: "fill-box" }}>
          <circle cx={p.x} cy={p.y} r="14" fill="url(#map-glow)" />
          <circle cx={p.x} cy={p.y} r="4" fill="oklch(0.85 0.16 75)" />
          <text x={p.x + 10} y={p.y - 8} fontSize="11" fontFamily="JetBrains Mono" fill="oklch(0.92 0.04 250)" letterSpacing="0.08em">{p.name.toUpperCase()}</text>
        </g>
      ))}
    </svg>
  );
}
