import logo from '../assets/brio-logo.png';
import { LINKS } from '../data/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__brand-row">
            <img className="footer__logo" src={logo} alt="" />
            <span className="footer__wordmark">BRIO</span>
          </div>
          <p className="footer__blurb">
            Specialty coffee, matcha creations and handmade treats in the heart
            of Beirut.
          </p>
        </div>
        <div className="footer__col">
          <div className="footer__col-title">EXPLORE</div>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#visit">Visit</a>
        </div>
        <div className="footer__col">
          <div className="footer__col-title">HOURS</div>
          <span>Mon–Sat · 8 AM–12 AM</span>
          <span>Sunday · 9 AM–11 PM</span>
        </div>
        <div className="footer__col">
          <div className="footer__col-title">FIND US</div>
          <span>Alameddine, Beirut</span>
          <a href={LINKS.instagram} target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
          <a href={LINKS.googleMaps} target="_blank" rel="noreferrer">
            Google Maps ↗
          </a>
        </div>
      </div>
      <div className="footer__bar">
        <span>© 2026 BRIO Coffee, Beirut</span>
        <span>Every cup tells a story.</span>
      </div>
    </footer>
  );
}
