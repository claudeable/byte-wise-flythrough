import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Byte Wise" },
      { name: "description", content: "Get in touch with Byte Wise — Nairobi, Kenya. We typically respond within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("sent"), 1100);
  }

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="container-bw">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 text-5xl md:text-6xl font-bold leading-[1.02] max-w-3xl">
            Let's talk about <span className="text-gradient-gold">what's next.</span>
          </h1>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* Info */}
          <Reveal>
            <div className="rounded-3xl surface-dark p-8 lg:p-10 h-full relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
              <h2 className="text-2xl font-bold text-primary-foreground">Nairobi HQ</h2>
              <ul className="mt-6 space-y-5 text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent"><Phone className="h-4 w-4" /></span>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary-foreground/50">Phone</p>
                    <p className="mt-0.5">+254 (0) 755 456 546</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent"><Mail className="h-4 w-4" /></span>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary-foreground/50">Email</p>
                    <p className="mt-0.5">info@pabarigroup.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent"><MapPin className="h-4 w-4" /></span>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary-foreground/50">Address</p>
                    <p className="mt-0.5">P.O Box 46279–00100<br />Nairobi, Kenya</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="Nairobi map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=36.7%2C-1.36%2C36.95%2C-1.22&layer=mapnik&marker=-1.2921%2C36.8219"
                  className="w-full h-56 grayscale-[40%]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border p-8 lg:p-10 shadow-lift">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="name" label="Name" required />
                <Field id="email" label="Email" type="email" required />
                <Field id="phone" label="Phone" />
                <SelectField id="topic" label="Inquiry topic" options={["Software & Identity", "Aviation Advisory", "Trading & Commodities", "Partnership", "General"]} />
              </div>
              <div className="mt-5">
                <Field id="message" label="Message" textarea required />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-semibold hover:scale-[1.03] transition-transform shadow-lift disabled:opacity-80 disabled:cursor-progress"
              >
                {status === "idle" && (<><Send className="h-4 w-4" /> Send Inquiry</>)}
                {status === "loading" && (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>)}
                {status === "sent" && (<><Check className="h-4 w-4" /> Message received</>)}
              </button>

              <p className="mt-5 text-xs text-muted-foreground">We typically respond within 1 business day.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, type = "text", required, textarea }: { id: string; label: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls =
    "peer w-full bg-transparent border border-input rounded-xl px-4 pt-6 pb-2 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all placeholder-transparent";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea id={id} required={required} placeholder=" " rows={5} className={cls} />
      ) : (
        <input id={id} type={type} required={required} placeholder=" " className={cls} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-accent">
        {label}{required && " *"}
      </span>
    </label>
  );
}

function SelectField({ id, label, options }: { id: string; label: string; options: string[] }) {
  return (
    <label className="relative block">
      <select id={id} className="w-full appearance-none bg-transparent border border-input rounded-xl px-4 pt-6 pb-2 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      <span className="pointer-events-none absolute left-4 top-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{label}</span>
    </label>
  );
}
