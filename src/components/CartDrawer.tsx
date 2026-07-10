import { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext';

/* ─── Empty state ─────────────────────────────────────────── */

function EmptyCart() {
  return (
    <div className="cart-empty">
      <div className="cart-empty__icon" aria-hidden="true">
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cup body */}
          <rect
            x="18"
            y="26"
            width="36"
            height="30"
            rx="6"
            stroke="currentColor"
            strokeWidth="2.2"
            fill="none"
          />
          {/* Handle */}
          <path
            d="M54 32 Q66 32 66 42 Q66 52 54 52"
            stroke="currentColor"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Steam lines */}
          <path
            d="M28 18 Q30 13 28 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M36 16 Q38 11 36 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M44 18 Q46 13 44 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Saucer */}
          <ellipse
            cx="36"
            cy="58"
            rx="22"
            ry="4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <p className="cart-empty__title">Your cart is empty</p>
      <p className="cart-empty__sub">
        Add your favourite coffee to get started.
      </p>
    </div>
  );
}

/* ─── Individual cart row ─────────────────────────────────── */

interface CartRowProps {
  name: string;
  price: string;
  image?: string;
  qty: number;
  notes: string;
}

function CartRow({ name, price, image, qty, notes }: CartRowProps) {
  const { removeItem, updateQty, setNotes } = useCart();
  const [notesOpen, setNotesOpen] = useState(!!notes);

  return (
    <li className="cart-item">
      {/* Thumbnail */}
      <div className="cart-item__thumb">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="cart-item__thumb-placeholder" aria-hidden="true">
            ☕
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="cart-item__body">
        <div className="cart-item__top">
          <span className="cart-item__name">{name}</span>
          <button
            className="cart-item__remove"
            aria-label={`Remove ${name}`}
            onClick={() => removeItem(name)}
          >
            {/* Trash icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M2 4h11M5 4V2.5A.5.5 0 0 1 5.5 2h4a.5.5 0 0 1 .5.5V4M6 7v4M9 7v4M3 4l.8 8.2A1 1 0 0 0 4.8 13h5.4a1 1 0 0 0 1-.8L12 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Price + qty stepper */}
        <div className="cart-item__mid">
          <span className="cart-item__price">
            {(parseInt(price, 10) * qty).toLocaleString()} LBP
          </span>
          <div className="cart-qty">
            <button
              className="cart-qty__btn"
              aria-label="Decrease quantity"
              onClick={() => updateQty(name, -1)}
            >
              −
            </button>
            <span className="cart-qty__count" aria-live="polite">
              {qty}
            </span>
            <button
              className="cart-qty__btn"
              aria-label="Increase quantity"
              onClick={() => updateQty(name, 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Notes toggle */}
        <button
          className="cart-item__notes-toggle"
          onClick={() => setNotesOpen((v) => !v)}
        >
          {notesOpen ? '− Hide note' : '+ Add a note'}
        </button>

        {notesOpen && (
          <textarea
            className="cart-notes"
            placeholder='e.g. "Less sugar, extra ice"'
            value={notes}
            rows={2}
            maxLength={120}
            onChange={(e) => setNotes(name, e.target.value)}
            aria-label={`Special instructions for ${name}`}
          />
        )}
      </div>
    </li>
  );
}

/* ─── Confirm animation overlay ─────────────────────────── */

function ConfirmOverlay({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="cart-confirm-overlay" aria-live="assertive">
      <div className="cart-confirm-overlay__inner">
        <div className="cart-confirm-overlay__check" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.5" />
            <path
              d="M14 24l7 7 13-13"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="cart-confirm-overlay__msg">Order placed!</p>
        <p className="cart-confirm-overlay__sub">
          See you soon at BRIO ☕
        </p>
      </div>
    </div>
  );
}

/* ─── Main drawer ─────────────────────────────────────────── */

const DELIVERY_FEE = 0; // placeholder — free for dine-in

export function CartDrawer() {
  const { items, isOpen, totalQty, subtotal, clearCart, closeCart } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [confirmed, setConfirmed] = useState(false);

  /* Trap focus inside drawer & handle Escape */
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, closeCart]);

  /* Lock body scroll */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setConfirmed(false); // reset on close
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleConfirm = () => {
    setConfirmed(true);
    clearCart();
  };

  const total = subtotal + DELIVERY_FEE;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="cart-backdrop"
          aria-hidden="true"
          onClick={closeCart}
        />
      )}

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        id="cart-drawer"
        className={`cart-drawer${isOpen ? ' cart-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
      >
        {/* Confirm overlay */}
        {confirmed && (
          <ConfirmOverlay
            onDone={() => {
              setConfirmed(false);
              closeCart();
            }}
          />
        )}

        {/* Header */}
        <div className="cart-drawer__header">
          <div className="cart-drawer__header-left">
            <span className="cart-drawer__title">Your Order</span>
            {totalQty > 0 && (
              <span className="cart-drawer__count">
                {totalQty} {totalQty === 1 ? 'item' : 'items'}
              </span>
            )}
          </div>
          <button
            className="cart-drawer__close"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 2l14 14M16 2L2 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <ul className="cart-drawer__list">
              {items.map((ci) => (
                <CartRow
                  key={ci.item.name}
                  name={ci.item.name}
                  price={ci.item.price}
                  image={ci.item.image}
                  qty={ci.qty}
                  notes={ci.notes}
                />
              ))}
            </ul>
          )}
        </div>

        {/* Footer (only when cart has items) */}
        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-summary">
              <div className="cart-summary__row">
                <span>Subtotal</span>
                <span>{subtotal.toLocaleString()} LBP</span>
              </div>
              <div className="cart-summary__row">
                <span>Service fee</span>
                <span className="cart-summary__free">Free</span>
              </div>
              <div className="cart-summary__row cart-summary__row--total">
                <span>Total</span>
                <span>{total.toLocaleString()} LBP</span>
              </div>
            </div>

            <button
              className="cart-cta"
              onClick={handleConfirm}
            >
              Confirm Order
            </button>

            <button
              className="cart-continue"
              onClick={closeCart}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
