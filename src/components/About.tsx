import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-white py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/39205367/pexels-photo-39205367.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Artist working on a colorful portrait in the studio"
              className="h-[440px] w-full object-cover lg:h-[560px]"
            />
            {/* Floating badge */}
            <div className="absolute -left-4 bottom-8 bg-tertiary border border-black/10 p-5 hidden sm:block">
              <p className="text-[37px] font-bold leading-none text-primary">3+</p>
              <p className="mt-1.5 text-[12px] font-normal uppercase tracking-wider text-black/60">
                Weeks Delivery
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
              Portrait Painting on Canvas
            </p>
            <h2 className="text-[37px] font-bold leading-[1.1] text-black sm:text-[47px]">
              Let's Talk About Your Project
            </h2>
            <div className="mt-6 space-y-5 text-[20px] font-normal leading-[1.6] text-black/70">
              <p>
                Whether you are looking for a bespoke painting, artwork for a private residence, or
                a site-specific art project, I would be happy to personally advise you on the
                concept, format and realization.
              </p>
              <p>
                I create commissioned artworks for private collectors, residences, companies and
                exceptional spaces throughout Europe and worldwide. Capturing a person on canvas is
                always an exciting and inspiring challenge.
              </p>
              <p>
                In my portrait paintings, I aim to depict people as naturally as possible while
                highlighting their personality in the most flattering way.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-[20px] font-bold tracking-wide text-secondary transition-colors hover:text-primary"
            >
              Get in touch
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
