import { GALLERY_FRAMES, LINKS } from '../data/site';
import { ImageSlot } from './ImageSlot';
import galleryInterior from '../assets/gallery-interior.jpg';
import galleryEspressoPour from '../assets/gallery-espresso-pour.jpg';
import galleryPourover from '../assets/gallery-pourover.jpg';
import galleryIcedLatte from '../assets/gallery-iced-latte.jpg';
import galleryStorefront from '../assets/gallery-storefront.jpg';
import galleryDatesPlate from '../assets/gallery-dates-plate.jpg';

const GALLERY_PHOTOS: Record<string, string> = {
  g1: galleryInterior,
  g2: galleryEspressoPour,
  g3: galleryPourover,
  g4: galleryDatesPlate,
  g5: galleryIcedLatte,
  g6: galleryStorefront,
};

export function Gallery() {
  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-title">
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
      <div className="gallery__grid">
        {GALLERY_FRAMES.map((f) => (
          <div
            key={f.id}
            className={
              f.tall ? 'gallery__frame gallery__frame--tall' : 'gallery__frame'
            }
          >
            <ImageSlot label={f.label} src={GALLERY_PHOTOS[f.id]} />
          </div>
        ))}
      </div>
    </section>
  );
}
