import { useIsOpen } from '../hooks/useIsOpen';
import { HOURS, LINKS, GOOGLE_REVIEW_COUNT } from '../data/site';
import { Reveal } from './Reveal';

export function Visit() {
  const isOpen = useIsOpen();

  return (
    <section className="visit" id="visit" aria-labelledby="visit-title">
      <Reveal className="visit__copy">
        <div>
          <p className="eyebrow">VISIT US</p>
          <h2 className="visit__headline" id="visit-title">
            Alameddine,
            <br />
            Beirut
          </h2>
        </div>

        {/* Open/Closed status */}
        <div
          className={`visit__status${isOpen ? ' visit__status--open' : ' visit__status--closed'}`}
          aria-live="polite"
        >
          <span className="visit__status-dot" aria-hidden="true" />
          {isOpen ? 'Currently Open' : 'Currently Closed'}
        </div>

        <div className="visit__facts">
          <div>
            <div className="visit__fact-label">HOURS · MON–SAT</div>
            <div className="visit__fact-value">{HOURS.weekdays.value}</div>
          </div>
          <div>
            <div className="visit__fact-label">SUNDAY</div>
            <div className="visit__fact-value">{HOURS.sunday.value}</div>
          </div>
          <div>
            <div className="visit__fact-label">RATING</div>
            <div className="visit__fact-value">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>{' '}
              5.0 · {GOOGLE_REVIEW_COUNT}+ Google reviews
            </div>
          </div>
          <div>
            <div className="visit__fact-label">PHONE</div>
            <div className="visit__fact-value">
              <a href={`tel:${LINKS.phone}`}>{LINKS.phone}</a>
            </div>
          </div>
          <div>
            <div className="visit__fact-label">SOCIAL</div>
            <div className="visit__fact-value">
              <a href={LINKS.instagram} target="_blank" rel="noreferrer">
                @briocoffee.lb
              </a>
            </div>
          </div>
          <div>
            <div className="visit__fact-label">WHATSAPP</div>
            <div className="visit__fact-value">
              <a href={LINKS.whatsapp} target="_blank" rel="noreferrer">
                Message us
              </a>
            </div>
          </div>
        </div>

        <div className="visit__actions">
          <a
            className="visit__cta"
            href={LINKS.googleMaps}
            target="_blank"
            rel="noreferrer"
          >
            GET DIRECTIONS →
          </a>
          <a
            className="visit__cta visit__cta--outline"
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            PICKUP YOUR ORDER
          </a>
        </div>
      </Reveal>
      <Reveal className="visit__map" delay={100}>
        <iframe
          src={LINKS.mapEmbed(16)}
          title="BRIO Coffee map"
          loading="lazy"
        />
      </Reveal>
    </section>
  );
}
