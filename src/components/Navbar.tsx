import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Sunrise, Sunset, Moon, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentCategory?: string;
  onNavigateSection: (sectionId: string) => void;
  onOpenStorySummary?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCategory,
  onNavigateSection,
  onOpenStorySummary,
}) => {
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

  const navItems = [
    { label: 'MORNING', id: 'section-morning', icon: Sunrise },
    { label: 'DAY', id: 'section-focus', icon: Sun },
    { label: 'EVENING', id: 'section-evening', icon: Sunset },
    { label: 'NIGHT', id: 'section-slow-down', icon: Moon },
  ];

  const handleItemClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-[#131110]/90 backdrop-blur-md border-b border-white/5 shadow-md shadow-black/20'
          : 'py-4 sm:py-6 bg-gradient-to-b from-[#100E0D]/90 via-[#100E0D]/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Left: Brand */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileMenuOpen(false);
          }}
          className="text-left group cursor-pointer"
        >
          <span className="font-serif tracking-[0.28em] text-sm sm:text-base font-semibold uppercase text-[#FAF6F0] group-hover:text-amber-200 transition-colors">
            DAILY LIFE
          </span>
          <span className="hidden sm:inline-block ml-2 w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" />
        </button>

        {/* Center: THE STORY OF AN ORDINARY DAY */}
        <div className="hidden md:flex items-center space-x-2 text-[11px] font-mono tracking-[0.25em] text-stone-300/80 uppercase">
          <span className="text-amber-200/70">✦</span>
          <span>THE STORY OF AN ORDINARY DAY</span>
          <span className="text-amber-200/70">✦</span>
        </div>

        {/* Right: Section Navigation on Desktop */}
        <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentCategory === item.label.toLowerCase();
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-amber-950/40 text-amber-200 border border-amber-500/30 shadow-sm'
                      : 'text-stone-300 hover:text-stone-100 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className="w-3 h-3 text-amber-300/70" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {onOpenStorySummary && (
            <button
              onClick={onOpenStorySummary}
              className="ml-2 px-3 py-1.5 rounded-full bg-[#1e1a17] hover:bg-[#28221e] border border-white/5 text-stone-300 hover:text-amber-200 text-xs font-mono tracking-wider flex items-center space-x-1.5 transition-colors cursor-pointer"
              title="View all 14 Chapters"
            >
              <BookOpen className="w-3 h-3 text-amber-300" />
              <span className="hidden lg:inline text-[11px] uppercase">Chapters</span>
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-stone-900/60 border border-white/10 text-stone-300 hover:text-white cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161412]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
          <div className="text-[10px] font-mono tracking-[0.2em] text-amber-300/80 uppercase pb-2 border-b border-white/5">
            THE STORY OF AN ORDINARY DAY
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="p-3 rounded-xl bg-stone-900/60 border border-white/5 text-left text-xs font-mono tracking-wider text-stone-200 hover:text-amber-200 hover:bg-stone-800/80 transition-colors flex items-center space-x-2 cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-300/80" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {onOpenStorySummary && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStorySummary();
              }}
              className="w-full mt-2 p-3 rounded-xl bg-[#201c18] border border-amber-500/20 text-center text-xs font-mono tracking-wider text-amber-200 hover:bg-[#28221e] flex items-center justify-center space-x-2 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-300" />
              <span>VIEW ALL 14 CHAPTERS DIARY</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
