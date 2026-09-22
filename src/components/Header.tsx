import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Sparkles } from 'lucide-react';

interface HeaderProps {
  onStartProject: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartProject, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'philosophy' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3.5 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8DFD5] shadow-[0_4px_24px_rgba(20,18,16,0.06)] text-[#1F1B18]'
          : 'py-6 bg-gradient-to-b from-[#141210]/70 via-[#141210]/30 to-transparent text-[#FAF8F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left group cursor-pointer"
        >
          <div className="font-serif tracking-[0.24em] text-lg sm:text-xl font-normal uppercase transition-colors flex items-center space-x-2">
            <span className={`${isScrolled ? 'text-[#1F1B18]' : 'text-[#FAF8F5]'}`}>
              LUMIÈRE
            </span>
            <span className="font-light tracking-[0.3em] text-xs sm:text-sm text-[#C5A880]">
              INTERIORS
            </span>
          </div>
          <div className="text-[9px] font-mono tracking-[0.32em] text-[#A69B8F] uppercase hidden sm:block">
            ARCHITECTURAL DESIGN STUDIO
          </div>
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-xs font-mono tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer relative py-1 group ${
                isScrolled
                  ? 'text-[#4A423A] hover:text-[#1F1B18]'
                  : 'text-[#E8E2D9] hover:text-white'
              }`}
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onStartProject}
            className={`hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer group shadow-sm ${
              isScrolled
                ? 'bg-[#1F1B18] text-[#FAF8F5] hover:bg-[#342D28]'
                : 'bg-[#FAF8F5] text-[#1F1B18] hover:bg-[#F2ECE3]'
            }`}
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Minimal Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full border transition-colors cursor-pointer ${
              isScrolled
                ? 'border-[#E0D7CD] text-[#1F1B18] hover:bg-[#F0EBE3]'
                : 'border-white/20 text-[#FAF8F5] hover:bg-white/10'
            }`}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] text-[#1F1B18] border-b border-[#E8DFD5] px-6 py-8 space-y-5 animate-fade-in shadow-2xl">
          <div className="text-[10px] font-mono tracking-[0.25em] text-[#A69B8F] uppercase pb-2 border-b border-[#EFEAE2]">
            LUMIÈRE NAVIGATION
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left py-2.5 px-3 rounded-lg text-xs font-mono tracking-[0.16em] uppercase text-[#3A332C] hover:text-[#1F1B18] hover:bg-[#F2EDE6] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#EFEAE2] flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-3.5 rounded-full bg-[#1F1B18] text-[#FAF8F5] text-xs font-mono tracking-[0.2em] uppercase font-semibold text-center hover:bg-[#342D28] transition-colors cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>

            <div className="text-[11px] font-mono text-[#8C8072] text-center pt-2">
              Chennai Studio • hello@lumiereinteriors.com
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
