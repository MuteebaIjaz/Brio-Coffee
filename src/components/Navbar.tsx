import { useState, useEffect, useRef } from 'react';
import logo from '../assets/brio-logo.png';
import { LINKS } from '../data/site';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'MENU', href: '#menu' },
  { label: 'CLUB', href: '#summer-club' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'VISIT', href: '#visit' },
] as const;

/* ─── Cart icon button ───────────────────────────────────── */

function CartIconBtn({ onClick }: { onClick: () => void }) {
  const { totalQty, lastAdded, clearLastAdded } = useCart();
  const [pulse, setPulse] = useState(false);
  const prevQty = useRef(totalQty);

  /* Trigger pulse animation whenever an item is added */
  useEffect(() => {
    if (lastAdded && totalQty > prevQty.current) {
      setPulse(true);
      clearLastAdded();
      const t = setTimeout(() => setPulse(false), 600);
      return () => clearTimeout(t);
    }
    prevQty.current = totalQty;
  }, [totalQty, lastAdded, clearLastAdded]);

  return (
    <button
      className="cart-icon-btn"
      aria-label={`Open cart — ${totalQty} ${totalQty === 1 ? 'item' : 'items'}`}
      aria-controls="cart-drawer"
      onClick={onClick}
    >
      {/* Shopping bag SVG */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 6h14l-1.5 10a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8 6a3 3 0 0 1 6 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      {totalQty > 0 && (
        <span className={`cart-badge${pulse ? ' cart-badge--pulse' : ''}`}>
          {totalQty > 99 ? '99+' : totalQty}
        </span>
      )}
    </button>
  );
}

/* ─── Navbar ─────────────────────────────────────────────── */

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openCart } = useCart();

  /* Glassmorphism on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close drawer on resize back to desktop */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 721px)');
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} aria-label="Main">
        {/* Hamburger (Left on mobile, hidden on desktop) */}
        <button
          className={`nav__burger${open ? ' nav__burger--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav__links">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <a className="nav__brand" href="#top" aria-label="BRIO Coffee home">
          <span className="nav__brand-row">
            <img className="nav__logo" src={logo} alt="" />
            <span className="nav__wordmark">BRIO</span>
          </span>
          <span className="nav__tagline">Specialty Coffee</span>
        </a>

        <div className="nav__actions">
          <a className="pill pill--outline" href="#visit">
            VISIT US
          </a>
          <a
            className="pill pill--solid"
            href="#menu"
          >
            ORDER NOW
          </a>
          <CartIconBtn onClick={openCart} />
        </div>

        {/* Mobile Right: Cart */}
        <div className="nav__mobile-cart">
          <CartIconBtn onClick={openCart} />
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`nav__drawer${open ? ' nav__drawer--open' : ''}`}
        aria-hidden={!open}
      >
        <div className="nav__drawer-header">
          <button
            className="nav__drawer-close"
            aria-label="Close menu"
            onClick={close}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M2 2l14 14M16 2L2 16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="nav__drawer-links" aria-label="Mobile navigation">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <div className="nav__drawer-actions">
            <a className="pill pill--solid" href="#visit" onClick={close}>
              VISIT US
            </a>
            <a
              className="pill pill--solid"
              href={LINKS.googleMaps}
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              ORDER IN STORE
            </a>
          </div>
        </nav>
      </div>

      {/* Backdrop for mobile menu */}
      {open && (
        <div
          className="nav__backdrop"
          aria-hidden="true"
          onClick={close}
        />
      )}
    </>
  );
}
