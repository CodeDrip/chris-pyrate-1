import Reveal from "@/components/Reveal";
import Blossom from "@/components/Blossom";

export default function Art() {
  return (
    <section id="art" className="relative overflow-hidden py-24 md:py-36">
      <Blossom
        className="animate-drift-slow absolute -right-20 top-10 h-56 w-56 opacity-60"
        variant={1}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="mb-3 font-script text-3xl text-sakura-deep">from the wall, to your wardrobe</p>
          <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Every garment starts as a mural.
          </h2>
        </Reveal>

        {/* asymmetric editorial grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7" delay={100}>
            <figure>
              <div className="overflow-hidden rounded-2xl border-2 border-navy">
                <img
                  src="/images/mural-dupont.jpg"
                  alt="DUPONT mural of dense pink cherry blossoms by Chris Pyrate at Dupont Circle"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between text-sm text-navy/60">
                <span className="font-medium text-navy">DUPONT — Art in Transit</span>
                <span>Dupont Circle, Washington D.C.</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col justify-between gap-6 md:col-span-5">
            <Reveal delay={200}>
              <figure>
                <div className="overflow-hidden rounded-2xl border-2 border-navy">
                  <img
                    src="/images/mural-georgetown.jpg"
                    alt="Cherry blossom trail installation along a cobblestone alley in Georgetown"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between text-sm text-navy/60">
                  <span className="font-medium text-navy">Blossom Trail</span>
                  <span>Georgetown, Washington D.C.</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={300}>
              <p className="max-w-md text-lg leading-relaxed text-navy/75">
                Cascading cherry blossoms, koi fish in motion, bold black ink lines laid over
                soft pastel fields. The work balances dense, meticulous linework with colors
                that calm it back down — masculine and feminine, loud and quiet, all at once.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
