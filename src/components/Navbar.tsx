import logo from '../assets/brio-logo.png';
import { LINKS } from '../data/site';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'MENU', href: '#menu' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'VISIT', href: '#visit' },
] as const;

export function Navbar() {
  return (
    <nav className="nav" aria-label="Main">
      <a className="nav__brand" href="#top" aria-label="BRIO Coffee home">
        <img className="nav__logo" src={logo} alt="" />
        <span className="nav__wordmark">BRIO</span>
      </a>
      <div className="nav__links">
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="nav__actions">
        <a className="pill pill--outline" href="#visit">
          VISIT US
        </a>
        <a
          className="pill pill--solid"
          href={LINKS.googleMaps}
          target="_blank"
          rel="noreferrer"
        >
          ORDER IN STORE
        </a>
      </div>
    </nav>
  );
}
