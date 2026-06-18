import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, GraduationCap, HeartPulse, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services/software")({
  head: () => ({
    meta: [
      { title: "Software & Digital Identity — Byte Wise" },
      { name: "description", content: "Smart cards, identity management, and data platforms — engineered with GET Group and Athang Smart Card." },
    ],
  }),
  component: SoftwarePage,
});

const useCases = [
  { Icon: GraduationCap, label: "Education" },
  { Icon: HeartPulse, label: "Healthcare" },
  { Icon: Landmark, label: "Government" },
  { Icon: Building2, label: "Finance" },
];

function SoftwarePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden surface-dark">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "linear-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.4) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }} />
        <div className="container-bw relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <Eyebrow>Software & Digital Identity</Eyebrow>
            <h1 className="mt-5 text-5xl md:text-6xl font-bold text-primary-foreground leading-[1.02]">
              Identity infrastructure that <span className="text-gradient-gold">actually scales.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/75 leading-relaxed">
              We design, deploy, and operate smart card and digital identity platforms — engineered with our global partners and tuned for East African operational realities.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 20 }} animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="perspective-[1200px]"
          >
            <SmartCardArt />
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 lg:py-24">
        <div className="container-bw grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 card-lift h-full">
              <Eyebrow>Partner</Eyebrow>
              <h3 className="mt-3 text-2xl font-bold">GET Group · Dubai</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                A globally recognised provider of secure identity solutions — from biometric enrollment to ePassport issuance — powering our enterprise deployments.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8 card-lift h-full">
              <Eyebrow>Partner</Eyebrow>
              <h3 className="mt-3 text-2xl font-bold">Athang Smart Card · Israel</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Specialists in smart card manufacturing and personalisation. Our hardware backbone for institutional-grade rollouts.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container-bw">
          <Reveal><SectionHeading eyebrow="Use cases" title="Where smart identity earns its keep." /></Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map(({ Icon, label }) => (
              <StaggerItem key={label}>
                <div className="rounded-2xl border border-border bg-card p-7 card-lift">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-bold text-lg">{label}</h3>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:scale-[1.03] transition-transform shadow-lift">
              Discuss your identity rollout <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SmartCardArt() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-[480px] mx-auto animate-float">
      <svg viewBox="0 0 400 280" className="w-full h-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
        <defs>
          <linearGradient id="card-bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.28 0.09 265)" />
            <stop offset="100%" stopColor="oklch(0.16 0.07 265)" />
          </linearGradient>
          <linearGradient id="card-shimmer" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.78 0.15 75)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.85 0.16 75)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.78 0.15 75)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g transform="rotate(-8 200 140)">
          <rect x="20" y="40" width="360" height="220" rx="20" fill="url(#card-bg)" />
          <rect x="20" y="40" width="360" height="220" rx="20" fill="url(#card-shimmer)" opacity="0.25" />
          {/* chip */}
          <rect x="50" y="100" width="56" height="44" rx="6" fill="oklch(0.72 0.13 70)" />
          <g stroke="oklch(0.16 0.07 265)" strokeWidth="1.2" opacity="0.6">
            <line x1="50" y1="115" x2="106" y2="115" />
            <line x1="50" y1="130" x2="106" y2="130" />
            <line x1="78" y1="100" x2="78" y2="144" />
          </g>
          {/* lines */}
          <rect x="130" y="100" width="220" height="6" rx="3" fill="oklch(1 0 0 / 0.18)" />
          <rect x="130" y="118" width="160" height="6" rx="3" fill="oklch(1 0 0 / 0.12)" />
          <rect x="130" y="136" width="120" height="6" rx="3" fill="oklch(1 0 0 / 0.1)" />
          {/* identity */}
          <text x="50" y="195" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="oklch(0.78 0.15 75)" letterSpacing="0.18em">BYTE WISE · IDENTITY</text>
          <text x="50" y="225" fontFamily="Sora, sans-serif" fontSize="22" fontWeight="700" fill="oklch(0.98 0.003 250)">NAME SURNAME</text>
          {/* wave wireless */}
          <g transform="translate(310 200)" stroke="oklch(0.78 0.15 75)" fill="none" strokeWidth="1.5">
            <path d="M0 16 a 16 16 0 0 1 32 0" />
            <path d="M6 16 a 10 10 0 0 1 20 0" opacity="0.7" />
            <path d="M12 16 a 4 4 0 0 1 8 0" opacity="0.4" />
          </g>
        </g>
      </svg>
    </div>
  );
}
