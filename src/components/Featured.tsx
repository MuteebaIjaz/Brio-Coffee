import { FEATURED_DRINKS } from '../data/site';
import { ImageSlot } from './ImageSlot';
import Featured1 from '../assets/Iced Latte.jpg';
import Featured2 from '../assets/Strawberry matcha.png';
import Featured3 from '../assets/Latte Art Closeup.png';

// Each featured drink gets its own unique image, focal point, and fit strategy.
// - Hero (tall card): portrait Banana Matcha poster — cover works great
// - Small card 1: Strawberry Matcha (portrait) — contain so the whole cup is visible
// - Small card 2: Latte Art Closeup (landscape) — cover, anchor to the top where latte art is
const FEATURED_IMAGES: Array<{
  src: string;
  pos: string;
  fit: 'cover' | 'contain';
}> = [
  { src: Featured1, pos: '30% 77%', fit: 'cover' },
  { src: Featured2, pos: '50% 90%', fit: 'cover' }, // was contain, 50% 50%
  { src: Featured3, pos: '30% 20%', fit: 'cover' },
];

export function Featured() {
  const [hero, ...rest] = FEATURED_DRINKS;

  return (
    <section className="featured" aria-labelledby="featured-title">
      <p className="eyebrow">FEATURED THIS SEASON</p>
      <h2 className="display featured__title" id="featured-title">
        The house favourites
      </h2>
      <div className="featured__grid">
        {/* Hero — tall left card */}
        <div className="featured__card featured__card--hero">
          <ImageSlot
            label={hero.photoLabel}
            src={FEATURED_IMAGES[0].src}
            objectPosition={FEATURED_IMAGES[0].pos}
            objectFit={FEATURED_IMAGES[0].fit}
          />
          <div className="featured__caption">
            <div className="featured__name">{hero.name}</div>
            <div className="featured__tag">{hero.tag}</div>
          </div>
        </div>

        {/* Two small cards on the right */}
        {rest.map((d, i) => (
          <div
            className={`featured__card${
              FEATURED_IMAGES[i + 1].fit === 'contain'
                ? ' featured__card--contain'
                : ''
            }`}
            key={d.name}
          >
            <ImageSlot
              label={d.photoLabel}
              src={FEATURED_IMAGES[i + 1].src}
              objectPosition={FEATURED_IMAGES[i + 1].pos}
              objectFit={FEATURED_IMAGES[i + 1].fit}
            />
            <div className="featured__caption">
              <div className="featured__name">{d.name}</div>
              <div className="featured__tag">{d.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
