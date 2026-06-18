import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/partners", label: "Partners" },
  { to: "/investments", label: "Investments" },
  { to: "/insights", label: "Insights" },
];

export function SiteHeader({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = overHero && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_2px_30px_-12px_rgba(11,31,75,0.25)]"
          : "bg-transparent",
      )}
    >
      <div className="container-bw flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2" aria-label="Byte Wise home">
          <Logo className={cn("h-8 w-auto transition-colors", transparent && "text-white")} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors relative group",
                transparent
                  ? "text-white/85 hover:text-white"
                  : "text-foreground/80 hover:text-foreground",
              )}
              activeProps={{ className: transparent ? "text-white" : "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.03] shadow-lift",
              transparent
                ? "bg-white text-black hover:bg-white/90"
                : "bg-primary text-primary-foreground hover:bg-primary-deep",
            )}
          >
            Get in Touch <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className={cn("lg:hidden p-2 -mr-2", transparent ? "text-white" : "text-foreground")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container-bw py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base font-medium text-foreground/90 hover:bg-muted rounded-md"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground px-4 py-3 rounded-full text-sm font-semibold"
              >
                Get in Touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
