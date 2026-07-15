import { useTilt } from '../hooks/useTilt';
import { useIsOpen } from '../hooks/useIsOpen';
import { LINKS, GOOGLE_REVIEW_COUNT } from '../data/site';
import { Reveal } from './Reveal';

import heroGuestMatcha from '../assets/hero-guest-matcha.jpg';

export function Hero() {
  const { imgRef, onMouseMove, onMouseLeave } = useTilt();
  const isOpen = useIsOpen();

  return (
    <header
      className="hero"
      id="top"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >

      <div className="hero__body">
      <Reveal>
          <div className="hero__copy">
          <p className="hero__kicker">SPECIALTY COFFEE · BEIRUT</p>
          <h1 className="display hero__headline">
            Every Cup.
            <br />
            <em>Tells a Story.</em>
          </h1>

          {/* Trust indicators */}
          <div className="hero__trust-row" aria-label="Why choose BRIO">
            <span className="hero__trust-item">
              <span className="stars" aria-hidden="true">★</span> 4.9 Rating
            </span>
            <span className="hero__trust-item">Freshly Brewed Daily</span>
            <span className="hero__trust-item">Specialty Coffee</span>
          </div>

          <p className="hero__lede">
            Specialty coffee, matcha creations and handmade treats — poured
            daily until midnight in Alameddine, Beirut.
          </p>

          {/* Dual CTA row */}
          <div className="hero__cta-row">
            <a className="pill pill--solid hero__cta hero__cta--primary" href="#menu">
              ORDER NOW
            </a>
            <a className="pill pill--outline hero__cta" href="#menu">
              VIEW MENU ↗
            </a>
          </div>

          <div className="hero__visit-card">
            <div className="hero__visit-map" aria-hidden="true">
              <iframe
                src={LINKS.mapEmbed(15)}
                title="Mini map of BRIO Coffee"
                loading="lazy"
              />
            </div>
            <div className="hero__visit-info">
              <span className="hero__visit-eyebrow">VISIT US</span>
              <span className="hero__visit-place">Alameddine, Beirut</span>
              <a
                className="hero__visit-link"
                href={LINKS.googleMaps}
                target="_blank"
                rel="noreferrer"
              >
                Get directions →
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
          <div className="hero__stage">
          <div className="hero__pop-float">
            <div className="hero__pop" ref={imgRef}>
              <div className="hero__pop-crop">
                <img
                  className="hero__pop-img"
                  src={heroGuestMatcha}
                  alt="Guest holding an oversized iced matcha outside BRIO Coffee"
                />
              </div>
            </div>
          </div>
          <div className="hero__top-row">
            <a className="hero__menu-fab" href="#menu">
              View Menu ↗
            </a>
            <div className="hero__badge">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <span>5.0 ({GOOGLE_REVIEW_COUNT}+)</span>
            </div>
          </div>
          <div
            className={`hero__status${isOpen ? ' hero__status--open' : ' hero__status--closed'}`}
          >
            <span className="hero__status-dot" aria-hidden="true" />
            {isOpen ? 'Open Now' : 'Currently Closed'}
          </div>
        </div>
      </Reveal>
      </div>

      <FeatureStrip />
    </header>
  );
}

const FEATURES = [
  { num: '01', title: 'Specialty Beans', sub: 'Single-origin, brewed to order.' },
  { num: '02', title: 'Handcrafted Daily', sub: 'Drinks & treats made in-house.' },
  { num: '03', title: 'Open until midnight', sub: 'Every day of the week.' },
] as const;

function FeatureStrip() {
  return (
    <div className="features">
      {FEATURES.map((f) => (
        <div className="features__item" key={f.num}>
          <span className="features__num">{f.num}</span>
          <div>
            <div className="features__title">{f.title}</div>
            <div className="features__sub">{f.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
