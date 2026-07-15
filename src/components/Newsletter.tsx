import { useState, type FormEvent } from 'react';
import { LINKS } from '../data/site';
import { Reveal } from './Reveal';

/**
 * Email capture band, sits just above the footer.
 *
 * NOTE: there's no backend or email service provider (Mailchimp,
 * Klaviyo, etc.) wired up here — submitting opens a pre-filled email
 * to BRIO so nothing is silently lost, but this should be replaced
 * with a real signup integration before launch.
 */
export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const subject = encodeURIComponent('Newsletter signup');
    const body = encodeURIComponent(
      `Please add me to the BRIO mailing list.\n\nEmail: ${email.trim()}`,
    );
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    setEmail('');
  };

  return (
    <section className="newsletter" id="newsletter" aria-labelledby="newsletter-title">
      <Reveal className="newsletter__inner">
        <div className="newsletter__copy">
          <p className="eyebrow">STAY IN THE LOOP</p>
          <h2 className="display newsletter__title" id="newsletter-title">
            Never miss a new drink.
          </h2>
          <p className="newsletter__sub">
            First access to seasonal drinks, offers, and BRIO news —
            straight to your inbox.
          </p>
        </div>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            className="newsletter__input"
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="newsletter__btn" type="submit">
            Join
          </button>
        </form>
      </Reveal>
    </section>
  );
}
