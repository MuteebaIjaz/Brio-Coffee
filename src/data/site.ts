export type MenuCategory =
  | 'Espresso Based'
  | 'Pure Coffee'
  | 'Matcha'
  | 'Treats';

export interface MenuItem {
  name: string;
  /** Price in LBP (000) — as listed in store. */
  price: string;
  desc: string;
  category: MenuCategory;
  photoLabel: string;
}

export interface Review {
  quote: string;
  who: string;
}

export interface FeaturedDrink {
  name: string;
  tag: string;
  photoLabel: string;
}

export interface GalleryFrame {
  id: string;
  label: string;
  tall?: boolean;
}

export const MENU_CATEGORIES: readonly (MenuCategory | 'All')[] = [
  'All',
  'Espresso Based',
  'Pure Coffee',
  'Matcha',
  'Treats',
];

export const MENU_ITEMS: readonly MenuItem[] = [
  {
    name: 'Spanish Latte',
    price: '600',
    desc: 'Double espresso over condensed milk — the house best-seller, hot or iced.',
    category: 'Espresso Based',
    photoLabel: 'Spanish Latte photo',
  },
  {
    name: 'V60',
    price: '630',
    desc: 'Single-origin pour-over, brewed to order at the counter.',
    category: 'Pure Coffee',
    photoLabel: 'V60 pour-over photo',
  },
  {
    name: 'Vanilla Matcha',
    price: '700',
    desc: 'Ceremonial-grade matcha whisked with vanilla cream.',
    category: 'Matcha',
    photoLabel: 'Vanilla matcha photo',
  },
  {
    name: 'Cold Brew',
    price: '400',
    desc: 'Steeped 18 hours, served black over ice.',
    category: 'Pure Coffee',
    photoLabel: 'Cold brew photo',
  },
  {
    name: 'Turkish Coffee',
    price: '350',
    desc: 'Slow-simmered the traditional way, unfiltered and rich.',
    category: 'Pure Coffee',
    photoLabel: 'Turkish coffee photo',
  },
  {
    name: 'Lotus Brownie',
    price: '400',
    desc: 'Fudgy house brownie finished with Lotus crème.',
    category: 'Treats',
    photoLabel: 'Lotus brownie photo',
  },
];

export const FEATURED_DRINKS: readonly FeaturedDrink[] = [
  {
    name: 'Banana Bread Matcha',
    tag: 'MATCHA CREATIONS',
    photoLabel: 'Banana Bread Matcha — tall glass, layered',
  },
  {
    name: 'Strawberry Matcha',
    tag: '770 LBP',
    photoLabel: 'Strawberry Matcha — layered red & green',
  },
  {
    name: 'Salted Maple Latte',
    tag: 'FLAVORED LATTE · 520 LBP',
    photoLabel: 'Salted Maple Latte — iced, caramel drizzle',
  },
];

export const REVIEWS: readonly Review[] = [
  {
    quote:
      'The Spanish latte is the best I\u2019ve had in Beirut. Calm space, precise coffee.',
    who: 'GOOGLE REVIEW',
  },
  {
    quote:
      'Open till midnight \u2014 my favourite late-night V60 ritual in the city.',
    who: 'GOOGLE REVIEW',
  },
  {
    quote:
      'Matcha creations are art. The strawberry matcha alone is worth the trip.',
    who: 'GOOGLE REVIEW',
  },
];

export const GALLERY_FRAMES: readonly GalleryFrame[] = [
  { id: 'g1', label: 'Interior wide shot', tall: true },
  { id: 'g2', label: 'Espresso pour' },
  { id: 'g3', label: 'Guests at the counter', tall: true },
  { id: 'g4', label: 'Dates creations plate' },
  { id: 'g5', label: 'Cold brew on wood' },
  { id: 'g6', label: 'Storefront at dusk' },
];

export const HOURS = {
  weekdays: { label: 'Mon – Sat', value: '8:00 AM — 12:00 AM' },
  sunday: { label: 'Sunday', value: '9:00 AM — 11:00 PM' },
} as const;

export const LINKS = {
  instagram: 'https://www.instagram.com/briocoffee.lb/',
  googleMaps:
    'https://www.google.com/maps/place/Brio+Coffee/@33.8928693,35.4881659,17z',
  mapEmbed: (zoom: number) =>
    `https://maps.google.com/maps?q=33.8928693,35.4881659&z=${zoom}&output=embed`,
} as const;
