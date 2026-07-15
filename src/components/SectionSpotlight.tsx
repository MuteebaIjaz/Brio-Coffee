import { ReactNode } from 'react';
import { useSectionSpotlight } from '../hooks/useSectionSpotlight';

interface SectionSpotlightProps {
  children: ReactNode;
}

/**
 * Wraps a top-level section to give it:
 *  - a one-time fade/slide-up entrance the first time it's scrolled into view
 *  - a subtle dim/lit "spotlight" toggle depending on whether it's the
 *    section currently centered in the viewport
 */
export function SectionSpotlight({ children }: SectionSpotlightProps) {
  const { ref, visible, active } = useSectionSpotlight();

  return (
    <div
      ref={ref}
      className={`section-spotlight${visible ? ' section-spotlight--visible' : ''}${
        active ? ' section-spotlight--active' : ''
      }`}
    >
      {children}
    </div>
  );
}
