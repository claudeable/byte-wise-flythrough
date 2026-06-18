import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services/aviation")({
  head: () => ({
    meta: [
      { title: "Aviation Advisory — Byte Wise" },
      { name: "description", content: "Safety audits, compliance frameworks, and operational support for airlines, airports, and investors — with Aviators-Sweden." },
    ],
  }),
  component: AviationPage,
});

const steps = [
  { n: "01", title: "Assess", body: "Operational and compliance baselining." },
  { n: "02", title: "Plan", body: "Roadmap with measurable safety milestones." },
  { n: "03", title: "Execute", body: "On-the-ground delivery with partner specialists." },
  { n: "04", title: "Review", body: "Quarterly audit cadence and continuous improvement." },
];

function AviationPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden surface-dark">
        <div className="container-bw relative grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <Eyebrow>Aviation Advisory</Eyebrow>
            <h1 className="mt-5 text-5xl md:text-6xl font-bold text-primary-foreground leading-[1.02]">
              Safety, compliance, and the <span className="text-gradient-gold">operational rigour</span> aviation demands.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/75 leading-relaxed">
              Practical advisory for airlines, airports, and investors — delivered with our partner Aviators-Sweden and built around real operational constraints.
            </p>
          </div>
          <div className="relative">
            <FlightPathArt />
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="py-20">
        <div className="container-bw">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-10 card-lift">
              <Eyebrow>Partner</Eyebrow>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold">Aviators-Sweden Company</h3>
              <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
                Decades of Scandinavian aviation discipline — applied to East African operators. Our joint engagements cover safety management systems, regulatory liaison, and operational readiness reviews.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20 bg-surface">
        <div className="container-bw">
          <Reveal><SectionHeading eyebrow="Who we serve" title="Built for operators and capital." /></Reveal>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { title: "Airlines", body: "SMS, operations manuals, route economics, fleet strategy." },
              { title: "Airports", body: "Safety audits, ground-handling reviews, regulatory readiness." },
              { title: "Investors", body: "Due diligence, asset assessment, post-acquisition support." },
            ].map((it) => (
              <StaggerItem key={it.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 card-lift">
                  <h3 className="font-bold text-lg">{it.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{it.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-28">
        <div className="container-bw">
          <Reveal><SectionHeading eyebrow="Process" title="A four-step rhythm." /></Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-7 card-lift overflow-hidden">
                  <div className="absolute -top-4 -right-2 text-[110px] font-display font-bold leading-none text-muted/40">{s.n}</div>
                  <div className="relative">
                    <h3 className="font-bold text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:scale-[1.03] transition-transform shadow-lift">
              Talk to our aviation team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FlightPathArt() {
  return (
    <svg viewBox="0 0 500 380" className="w-full h-auto">
      <defs>
        <linearGradient id="africa" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.35 0.08 265)" />
          <stop offset="100%" stopColor="oklch(0.22 0.09 265)" />
        </linearGradient>
      </defs>
      {/* Africa silhouette */}
      <path d="M210 60 q 60 -10 95 30 q 25 30 15 70 q -5 25 12 50 q 18 28 0 65 q -15 30 -55 40 q -45 12 -70 -18 q -22 -25 -10 -55 q 10 -28 -10 -50 q -22 -25 -10 -60 q 12 -35 33 -52 z" fill="url(#africa)" />
      <circle cx="290" cy="220" r="5" fill="oklch(0.78 0.15 75)" />
      <text x="300" y="218" fill="oklch(0.92 0.04 250)" fontSize="10" fontFamily="JetBrains Mono, monospace">NAIROBI</text>

      {/* Animated arc */}
      <path id="route" d="M 80 320 Q 250 80 460 200" stroke="oklch(0.78 0.15 75 / 0.4)" strokeWidth="2" strokeDasharray="4 6" fill="none" />
      <path d="M 80 320 Q 250 80 460 200" stroke="oklch(0.78 0.15 75)" strokeWidth="2" fill="none" className="animate-dash-flow" />

      {/* plane moving along path */}
      <g>
        <g style={{ offsetPath: "path('M 80 320 Q 250 80 460 200')", offsetRotate: "auto", animation: "plane-fly 7s linear infinite" } as React.CSSProperties}>
          <path d="M-14 0 l24 -6 l8 -1 l-6 7 l-22 8 z" fill="oklch(0.85 0.16 75)" />
        </g>
      </g>

      <style>{`@keyframes plane-fly { from { offset-distance: 0%; } to { offset-distance: 100%; } }`}</style>
    </svg>
  );
}
