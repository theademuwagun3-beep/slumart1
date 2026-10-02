import { Check } from 'lucide-react';

const features = [
  'Sizes up to 120 inches (larger on request)',
  'Acrylic or oil on high-quality canvas',
  'Secure packaging & insured shipping',
  'Worldwide delivery with tracking',
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-tertiary py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/31251944/pexels-photo-31251944.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Artist carefully painting a detailed portrait"
              className="h-[440px] w-full object-cover lg:h-[520px]"
            />
          </div>

          {/* Right — content */}
          <div>
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
              Formats & Price Range
            </p>
            <h2 className="text-[37px] font-bold leading-[1.1] text-black sm:text-[47px]">
              Starting at
            </h2>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[56px] font-bold leading-none text-black lg:text-[64px]">
                $1,590
              </span>
              <span className="text-[20px] font-normal text-black/50">USD</span>
            </div>
            <p className="mt-6 max-w-md text-[20px] font-normal leading-[1.6] text-black/70">
              Final pricing depends on <span className="font-bold text-black">size, subject, and
              complexity</span>. You will receive a clear quote before work begins — no surprises.
            </p>

            <ul className="mt-10 space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-black text-black">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-[20px] font-normal leading-[1.4] text-black/80">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex min-h-[70px] min-w-[280px] items-center justify-center border-2 border-black bg-black px-10 text-[20px] font-bold tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-black"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
