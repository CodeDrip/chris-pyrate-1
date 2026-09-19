import { Link } from "react-router";
import { SOCIALS, CONTACT_EMAIL } from "@/config";
import Blossom from "@/components/Blossom";

export default function Footer() {
  return (
    <footer className="bg-navy py-16 text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <Blossom className="h-10 w-10" variant={2} />
              <span className="font-script text-4xl">Chris Pyrate &amp; Friends</span>
            </div>
            <p className="mt-4 max-w-sm text-cream/60">
              Wearable art from Washington, D.C. Energetically tranquil since day one.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <Link to="/shop" className="text-cream/80 transition-colors hover:text-sakura">
              Shop
            </Link>
            <Link to="/about" className="text-cream/80 transition-colors hover:text-sakura">
              About
            </Link>
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="text-cream/80 transition-colors hover:text-sakura">
              Instagram
            </a>
            <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer" className="text-cream/80 transition-colors hover:text-sakura">
              TikTok
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-cream/80 transition-colors hover:text-sakura">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-cream/20 pt-6 text-xs text-cream/50 md:flex-row">
          <span>© {new Date().getFullYear()} Chris Pyrate &amp; Friends. All artwork © Chris Pyrate.</span>
          <span>Washington, D.C. — Energetically Tranquil</span>
        </div>
      </div>
    </footer>
  );
}
