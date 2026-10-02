import { Quote } from 'lucide-react';
import { testimonials } from '@/data';

export default function Testimonials() {
  return (
    <section className="bg-white py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl text-left">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
            Client Voices
          </p>
          <h2 className="text-[37px] font-bold leading-[1.1] text-black sm:text-[47px]">
            What Clients Say
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col bg-tertiary border border-black/10 p-6 transition-shadow duration-400 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <Quote className="h-7 w-7 text-primary" strokeWidth={1.5} />
              <blockquote className="mt-4 flex-1 text-[15px] font-normal leading-[1.5] text-black/70">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-black/10 pt-4">
                <p className="text-[13px] font-bold text-black">{t.author}</p>
                <p className="mt-0.5 text-[12px] font-normal uppercase tracking-wider text-black/50">
                  {t.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
