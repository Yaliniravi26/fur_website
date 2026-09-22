import React from 'react';
import { ArrowUp, Instagram, Linkedin, Compass, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'philosophy' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Process', id: 'process' },
    { label: 'Materials', id: 'materials' },
    { label: 'Transformation', id: 'before-after' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Journal', id: 'journal' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-[#141210] text-[#FAF8F5] pt-20 pb-12 px-5 sm:px-8 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-serif tracking-[0.24em] text-2xl font-normal uppercase flex items-center space-x-2">
              <span>LUMIÈRE</span>
              <span className="font-light tracking-[0.3em] text-sm text-[#C5A880]">INTERIORS</span>
            </div>
            <p className="font-serif italic text-lg text-[#D8C3A5] font-light">
              “Beautiful Spaces. Thoughtfully Designed.”
            </p>
            <p className="font-sans text-xs text-[#A69B8F] font-light max-w-sm leading-relaxed">
              An architectural and interior design studio committed to tactile tranquility, geometric proportion, and timeless domestic luxury.
            </p>

            <div className="pt-2 text-xs font-mono text-[#8C8072]">
              Studio: Chennai, Tamil Nadu • Commissions Worldwide
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4">
            <div className="text-xs font-mono text-[#C5A880] uppercase tracking-[0.25em] mb-4">
              STUDIO NAVIGATION
            </div>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-mono tracking-wider uppercase text-[#D4C8BC]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-left hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono text-[#C5A880] uppercase tracking-[0.25em] mb-4">
              CONNECT
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-[#D4C8BC] hover:text-[#C5A880] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-[#D4C8BC] hover:text-[#C5A880] transition-colors font-serif font-bold text-xs"
                aria-label="Pinterest"
              >
                P
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 hover:border-[#C5A880] flex items-center justify-center text-[#D4C8BC] hover:text-[#C5A880] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs font-mono text-[#A69B8F]">
              Direct Inquiries: <br />
              <a href="mailto:hello@lumiereinteriors.com" className="text-white hover:text-[#C5A880] transition-colors">
                hello@lumiereinteriors.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8C8072] gap-4">
          <div>
            © {new Date().getFullYear()} Lumière Interiors. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4C8BC] hover:text-[#C5A880] transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
