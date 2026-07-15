import { CartProvider } from './context/CartContext';
import { Preloader } from './components/Preloader';
import { CartDrawer } from './components/CartDrawer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionSpotlight } from './components/SectionSpotlight';
import { ProductSpotlight } from './components/ProductSpotlight';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Featured } from './components/Featured';
import { SummerClub } from './components/SummerClub';
import { Gallery } from './components/Gallery';
import { Reel } from './components/Reel';
import { Visit } from './components/Visit';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { LINKS } from './data/site';

export default function App() {
  return (
    <CartProvider>
      {/* Shown once on first load, above everything, then removed from the DOM */}
      <Preloader />

      {/* CartDrawer renders fixed/portal-like — outside normal document flow */}
      <CartDrawer />

      <Navbar />
      <SectionSpotlight>
        <Hero />
      </SectionSpotlight>
      <SectionSpotlight>
        <ProductSpotlight />
      </SectionSpotlight>
      <SectionSpotlight>
        <Menu />
      </SectionSpotlight>
      <SectionSpotlight>
        <Featured />
      </SectionSpotlight>
      <SectionSpotlight>
        <SummerClub />
      </SectionSpotlight>
      <SectionSpotlight>
        <Gallery />
      </SectionSpotlight>
      <SectionSpotlight>
        <Reel />
      </SectionSpotlight>
      <SectionSpotlight>
        <About />
      </SectionSpotlight>
      <SectionSpotlight>
        <Visit />
      </SectionSpotlight>
      <SectionSpotlight>
        <Testimonials />
      </SectionSpotlight>
      <SectionSpotlight>
        <Newsletter />
      </SectionSpotlight>
      <SectionSpotlight>
        <Footer />
      </SectionSpotlight>

      {/* Fixed bottom bar, mobile only — outside normal document flow, same as CartDrawer */}
      <StickyMobileCTA
        address="Alameddine, Beirut, Lebanon"
        orderUrl="#menu"
        phone={LINKS.phone}
      />
    </CartProvider>
  );
}
