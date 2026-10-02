import { processSteps } from '@/data';

export default function Process() {
  return (
    <section id="process" className="bg-white py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-left">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
            How It Works
          </p>
          <h2 className="text-[37px] font-bold leading-[1.1] text-black sm:text-[47px] lg:text-[47px]">
            The Commission Process
          </h2>
          <p className="mt-6 text-[20px] font-normal leading-[1.6] text-black/70">
            From your first message to the final brushstroke, every step is personal, transparent,
            and crafted with care.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="group bg-white p-8 transition-colors duration-400 hover:bg-tertiary"
            >
              <span className="text-[13px] font-bold uppercase tracking-wider text-primary">
                Step {step.number}
              </span>
              <h3 className="mt-5 text-[23px] font-bold leading-[1.2] text-black">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] font-normal leading-[1.5] text-black/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
