import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-tertiary py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-left">
          <p className="mb-4 text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
            FAQ
          </p>
          <h2 className="text-[37px] font-bold leading-[1.1] text-black sm:text-[47px]">
            Commissioned Paintings
          </h2>
          <p className="mt-6 text-[20px] font-normal leading-[1.6] text-black/70">
            Everything you need to know before starting your portrait commission.
          </p>
        </div>

        <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="py-2">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span
                    className={`text-[20px] font-bold leading-[1.3] transition-colors ${
                      isOpen ? 'text-primary' : 'text-black'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? 'border-primary bg-primary text-white'
                        : 'border-black/20 text-black'
                    }`}
                  >
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-400 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-10 text-[15px] font-normal leading-[1.5] text-black/60">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
