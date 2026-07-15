import { useEffect, useState } from 'react';
import logo from '../assets/brio-logo.png';

const MIN_DISPLAY_MS = 900;
const EXIT_DURATION_MS = 500;

/**
 * Full-screen preloader shown on first load.
 *  - Waits for the window `load` event (all assets in) OR resolves
 *    immediately if the page already finished loading before mount.
 *  - Enforces a minimum display time so it never flickers on fast
 *    connections — always feels like an intentional brand moment,
 *    not a loading-glitch.
 *  - Fades out, then unmounts (removed from the DOM entirely, not
 *    just hidden, so it can never block interaction afterwards).
 */
export function Preloader() {
  const [exiting, setExiting] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      window.setTimeout(() => setExiting(true), remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
      return () => window.removeEventListener('load', finish);
    }
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const t = window.setTimeout(() => setMounted(false), EXIT_DURATION_MS);
    return () => window.clearTimeout(t);
  }, [exiting]);

  /* Lock body scroll while the preloader is up */
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className={`preloader${exiting ? ' preloader--exit' : ''}`}
      role="status"
      aria-label="Loading BRIO Coffee"
    >
      <div className="preloader__brand">
        <div className="preloader__mark">
          <span className="preloader__ring" aria-hidden="true" />
          <span className="preloader__ring preloader__ring--delay" aria-hidden="true" />
          <img className="preloader__logo" src={logo} alt="" aria-hidden="true" />
        </div>
        <span className="preloader__wordmark">BRIO</span>
      </div>
    </div>
  );
}
