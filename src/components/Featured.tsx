import { FEATURED_DRINKS } from '../data/site';
import { ImageSlot } from './ImageSlot';
import { Reveal } from './Reveal';
import Featured1 from '../assets/Iced Latte.jpg';
import Featured2 from '../assets/Blue Summer Drink.jpg';
import Featured3 from '../assets/Iced Strawberry Matcha.jpg';

// Each featured drink gets its own unique image, focal point, and fit strategy.
const FEATURED_IMAGES: Array<{
  src: string;
  pos: string;
  fit: 'cover' | 'contain';
}> = [
  { src: Featured1, pos: '30% 77%', fit: 'cover' },
  { src: Featured2, pos: '50% 68%', fit: 'cover' },
  { src: Featured3, pos: '30% 20%', fit: 'cover' },
];

export function Featured() {
  const [hero, ...rest] = FEATURED_DRINKS;

  return (
    <section className="featured" aria-labelledby="featured-title">
      <Reveal>
        <p className="eyebrow">FEATURED THIS SEASON</p>
        <h2 className="display featured__title" id="featured-title">
          The house favourites
        </h2>
      </Reveal>
      <div className="featured__grid">
        {/* Hero — tall left card */}
        <Reveal className="featured__card featured__card--hero">
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
        </Reveal>

        {/* Two small cards on the right */}
        {rest.map((d, i) => (
          <Reveal
            className={`featured__card${
              FEATURED_IMAGES[i + 1].fit === 'contain'
                ? ' featured__card--contain'
                : ''
            }`}
            key={d.name}
            delay={(i + 1) * 80}
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
