import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Shipping from '@/components/Shipping';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Pricing />
        <About />
        <Gallery />
        <Testimonials />
        <Shipping />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
