import { useTilt } from '../hooks/useTilt';
import { HOURS, LINKS } from '../data/site';
import { Navbar } from './Navbar';
import heroGuestMatcha from '../assets/hero-guest-matcha.jpg';

export function Hero() {
  const { imgRef, copyRef, onMouseMove, onMouseLeave } = useTilt();

  return (
    <header
      className="hero"
      id="top"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <Navbar />

      <div className="hero__body">
        <div className="hero__copy" ref={copyRef}>
          <p className="hero__kicker">SPECIALTY COFFEE · BEIRUT</p>
          <h1 className="display hero__headline">
            Every Cup.
            <br />
            <em>Tells a Story.</em>
          </h1>
          <p className="hero__lede">
            Specialty coffee, matcha creations and handmade treats — poured
            daily until midnight in Alameddine, Beirut.
          </p>
          <div className="hero__cta-row">
            <a className="pill pill--solid hero__cta" href="#menu">
              VIEW MENU ↗
            </a>
            <span className="hero__rating">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              5.0 on Google
            </span>
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

        <div className="hero__stage">
          <div className="hero__frame">
            <img
              className="hero__frame-img"
              src={heroGuestMatcha}
              alt="Guest holding an oversized iced matcha outside BRIO Coffee"
            />
          </div>
          <div className="hero__pop-float">
            <div className="hero__pop" ref={imgRef}>
              <div className="hero__pop-crop">
                <img
                  className="hero__pop-img"
                  src={heroGuestMatcha}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="hero__badge">
            <span className="stars" aria-hidden="true">
              ★★★★★
            </span>
            <span>5.0 · Google</span>
          </div>
          <div className="hero__hours">
            <span className="hero__hours-eyebrow">WE'RE OPEN</span>
            <div className="hero__hours-row">
              <span>{HOURS.weekdays.label}</span>
              <span>{HOURS.weekdays.value}</span>
            </div>
            <div className="hero__hours-row">
              <span>{HOURS.sunday.label}</span>
              <span>{HOURS.sunday.value}</span>
            </div>
          </div>
        </div>
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
