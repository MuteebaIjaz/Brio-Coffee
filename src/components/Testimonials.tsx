import { REVIEWS } from '../data/site';

export function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <p className="eyebrow">WORD OF MOUTH</p>
      <h2 className="testimonials__title" id="testimonials-title">
        Rated 5.0 by our guests
      </h2>
      <div className="testimonials__grid">
        {REVIEWS.map((r) => (
          <figure className="testimonials__card" key={r.quote}>
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote className="testimonials__quote">
              “{r.quote}”
            </blockquote>
            <figcaption className="testimonials__who">{r.who}</figcaption>
          </figure>
        ))}
      </div>
      
    </section>
  );
}
