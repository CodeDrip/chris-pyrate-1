import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import Blossom from "@/components/Blossom";

/** Falling petal field — pure CSS animation, varied by inline style. */
const PETALS: { left: string; size: number; duration: number; delay: number; drift: number; variant: 1 | 2 | 3 }[] = [
  { left: "6%", size: 26, duration: 13, delay: 0, drift: 8, variant: 1 },
  { left: "18%", size: 16, duration: 17, delay: 3.5, drift: -6, variant: 2 },
  { left: "32%", size: 20, duration: 15, delay: 7, drift: 10, variant: 3 },
  { left: "47%", size: 14, duration: 19, delay: 1.5, drift: -8, variant: 1 },
  { left: "60%", size: 22, duration: 14, delay: 5, drift: 7, variant: 2 },
  { left: "74%", size: 17, duration: 18, delay: 9, drift: -10, variant: 1 },
  { left: "86%", size: 26, duration: 16, delay: 2, drift: 9, variant: 3 },
  { left: "93%", size: 15, duration: 20, delay: 6, drift: -7, variant: 2 },
];

function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={
            {
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift": `${p.drift}vw`,
            } as React.CSSProperties
          }
        >
          <Blossom className="h-full w-full" variant={p.variant} />
        </span>
      ))}
    </div>
  );
}

/** Rotating circular badge — "energetically tranquil" around a blossom. */
function RotatingBadge() {
  return (
    <div className="relative h-28 w-28 md:h-36 md:w-36">
      <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full">
        <defs>
          <path id="badge-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-navy text-[8.2px] font-semibold uppercase tracking-[0.18em]">
          <textPath href="#badge-circle">
            energetically tranquil ✦ chris pyrate ✦
          </textPath>
        </text>
      </svg>
      <Blossom className="absolute inset-0 m-auto h-10 w-10 md:h-12 md:w-12" />
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax choreography: background drifts + grows, copy lifts away and fades,
  // each blossom layer floats at its own speed.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const bloomSlow = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const bloomFast = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ["0%", "-140%"]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Full-bleed mural backdrop — parallax + slow growth on scroll */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src="/images/mural-georgetown.jpg"
          alt="Chris Pyrate cherry blossom installation in Georgetown, Washington D.C."
          className="hero-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-cream/10" />
        {/* night veil — dims the daylight mural in dark mode */}
        <div className="absolute inset-0 bg-[#0d1420]/45 opacity-0 transition-opacity duration-700 dark:opacity-100" />
      </motion.div>

      {/* Falling petals, always drifting over everything */}
      <Petals />

      {/* Blossoms bleeding in off the edges — each on its own parallax layer */}
      <motion.div style={{ y: bloomSlow }} className="absolute inset-0 pointer-events-none">
        <Blossom className="animate-drift absolute -left-16 top-24 h-44 w-44 opacity-90 md:h-64 md:w-64" variant={1} />
        <Blossom
          className="animate-drift absolute right-[12%] top-20 hidden h-20 w-20 lg:block"
          variant={3}
        />
      </motion.div>
      <motion.div style={{ y: bloomFast }} className="absolute inset-0 pointer-events-none">
        <Blossom
          className="animate-drift-slow absolute -right-10 top-1/3 h-32 w-32 md:h-48 md:w-48"
          variant={3}
        />
        <Blossom
          className="animate-drift-slow absolute bottom-40 left-[8%] hidden h-24 w-24 opacity-80 md:block"
          variant={1}
        />
      </motion.div>

      {/* Rotating badge, lifts fastest on scroll */}
      <motion.div
        style={{ y: badgeY }}
        className="hero-fade absolute bottom-24 right-6 z-10 hidden md:bottom-28 md:right-14 md:block"
      >
        <RotatingBadge />
      </motion.div>

      {/* Copy — lifts away as you scroll */}
      <motion.div
        style={{ y: copyY, opacity: copyOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-10 md:pb-28"
      >
        <p className="hero-fade mb-5 font-script text-3xl text-navy md:text-4xl">
          energetically tranquil
        </p>
        <h1 className="font-display text-[13vw] font-semibold leading-[0.95] tracking-tight text-navy sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="hero-line"><span>Wearable art</span></span>
          <span className="hero-line"><span>from the streets</span></span>
          <span className="hero-line"><span>of D.C.</span></span>
        </h1>
        <div className="hero-fade mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            to="/shop"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold tracking-wide text-cream transition-transform hover:scale-105"
          >
            Shop the Drop
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            to="/about"
            className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-navy px-8 py-[14px] text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream"
          >
            Our Story
          </Link>
        </div>
      </motion.div>

      {/* scroll hint */}
      <div className="hero-fade absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-navy/50">
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="mx-auto animate-bounce">
          <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="9" r="2.5" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
