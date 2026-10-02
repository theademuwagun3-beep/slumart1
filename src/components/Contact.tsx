import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-[80px] lg:py-[120px]">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="border border-black/10 bg-tertiary">
          <div className="grid lg:grid-cols-5">
            {/* Left panel */}
            <div className="bg-black p-10 lg:col-span-2 lg:p-12">
              <p className="text-[13px] font-normal uppercase tracking-[0.25em] text-primary">
                Commission
              </p>
              <h2 className="mt-4 text-[28px] font-bold leading-[1.15] text-white sm:text-[32px]">
                Start Your Portrait
              </h2>
              <p className="mt-5 text-[15px] font-normal leading-[1.5] text-white/70">
                Share your photo and your vision. You'll receive a clear quote and concept before
                any work begins.
              </p>
              <div className="mt-10 space-y-5">
                <div>
                  <p className="text-[12px] font-normal uppercase tracking-wider text-white/40">
                    Studio
                  </p>
                  <p className="mt-1 text-[15px] font-normal text-white/90">Nikolaus Kriese</p>
                </div>
                <div>
                  <p className="text-[12px] font-normal uppercase tracking-wider text-white/40">
                    Worldwide Shipping
                  </p>
                  <p className="mt-1 text-[15px] font-normal text-white/90">Fully insured & tracked</p>
                </div>
                <div>
                  <p className="text-[12px] font-normal uppercase tracking-wider text-white/40">
                    Delivery
                  </p>
                  <p className="mt-1 text-[15px] font-normal text-white/90">~20 business days</p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="p-10 lg:col-span-3 lg:p-12">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-14 w-14 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-6 text-[23px] font-bold text-black">Request Sent</h3>
                  <p className="mt-3 max-w-xs text-[15px] font-normal leading-[1.5] text-black/60">
                    Thank you for your interest. You'll receive a personal response with a quote and
                    concept within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[13px] font-normal text-secondary underline underline-offset-4 hover:text-primary"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-[12px] font-normal uppercase tracking-wider text-black/50">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        className="mt-2 w-full border-b border-black/20 bg-transparent pb-2 text-[15px] font-normal text-black placeholder:text-black/30 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-normal uppercase tracking-wider text-black/50">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2 w-full border-b border-black/20 bg-transparent pb-2 text-[15px] font-normal text-black placeholder:text-black/30 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-normal uppercase tracking-wider text-black/50">
                      Size Preference
                    </label>
                    <select
                      className="mt-2 w-full border-b border-black/20 bg-transparent pb-2 text-[15px] font-normal text-black focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select a size</option>
                      <option>Small (up to 24 in)</option>
                      <option>Medium (24–48 in)</option>
                      <option>Large (48–72 in)</option>
                      <option>Extra Large (72–120 in)</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-normal uppercase tracking-wider text-black/50">
                      Describe Your Vision
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about the subject, theme, or any special details..."
                      className="mt-2 w-full resize-none border-b border-black/20 bg-transparent pb-2 text-[15px] font-normal text-black placeholder:text-black/30 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex min-h-[70px] min-w-[280px] items-center justify-center gap-2 border-2 border-black bg-black px-10 text-[20px] font-bold tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-black"
                  >
                    Send Request
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
