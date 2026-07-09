import { HOURS, LINKS } from '../data/site';

export function Visit() {
  return (
    <section className="visit" id="visit" aria-labelledby="visit-title">
      <div className="visit__copy">
        <div>
          <p className="eyebrow">VISIT US</p>
          <h2 className="visit__headline" id="visit-title">
            Alameddine,
            <br />
            Beirut
          </h2>
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
              5.0 on Google
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
        </div>
        <a
          className="visit__cta"
          href={LINKS.googleMaps}
          target="_blank"
          rel="noreferrer"
        >
          GET DIRECTIONS →
        </a>
      </div>
      <div className="visit__map">
        <iframe
          src={LINKS.mapEmbed(16)}
          title="BRIO Coffee map"
          loading="lazy"
        />
      </div>
    </section>
  );
}
