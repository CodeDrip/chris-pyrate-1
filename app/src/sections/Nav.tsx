import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import Blossom from "@/components/Blossom";
import ThemeToggle from "@/components/ThemeToggle";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Shop", to: "/shop" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-cream/90 backdrop-blur-md border-b border-navy/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <Link to="/" className="flex items-center gap-2.5">
          <Blossom className="h-8 w-8 animate-drift-slow" />
          <span className="font-script text-2xl leading-none text-navy">
            Chris Pyrate <span className="text-sakura-deep">&amp; Friends</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors hover:text-navy ${
                  isActive
                    ? "text-navy underline underline-offset-8 decoration-sakura-deep decoration-2"
                    : "text-navy/70"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <Link
            to="/shop"
            className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-cream transition-transform hover:scale-105"
          >
            Shop the Drop
          </Link>
        </nav>

        {/* mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border-2 border-navy"
          >
          <span
            className={`h-[2px] w-4 bg-navy transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`h-[2px] w-4 bg-navy transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[2px] w-4 bg-navy transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-t border-navy/10 md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 font-display text-2xl font-semibold tracking-tight transition-colors ${
                        isActive ? "bg-sakura/25 text-navy" : "text-navy/70 hover:bg-sakura/15"
                      }`
                    }
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-sakura-deep">→</span>
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="pt-2"
              >
                <Link
                  to="/shop"
                  className="block rounded-full bg-navy px-6 py-3.5 text-center text-sm font-semibold tracking-wide text-cream"
                >
                  Shop the Drop
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
