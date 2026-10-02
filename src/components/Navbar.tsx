import { useEffect, useState } from 'react';
import { Menu, X, Palette, Instagram, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-sm border-2 transition-colors duration-400 ${
              scrolled ? 'border-black text-black' : 'border-white text-white'
            }`}
          >
            <Palette className="h-4 w-4" strokeWidth={1.5} />
          </span>
          <span
            className={`text-base font-bold uppercase tracking-[0.15em] transition-colors duration-400 ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Kriese
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-normal tracking-wide transition-colors duration-300 hover:text-primary ${
                scrolled ? 'text-black' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social + mobile toggle */}
        <div className="flex items-center gap-4">
          <div className={`hidden items-center gap-3 lg:flex ${scrolled ? '' : 'text-white'}`}>
            <a href="#" aria-label="Instagram" className={`transition-colors hover:text-primary ${scrolled ? 'text-black' : 'text-white/80'}`}>
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="mailto:studio@commission-artist.com" aria-label="Email" className={`transition-colors hover:text-primary ${scrolled ? 'text-black' : 'text-white/80'}`}>
              <Mail className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden transition-colors ${scrolled ? 'text-black' : 'text-white'}`}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-400 lg:hidden ${
          open ? 'max-h-96 border-t border-black/10' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-[13px] font-normal tracking-wide text-black border-b border-black/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
