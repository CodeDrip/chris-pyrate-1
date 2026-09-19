import { useState, type FormEvent } from "react";
import { FORM_ACTION, CONTACT_EMAIL } from "@/config";
import Reveal from "@/components/Reveal";
import Blossom from "@/components/Blossom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    if (!FORM_ACTION) {
      // No form backend configured yet — fall back to the visitor's mail client.
      // Wire FORM_ACTION in src/config.ts to Shopify or Klaviyo to go live.
      e.preventDefault();
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=Join%20the%20Friends%20list&body=Please%20add%20me%3A%20${encodeURIComponent(email)}`;
      setDone(true);
    }
  };

  return (
    <section className="relative overflow-hidden border-t-2 border-navy bg-sakura/20 py-24 md:py-32">
      <Blossom className="animate-drift absolute -left-10 top-8 h-36 w-36" />
      <Blossom className="animate-drift-slow absolute -right-8 bottom-8 h-28 w-28" variant={3} />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            Join the Friends.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy/75">
            Early access to every drop, first look at new murals, and the occasional
            friends-only piece. No noise — just the art, first.
          </p>
        </Reveal>

        <Reveal delay={150}>
          {done ? (
            <p className="mt-10 font-script text-4xl text-navy">
              welcome to the crew ✳ check your inbox
            </p>
          ) : (
            <form
              action={FORM_ACTION || undefined}
              method={FORM_ACTION ? "post" : undefined}
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-14 flex-1 rounded-full border-2 border-navy bg-cream px-6 text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-sakura-deep"
              />
              <button
                type="submit"
                className="h-14 rounded-full bg-navy px-8 text-sm font-semibold tracking-wide text-cream transition-transform hover:scale-105"
              >
                Get Early Access
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
