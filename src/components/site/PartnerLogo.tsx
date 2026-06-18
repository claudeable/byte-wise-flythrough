import { cn } from "@/lib/utils";

type Variant = "teal" | "navy" | "slate" | "gold";

const styles: Record<Variant, string> = {
  teal: "bg-[oklch(0.32_0.06_200)] text-white",
  navy: "bg-primary text-primary-foreground",
  slate: "bg-[oklch(0.35_0.02_260)] text-white",
  gold: "bg-accent text-accent-foreground",
};

export function PartnerLogo({
  name,
  country,
  variant,
  symbol,
}: {
  name: string;
  country?: string;
  variant: Variant;
  symbol?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl px-6 py-5 min-w-[200px] flex items-center gap-3 card-lift border border-white/5",
        styles[variant],
      )}
    >
      {symbol ?? (
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 font-display font-bold">
          {name.charAt(0)}
        </span>
      )}
      <span>
        <span className="block font-display font-bold leading-tight">{name}</span>
        {country && <span className="block text-xs opacity-70 font-mono">· {country}</span>}
      </span>
    </div>
  );
}
