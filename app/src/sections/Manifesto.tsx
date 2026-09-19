import { Link } from "react-router";
import Reveal from "@/components/Reveal";
import Blossom from "@/components/Blossom";

/** One-breath brand statement bridging hero → drop on the home page. */
export default function Manifesto() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Blossom className="animate-drift-slow absolute -left-12 top-1/2 h-36 w-36 -translate-y-1/2 opacity-60" variant={3} />
      <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
        <Reveal>
          <p className="font-display text-3xl font-medium leading-snug tracking-tight text-navy md:text-5xl">
            Every garment starts as a mural in Washington, D.C. — bold ink lines,
            soft pastels, cherry blossoms in motion. We just make it
            <span className="text-sakura-deep"> wearable</span>.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-navy pb-1 font-semibold tracking-wide text-navy transition-colors hover:border-sakura-deep hover:text-sakura-deep"
          >
            Read the story <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
