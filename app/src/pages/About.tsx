import Reveal from "@/components/Reveal";
import Blossom from "@/components/Blossom";
import Art from "@/sections/Art";
import Artist from "@/sections/Artist";
import Collabs from "@/sections/Collabs";

export default function About() {
  return (
    <>
      {/* page intro */}
      <section className="relative overflow-hidden pb-8 pt-36 md:pt-44">
        <Blossom className="animate-drift absolute -right-14 top-24 h-44 w-44 opacity-70" />
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <p className="mb-3 font-script text-3xl text-sakura-deep md:text-4xl">the story so far</p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
              Art is not done until it's witnessed.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/75">
              Chris Pyrate &amp; Friends exists so the work doesn't stay on walls.
              Murals become jackets, blossoms become sneakers — and everyone who
              wears them becomes part of the "&amp; Friends."
            </p>
          </Reveal>
        </div>
      </section>

      <Art />
      <Artist />
      <Collabs />
    </>
  );
}
