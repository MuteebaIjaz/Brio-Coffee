import { useState, useEffect, useCallback } from 'react';
import Spotlight1 from '../assets/Spotlight-01.png';
import Spotlight2 from '../assets/Spotlight-02.png';
import Spotlight3 from '../assets/Spotlight-03.png';
import { Reveal } from './Reveal';

const SPOTLIGHT_ITEMS = [
  {
    id: 'latte',
    name: 'Iced Latte',
    desc: 'A perfectly balanced blend of our signature espresso and cold milk, poured over ice for a refreshing finish.',
    image: Spotlight1,
    bgColor: '#f7f3ea', // Warm cream
  },
  {
    id: 'matcha',
    name: 'Strawberry Matcha',
    desc: 'Ceremonial-grade matcha elegantly layered with house-made strawberry puree and a touch of caramel drizzle.',
    image: Spotlight2,
    bgColor: '#edf2f7', // Soft blue tint
  },
  {
   id:'vanilla-latte',
   name:'Vanilla Latte',
   desc:'Rich espresso meets creamy vanilla, creating a timeless classic that’s both comforting and sophisticated.',
    image: Spotlight3,
    bgColor: '#f4edea', // Pale pink tint
  },
];

export function ProductSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  
  const total = SPOTLIGHT_ITEMS.length;

  // Check for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  // Autoplay — continuous loop, no manual controls
  useEffect(() => {
    if (paused || reducedMotion) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [paused, reducedMotion, nextSlide]);

  return (
    <section 
      className="spotlight" 
      aria-label="Product Spotlight"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Reveal className="spotlight__container">

        <div className="spotlight__slides">
          {SPOTLIGHT_ITEMS.map((item, index) => {
            const isActive = index === activeIndex;
            // Preload next image (if it's the next one, we can just rely on standard img loading=lazy for the rest, 
            // but we use loading="eager" for the first one)
            const isFirst = index === 0;

            return (
              <div 
                key={item.id} 
                className={`spotlight__slide ${isActive ? 'spotlight__slide--active' : ''}`}
                aria-hidden={!isActive}
              >
                <div className="spotlight__image-wrap">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="spotlight__image"
                    loading={isFirst ? "eager" : "lazy"}
                  />
                </div>
                <div className="spotlight__content">
                  <p className="eyebrow spotlight__eyebrow">SPOTLIGHT</p>
                  <h3 className="display spotlight__title">{item.name}</h3>
                  <p className="spotlight__desc">{item.desc}</p>
                  <div className="spotlight__cta-row">
                    <a className="pill pill--solid spotlight__cta" href="#menu">
                      ORDER NOW
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </Reveal>
    </section>
  );
}
