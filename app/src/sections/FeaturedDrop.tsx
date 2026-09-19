import { Link } from "react-router";
import { FEATURED } from "@/data/products";
import Reveal from "@/components/Reveal";

/** Compact home-page teaser of the current drop — full catalog lives on /shop. */
export default function FeaturedDrop() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-script text-3xl text-sakura-deep">limited runs, numbered pieces</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              The current drop.
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border-b-2 border-navy pb-1 font-semibold tracking-wide text-navy transition-colors hover:border-sakura-deep hover:text-sakura-deep"
          >
            Browse the full catalog <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {FEATURED.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <Link to="/shop" className="product-card group block">
                <div className={`flex aspect-square items-center justify-center overflow-hidden rounded-2xl border-2 border-navy ${p.bg} p-5`}>
                  <img
                    src={p.img}
                    alt={`${p.name} — ${p.kind}`}
                    className="max-h-full w-auto object-contain drop-shadow-xl"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight md:text-xl">{p.name}</h3>
                  <span className="shrink-0 font-display font-medium">{p.price}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
