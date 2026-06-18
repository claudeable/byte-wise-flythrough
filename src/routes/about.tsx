import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Shield, Sparkles, Users } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Byte Wise" },
      { name: "description", content: "Byte Wise is a Nairobi-based multi-sector operator under the Pabari Group, working in identity software, aviation advisory, and trading." },
      { property: "og:title", content: "About Byte Wise" },
      { property: "og:description", content: "Multi-sector by design. Pan-African in ambition." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2018", title: "Founded in Nairobi", body: "Byte Wise launches as a multi-sector arm of the Pabari Group." },
  { year: "2020", title: "First aviation partnership", body: "Strategic relationship with Aviators-Sweden opens advisory practice." },
  { year: "2022", title: "Smart card deployment", body: "Pilots with GET Group and Athang Smart Card go live for institutional clients." },
  { year: "2024", title: "East Africa expansion", body: "Trading desk expands rice, sugar, and edible oil distribution across the EAC." },
  { year: "2026", title: "International scale", body: "Cross-border investment pipeline opens new partnerships in MENA and Northern Europe." },
];

const values = [
  { Icon: Shield, title: "Integrity", body: "Every contract written and unwritten — we honour both." },
  { Icon: Sparkles, title: "Innovation", body: "We deploy proven tech first, frontier tech when it earns its place." },
  { Icon: Compass, title: "Reliability", body: "Operational discipline is our quiet competitive advantage." },
  { Icon: Users, title: "Pan-African Vision", body: "Built locally, networked globally — the EAC is our home market." },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden surface-dark">
        <div className="absolute inset-0 -z-0 opacity-30">
          <NetworkBackdrop />
        </div>
        <div className="container-bw relative">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.02] max-w-4xl">
              Multi-sector by design. <span className="text-gradient-gold">Pan-African in ambition.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75 leading-relaxed">
              Byte Wise is a Nairobi-headquartered company operating across software & digital identity, aviation advisory, and trading & commodities — built to serve governments, NGOs, corporates, and institutional buyers across East Africa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story + Pabari */}
      <section className="py-24 lg:py-32">
        <div className="container-bw grid lg:grid-cols-2 gap-14">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Founded to operate where others advise." />
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>Byte Wise started inside a simple thesis: East Africa needs operators who can sign global tech partnerships, manage aviation-grade compliance work, and move staple commodities — all under one accountable roof.</p>
              <p>We work with the institutions that don't have time for vendor handoffs. Our partners in Dubai, Israel, and Sweden bring world-class technology. Our team in Nairobi gets it deployed, supported, and sustained.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-primary text-primary-foreground p-10 relative overflow-hidden card-lift h-full">
              <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-accent/15 blur-3xl" />
              <Eyebrow><Sparkles className="h-3 w-3" /> Parent company</Eyebrow>
              <h3 className="mt-4 text-3xl font-bold">A Pabari Group company</h3>
              <p className="mt-4 text-primary-foreground/75 leading-relaxed">
                Byte Wise operates under the Pabari Group — a Kenyan diversified holding with decades of commercial heritage across logistics, retail, and industrial supply.
              </p>
              <a href="https://www.pabarigroup.com" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent hover:gap-2.5 transition-all">
                Visit pabarigroup.com <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-surface">
        <div className="container-bw">
          <Reveal><SectionHeading eyebrow="Milestones" title="The road so far." /></Reveal>
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            <Stagger className="space-y-12">
              {milestones.map((m, i) => (
                <StaggerItem key={m.year}>
                  <div className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                    <div className={`md:text-${i % 2 ? "left" : "right"}`}>
                      <div className="font-display text-5xl md:text-6xl font-bold text-accent">{m.year}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{m.title}</h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{m.body}</p>
                    </div>
                    <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-accent ring-4 ring-background" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Leadership placeholders */}
      <section className="py-24 lg:py-32">
        <div className="container-bw">
          <Reveal><SectionHeading eyebrow="Leadership" title="Operators, not just executives." /></Reveal>
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Managing Director", role: "Strategy & Operations" },
              { name: "Head of Software", role: "Identity & Platforms" },
              { name: "Head of Aviation", role: "Advisory & Compliance" },
              { name: "Head of Trading", role: "Commodities & Supply" },
            ].map((p, i) => (
              <StaggerItem key={i}>
                <div className="rounded-3xl border border-border bg-card p-6 card-lift">
                  <PortraitAvatar seed={p.name} />
                  <p className="mt-5 font-semibold">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{p.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="container-bw">
          <Reveal><SectionHeading eyebrow="Values" title="The non-negotiables." /></Reveal>
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ Icon, title, body }) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 card-lift">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

function PortraitAvatar({ seed }: { seed: string }) {
  const h = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue = (h * 53) % 360;
  return (
    <svg viewBox="0 0 200 200" className="w-full aspect-square rounded-2xl">
      <defs>
        <linearGradient id={`p-${h}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={`oklch(0.92 0.04 ${hue})`} />
          <stop offset="100%" stopColor={`oklch(0.82 0.06 ${hue + 30})`} />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#p-${h})`} />
      <circle cx="100" cy="80" r="34" fill={`oklch(0.32 0.08 265)`} />
      <path d="M30 200 Q 100 130 170 200 Z" fill={`oklch(0.32 0.08 265)`} />
      <circle cx="100" cy="80" r="34" fill="none" stroke="oklch(0.78 0.15 75)" strokeWidth="2" strokeDasharray="3 4" />
    </svg>
  );
}

function NetworkBackdrop() {
  const pts = [
    [80, 120], [180, 80], [300, 140], [420, 90], [520, 160], [120, 240], [260, 280], [400, 260], [540, 320],
  ];
  return (
    <svg viewBox="0 0 600 360" className="w-full h-full">
      {pts.map(([x1, y1], i) =>
        pts.slice(i + 1).map(([x2, y2], j) => {
          const d = Math.hypot(x2 - x1, y2 - y1);
          if (d > 200) return null;
          return <line key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="oklch(0.78 0.15 75)" strokeWidth="0.5" opacity="0.4" />;
        }),
      )}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="oklch(0.78 0.15 75)" className="animate-pulse-node" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
    </svg>
  );
}
