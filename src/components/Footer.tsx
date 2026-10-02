import { Palette, Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm border-2 border-white/50 text-white/60">
                <Palette className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <span className="text-base font-bold uppercase tracking-[0.15em] text-white">
                Kriese
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[15px] font-normal leading-[1.5] text-white/50">
              Hand-painted oil portrait commissions. Individually created for clients worldwide.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[12px] font-normal uppercase tracking-wider text-white/40">
                Explore
              </p>
              <ul className="mt-4 space-y-2.5">
                {['Process', 'Pricing', 'Gallery', 'About'].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="text-[15px] font-normal text-white/60 transition-colors hover:text-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-normal uppercase tracking-wider text-white/40">More</p>
              <ul className="mt-4 space-y-2.5">
                {['FAQ', 'Contact', 'Imprint', 'Privacy'].map((l) => (
                  <li key={l}>
                    <a
                      href={l === 'FAQ' || l === 'Contact' ? `#${l.toLowerCase()}` : '#'}
                      className="text-[15px] font-normal text-white/60 transition-colors hover:text-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[12px] font-normal uppercase tracking-wider text-white/40">Studio</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-[15px] font-normal text-white/60">
                <MapPin className="h-4 w-4 text-white/40" strokeWidth={1.5} />
                Nikolaus Kriese
              </li>
              <li>
                <a
                  href="mailto:studio@commission-artist.com"
                  className="flex items-center gap-2.5 text-[15px] font-normal text-white/60 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-white/40" strokeWidth={1.5} />
                  studio@commission-artist.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2.5 text-[15px] font-normal text-white/60 transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4 text-white/40" strokeWidth={1.5} />
                  @kriese.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[12px] font-normal text-white/40">
            2026 | Nikolaus Kriese | All Rights Reserved
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[12px] font-normal text-white/40 transition-colors hover:text-white/70"
            >
              Imprint
            </a>
            <a
              href="#"
              className="text-[12px] font-normal text-white/40 transition-colors hover:text-white/70"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
