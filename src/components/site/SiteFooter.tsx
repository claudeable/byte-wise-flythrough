import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="surface-dark mt-24">
      {/* CTA banner */}
      <div className="container-bw pt-20 pb-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center border-b border-white/10 pb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Ready to build something <span className="text-gradient-gold">impactful</span>?
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl">
              From identity systems to aviation strategy and supply chains — let's talk about what's next.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-4 rounded-full font-semibold hover:scale-[1.03] transition-transform shadow-glow"
            >
              Contact Us <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pt-14">
          <div className="lg:col-span-1">
            <Logo className="h-8 w-auto" variant="light" />
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">
              A multi-sector company under the Pabari Group — software, aviation advisory, and trading across East Africa.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">Explore</p>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
              <li><Link to="/services" className="hover:text-accent transition">Services</Link></li>
              <li><Link to="/partners" className="hover:text-accent transition">Partners</Link></li>
              <li><Link to="/investments" className="hover:text-accent transition">Investments</Link></li>
              <li><Link to="/insights" className="hover:text-accent transition">Insights</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">Services</p>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/services/software" className="hover:text-accent transition">Software & Identity</Link></li>
              <li><Link to="/services/aviation" className="hover:text-accent transition">Aviation Advisory</Link></li>
              <li><Link to="/services/trading" className="hover:text-accent transition">Trading & Commodities</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /> +254 (0) 755 456 546</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /> info@pabarigroup.com</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> P.O Box 46279–00100, Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-bw py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Byte Wise · A Pabari Group company.</p>
          <p>Built in Nairobi · Operating across East Africa.</p>
        </div>
      </div>
    </footer>
  );
}
