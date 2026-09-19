# Chris Pyrate & Friends — Brand Site

A light-mode, three-page brand site for **Chris Pyrate & Friends** — wearable art from
Washington, D.C. Built to pair with a Shopify storefront: the site tells the brand story
and every product card links out to Shopify for checkout.

## Pages

| Route | Page | Content |
|---|---|---|
| `/#/` | **Home** | Mural hero → manifesto → 4-piece drop teaser → email signup (intentionally short) |
| `/#/about` | **About** | The story: mural gallery, artist profile, collaboration ledger |
| `/#/shop` | **Shop** | Filterable catalog (All / Shirts / Pants / Shoes / Accessories) with Shopify checkout handoff |

> Hash-based routing (`/#/shop`) is deliberate: it keeps every page reachable on static
> hosting without server rewrites (GitHub Pages, Netlify, etc.).

![Stack](https://img.shields.io/badge/React-18-61dafb) ![Vite](https://img.shields.io/badge/Vite-7-646cff) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## Design system

| Token | Value | Usage |
|---|---|---|
| `cream` | `#faf8f5` | Page background |
| `navy` | `#1e3a5c` | Text, buttons, ink outlines |
| `sakura` | `#f2b8c6` | Blossom accents |
| `sakura-deep` | `#e48ba4` | Script kickers, highlights |
| `pyrate-teal` | `#9fc8c8` | Secondary blossom fills |
| `pyrate-lavender` | `#c3b3d8` | Secondary blossom fills |

- **Display font:** Fraunces (serif, editorial headlines)
- **Script font:** Caveat ("Chris Pyrate" signature moments)
- **Body font:** Archivo

## Theming

The site ships with **light + dark modes**. A sun/moon toggle in the nav flips the theme;
the choice persists in `localStorage` and defaults to the visitor's system preference.

All brand colors are CSS variables defined in `src/index.css` (`:root` for light, `.dark`
for dark) and consumed through Tailwind (`navy`, `cream`, `sakura`, …). To retune either
theme, edit those variable blocks — every component follows automatically.
Product tiles intentionally use fixed pastel backgrounds so the ink-outlined artwork
stays legible in both themes.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Wiring up Shopify

Open **`src/config.ts`** — this is the only file you need to touch to go live:

```ts
export const SHOP_URL = "https://your-store.myshopify.com"; // your store or collection URL
export const FORM_ACTION = "";  // Klaviyo/Mailchimp/Shopify form endpoint for email capture
```

- All **Shop the Drop** buttons and product cards point to `SHOP_URL`.
- The **Join the Friends** form is a front-end shell until you set `FORM_ACTION`
  (e.g. a Klaviyo subscribe endpoint). Without it, the form falls back to a mailto.
- Alternative architectures if you outgrow link-out:
  1. **Subdomain** — keep this site at `chrispyrate.com`, Shopify at `shop.chrispyrate.com`
  2. **Shopify Buy Button** — embed real checkout directly into the Collection section
  3. **Headless** — call Shopify's Storefront API from this React app

## Project structure

```
src/
├── config.ts            # ← brand + Shopify settings (edit me)
├── data/
│   └── products.ts      # ← catalog; categories mirror Shopify collections
├── components/
│   ├── Blossom.tsx      # signature cherry-blossom SVG
│   ├── Reveal.tsx       # scroll fade-in wrapper
│   └── ScrollToTop.tsx  # scroll reset on route change
├── sections/
│   ├── Nav.tsx          # fixed header with routed links
│   ├── Hero.tsx         # full-bleed mural hero (home)
│   ├── Ticker.tsx       # marquee strip (home)
│   ├── Manifesto.tsx    # one-line brand statement (home)
│   ├── FeaturedDrop.tsx # 4-piece drop teaser → /shop (home)
│   ├── Art.tsx          # mural gallery (about)
│   ├── Artist.tsx       # Chris's story + facts (about)
│   ├── Collabs.tsx      # collaboration ledger (about)
│   ├── Signup.tsx       # "Join the Friends" email capture
│   └── Footer.tsx
└── pages/
    ├── Home.tsx
    ├── About.tsx
    └── Shop.tsx
public/images/           # mural photography + product cutouts
```

## Managing the catalog

All products live in **`src/data/products.ts`**. Each entry has a `category` of
`shirts | pants | shoes | accessories` — the same names you should use for your
Shopify collections so the two stay in sync. Mark a product `featured: true` to
include it in the home-page teaser.

## Content notes

- Product names/prices in `src/sections/Collection.tsx` are placeholders — swap in real drops.
- Replace images in `public/images/` with your own campaign photography as it ships.
- Imagery and artwork © Chris Pyrate. Code is yours to adapt.
