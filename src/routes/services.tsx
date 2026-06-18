import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";
import { IconAviation, IconSoftware, IconTrading } from "@/components/site/PillarIcons";

export const Route = createFileRoute("/services")({
  component: ServicesShell,
});

function ServicesShell() {
  const matchRoute = useMatchRoute();
  const onIndex = matchRoute({ to: "/services" });
  if (onIndex) return <ServicesIndex />;
  return <Outlet />;
}

const services = [
  { to: "/services/software" as const, title: "Software & Digital Identity", body: "Smart cards, identity management, and data platforms built with global tech partners.", Icon: IconSoftware },
  { to: "/services/aviation" as const, title: "Aviation Advisory", body: "Safety audits, compliance frameworks, and operational support for airlines and airports.", Icon: IconAviation },
  { to: "/services/trading" as const, title: "Trading & Commodities", body: "Office supply, consumer goods, and staple commodities — rice, sugar, and edible oil — across East Africa.", Icon: IconTrading },
];

function ServicesIndex() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-surface">
        <div className="container-bw">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] max-w-4xl">
              Three practices. <span className="text-gradient-gold">One accountable team.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Each Byte Wise vertical is built around a specific buyer — and a specific operational discipline. Pick the practice that matters to you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-bw">
          <Stagger className="grid lg:grid-cols-3 gap-6">
            {services.map(({ to, title, body, Icon }) => (
              <StaggerItem key={to}>
                <Link to={to} className="group block h-full rounded-3xl border border-border bg-card p-8 card-lift">
                  <div className="text-primary group-hover:text-accent transition-colors">
                    <Icon className="h-20 w-20 transition-transform group-hover:scale-105" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold">{title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent">
                    Explore practice <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
