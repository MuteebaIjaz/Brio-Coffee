import { GALLERY_FRAMES, LINKS } from '../data/site';
import { ImageSlot } from './ImageSlot';

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
            <ImageSlot label={f.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
