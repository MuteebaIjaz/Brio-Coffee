import { GALLERY_FRAMES, LINKS } from '../data/site';
import { ImageSlot } from './ImageSlot';
import { Reveal } from './Reveal';
import galleryInterior from '../assets/gallery-01.png';
import galleryEspressoPour from '../assets/gallery-02.png';
import galleryPourover from '../assets/gallery-03.png';
import galleryIcedLatte from '../assets/gallery-04.png';
import galleryStorefront from '../assets/gallery-05.png';
import galleryDatesPlate from '../assets/gallery-06.png';

const GALLERY_PHOTOS: Record<string, string> = {
  g1: galleryStorefront,
  g2: galleryEspressoPour,
  g3: galleryPourover,
  g4: galleryDatesPlate,
  g5: galleryIcedLatte,
  g6: galleryInterior,
};

export function Gallery() {
  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-title">
      <Reveal>
        <div className="section-head">
          <div>
            <p className="eyebrow">GALLERY</p>
            <h2 className="display section-head__title" id="gallery-title">
              Moments at BRIO
            </h2>
          </div>
          <a
            className="gallery__link"
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
          >
            @BRIOCOFFEE.LB →
          </a>
        </div>
      </Reveal>
      <div className="gallery__grid">
        {GALLERY_FRAMES.map((f, i) => (
          <Reveal
            key={f.id}
            delay={i * 50}
            className={[
              'gallery__frame',
              f.tall ? 'gallery__frame--tall' : '',
              f.wide ? 'gallery__frame--wide' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {/* Links out to the Instagram profile — swap in this photo's
                own post URL per-frame if/when those are available. */}
            <a
              className="gallery__frame-link"
              href={LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${f.label} — view on Instagram`}
            >
              <ImageSlot label={f.label} src={GALLERY_PHOTOS[f.id]} />
              <span className="gallery__frame-icon" aria-hidden="true">
                <InstagramGlyph />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function InstagramGlyph() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
