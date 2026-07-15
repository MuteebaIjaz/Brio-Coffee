interface StickyMobileCTAProps {
  address: string;
  orderUrl: string;
  phone: string;
}

/**
 * Persistent bottom action bar, mobile only (≤720px, matches the
 * site's existing breakpoint). Reuses the Cream Editorial design tokens
 * (--ink, --paper, --purple, etc.) matching the pill-button language
 * used elsewhere on BRIO.
 */
export function StickyMobileCTA({ address, orderUrl, phone }: StickyMobileCTAProps) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

  return (
    <nav className="sticky-cta" aria-label="Quick actions">
      <a className="sticky-cta__item" href={directionsUrl} target="_blank" rel="noopener noreferrer">
        <PinIcon />
        <span>Directions</span>
      </a>

      <a className="sticky-cta__item sticky-cta__item--primary" href={orderUrl || '#menu'}>
        <BagIcon />
        <span>Order</span>
      </a>

      <a className="sticky-cta__item" href={`tel:${phone}`}>
        <PhoneIcon />
        <span>Call</span>
      </a>
    </nav>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5c0 9.4 6.6 16 16 16l2-4-5-3-2 2c-2.5-1.2-4-2.7-5-5l2-2-3-5-4 1z" />
    </svg>
  );
}
