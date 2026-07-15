import logo from '../assets/brio-logo.png';
import { LINKS } from '../data/site';
import { Reveal } from './Reveal';

export function Footer() {
  return (
    <footer className="footer">
      <Reveal>
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-row">
              <img className="footer__logo" src={logo} alt="" />
              <span className="footer__wordmark">BRIO</span>
            </div>
            <p className="footer__blurb">
              Crafted with specialty coffee, served with intention.
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
            <span>Mon – Sat &nbsp;·&nbsp; 8:00 AM – 12:00 AM</span>
            <span>Sunday &nbsp;·&nbsp; 9:00 AM – 11:00 PM</span>
            <span>Alameddine, Beirut</span>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">CONNECT</div>
            <a
              className="footer__social-link"
              href={LINKS.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              className="footer__social-link"
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              className="footer__social-link"
              href={`mailto:${LINKS.email}`}
            >
              <EmailIcon />
              {LINKS.email}
            </a>
            <a
              className="footer__social-link"
              href={LINKS.googleMaps}
              target="_blank"
              rel="noreferrer"
            >
              Google Maps ↗
            </a>
          </div>
        </div>
        <div className="footer__bar">
          <span>© 2026 BRIO Coffee, Beirut</span>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#">Terms & Conditions</a>
          </div>
          <span className="footer__credit">
            Website Designed &amp; Developed by{' '}
            <a
              className="footer__credit-link"
              href="https://wizztechh.com/"
              target="_blank"
              rel="noreferrer"
            >
              WizzTech
            </a>{' '}
            Digital Marketing Agency
          </span>
        </div>
      </Reveal>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
