import { useMemo, useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/site';
import type { MenuCategory } from '../data/site';
import { ImageSlot } from './ImageSlot';

type Tab = MenuCategory | 'All';

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
              <ImageSlot label={m.photoLabel} />
            </div>
            <div className="menu__card-body">
              <div className="menu__card-top">
                <h3 className="menu__card-name">{m.name}</h3>
                <span className="menu__card-price">{m.price}</span>
              </div>
              <p className="menu__card-desc">{m.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
