import { Reveal } from './Reveal';
import reelVideo from '../assets/brio-behind-the-counter.mp4';

export function Reel() {
  return (
    <section className="reel" id="reel" aria-labelledby="reel-title">
      <Reveal as="div" className="reel__copy">
        <p className="eyebrow">BEHIND THE COUNTER</p>
        <h2 className="display reel__headline" id="reel-title">
          Watch it come together.
        </h2>
        <p className="reel__text">
          From steamed milk to the final pour, every cup at BRIO is built by
          hand — one layer at a time. No shortcuts, no machines doing the
          thinking, just practiced hands and good beans.
        </p>
        <a className="pill pill--outline reel__cta" href="#menu">
          VIEW MENU ↗
        </a>
      </Reveal>

      <Reveal as="div" className="reel__stage" delay={120}>
        <video
          className="reel__video"
          src={reelVideo}
          autoPlay
          loop
          muted
          playsInline
          controls
          aria-label="A drink being made behind the counter at BRIO Coffee"
        />
        <span className="reel__tag">@BRIOCOFFEE.LB</span>
      </Reveal>
    </section>
  );
}
