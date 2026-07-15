import { Reveal } from './Reveal';
import summerClubCards from '../assets/summer-club-cards.png';

const PERKS = [
  '20% off every order',
  'Loyalty members only',
  'Valid till end of August',
] as const;

export function SummerClub() {
  return (
    <section
      className="summer-club"
      id="summer-club"
      aria-labelledby="summer-club-title"
    >
      <Reveal as="div" className="summer-club__copy">
        <p className="eyebrow">LIMITED-TIME OFFER</p>
        <h2 className="display summer-club__headline" id="summer-club-title">
          BRIO Summer Club
        </h2>
        <p className="summer-club__text">
          Iced drinks, sunny days, and 20% off. Pick up your card in-store
          and you're officially part of the vibe — no app, no sign-up, just
          show it at the counter.
        </p>
        <ul className="summer-club__perks">
          {PERKS.map((p) => (
            <li key={p}>
              <CheckIcon />
              {p}
            </li>
          ))}
        </ul>
        <div className="summer-club__actions">
          <a className="summer-club__cta" href="#visit">
            GET YOUR CARD
          </a>
          <a className="summer-club__cta summer-club__cta--outline" href="#menu">
            VIEW MENU
          </a>
        </div>
      </Reveal>

      <Reveal as="div" className="summer-club__stage" delay={120}>
        <img
          className="summer-club__img"
          src={summerClubCards}
          alt="BRIO Summer Club membership card, front and back — 20% off for loyalty members, valid until end of August"
        />
      </Reveal>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8.5l3.2 3.2L13 4.8" />
    </svg>
  );
}
