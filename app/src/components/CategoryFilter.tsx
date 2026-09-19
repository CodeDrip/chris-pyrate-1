import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES, PRODUCTS, type Category } from "@/data/products";

export type Filter = "all" | Category;

interface Props {
  value: Filter;
  onChange: (f: Filter) => void;
}

const labelFor = (f: Filter) =>
  f === "all" ? "All" : CATEGORIES.find((c) => c.id === f)!.label;

const countFor = (f: Filter) =>
  f === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === f).length;

const OPTIONS: Filter[] = ["all", ...CATEGORIES.map((c) => c.id)];

/**
 * Responsive category filter.
 * Desktop: pill tabs. Mobile: a proper dropdown menu.
 * Category ids mirror Shopify collections (shirts / pants / shoes / accessories).
 */
export default function CategoryFilter({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const pick = (f: Filter) => {
    onChange(f);
    setOpen(false);
  };

  return (
    <>
      {/* desktop pills */}
      <div className="mt-10 hidden flex-wrap gap-3 md:flex">
        {OPTIONS.map((f) => (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={`rounded-full border-2 px-5 py-2 text-sm font-semibold tracking-wide transition-all ${
              value === f
                ? "border-navy bg-navy text-cream"
                : "border-navy/25 bg-transparent text-navy/70 hover:border-navy hover:text-navy"
            }`}
          >
            {labelFor(f)}
            <span className="ml-2 opacity-60">{countFor(f)}</span>
          </button>
        ))}
      </div>

      {/* mobile dropdown */}
      <div className="relative mt-8 md:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-full border-2 border-navy bg-white px-5 py-3.5 text-sm font-semibold text-navy"
        >
          <span>
            {labelFor(value)}
            <span className="ml-2 text-navy/50">
              {countFor(value)} {countFor(value) === 1 ? "item" : "items"}
            </span>
          </span>
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <AnimatePresence>
          {open && (
            <>
              {/* tap-away layer */}
              <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
              <motion.ul
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border-2 border-navy bg-white shadow-xl"
              >
                {OPTIONS.map((f) => (
                  <li key={f}>
                    <button
                      onClick={() => pick(f)}
                      className={`flex w-full items-center justify-between px-5 py-3.5 text-left text-sm font-semibold transition-colors ${
                        value === f ? "bg-sakura/25 text-navy" : "text-navy/70 hover:bg-sakura/15"
                      }`}
                    >
                      {labelFor(f)}
                      <span className="text-navy/50">{countFor(f)}</span>
                    </button>
                  </li>
                ))}
              </motion.ul>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
