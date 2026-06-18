import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useRef } from "react";

/**
 * Cinematic scroll-driven plane that flies from a small badge in the hero
 * down and across the screen, growing into a hero-sized silhouette as the
 * user scrolls into the next section. Layered with parallax clouds and a
 * dashed flight-path that draws as it advances.
 */
export function ScrollPlane() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Plane motion across the scroll range
  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "55%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.45, 1.4, 2.6]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 14]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);

  // Parallax cloud layers
  const cloud1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const cloud2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const cloud3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);

  // Path draw progress
  const pathLen = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reduce) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-[180vh] -z-[5] hidden md:block"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Parallax clouds */}
        <Clouds y={cloud1Y} opacity={0.18} blur={2} scale={1} />
        <Clouds y={cloud2Y} opacity={0.12} blur={6} scale={1.4} offset={20} />
        <Clouds y={cloud3Y} opacity={0.08} blur={12} scale={1.8} offset={50} />

        {/* Flight path */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="pathGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.15 80)" stopOpacity="0" />
              <stop offset="50%" stopColor="oklch(0.78 0.15 80)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="oklch(0.78 0.15 80)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M -50 250 Q 350 80 700 350 T 1300 700"
            fill="none"
            stroke="url(#pathGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            style={{ pathLength: pathLen }}
          />
        </svg>

        {/* The plane */}
        <motion.div
          className="absolute left-[10%] top-[28%] will-change-transform"
          style={{ x, y, scale, rotate, opacity }}
        >
          <PlaneSVG />
        </motion.div>
      </div>
    </div>
  );
}

function Clouds({
  y,
  opacity,
  blur,
  scale,
  offset = 0,
}: {
  y: MotionValue<string>;
  opacity: number;
  blur: number;
  scale: number;
  offset?: number;
}) {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      style={{ y, opacity, filter: `blur(${blur}px)` }}
    >
      <g transform={`translate(${offset}, ${offset / 2}) scale(${scale})`} fill="oklch(0.98 0.01 230)">
        <ellipse cx="200" cy="180" rx="120" ry="22" />
        <ellipse cx="520" cy="120" rx="160" ry="26" />
        <ellipse cx="900" cy="220" rx="180" ry="30" />
        <ellipse cx="1100" cy="90" rx="100" ry="18" />
        <ellipse cx="340" cy="420" rx="220" ry="34" />
        <ellipse cx="820" cy="520" rx="180" ry="28" />
      </g>
    </motion.svg>
  );
}

function PlaneSVG() {
  return (
    <svg width="220" height="120" viewBox="0 0 220 120" className="drop-shadow-[0_30px_40px_rgba(11,31,75,0.45)]">
      <defs>
        <linearGradient id="fuse" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.98 0.01 240)" />
          <stop offset="60%" stopColor="oklch(0.88 0.02 240)" />
          <stop offset="100%" stopColor="oklch(0.62 0.04 240)" />
        </linearGradient>
        <linearGradient id="wing" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.04 240)" />
          <stop offset="100%" stopColor="oklch(0.42 0.06 250)" />
        </linearGradient>
        <linearGradient id="stripe" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.15 80)" />
          <stop offset="100%" stopColor="oklch(0.58 0.16 50)" />
        </linearGradient>
      </defs>
      {/* contrail */}
      <path d="M -40 64 Q 30 60 60 64" stroke="oklch(0.98 0 0)" strokeOpacity="0.5" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* rear stabilizer */}
      <path d="M 30 30 L 70 64 L 30 64 Z" fill="url(#wing)" />
      {/* main wing */}
      <path d="M 70 56 L 150 30 L 175 56 L 110 72 Z" fill="url(#wing)" />
      {/* fuselage */}
      <path
        d="M 25 64 Q 40 50 110 48 L 200 56 Q 215 64 200 72 L 110 80 Q 40 78 25 64 Z"
        fill="url(#fuse)"
        stroke="oklch(0.35 0.04 240)"
        strokeWidth="0.6"
      />
      {/* gold stripe */}
      <path d="M 40 64 L 200 64" stroke="url(#stripe)" strokeWidth="1.6" />
      {/* windows */}
      <g fill="oklch(0.28 0.08 240)">
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x={60 + i * 12} y="60" width="6" height="3" rx="1.2" />
        ))}
      </g>
      {/* cockpit */}
      <path d="M 195 58 Q 205 64 195 70 Z" fill="oklch(0.28 0.08 240)" />
      {/* engine */}
      <ellipse cx="135" cy="78" rx="14" ry="5" fill="oklch(0.38 0.04 240)" />
    </svg>
  );
}
