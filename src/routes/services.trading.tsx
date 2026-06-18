import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building, HeartHandshake, Landmark } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services/trading")({
  head: () => ({
    meta: [
      { title: "Trading & Commodities — Byte Wise" },
      { name: "description", content: "Office supply, consumer goods, and staple commodities — rice, sugar, and edible oil — across East Africa." },
    ],
  }),
  component: TradingPage,
});

function TradingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden surface-dark">
        <div className="container-bw relative grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <Eyebrow>Trading & Commodities</Eyebrow>
            <h1 className="mt-5 text-5xl md:text-6xl font-bold text-primary-foreground leading-[1.02]">
              Supply chains that <span className="text-gradient-gold">arrive on time.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/75 leading-relaxed">
              From office equipment and consumer goods to staple commodities — rice, sugar, edible oil — Byte Wise moves the inventory East Africa runs on.
            </p>
          </div>
          <CommodityArt />
        </div>
      </section>

      {/* Commodity focus */}
      <section className="py-20 lg:py-24">
        <div className="container-bw">
          <Reveal><SectionHeading eyebrow="Commodity focus" title="Staples we move at scale." /></Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-3 gap-5">
            {[
              { name: "Rice", note: "Retail & wholesale across the EAC corridor.", hue: 90 },
              { name: "Sugar", note: "Institutional supply, monthly cadence.", hue: 30 },
              { name: "Edible Oil", note: "Regional sourcing, FX-hedged contracts.", hue: 65 },
            ].map((c) => (
              <StaggerItem key={c.name}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 card-lift relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl" style={{ background: `oklch(0.78 0.15 ${c.hue} / 0.25)` }} />
                  <div className="relative">
                    <div className="font-display text-4xl font-bold">{c.name}</div>
                    <p className="mt-3 text-muted-foreground">{c.note}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20 bg-surface">
        <div className="container-bw">
          <Reveal><SectionHeading eyebrow="Who we serve" title="Where reliability is the product." /></Reveal>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { Icon: HeartHandshake, title: "NGOs", body: "Programme procurement across borders and currencies." },
              { Icon: Building, title: "Corporates", body: "Office supply, facilities, and recurring consumables." },
              { Icon: Landmark, title: "Public Institutions", body: "Tender-grade fulfilment with documented compliance." },
            ].map((it) => (
              <StaggerItem key={it.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 card-lift">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"><it.Icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 font-bold text-lg">{it.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{it.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Supply chain */}
      <section className="py-24">
        <div className="container-bw">
          <Reveal><SectionHeading eyebrow="Supply chain" title="Source → Procure → Deliver." /></Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {["Source", "Procure", "Deliver"].map((label, i) => (
              <div key={label} className="relative rounded-3xl bg-card border border-border p-8 card-lift">
                <div className="font-mono text-xs uppercase tracking-widest text-accent">Step 0{i + 1}</div>
                <h3 className="mt-3 text-2xl font-bold">{label}</h3>
                <p className="mt-3 text-muted-foreground">
                  {i === 0 && "Vetted producers and verified origins across the region."}
                  {i === 1 && "Contract structures designed for FX volatility and timing risk."}
                  {i === 2 && "Last-mile logistics into urban and upcountry distribution."}
                </p>
                {i < 2 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-accent" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:scale-[1.03] transition-transform shadow-lift">
              Request a supply quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CommodityArt() {
  const items = [
    { label: "Rice", x: 80, hue: 90, delay: 0 },
    { label: "Sugar", x: 200, hue: 30, delay: 0.6 },
    { label: "Oil", x: 320, hue: 65, delay: 1.2 },
  ];
  return (
    <svg viewBox="0 0 440 360" className="w-full h-auto">
      <ellipse cx="220" cy="320" rx="180" ry="14" fill="oklch(1 0 0 / 0.05)" />
      {items.map((it) => (
        <g key={it.label} style={{ animation: `float-y 3s ease-in-out ${it.delay}s infinite` }}>
          <rect x={it.x} y="140" width="100" height="140" rx="10" fill={`oklch(0.85 0.14 ${it.hue})`} />
          <rect x={it.x} y="140" width="100" height="40" rx="10" fill={`oklch(0.7 0.16 ${it.hue})`} />
          <text x={it.x + 50} y="220" textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="700" fontSize="20" fill="oklch(0.16 0.07 265)">{it.label}</text>
          <text x={it.x + 50} y="250" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="oklch(0.16 0.07 265 / 0.65)">BYTE WISE</text>
        </g>
      ))}
    </svg>
  );
}
