import { Package, ShieldCheck, Truck } from 'lucide-react';
import { shippingFeatures } from '@/data';

const icons = [Package, ShieldCheck, Truck];

export default function Shipping() {
  return (
    <section className="bg-black py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl text-left">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
            Delivery
          </p>
          <h2 className="text-[37px] font-bold leading-[1.1] text-white sm:text-[47px]">
            Safe & Reliable Worldwide
          </h2>
          <p className="mt-6 text-[20px] font-normal leading-[1.6] text-white/70">
            Your artwork arrives secure, protected, and ready to install — wherever you are.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {shippingFeatures.map((f, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="border border-white/20 p-8 transition-colors duration-400 hover:border-primary"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-primary text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-[23px] font-bold leading-[1.2] text-white">{f.title}</h3>
                <p className="mt-3 text-[15px] font-normal leading-[1.5] text-white/60">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
