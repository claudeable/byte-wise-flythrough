import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "News & Insights — Byte Wise" },
      { name: "description", content: "Perspectives on identity infrastructure, aviation, and trading across East Africa." },
    ],
  }),
  component: InsightsPage,
});

type Post = { date: string; cat: "Technology" | "Aviation" | "Trading" | "Partnerships"; title: string; excerpt: string; seed: string };

const posts: Post[] = [
  { date: "Dec 10", cat: "Technology", title: "Why national ID programs need open standards", excerpt: "Vendor lock-in is the silent tax on every public identity rollout. Here's how we think about it.", seed: "ID-OPEN" },
  { date: "Dec 8", cat: "Trading", title: "The economics of edible oil in the EAC corridor", excerpt: "Margins, FX, and the case for regional sourcing strategies.", seed: "OIL-EAC" },
  { date: "Nov 22", cat: "Aviation", title: "What a real safety management system looks like", excerpt: "Beyond the binder — what auditors actually want to see in the cockpit and on the ramp.", seed: "SMS-22" },
  { date: "Nov 14", cat: "Partnerships", title: "Why we work with Aviators-Sweden", excerpt: "Scandinavian discipline meets East African operations — and why that combination matters.", seed: "AV-SWE" },
  { date: "Oct 30", cat: "Technology", title: "Smart cards aren't going anywhere", excerpt: "The case for chip-based identity in a world of mobile wallets.", seed: "CHIP-1" },
  { date: "Oct 12", cat: "Trading", title: "Rice procurement playbook for NGOs", excerpt: "A practical guide to multi-country tendering without surprises.", seed: "RICE-OP" },
];

const categories: Array<"All" | Post["cat"]> = ["All", "Technology", "Aviation", "Trading", "Partnerships"];

function InsightsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = cat === "All" ? posts : posts.filter((p) => p.cat === cat);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-surface">
        <div className="container-bw">
          <Reveal>
            <Eyebrow>News & Insights</Eyebrow>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] max-w-4xl">
              Perspectives from the <span className="text-gradient-gold">operator's seat.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-12 border-b border-border">
        <div className="container-bw flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                cat === c
                  ? "bg-primary text-primary-foreground shadow-lift"
                  : "bg-card border border-border hover:border-accent text-foreground/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-bw">
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <StaggerItem key={p.title}>
                <article className="group h-full rounded-3xl bg-card border border-border overflow-hidden card-lift">
                  <BlogIllustration seed={p.seed} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      <span>{p.date}</span><span>·</span><span className="text-accent">{p.cat}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold leading-tight group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent">
                      Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

function BlogIllustration({ seed }: { seed: string }) {
  const h = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue = 50 + (h % 60);
  return (
    <div className="aspect-[16/9] relative overflow-hidden">
      <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`bi-${h}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.22 0.09 265)" />
            <stop offset="100%" stopColor={`oklch(0.35 0.08 ${265 + (h % 30)})`} />
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill={`url(#bi-${h})`} />
        <g stroke={`oklch(0.78 0.15 ${hue})`} fill="none" opacity="0.85">
          {Array.from({ length: 5 }).map((_, i) => (
            <circle key={i} cx={120 + i * 12} cy={110 + i * 6} r={50 + i * 10} opacity={0.18 + i * 0.08} />
          ))}
          <path d="M0 180 Q 200 60 400 160" strokeWidth="1.6" className="animate-dash-flow" />
        </g>
        <text x="20" y="200" fontFamily="JetBrains Mono" fontSize="9" fill={`oklch(0.85 0.16 ${hue})`} letterSpacing="0.2em">{seed}</text>
      </svg>
    </div>
  );
}
