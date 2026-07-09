import { ImageSlot } from './ImageSlot';

const STATS = [
  { value: '40+', label: 'DRINKS ON MENU' },
  { value: '5.0', label: 'GOOGLE RATING' },
  { value: '7/7', label: 'OPEN EVERY DAY' },
] as const;

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__copy">
        <p className="eyebrow">ABOUT BRIO</p>
        <h2 className="display about__headline" id="about-title">
          A quiet ritual, poured with intent.
        </h2>
        <p className="about__text">
          BRIO is a specialty coffee house in Alameddine, Beirut. From
          single-origin V60 and Turkish coffee to Spanish lattes and matcha
          creations, everything is measured, poured, and finished by hand — no
          shortcuts, no noise.
        </p>
        <div className="about__stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="about__stat-value">{s.value}</div>
              <div className="about__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="about__stage">
        <div className="about__main">
          <ImageSlot label="Interior — counter, wood & warm light" />
        </div>
        <div className="about__detail">
          <ImageSlot label="Detail — latte art close-up" />
        </div>
      </div>
    </section>
  );
}
