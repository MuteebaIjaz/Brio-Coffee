import { ImageSlot } from './ImageSlot';
import { Reveal } from './Reveal';
import About1 from '../assets/About Brio Poster.jpg';
import About2 from '../assets/Latte Art Closeup.png';


const STATS = [
  { value: '40+',         label: 'DRINKS ON MENU' },
  { value: '5.0',         label: 'GOOGLE RATING'  },
  { value: 'Open 7 days', label: 'EVERY WEEK'      },
] as const;

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <Reveal as="div" className="about__copy">
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
      </Reveal>
      <Reveal as="div" className="about__stage" delay={120}>
        <div className="about__main">
          <ImageSlot label="Interior — counter, wood & warm light" src={About2}/>
        </div>
        <div className="about__detail">
          <ImageSlot label="Detail — latte art close-up" src={About1}/>
        </div>
      </Reveal>
    </section>
  );
}