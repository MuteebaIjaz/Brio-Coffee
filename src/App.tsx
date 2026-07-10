import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Featured } from './components/Featured';
import { Gallery } from './components/Gallery';
import { Visit } from './components/Visit';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      {/* CartDrawer renders fixed/portal-like — outside normal document flow */}
      <CartDrawer />

      <Hero />
      <About />
      <Menu />
      <Featured />
      <Gallery />
      <Visit />
      <Testimonials />
      <Footer />
    </CartProvider>
  );
}
