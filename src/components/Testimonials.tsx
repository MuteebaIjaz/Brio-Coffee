import { REVIEWS } from '../data/site';
import { Reveal } from './Reveal';

/** Generate initials from a name, e.g. "Büşra Topal" → "BT" */
function initials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <Reveal>
        <p className="eyebrow">WORD OF MOUTH</p>
        <h2 className="testimonials__title" id="testimonials-title">
          Rated 5.0 by our guests
        </h2>
      </Reveal>
      <div className="testimonials__grid">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.who} delay={i * 80}>
            <figure className="testimonials__card">
              <div className="stars testimonials__stars" aria-label={`${r.rating} out of 5 stars`}>
                {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
              </div>
              <blockquote className="testimonials__quote">
                "{r.quote}"
              </blockquote>
              <figcaption className="testimonials__author">
                <div className="testimonials__avatar" aria-hidden="true">
                  {initials(r.who)}
                </div>
                <div className="testimonials__author-info">
                  <span className="testimonials__who">{r.who}</span>
                  <span className="testimonials__platform">Google Review</span>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
