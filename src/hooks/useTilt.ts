import { useCallback, useRef } from 'react';
import type { MouseEvent } from 'react';

const PERSPECTIVE = 1000;

export function useTilt() {
  const imgRef = useRef<HTMLDivElement | null>(null);
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
      imgRef.current.style.transition = 'transform 0.1s ease-out';
      imgRef.current.style.transform =
        `perspective(${PERSPECTIVE}px) scale(1.08) rotateX(${(-ny * 3.5).toFixed(2)}deg) rotateY(${(nx * 4.5).toFixed(2)}deg)`;
      // shadow trails opposite the tilt for depth
      imgRef.current.style.setProperty('--shadow-x', `${(nx * -14).toFixed(1)}px`);
      imgRef.current.style.setProperty('--shadow-y', `${(ny * -10 + 20).toFixed(1)}px`);
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    if (!imgRef.current) return;
    imgRef.current.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    imgRef.current.style.transform = `perspective(${PERSPECTIVE}px) scale(1) rotateX(0deg) rotateY(0deg)`;
    imgRef.current.style.setProperty('--shadow-x', '0px');
    imgRef.current.style.setProperty('--shadow-y', '20px');
  }, []);

  return { imgRef, onMouseMove, onMouseLeave };
}