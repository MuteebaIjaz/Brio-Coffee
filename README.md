# BRIO Coffee — Cream Editorial

React + TypeScript implementation of design **1a "Cream Editorial"** — quiet luxury, oversized Cormorant Garamond serif, warm menu-paper palette with a deep purple accent.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  components/    One component per page section
    Hero.tsx         Hero with 3D cursor tilt + nav + feature strip
    About.tsx        About + stats + layered photos
    Menu.tsx         Signature menu with working category filter tabs
    Featured.tsx     Seasonal favourites grid
    Gallery.tsx      Photo grid
    Visit.tsx        Location, hours, embedded map
    Testimonials.tsx Review cards
    Footer.tsx
    ImageSlot.tsx    Photo placeholder frame
  data/site.ts   All menu items, reviews, hours, links (typed)
  hooks/useTilt.ts   Hero tilt interaction (respects prefers-reduced-motion)
  index.css      Design tokens (CSS variables) + all styles, responsive to mobile
```

## Adding your photos

Every photo frame is an `<ImageSlot label="..." />` showing a labeled placeholder. Drop your images into `src/assets/`, import them, and pass `src`:

```tsx
import heroShot from '../assets/hero-drink.jpg';

<ImageSlot label="Signature drink" src={heroShot} />
```

## Editing content

Menu items, prices, reviews, hours, and links all live in `src/data/site.ts` — no need to touch components to update them. The testimonial quotes are sample copy; replace them with real Google review snippets.
