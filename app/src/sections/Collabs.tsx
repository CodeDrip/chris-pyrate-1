import Reveal from "@/components/Reveal";

const COLLABS = [
  { partner: "Jordan Poole × Washington Wizards", detail: "Limited embroidered work jacket — cherry blossom twill", year: "2024" },
  { partner: "X-Large", detail: "Streetwear capsule collaboration", year: "—" },
  { partner: "Nike", detail: "Custom artwork & design commissions", year: "—" },
  { partner: "adidas / Yeezy", detail: "Artist & designer commissions", year: "—" },
  { partner: "MCM", detail: "Brand artwork collaboration", year: "—" },
  { partner: "WMATA Art in Transit", detail: "Dupont Circle blossom mural", year: "—" },
];

export default function Collabs() {
  return (
    <section id="collabs" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="mb-3 font-script text-3xl text-sakura-deep">&amp; friends</p>
              <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
                Art is not done until it's witnessed.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-navy/75">
                The "&amp; Friends" is the point. Every collaboration — with athletes, teams,
                and heritage streetwear labels — turns a garment into a shared canvas and
                borrows a whole new audience for the work.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 overflow-hidden rounded-2xl border-2 border-navy bg-white p-8">
                <img
                  src="/images/jacket-wizards.png"
                  alt="Chris Pyrate × Washington Wizards embroidered cherry blossom jacket"
                  className="mx-auto w-full max-w-sm"
                  loading="lazy"
                />
                <p className="mt-4 text-center text-sm text-navy/60">
                  Chris Pyrate × Washington Wizards — cherry blossom work jacket
                </p>
              </div>
            </Reveal>
          </div>

          {/* collab ledger */}
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            <div className="border-t-2 border-navy">
              {COLLABS.map((c, i) => (
                <Reveal key={c.partner} delay={i * 80}>
                  <div className="group flex items-baseline justify-between gap-4 border-b-2 border-navy py-6 transition-colors hover:bg-white">
                    <div className="px-1 md:px-4">
                      <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                        {c.partner}
                      </h3>
                      <p className="mt-1 text-sm text-navy/60">{c.detail}</p>
                    </div>
                    <span className="shrink-0 px-1 font-script text-2xl text-sakura-deep md:px-4">
                      {c.year}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
