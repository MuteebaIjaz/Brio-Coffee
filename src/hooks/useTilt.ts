import { useCallback, useRef } from 'react';
import type { MouseEvent } from 'react';

/**
 * 3D tilt interaction ported from the original design:
 * the hero image rotates toward the cursor while the copy
 * column drifts gently in the opposite direction.
 * Respects `prefers-reduced-motion`.
 */
export function useTilt() {
  const imgRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const onMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    if (reducedMotion.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
    if (imgRef.current) {
      imgRef.current.style.transform = `scale(1.08) rotateX(${(-ny * 3.5).toFixed(2)}deg) rotateY(${(nx * 4.5).toFixed(2)}deg)`;
    }
    if (copyRef.current) {
      copyRef.current.style.transform = `translate3d(${(nx * -16).toFixed(1)}px, ${(ny * -10).toFixed(1)}px, 40px)`;
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    if (imgRef.current) imgRef.current.style.transform = 'scale(1.08)';
    if (copyRef.current) copyRef.current.style.transform = 'none';
  }, []);

  return { imgRef, copyRef, onMouseMove, onMouseLeave };
}
