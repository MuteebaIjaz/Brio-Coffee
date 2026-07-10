import { useMemo, useState, useEffect } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/site';
import type { MenuCategory } from '../data/site';
import { ImageSlot } from './ImageSlot';
import { useCart } from '../context/CartContext';

/* ── Real product images ──────────────────────────────────── */
import SpanishLatteImg from '../assets/Cold Brew on Wood.jpg';
import V60Img from '../assets/gallery-pourover.jpg';
import MatchaImg from '../assets/Strawberry matcha.png';
import ColdBrewImg from '../assets/Cold Brew on Wood.jpg';
import TurkishImg from '../assets/gallery-espresso-pour.jpg';
import BrownieImg from '../assets/Dates Creation Plate.jpg';

const MENU_IMAGES: Record<string, string> = {
  'Spanish Latte': SpanishLatteImg,
  'V60': V60Img,
  'Vanilla Matcha': MatchaImg,
  'Cold Brew': ColdBrewImg,
  'Turkish Coffee': TurkishImg,
  'Lotus Brownie': BrownieImg,
};

/* ── Object positions per card ────────────────────────────── */
const MENU_IMG_POS: Record<string, string> = {
  'Spanish Latte': '50% 60%',
  'V60': '50% 50%',
  'Vanilla Matcha': '50% 50%',
  'Cold Brew': '50% 40%',
  'Turkish Coffee': '50% 50%',
  'Lotus Brownie': '50% 40%',
};

type Tab = MenuCategory | 'All';

/* ── Add to Cart button ────────────────────────────────────── */

function AddToCartBtn({ name, price, image, category }: {
  name: string;
  price: string;
  image?: string;
  category: string;
}) {
  const { addItem, items, openCart } = useCart();
  const [flash, setFlash] = useState(false);

  const inCart = items.find((i) => i.item.name === name);

  /* Flash animation on add */
  useEffect(() => {
    if (flash) {
      const t = setTimeout(() => setFlash(false), 700);
      return () => clearTimeout(t);
    }
  }, [flash]);

  const handleAdd = () => {
    addItem({ name, price, image, category });
    setFlash(true);
  };

  return (
    <div className="menu__card-action">
      {inCart && (
        <button
          className="menu__cart-qty-badge"
          aria-label={`${inCart.qty} in cart — open cart`}
          onClick={openCart}
        >
          {inCart.qty} in cart
        </button>
      )}
      <button
        className={`cart-btn${flash ? ' cart-btn--flash' : ''}`}
        onClick={handleAdd}
        aria-label={`Add ${name} to cart`}
      >
        {flash ? (
          <>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Added!
          </>
        ) : (
          <>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M6.5 1v11M1 6.5h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Add to Cart
          </>
        )}
      </button>
    </div>
  );
}

/* ── Menu section ─────────────────────────────────────────── */

export function Menu() {
  const [active, setActive] = useState<Tab>('All');

  const items = useMemo(
    () =>
      active === 'All'
        ? MENU_ITEMS
        : MENU_ITEMS.filter((m) => m.category === active),
    [active],
  );

  return (
    <section className="menu" id="menu" aria-labelledby="menu-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">SIGNATURE MENU</p>
          <h2 className="display section-head__title" id="menu-title">
            What we pour
          </h2>
        </div>
        <p className="section-head__aside">
          Prices in LBP (000) — as listed in store
        </p>
      </div>

      <div className="menu__tabs" role="tablist" aria-label="Menu categories">
        {MENU_CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={
              active === cat ? 'menu__tab menu__tab--active' : 'menu__tab'
            }
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu__grid">
        {items.map((m) => (
          <article className="menu__card" key={m.name}>
            <div className="menu__card-photo">
              <ImageSlot
                label={m.photoLabel}
                src={MENU_IMAGES[m.name]}
                objectPosition={MENU_IMG_POS[m.name] ?? '50% 50%'}
              />
            </div>
            <div className="menu__card-body">
              <div className="menu__card-top">
                <h3 className="menu__card-name">{m.name}</h3>
                <span className="menu__card-price">{m.price}</span>
              </div>
              <p className="menu__card-desc">{m.desc}</p>
              <AddToCartBtn
                name={m.name}
                price={m.price}
                image={MENU_IMAGES[m.name]}
                category={m.category}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
