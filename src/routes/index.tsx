import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Award, Globe2, Handshake, ShieldCheck, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { HeroGlobe } from "@/components/site/HeroGlobe";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";
import { PartnerLogo } from "@/components/site/PartnerLogo";
import { Counter } from "@/components/site/Counter";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { ScrollPlane } from "@/components/site/ScrollPlane";
import { VexHero } from "@/components/site/VexHero";
import pillarSoftware from "@/assets/pillar-software.jpg";
import pillarAviation from "@/assets/pillar-aviation.jpg";
import pillarTrading from "@/assets/pillar-trading.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Byte Wise — Multi-Sector Solutions Across East Africa" },
      { name: "description", content: "Smart identity systems, aviation advisory, and trading & commodities — delivered across East Africa." },
      { property: "og:title", content: "Byte Wise — Multi-Sector Solutions Across East Africa" },
      { property: "og:description", content: "From smart cards to aviation strategy to staple commodities. A Pabari Group company." },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    title: "Digital Identity & Software",
    body: "Smart cards, identity management, and data platforms — engineered with global tech partners.",
    image: pillarSoftware,
    to: "/services/software" as const,
    tag: "01 / Software",
  },
  {
    title: "Aviation Advisory",
    body: "Safety audits, compliance frameworks, and operational support for airlines and airports.",
    image: pillarAviation,
    to: "/services/aviation" as const,
    tag: "02 / Aviation",
  },
  {
    title: "Trading & Commodities",
    body: "Office supply, consumer goods, and staple commodities — rice, sugar, edible oil — across East Africa.",
    image: pillarTrading,
    to: "/services/trading" as const,
    tag: "03 / Trading",
  },
];

const valueProps = [
  { Icon: Globe2, title: "Global Tech Partnerships", body: "Working with vetted partners in Dubai, Israel, and Sweden." },
  { Icon: ShieldCheck, title: "Smart Identity Solutions", body: "Battle-tested smart card and identity platforms." },
  { Icon: Handshake, title: "East Africa Local Delivery", body: "Nairobi-based execution across the EAC corridor." },
  { Icon: Award, title: "Backed by Pabari Group", body: "Decades of multi-sector commercial heritage." },
];

const testimonials = [
  {
    quote: "Byte Wise's identity platform replaced three legacy systems and cut our onboarding time by 70%.",
    name: "Nadine Asamoah",
    title: "Procurement Director",
    company: "CivicServe West Africa",
    country: "Ghana",
  },
  {
    quote: "Their team understands East African logistics in a way most international vendors simply don't.",
    name: "James Thuo",
    title: "Logistics Coordinator",
    company: "Independent",
    country: "Kenya",
  },
];

function HomePage() {
  return (
    <>
      <ScrollProgress />

      <VexHero />

      {/* Scroll-driven plane that flies into next section */}
      <div className="relative">
        <ScrollPlane />


      {/* 3 PILLARS */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-bw">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <SectionHeading
                eyebrow="What we do"
                title={<>Three pillars. <span className="text-gradient-gold">One operator.</span></>}
                description="Each vertical is run by specialists, backed by global partners, and delivered with East African operational discipline."
              />
              <Link to="/services" className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition">
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
            {pillars.map(({ title, body, image, to, tag }) => (
              <StaggerItem key={title}>
                <Link
                  to={to}
                  className="group block relative rounded-3xl bg-card border border-border card-lift overflow-hidden h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-mono tracking-[0.25em] uppercase text-white/90 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                      {tag}
                    </span>
                  </div>
                  <div className="p-7 lg:p-8 -mt-2 relative">
                    <h3 className="text-2xl font-bold leading-tight">{title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                  <div className="absolute inset-x-0 top-0 h-px shimmer-line z-10" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-20 bg-surface">
        <div className="container-bw">
          <Reveal>
            <p className="text-center text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground">Trusted partners</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <PartnerLogo name="GET Group" country="Dubai" variant="teal" />
              <PartnerLogo name="Athang Smart Card" country="Israel" variant="navy" />
              <PartnerLogo name="Aviators-Sweden" country="Sweden" variant="slate" />
              <PartnerLogo name="Pabari Group" country="Kenya" variant="gold" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY BYTE WISE */}
      <section className="py-24 lg:py-32">
        <div className="container-bw">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Why Byte Wise"
              title="Built for serious operators"
              description="The combination governments, NGOs, and institutional buyers rely on."
            />
          </Reveal>
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueProps.map(({ Icon, title, body }, i) => (
              <StaggerItem key={title}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-7 card-lift overflow-hidden">
                  <div className="absolute -right-4 -top-4 text-[120px] font-display font-bold text-muted/40 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="surface-dark py-16">
        <div className="container-bw grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x divide-white/10">
          {[
            { k: 3, s: "", label: "Core verticals" },
            { k: 4, s: "+", label: "Global partners" },
            { k: 10, s: "+", label: "Countries served" },
            { k: 2018, s: "", label: "Year founded" },
          ].map((it) => (
            <div key={it.label} className="md:px-6">
              <div className="font-display text-5xl md:text-6xl font-bold text-accent leading-none">
                <Counter to={it.k} suffix={it.s} />
              </div>
              <div className="mt-3 text-xs font-mono uppercase tracking-widest text-primary-foreground/60">{it.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container-bw">
          <Reveal>
            <SectionHeading align="center" eyebrow="What partners say" title="Quiet credibility." />
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <article className="h-full rounded-3xl bg-card border border-border p-8 lg:p-10 card-lift">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <blockquote className="mt-5 text-lg lg:text-xl font-display font-medium leading-snug text-foreground">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <Avatar seed={t.name} />
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.title} · {t.company} · {t.country}</p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 lg:py-32">
        <div className="container-bw">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <SectionHeading eyebrow="Insights" title="Latest from Byte Wise" />
              <Link to="/insights" className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition">
                View all insights <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Stagger className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { date: "Dec 10", cat: "Technology", title: "Why national ID programs need open standards", body: "Vendor lock-in is the silent tax on every public identity rollout." },
              { date: "Dec 8", cat: "Trading", title: "The economics of edible oil in the EAC corridor", body: "Margins, FX, and the case for regional sourcing strategies." },
            ].map((post) => (
              <StaggerItem key={post.title}>
                <article className="group rounded-3xl bg-card border border-border overflow-hidden card-lift">
                  <BlogThumb seed={post.title} />
                  <div className="p-7">
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      <span>{post.date}</span><span>·</span><span className="text-accent">{post.cat}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold leading-tight group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="mt-3 text-muted-foreground">{post.body}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      </div>
    </>

  );
}

function Avatar({ seed }: { seed: string }) {
  // simple deterministic geometric avatar
  const hash = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue = (hash * 47) % 360;
  return (
    <svg viewBox="0 0 40 40" className="h-11 w-11 rounded-full overflow-hidden">
      <rect width="40" height="40" fill={`oklch(0.92 0.05 ${hue})`} />
      <circle cx="20" cy="16" r="6" fill={`oklch(0.45 0.12 ${hue})`} />
      <path d={`M6 40 Q 20 26 34 40 Z`} fill={`oklch(0.45 0.12 ${hue})`} />
    </svg>
  );
}

function BlogThumb({ seed }: { seed: string }) {
  const hash = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue = 60 + (hash % 30);
  return (
    <div className="aspect-[16/9] relative overflow-hidden">
      <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`g-${hash}`} x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.22 0.09 265)" />
            <stop offset="100%" stopColor={`oklch(0.35 0.08 ${hue + 200})`} />
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill={`url(#g-${hash})`} />
        <g opacity="0.7" stroke={`oklch(0.78 0.15 ${hue})`} fill="none">
          <circle cx="300" cy="60" r="40" />
          <circle cx="300" cy="60" r="70" opacity="0.4" />
          <path d="M40 180 Q 200 60 380 160" strokeWidth="1.5" className="animate-dash-flow" />
        </g>
        <circle cx="40" cy="180" r="4" fill={`oklch(0.85 0.16 ${hue})`} />
        <circle cx="380" cy="160" r="4" fill={`oklch(0.85 0.16 ${hue})`} />
      </svg>
    </div>
  );
}
