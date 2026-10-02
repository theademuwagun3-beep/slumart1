import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4624252/pexels-photo-4624252.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Artist hand painting a portrait on canvas"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-6 text-[13px] font-normal uppercase tracking-[0.25em] text-white/70 animate-fade-in-up">
            Custom Portrait Paintings · Worldwide Shipping
          </p>
          <h1 className="text-[44px] font-bold leading-[1.05] uppercase text-white animate-fade-in-up animation-delay-100 sm:text-[56px] lg:text-[60px]">
            Turn Your Favorite Photo Into a Hand-Painted Oil Portrait
          </h1>
          <p className="mt-8 max-w-xl text-[20px] font-normal leading-[1.6] text-white/85 animate-fade-in-up animation-delay-200">
            Real oil on canvas — no filters, no printing. Perfect for gifts, weddings, and
            meaningful memories.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-300">
            <a
              href="#contact"
              className="group inline-flex min-h-[70px] min-w-[280px] items-center justify-center gap-2 border-2 border-white bg-white px-10 text-[20px] font-bold tracking-wide text-black transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Commission a Painting
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#gallery"
              className="inline-flex min-h-[70px] min-w-[200px] items-center justify-center border border-white/60 px-10 text-[20px] font-bold tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-fade-in-up animation-delay-500">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[12px] font-normal uppercase tracking-[0.2em] text-white/60">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
