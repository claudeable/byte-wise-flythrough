import { cn } from "@/lib/utils";

export function Logo({ className, variant = "auto" }: { className?: string; variant?: "auto" | "light" | "dark" }) {
  const textCls =
    variant === "light"
      ? "text-primary-foreground"
      : variant === "dark"
        ? "text-primary"
        : "text-foreground";
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <defs>
          <linearGradient id="bw-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.15 75)" />
            <stop offset="100%" stopColor="oklch(0.55 0.16 60)" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="28" height="28" rx="8" fill="oklch(0.22 0.09 265)" />
        <path d="M9 10h7a4 4 0 0 1 0 8h-2a4 4 0 0 1 0 8H9z" fill="url(#bw-g)" />
        <circle cx="23" cy="22" r="2.2" fill="url(#bw-g)" />
      </svg>
      <span className={cn("font-display font-bold text-lg tracking-tight", textCls)}>
        Byte<span className="text-accent">Wise</span>
      </span>
    </span>
  );
}
