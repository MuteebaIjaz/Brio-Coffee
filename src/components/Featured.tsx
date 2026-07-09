import { FEATURED_DRINKS } from '../data/site';
import { ImageSlot } from './ImageSlot';
import Featured1 from '../assets/Banana Matcha Poster.jpg';
import Featured2 from '../assets/Strawberry-Matcha.jpeg';


export function Featured() {
  const [hero, ...rest] = FEATURED_DRINKS;

  return (
    <section className="featured" aria-labelledby="featured-title">
      <p className="eyebrow">FEATURED THIS SEASON</p>
      <h2 className="display featured__title" id="featured-title">
        The house favourites
      </h2>
      <div className="featured__grid">
        <div className="featured__card featured__card--hero">
          <ImageSlot label={hero.photoLabel}  src={Featured1}/>
          <div className="featured__caption">
            <div className="featured__name">{hero.name}</div>
            <div className="featured__tag">{hero.tag}</div>
          </div>
        </div>
        {rest.map((d) => (
          <div className="featured__card" key={d.name}>
            <ImageSlot label={d.photoLabel}  src={Featured2}/>
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
