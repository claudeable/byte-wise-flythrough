import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";
import { PartnerLogo } from "@/components/site/PartnerLogo";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Clients — Byte Wise" },
      { name: "description", content: "Byte Wise partners with GET Group, Athang Smart Card, and Aviators-Sweden — serving government, NGO, corporate, and institutional clients." },
    ],
  }),
  component: PartnersPage,
});

const partners = [
  { name: "GET Group", country: "United Arab Emirates", sector: "Digital Identity", body: "Globally recognised provider of secure identity solutions — biometric enrollment, ePassports, secure document personalisation.", variant: "teal" as const },
  { name: "Athang Smart Card", country: "Israel", sector: "Smart Card Hardware", body: "Specialists in smart card manufacturing and personalisation. Hardware backbone for our institutional deployments.", variant: "navy" as const },
  { name: "Aviators-Sweden", country: "Sweden", sector: "Aviation Advisory", body: "Scandinavian aviation discipline applied to East African operators — safety management, regulatory liaison, operational readiness.", variant: "slate" as const },
];

const tags = ["Government", "NGO", "Corporate", "Institutional"];

const testimonials = [
  { quote: "Byte Wise's identity platform replaced three legacy systems and cut our onboarding time by 70%.", name: "Nadine Asamoah", title: "Procurement Director", company: "CivicServe West Africa, Ghana" },
  { quote: "Their team understands East African logistics in a way most international vendors simply don't.", name: "James Thuo", title: "Logistics Coordinator", company: "Kenya" },
  { quote: "Clear scope, honest timelines, no surprises. We renewed for another two years.", name: "Anonymous", title: "Head of Procurement", company: "Public Institution, EAC" },
];

function PartnersPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-surface">
        <div className="container-bw">
          <Reveal>
            <Eyebrow>Partners & Clients</Eyebrow>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] max-w-4xl">
              The network that <span className="text-gradient-gold">makes it possible.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Our partners bring world-class technology and specialised expertise. Our clients trust us to deliver on it — across governments, NGOs, corporates, and institutional buyers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partner cards */}
      <section className="py-20">
        <div className="container-bw">
          <Stagger className="grid md:grid-cols-3 gap-6">
            {partners.map((p) => (
              <StaggerItem key={p.name}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 card-lift">
                  <PartnerLogo name={p.name} country={p.country} variant={p.variant} />
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-muted text-xs font-mono">{p.sector}</span>
                    <span className="px-2.5 py-1 rounded-full bg-accent/15 text-accent text-xs font-mono">{p.country}</span>
                  </div>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Client tags */}
      <section className="py-16 bg-surface">
        <div className="container-bw">
          <Reveal>
            <SectionHeading eyebrow="Client categories" title="Who we serve." />
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {tags.map((t) => (
              <span key={t} className="px-5 py-3 rounded-full bg-card border border-border font-semibold text-sm card-lift">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="container-bw">
          <Reveal><SectionHeading eyebrow="In their words" title="Real engagements. Real results." /></Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <article className="h-full rounded-2xl border border-border bg-card p-7 card-lift">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <blockquote className="mt-4 font-display text-lg leading-snug">"{t.quote}"</blockquote>
                  <div className="mt-5">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.title} · {t.company}</p>
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
