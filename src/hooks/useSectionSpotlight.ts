import { useEffect, useRef, useState } from 'react';

interface UseSectionSpotlightResult {
  ref: React.RefObject<HTMLDivElement>;
  /** True once the section has first scrolled into view (stays true after). */
  visible: boolean;
  /** True only while the section occupies the centered "focus band" of the viewport. */
  active: boolean;
}

/**
 * Drives the section-spotlight effect:
 *  - `visible` flips true the first time the section enters the viewport,
 *    used for the one-time fade/slide-up entrance.
 *  - `active` toggles on/off every time the section passes through a thin
 *    band centered in the viewport, used to fully "light up" whichever
 *    section the user is currently reading and dim the others.
 */
export function useSectionSpotlight(): UseSectionSpotlightResult {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced motion — show everything immediately, no observers.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      setActive(true);
      return;
    }

    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          revealObserver.unobserve(node);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    // A thin horizontal band centered in the viewport — a section only
    // counts as "active" while it occupies that central focus zone.
    const activeObserver = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0, rootMargin: '-42% 0px -42% 0px' }
    );

    revealObserver.observe(node);
    activeObserver.observe(node);

    return () => {
      revealObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  return { ref, visible, active };
}
