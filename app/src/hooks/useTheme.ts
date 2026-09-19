import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "cp-theme";

/**
 * Light/dark theme state.
 * Persists to localStorage; defaults to the visitor's system preference.
 * Toggles the `dark` class on <html> — all brand colors are CSS variables
 * that flip in `.dark` (see src/index.css + tailwind.config.js).
 */
export function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  }, [dark]);

  const toggle = useCallback(() => setDark((d) => !d), []);

  return { dark, toggle };
}
