import { useMemo, useState } from "react";
import { SHOP_URL } from "@/config";
import { PRODUCTS } from "@/data/products";
import Reveal from "@/components/Reveal";
import Blossom from "@/components/Blossom";
import CategoryFilter, { type Filter } from "@/components/CategoryFilter";
import Signup from "@/sections/Signup";

export default function Shop() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      {/* header */}
      <section className="relative overflow-hidden pb-10 pt-36 md:pt-44">
        <Blossom className="animate-drift absolute -left-12 top-28 h-40 w-40 opacity-70" variant={3} />
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <p className="mb-3 font-script text-3xl text-sakura-deep md:text-4xl">energetically tranquil, shippable worldwide</p>
            <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
              The catalog.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/75">
              Every piece is a limited run of wearable artwork. Checkout is handled
              securely on our Shopify store — same art, same drops, one click away.
            </p>
          </Reveal>

          {/* category filter — pills on desktop, dropdown on mobile */}
          <Reveal delay={120}>
            <CategoryFilter value={filter} onChange={setFilter} />
          </Reveal>
        </div>
      </section>

      {/* product grid */}
      <section className="pb-24 pt-4 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div key={filter} className="grid grid-cols-2 gap-5 md:gap-8 lg:grid-cols-4">
            {visible.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <a
                  href={SHOP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="product-card group block"
                >
                  <div className={`flex aspect-square items-center justify-center overflow-hidden rounded-2xl border-2 border-navy ${p.bg} p-5`}>
                    <img
                      src={p.img}
                      alt={`${p.name} — ${p.kind}`}
                      className="max-h-full w-auto object-contain drop-shadow-xl"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight md:text-xl">{p.name}</h3>
                      <p className="text-sm text-navy/60">{p.kind}</p>
                    </div>
                    <span className="shrink-0 font-display text-lg font-medium">{p.price}</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Shopify handoff */}
          <Reveal className="mt-16">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border-2 border-navy bg-navy px-8 py-10 text-center md:flex-row md:text-left">
              <div>
                <h2 className="font-display text-3xl font-semibold text-cream">Ready when you are.</h2>
                <p className="mt-2 text-cream/70">
                  Sizes, live inventory and secure checkout all live on our Shopify store.
                </p>
              </div>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sakura px-8 py-4 text-sm font-semibold tracking-wide text-navy transition-transform hover:scale-105"
              >
                Checkout on Shopify <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Signup />
    </>
  );
}
