import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4";

function FadeIn({
  delay = 0,
  duration = 1000,
  className,
  children,
}: {
  delay?: number;
  duration?: number;
  className?: string;
  children: ReactNode;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={`transition-opacity ${className ?? ""}`}
      style={{ opacity: show ? 1 : 0, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

function AnimatedHeading({
  text,
  className,
  style,
  startDelay = 200,
  charDelay = 30,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  startDelay?: number;
  charDelay?: number;
}) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOn(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  const lines = text.split("\n");
  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {Array.from(line).map((ch, charIndex) => {
            const delay = lineIndex * line.length * charDelay + charIndex * charDelay;
            return (
              <span
                key={charIndex}
                className="inline-block"
                style={{
                  opacity: on ? 1 : 0,
                  transform: on ? "translateX(0)" : "translateX(-18px)",
                  transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
                  whiteSpace: "pre",
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

function Plane({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="white"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 34 L60 30 L52 22 L48 24 L36 24 L24 8 L20 9 L26 26 L14 28 L8 22 L5 23 L9 30 L4 32 Z" fill="rgba(255,255,255,0.85)" />
      <path d="M60 30 L56 36 L46 34" />
    </svg>
  );
}

export function VexHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Flying plane overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 animate-plane-fly will-change-transform">
          <Plane className="h-10 w-10 md:h-14 md:w-14 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
        </div>
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col px-6 md:px-12 lg:px-16 pt-6">
        {/* Navbar */}
        <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold tracking-tight text-white">
            VEX
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {["Story", "Investing", "Building", "Advisory"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-white/90 hover:text-gray-300 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <Link
            to="/contact"
            className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Start a Chat
          </Link>
        </nav>

        {/* Hero content pinned to bottom */}
        <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
            {/* Left */}
            <div>
              <AnimatedHeading
                text={"Shaping tomorrow\nwith vision and action."}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 text-white"
                style={{ letterSpacing: "-0.04em" }}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5 max-w-xl">
                  We back visionaries and craft ventures that define what comes next.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Start a Chat
                  </Link>
                  <Link
                    to="/services"
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                  >
                    Explore Now
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right tag */}
            <div className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                    Investing. Building. Advisory.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
