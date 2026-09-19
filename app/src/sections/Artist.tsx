import Reveal from "@/components/Reveal";
import Blossom from "@/components/Blossom";

const FACTS = [
  { numeral: "I", title: "D.C. Native", text: "Born and raised in Washington, D.C. — the cherry blossom capital that became his signature." },
  { numeral: "II", title: "Comic Book Roots", text: "Started in comic illustration and print design before the walls got bigger." },
  { numeral: "III", title: "Colorblind Artist", text: "Chooses every shade with meticulous calculation — the reason behind the controlled chaos." },
];

export default function Artist() {
  return (
    <section id="artist" className="relative overflow-hidden bg-white py-24 md:py-36">
      <Blossom className="animate-drift absolute -left-14 bottom-16 h-40 w-40 opacity-50" variant={3} />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10">
          {/* portrait */}
          <Reveal className="md:col-span-6">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border-2 border-navy">
                <img
                  src="/images/artist.jpg"
                  alt="Chris Pyrate in his studio beside a koi and cherry blossom mural"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="absolute -bottom-6 right-4 rotate-[-4deg] font-script text-3xl text-navy md:text-4xl">
                — Chris Pyrate
              </p>
            </div>
          </Reveal>

          {/* story */}
          <div className="md:col-span-6 lg:col-span-5 lg:col-start-8">
            <Reveal delay={100}>
              <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
                The artist behind the blossoms.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-navy/75">
                Chris Pyrate is a multimedia artist and designer whose heavy black outlines echo
                Japanese woodblock prints and bridge into modern Pop Art. He calls the result
                <em className="font-display"> "energetically tranquil"</em> — and he built
                Chris Pyrate &amp; Friends so that anyone can collect the work, not as a painting
                on a wall, but as a jacket, a hoodie, a pair of sneakers.
              </p>
            </Reveal>

            <div className="mt-10 space-y-0 border-t-2 border-navy/10">
              {FACTS.map((fact, i) => (
                <Reveal key={fact.numeral} delay={150 + i * 100}>
                  <div className="flex gap-6 border-b-2 border-navy/10 py-6">
                    <span className="font-display text-4xl font-light text-sakura-deep">
                      {fact.numeral}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{fact.title}</h3>
                      <p className="mt-1 text-navy/65">{fact.text}</p>
                    </div>
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
