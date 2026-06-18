// Custom line-art SVG icons for the 3 pillars. Animated via CSS group-hover.

export function IconSoftware({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="20" width="60" height="40" rx="6" />
      <rect x="18" y="32" width="14" height="10" rx="2" fill="currentColor" opacity="0.18" />
      <path d="M18 32 v-3 a2 2 0 0 1 2 -2 h10 a2 2 0 0 1 2 2 v3" />
      <path d="M40 32 h22" /><path d="M40 38 h22" /><path d="M40 44 h16" />
      <path d="M18 50 h44" className="animate-dash-flow" />
      <circle cx="64" cy="20" r="3" fill="currentColor" className="animate-pulse-node" />
    </svg>
  );
}

export function IconAviation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 60 Q 40 12 72 28" className="animate-dash-flow" opacity="0.8" />
      <path d="M30 48 l24 -12 l8 -2 l-6 8 l-22 14 z" fill="currentColor" opacity="0.15" />
      <path d="M30 48 l24 -12 l8 -2 l-6 8 l-22 14 z" />
      <path d="M40 44 l-8 -6 l4 -2 l10 4" />
      <path d="M52 50 l-2 8 l3 1 l5 -6" />
      <circle cx="68" cy="28" r="3" fill="currentColor" className="animate-pulse-node" />
    </svg>
  );
}

export function IconTrading({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 60 h60" />
      <path d="M18 60 V44 l8 4 v12 z" fill="currentColor" opacity="0.18" />
      <path d="M18 60 V44 l8 4 v12 z" />
      <path d="M34 60 V36 l8 4 v20 z" fill="currentColor" opacity="0.18" />
      <path d="M34 60 V36 l8 4 v20 z" />
      <path d="M50 60 V28 l8 4 v28 z" fill="currentColor" opacity="0.18" />
      <path d="M50 60 V28 l8 4 v28 z" />
      <path d="M14 30 l12 -8 l16 6 l18 -12" className="animate-dash-flow" />
      <circle cx="60" cy="16" r="3" fill="currentColor" className="animate-pulse-node" />
    </svg>
  );
}
